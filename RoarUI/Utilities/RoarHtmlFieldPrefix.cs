using System.Linq.Expressions;

namespace RoarUI.Utilities;

internal sealed class RoarHtmlFieldPrefix(LambdaExpression initial)
{
    private readonly LambdaExpression[] _rest = [];

    private RoarHtmlFieldPrefix(LambdaExpression initial, params LambdaExpression[] rest)
        : this(initial) => _rest = rest;

    public RoarHtmlFieldPrefix Combine(LambdaExpression other)
    {
        var expressions = new LambdaExpression[_rest.Length + 1];
        _rest.CopyTo(expressions, 0);
        expressions[^1] = other;

        return new RoarHtmlFieldPrefix(initial, expressions);
    }

    public string GetFieldName(LambdaExpression expression)
    {
        string prefix = RoarExpressionFormatter.FormatLambda(initial);

        foreach (var expressionPart in _rest)
        {
            prefix = RoarExpressionFormatter.FormatLambda(expressionPart, prefix);
        }

        return RoarExpressionFormatter.FormatLambda(expression, prefix);
    }
}
