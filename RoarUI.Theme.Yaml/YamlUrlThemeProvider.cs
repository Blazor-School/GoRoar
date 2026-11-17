using RoarUI.Theme.Providers;

namespace RoarUI.Theme.Yaml;

public sealed class YamlUrlThemeProvider(HttpClient httpClient, string url) : IThemeProvider
{
    public async Task<RoarTheme> GetThemeAsync()
    {
        using var response = await httpClient.GetAsync(url, HttpCompletionOption.ResponseHeadersRead);
        response.EnsureSuccessStatusCode();
        var stream = await response.Content.ReadAsStreamAsync();
        var theme = await YamlThemeReader.ReadAsync(stream);

        return theme;
    }
}
