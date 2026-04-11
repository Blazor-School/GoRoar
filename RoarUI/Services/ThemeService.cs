using RoarUI.Theme;
using System.Net.Http.Json;

namespace RoarUI;

public class ThemeService(IHttpClientFactory HttpClientFactory)
{
    internal RoarTheme? CustomTheme { get; set; }

    public async Task LoadThemeAsync(string path)
    {
        var httpClient = HttpClientFactory.CreateClient();
        CustomTheme = await httpClient.GetFromJsonAsync<RoarTheme>(path);
    }

    public void LoadTheme(RoarTheme theme) => CustomTheme = theme;
}
