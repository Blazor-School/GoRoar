using Microsoft.AspNetCore.Components;
using RoarUI.Theme;
using System.Net.Http.Json;

namespace RoarUI;

public class ThemeService(IHttpClientFactory HttpClientFactory)
{
    [PersistentState]
    public ThemeMode Mode
    {
        get;
        set
        {
            if (field != value)
            {
                field = value;
                OnModeChanged?.Invoke(this, value);
            }
        }
    } = ThemeMode.Light;

    [PersistentState]
    public RoarTheme CurrentTheme { get; set; } = new();

    public event EventHandler<RoarTheme?>? OnThemeLoaded;
    public event EventHandler<ThemeMode>? OnModeChanged;

    public void SetMode(ThemeMode mode) => Mode = mode;
    public void ToggleMode() => SetMode(Mode == ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);

    public async Task LoadThemeAsync(string path)
    {
        var httpClient = HttpClientFactory.CreateClient();
        var theme = await httpClient.GetFromJsonAsync(path, ThemeJsonContext.Default.RoarTheme);
        LoadTheme(theme ?? throw new InvalidOperationException("The theme document must contain a theme object."));
    }

    public void LoadTheme(RoarTheme theme)
    {
        theme.Tokens ??= new();
        theme.Tokens.RestoreBuiltInVariantDefaults();
        CurrentTheme = theme;
        OnThemeLoaded?.Invoke(this, theme);
    }

    public void NotifyThemeChanged() => OnThemeLoaded?.Invoke(this, CurrentTheme);
}
