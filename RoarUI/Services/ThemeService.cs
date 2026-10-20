using Microsoft.AspNetCore.Components;
using RoarUI.Theme;
using System.Net.Http.Json;

namespace RoarUI;

public class ThemeService(IHttpClientFactory HttpClientFactory)
{
    [PersistentState]
    public RoarTheme? CustomTheme { get; set; }

    public event EventHandler<RoarTheme?>? OnThemeLoaded;

    public async Task LoadThemeAsync(string path)
    {
        var httpClient = HttpClientFactory.CreateClient();
        var theme = await httpClient.GetFromJsonAsync(path, ThemeJsonContext.Default.RoarTheme);
        LoadTheme(theme ?? throw new InvalidOperationException("The theme document must contain a theme object."));
    }

    public void LoadTheme(RoarTheme theme)
    {
        ArgumentNullException.ThrowIfNull(theme);
        CustomTheme = theme;
        OnThemeLoaded?.Invoke(this, theme);
    }
}
