using Microsoft.AspNetCore.Components;
using RoarUI.Theme;
using RoarUI.Theme.Providers;

namespace RoarUI;

public class ThemeService
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

    public async Task LoadThemeAsync(IThemeProvider themeProvider)
    {
        var theme = await themeProvider.GetThemeAsync();
        LoadTheme(theme);
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
