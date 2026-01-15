using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using System.Text;

namespace Roar.Generators;

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

                var scopedInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarScopedService");
                var genericScopedInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarScopedService`1");
                var singletonInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarSingletonService");
                var genericSingletonInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarSingletonService`1");
                var transientInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarTransientService");
                var genericTransientInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarTransientService`1");
                var hostedServiceInterface = compilation.GetTypeByMetadataName("Roar.Abstractions.Runtime.IRoarBackgroundService");

                var sb = new StringBuilder(@"using Microsoft.Extensions.DependencyInjection;

namespace Roar.Utilities;

public static class RoarGeneratedExtensions
{
    public static IServiceCollection GoRoar(this IServiceCollection services)
    {
       services.AddScoped<Roar.Services.DevConsoleService>();
");

                foreach (var symbol in symbols)
                {
                    if (symbol is null)
                    {
                        continue;
                    }

                    foreach (var i in symbol.AllInterfaces)
                    {
                        if (SymbolEqualityComparer.Default.Equals(i, scopedInterface))
                        {
                            sb.AppendLine($"       services.AddScoped<{symbol.ToDisplayString()}>();");
                            break;
                        }

                        if (i.OriginalDefinition.Equals(genericScopedInterface, SymbolEqualityComparer.Default))
                        {
                            var serviceType = i.TypeArguments[0];
                            sb.AppendLine($"       services.AddScoped<{serviceType.ToDisplayString()}, {symbol.ToDisplayString()}>();");
                        }

                        if (SymbolEqualityComparer.Default.Equals(i, singletonInterface))
                        {
                            sb.AppendLine($"       services.AddSingleton<{symbol.ToDisplayString()}>();");
                            break;
                        }

                        if (i.OriginalDefinition.Equals(genericSingletonInterface, SymbolEqualityComparer.Default))
                        {
                            var serviceType = i.TypeArguments[0];
                            sb.AppendLine($"       services.AddSingleton<{serviceType.ToDisplayString()}, {symbol.ToDisplayString()}>();");
                        }

                        if (SymbolEqualityComparer.Default.Equals(i, transientInterface))
                        {
                            sb.AppendLine($"       services.AddTransient<{symbol.ToDisplayString()}>();");
                            break;
                        }

                        if (i.OriginalDefinition.Equals(genericTransientInterface, SymbolEqualityComparer.Default))
                        {
                            var serviceType = i.TypeArguments[0];
                            sb.AppendLine($"       services.AddTransient<{serviceType.ToDisplayString()}, {symbol.ToDisplayString()}>();");
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
                    "RoarGeneratedExtensions.g.cs",
                    SourceText.From(sb.ToString(), Encoding.UTF8));
            });
    }
}
