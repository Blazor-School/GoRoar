using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using System.Text;

namespace BlazorAccelerator.Generators;

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

                var scopedInterface = compilation.GetTypeByMetadataName("BlazorAccelerator.Abstractions.AutoDependency.IAutoRegisterScoped");
                var singletonInterface = compilation.GetTypeByMetadataName("BlazorAccelerator.Abstractions.AutoDependency.IAutoRegisterSingleton");
                var transientInterface = compilation.GetTypeByMetadataName("BlazorAccelerator.Abstractions.AutoDependency.IAutoRegisterTransient");
                var hostedServiceInterface = compilation.GetTypeByMetadataName("Microsoft.Extensions.Hosting.IHostedService");

                var sb = new StringBuilder(@"using Microsoft.Extensions.DependencyInjection;

namespace BlazorAccelerator.Utilities;

public static class BlazorAcceleratorGeneratedExtensions
{
    public static IServiceCollection UseBlazorAccelerator(this IServiceCollection services)
    {
       services.AddScoped<BlazorAccelerator.Services.DevConsoleService>();
");

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
                                    "BL1",
                                    "Found type",
                                    $"BlazorAccelerator: Registering {i.ToDisplayString()}",
                                    "Debug",
                                    DiagnosticSeverity.Info,
                                    true),
                                Location.None));

                        if (SymbolEqualityComparer.Default.Equals(i, scopedInterface))
                        {
                            sb.AppendLine($"       services.AddScoped<{symbol.ToDisplayString()}>();");
                            break;
                        }

                        if (SymbolEqualityComparer.Default.Equals(i, singletonInterface))
                        {
                            sb.AppendLine($"       services.AddSingleton<{symbol.ToDisplayString()}>();");
                            break;
                        }

                        if (SymbolEqualityComparer.Default.Equals(i, transientInterface))
                        {
                            sb.AppendLine($"       services.AddTransient<{symbol.ToDisplayString()}>();");
                            break;
                        }

                        //Should support background service
                        if (SymbolEqualityComparer.Default.Equals(i, hostedServiceInterface))
                        {
                            sb.AppendLine($"       services.AddSingleton<{symbol.ToDisplayString()}>();");
                            sb.AppendLine($"       services.AddHostedService<{symbol.ToDisplayString()}>();");
                            break;
                        }
                    }
                }

                sb.AppendLine(@"
       return services;
    }
}
                ");

                spc.AddSource(
                    "BlazorAcceleratorGeneratedExtensions.g.cs",
                    SourceText.From(sb.ToString(), Encoding.UTF8));
            });
    }
}
