namespace RoarUI.Theme.Providers;

public interface IThemeProvider
{
    Task<RoarTheme> GetThemeAsync();
}
