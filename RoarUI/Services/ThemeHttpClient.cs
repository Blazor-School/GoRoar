using Microsoft.AspNetCore.Components;
using RoarUI.Theme;
using System.Net.Http.Json;

namespace RoarUI.Services;

public sealed class ThemeHttpClient(HttpClient HttpClient, NavigationManager NavigationManager)
{
    public async Task<RoarTheme> GetThemeAsync(string path)
    {
        var requestUri = new Uri(path, UriKind.RelativeOrAbsolute);

        if (!requestUri.IsAbsoluteUri && HttpClient.BaseAddress is null)
        {
            requestUri = NavigationManager.ToAbsoluteUri(path);
        }

        var theme = await HttpClient.GetFromJsonAsync(requestUri, ThemeJsonContext.Default.RoarTheme);
        return theme ?? throw new InvalidOperationException("The theme document must contain a theme object.");
    }
}
