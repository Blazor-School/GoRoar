using BlazorSchool.BlazorLibrary2.Console;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace BlazorSchool.BlazorLibrary2.Utilities;
public static partial class BlazorLibrary2Extensions
{
    public static RazorComponentsEndpointConventionBuilder EnableBlazorLibraryDevConsole(this RazorComponentsEndpointConventionBuilder builder)
    {
        builder.AddAdditionalAssemblies(typeof(DevConsole).Assembly);

        return builder;
    }

    public static IServiceCollection UseBlazorLibrary2(this IServiceCollection services)
    {
        // Your normal registrations
        //services.AddSingleton<MyCoreService>();

        // Call out to generated code
        OnConfigureGenerated(services);

        return services;
    }

    static partial void OnConfigureGenerated(IServiceCollection services);
}
