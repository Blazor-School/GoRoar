namespace RoarUI.Theme;

public class SchemeColors
{
    public string Name { get; }

    public SchemeColors(string name)
    {
        if (name is not ("light" or "dark"))
        {
            throw new ArgumentException("The color scheme name must be 'light' or 'dark'.", nameof(name));
        }

        Name = name;
    }

    public string? SurfaceRaised { get; set; }
    public string? SurfaceDefault { get; set; }
    public string? SurfaceLowered { get; set; }
    public string? SurfaceBorder { get; set; }
    public string? TextNormal { get; set; }
    public string? TextQuiet { get; set; }
    public string? TextLink { get; set; }
    public string? OverlayModal { get; set; }
    public string? OverlayInline { get; set; }
    public string? Shadow { get; set; }
    public string? Focus { get; set; }
    public string? MixHover { get; set; }
    public string? MixActive { get; set; }
}
