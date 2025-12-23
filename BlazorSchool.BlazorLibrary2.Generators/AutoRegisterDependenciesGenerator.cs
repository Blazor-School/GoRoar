using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using System.Text;

namespace BlazorSchool.BlazorLibrary2.Generators;

[Generator]
public class AutoRegisterDependenciesGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var classSymbols =
            context.SyntaxProvider
                .CreateSyntaxProvider(
                    static (node, _) => node is ClassDeclarationSyntax,
                    static (ctx, _) =>
                    {
                        var cls = (ClassDeclarationSyntax)ctx.Node;
                        var symbol = ctx.SemanticModel.GetDeclaredSymbol(cls) as INamedTypeSymbol;
                        return symbol;
                    })
                .Where(static s => s is not null && !s.IsAbstract);

        var compilationAndSymbols =
            context.CompilationProvider.Combine(classSymbols.Collect());

        context.RegisterSourceOutput(
            compilationAndSymbols,
            (spc, source) =>
            {
                var (compilation, symbols) = source;

                var scopedInterface =
                    compilation.GetTypeByMetadataName(
                        "BlazorSchool.BlazorLibrary2.Abstractions.AutoDependency.IAutoRegisterScoped");

                if (scopedInterface is null)
                {
                    spc.ReportDiagnostic(
      Diagnostic.Create(
          new DiagnosticDescriptor(
              "GEN_NULL",
              "Scoped interface NULL",
              "IAutoRegisterScoped NOT FOUND in compilation",
              "Debug",
              DiagnosticSeverity.Error,
              true),
          Location.None));
                    return;
                }

                var sb = new StringBuilder("""
                using Microsoft.Extensions.DependencyInjection;

                namespace BlazorSchool.BlazorLibrary2.Utilities;

                public static class BlazorLibrary2GeneratedExtensions
                {
                    public static IServiceCollection AddConsumerServices(IServiceCollection services)
                    {
                """);

                foreach (var symbol in symbols)
                {
                    if (symbol is null)
                    {
                        continue;
                    }

                    foreach (var i in symbol.AllInterfaces)
                    {
                        spc.ReportDiagnostic(
                            Diagnostic.Create(
                                new DiagnosticDescriptor(
                                    "GEN002",
                                    "Found type",
                                    i.ToDisplayString(),
                                    "Debug",
                                    DiagnosticSeverity.Warning,
                                    true),
                                Location.None));

                        if (SymbolEqualityComparer.Default.Equals(i, scopedInterface))
                        {
                            spc.ReportDiagnostic(
    Diagnostic.Create(
        new DiagnosticDescriptor(
            "GEN_HIT",
            "HIT",
            symbol.ToDisplayString(),
            "Debug",
            DiagnosticSeverity.Warning,
            true),
        Location.None));
                            sb.AppendLine(
                                $"        services.AddScoped<{symbol.ToDisplayString()}>();");
                            break;
                        }
                    }
                }

                sb.AppendLine("""

                    return services;
                    }
                }
                """);

                spc.AddSource(
                    "BlazorLibrary2GeneratedExtensions.g.cs",
                    SourceText.From(sb.ToString(), Encoding.UTF8));
            });
    }
}
