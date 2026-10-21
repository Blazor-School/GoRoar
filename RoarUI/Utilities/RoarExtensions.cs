using Microsoft.AspNetCore.Components.Infrastructure;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using RoarUI.Components;
using RoarUI.Components.Dropdown;
using RoarUI.Services;
using RoarUI.Theme;
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
        services.TryAddEnumerable(ServiceDescriptor.Scoped<IVariantCssRenderer, SharedVariantCssRenderer>());
        services.TryAddEnumerable(ServiceDescriptor.Scoped<IVariantCssRenderer, DropdownItemCssRenderer>());

        if (!OperatingSystem.IsBrowser())
        {
            RegisterPersistentComponentStateServiceCollectionExtensions.AddPersistentServiceRegistration<ThemeService>(services, RenderMode.InteractiveServer);
        }

        return services;
    }
}
