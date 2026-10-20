using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Components.Infrastructure;
using Microsoft.AspNetCore.Components.Web;
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

        if (!OperatingSystem.IsBrowser())
        {
            RegisterPersistentComponentStateServiceCollectionExtensions.AddPersistentServiceRegistration<ThemeService>(services, RenderMode.InteractiveServer);
        }

        return services;
    }
}
