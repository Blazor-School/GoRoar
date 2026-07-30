using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using System.Text;

namespace RoarUI.Generators;

[Generator]
public class StringEnumGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var classSymbols = context.SyntaxProvider
            .ForAttributeWithMetadataName(
        "RoarUI.Infrastructure.StringEnumAttribute",
        static (node, _) => node is ClassDeclarationSyntax,
        static (ctx, _) => (INamedTypeSymbol)ctx.TargetSymbol
            );

        context.RegisterSourceOutput(
            classSymbols,
            (spc, symbol) =>
            {
                var attribute = symbol.GetAttributes().First(x => x.AttributeClass?.ToDisplayString() == "RoarUI.Infrastructure.StringEnumAttribute");

                string generatedClassName = (string)attribute.ConstructorArguments[0].Value!;
                string defaultValue = (string)attribute.ConstructorArguments[1].Value!;
                bool allowNumericConversions = attribute.NamedArguments.FirstOrDefault(x => x.Key == "AllowNumericConversions").Value.Value is true;

                var members = symbol.GetAttributes()
                    .Where(x => x.AttributeClass?.ToDisplayString() == "RoarUI.Infrastructure.StringEnumMemberAttribute")
                    .ToList();

                var stringBuilder = new StringBuilder($$"""
namespace RoarUI;

[global::System.CodeDom.Compiler.GeneratedCode("RoarUIEngine", "1.0.0")]
[global::System.Diagnostics.DebuggerNonUserCode]
[global::System.Diagnostics.DebuggerStepThrough]
[global::System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
[global::System.Runtime.CompilerServices.CompilerGenerated]

public readonly struct {{generatedClassName}} : IEquatable<{{generatedClassName}}>
{
    private const string _default = "{{defaultValue}}";
    public string Value => field ?? _default;

    public {{generatedClassName}}(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;


""");

                foreach (var member in members)
                {
                    string propName = member.ConstructorArguments[0].Value!.ToString();
                    string? rawValue = (string?)member.ConstructorArguments[1].Value;
                    string value = rawValue is null ? ToKebabCase(propName) : rawValue;

                    stringBuilder.AppendLine($$"""
    public static readonly {{generatedClassName}} {{member.ConstructorArguments[0].Value}} = new("{{value}}");
""");
                }

                stringBuilder.AppendLine($$"""

    public override string ToString() => Value;
    public bool Equals({{generatedClassName}} other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is {{generatedClassName}} v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator {{generatedClassName}}(string value) => new(value);
    public static implicit operator string({{generatedClassName}} v) => v.Value;
""");

                if (allowNumericConversions)
                {
                    stringBuilder.AppendLine($$"""
    public static implicit operator {{generatedClassName}}(short value) => new(value.ToString(global::System.Globalization.CultureInfo.InvariantCulture));
    public static implicit operator {{generatedClassName}}(int value) => new(value.ToString(global::System.Globalization.CultureInfo.InvariantCulture));
    public static implicit operator {{generatedClassName}}(long value) => new(value.ToString(global::System.Globalization.CultureInfo.InvariantCulture));
    public static implicit operator {{generatedClassName}}(float value) => new(value.ToString(global::System.Globalization.CultureInfo.InvariantCulture));
    public static implicit operator {{generatedClassName}}(double value) => new(value.ToString(global::System.Globalization.CultureInfo.InvariantCulture));
    public static implicit operator {{generatedClassName}}(decimal value) => new(value.ToString(global::System.Globalization.CultureInfo.InvariantCulture));
""");
                }

                stringBuilder.AppendLine($$"""
    public static bool operator ==({{generatedClassName}} left, {{generatedClassName}} right) => left.Equals(right);
    public static bool operator !=({{generatedClassName}} left, {{generatedClassName}} right) => !(left == right);
}
""");

                spc.AddSource($"{generatedClassName}.g.cs", SourceText.From(stringBuilder.ToString(), Encoding.UTF8));
            });
    }

    private static string ToKebabCase(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return input;
        }

        var result = new System.Text.StringBuilder();

        for (int i = 0; i < input.Length; i++)
        {
            char c = input[i];

            if (char.IsUpper(c))
            {
                if (i > 0)
                {
                    result.Append('-');
                }

                result.Append(char.ToLowerInvariant(c));
            }
            else
            {
                result.Append(c);
            }
        }

        return result.ToString();
    }
}
