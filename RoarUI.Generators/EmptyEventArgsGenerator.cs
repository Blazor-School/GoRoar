using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using System.Text;

namespace RoarUI.Generators;

[Generator]
public class EmptyEventArgsGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var attributes = context.SyntaxProvider.ForAttributeWithMetadataName("RoarUI.Infrastructure.EmptyEventArgsAttribute", static (node, _) => node is ClassDeclarationSyntax, static (ctx, _) => ctx.Attributes);

        context.RegisterSourceOutput(attributes, static (spc, attributes) =>
        {
            foreach (var attribute in attributes)
            {
                string generatedClassName = (string)attribute.ConstructorArguments[0].Value!;

                string source = $$"""
#nullable enable

namespace RoarUI.Events;

[global::System.CodeDom.Compiler.GeneratedCode("RoarUIEngine", "1.0.0")]
[global::System.Diagnostics.DebuggerNonUserCode]
[global::System.Diagnostics.DebuggerStepThrough]
[global::System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
[global::System.Runtime.CompilerServices.CompilerGenerated]
public class {{generatedClassName}} : global::System.EventArgs
{
}
""";

                spc.AddSource($"{generatedClassName}.g.cs", SourceText.From(source, Encoding.UTF8));
            }
        });
    }
}
