using System.Net.Http.Json;

namespace RoarUI.Theme.Providers;

public class JsonUrlThemeProvider(HttpClient HttpClient, string Url) : IThemeProvider
{
    public async Task<RoarTheme> GetThemeAsync()
    {
        var theme = await HttpClient.GetFromJsonAsync(Url, ThemeJsonContext.Default.RoarTheme);

        return theme ?? throw new InvalidOperationException("The theme document must contain a theme object.");
    }
}
