using RoarUI.Theme.Providers;

namespace RoarUI.Theme.Yaml;

public sealed class YamlStreamThemeProvider(Stream stream) : IThemeProvider
{
    public Task<RoarTheme> GetThemeAsync() => YamlThemeReader.ReadAsync(stream);
}
