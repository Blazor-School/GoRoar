using Microsoft.Extensions.DependencyInjection;
using RoarUI.Services;
using RoarUI.Utilities.JavaScriptIntegrators;

namespace RoarUI;

public static class RoarExtensions
{
    public static IServiceCollection GoRoar(this IServiceCollection services)
    {
        services.AddHttpClient();
        services.AddScoped<RoarDependencyService>();
        services.AddScoped<ThemeService>();
        services.AddScoped<RoarBasicJsIntegrator>();

        return services;
    }
}
