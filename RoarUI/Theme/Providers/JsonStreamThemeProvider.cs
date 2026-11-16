using System.Text.Json;

namespace RoarUI.Theme.Providers;

public class JsonStreamThemeProvider(Stream stream) : IThemeProvider
{
    public async Task<RoarTheme> GetThemeAsync()
    {
        var theme = await JsonSerializer.DeserializeAsync(stream, ThemeJsonContext.Default.RoarTheme);

        return theme ?? throw new InvalidOperationException("The theme document must contain a theme object.");
    }
}