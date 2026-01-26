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
                    string value = string.IsNullOrEmpty((string)member.ConstructorArguments[1].Value) ? $"{char.ToLowerInvariant(member.ConstructorArguments[0].Value.ToString().FirstOrDefault())}{member.ConstructorArguments[0].Value.ToString().Substring(1)}" : (string)member.ConstructorArguments[1].Value;

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

    public static bool operator ==({{generatedClassName}} left, {{generatedClassName}} right) => left.Equals(right);
    public static bool operator !=({{generatedClassName}} left, {{generatedClassName}} right) => !(left == right);
}
""");

                spc.AddSource($"{generatedClassName}.g.cs", SourceText.From(stringBuilder.ToString(), Encoding.UTF8));
            });
    }
}
