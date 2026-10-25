using Microsoft.AspNetCore.Components;
using RoarUI.Theme;
using System.Net.Http.Json;

namespace RoarUI;

public class ThemeService(IHttpClientFactory HttpClientFactory)
{
    private string _mode = "light";

    [PersistentState]
    public string Mode
    {
        get => _mode;
        set
        {
            if (value is not ("light" or "dark"))
            {
                throw new ArgumentException("Mode must be 'light' or 'dark'.", nameof(value));
            }

            if (_mode == value)
            {
                return;
            }

            _mode = value;
            OnModeChanged?.Invoke(this, value);
        }
    }

    [PersistentState]
    public RoarTheme? CustomTheme { get; set; }

    public event EventHandler<RoarTheme?>? OnThemeLoaded;
    public event EventHandler<string>? OnModeChanged;

    public void SetMode(string mode)
    {
        Mode = mode;
    }

    public void ToggleMode()
    {
        SetMode(Mode == "light" ? "dark" : "light");
    }

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
