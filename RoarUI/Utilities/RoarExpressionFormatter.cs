using System.Globalization;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.Serialization;

namespace RoarUI.Utilities;

internal static class RoarExpressionFormatter
{
    public static string FormatLambda(LambdaExpression expression) => FormatLambda(expression, prefix: null);

    public static string FormatLambda(LambdaExpression expression, string? prefix = null)
    {
        List<string> parts = [];
        var node = expression.Body;

        while (node is not null)
        {
            node = UnwrapConvert(node);
            if (node is null)
            {
                break;
            }

            switch (node.NodeType)
            {
                case ExpressionType.Constant:
                    node = null;
                    break;

                case ExpressionType.MemberAccess:
                    var memberExpression = (MemberExpression)node;
                    node = memberExpression.Expression;

                    if (prefix is not null && UnwrapConvert(node) is ConstantExpression)
                    {
                        node = null;
                        break;
                    }

                    parts.Insert(0, GetMemberName(memberExpression.Member));
                    break;

                case ExpressionType.ArrayIndex:
                    var binaryExpression = (BinaryExpression)node;
                    node = binaryExpression.Left;

                    if (prefix is not null && UnwrapConvert(node) is ConstantExpression)
                    {
                        node = null;
                        break;
                    }

                    parts.Insert(0, $"[{FormatIndexArgument(binaryExpression.Right)}]");
                    break;

                case ExpressionType.Call:
                    var methodCallExpression = (MethodCallExpression)node;

                    if (!IsSingleArgumentIndexer(methodCallExpression))
                    {
                        throw new InvalidOperationException("Method calls cannot be formatted.");
                    }

                    node = methodCallExpression.Object;

                    if (prefix is not null && UnwrapConvert(node) is ConstantExpression)
                    {
                        node = null;
                        break;
                    }

                    parts.Insert(0, $"[{FormatIndexArgument(methodCallExpression.Arguments[0])}]");
                    break;

                default:
                    node = null;
                    break;
            }
        }

        string formattedExpression = JoinParts(parts);

        if (prefix is null)
        {
            return formattedExpression;
        }

        if (string.IsNullOrEmpty(formattedExpression))
        {
            return prefix;
        }

        return formattedExpression[0] == '['
            ? $"{prefix}{formattedExpression}"
            : $"{prefix}.{formattedExpression}";
    }

    public static string FormatIndexArgument(Expression indexExpression)
    {
        indexExpression = UnwrapConvert(indexExpression)!;

        return indexExpression switch
        {
            ConstantExpression constantExpression => FormatValue(constantExpression.Value),
            MemberExpression memberExpression when memberExpression.Expression is ConstantExpression => FormatValue(EvaluateExpression(memberExpression)),
            _ => throw new InvalidOperationException($"Unable to evaluate index expressions of type '{indexExpression.GetType().Name}'.")
        };
    }

    private static Expression? UnwrapConvert(Expression? expression)
    {
        while (expression is UnaryExpression unaryExpression &&
            (unaryExpression.NodeType == ExpressionType.Convert || unaryExpression.NodeType == ExpressionType.ConvertChecked))
        {
            expression = unaryExpression.Operand;
        }

        return expression;
    }

    private static string GetMemberName(MemberInfo member)
        => member.GetCustomAttribute<DataMemberAttribute>()?.Name ?? member.Name;

    private static bool IsSingleArgumentIndexer(MethodCallExpression expression)
    {
        if (expression.Arguments.Count != 1)
        {
            return false;
        }

        var declaringType = expression.Method.DeclaringType;

        if (declaringType is null)
        {
            return false;
        }

        var defaultMember = declaringType.GetCustomAttribute<DefaultMemberAttribute>(inherit: true);

        if (defaultMember is null)
        {
            return false;
        }

        return declaringType.GetRuntimeProperties().Any(property =>
            string.Equals(defaultMember.MemberName, property.Name, StringComparison.Ordinal) &&
            property.GetMethod == expression.Method);
    }

    private static object? EvaluateExpression(Expression expression)
        => Expression.Lambda<Func<object?>>(Expression.Convert(expression, typeof(object))).Compile().Invoke();

    private static string FormatValue(object? value) => value switch
    {
        null => "null",
        string text => text,
        IFormattable formattable => formattable.ToString(null, CultureInfo.InvariantCulture),
        _ => throw new InvalidOperationException($"Unable to format constant values of type '{value.GetType()}'.")
    };

    private static string JoinParts(IReadOnlyList<string> parts)
    {
        string result = string.Empty;

        foreach (string part in parts)
        {
            if (part.Length > 0 && part[0] == '[')
            {
                result += part;
            }
            else
            {
                result = string.IsNullOrEmpty(result) ? part : $"{result}.{part}";
            }
        }

        return result;
    }
}
