using RoarUI.Theme;
using System.Net.Http.Json;

namespace RoarUI;

public class ThemeService(IHttpClientFactory HttpClientFactory)
{
    internal RoarTheme? CustomTheme { get; set; }
    public event EventHandler<RoarTheme>? OnThemeLoaded;

    public async Task LoadThemeAsync(string path)
    {
        var httpClient = HttpClientFactory.CreateClient();
        CustomTheme = await httpClient.GetFromJsonAsync<RoarTheme>(path);
        OnThemeLoaded?.Invoke(this, CustomTheme);
    }

    public void LoadTheme(RoarTheme theme)
    {
        CustomTheme = theme;
        OnThemeLoaded?.Invoke(this, theme);
    }
}
