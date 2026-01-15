using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using RoarUI.Services;

namespace RoarUI.Utilities;

public static class RoarExtensions
{
    public static RazorComponentsEndpointConventionBuilder EnableRoarConsole(this RazorComponentsEndpointConventionBuilder builder)
    {
        builder.AddAdditionalAssemblies(typeof(RoarConsole).Assembly);

        return builder;
    }

    public static IServiceCollection GoRoar(this IServiceCollection services)
    {
        services.AddScoped<DevConsoleService>();

        return services;
    }
}
