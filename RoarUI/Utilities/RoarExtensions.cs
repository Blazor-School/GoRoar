using Microsoft.Extensions.DependencyInjection;
using RoarUI.Services;

namespace RoarUI;

public static class RoarExtensions
{
    public static IServiceCollection GoRoar(this IServiceCollection services)
    {
        services.AddHttpClient();
        services.AddScoped<RoarDependencyService>();
        services.AddScoped<ThemeService>();

        return services;
    }
}
