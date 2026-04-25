namespace RoarUI.Theme;

public class Shadow
{
    public string S { get; set; } = "var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s) var(--wa-shadow-spread-s) var(--wa-color-shadow)";
    public string M { get; set; } = "var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m) var(--wa-shadow-spread-m) var(--wa-color-shadow)";
    public string L { get; set; } = "var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l) var(--wa-shadow-spread-l) var(--wa-color-shadow)";
    public string OffsetXS { get; set; } = "calc(var(--wa-shadow-offset-x-scale) * 0.125rem)";
    public string OffsetXM { get; set; } = "calc(var(--wa-shadow-offset-x-scale) * 0.25rem)";
    public string OffsetXL { get; set; } = "calc(var(--wa-shadow-offset-x-scale) * 0.5rem)";
    public string OffsetYS { get; set; } = "calc(var(--wa-shadow-offset-y-scale) * 0.125rem)";
    public string OffsetYM { get; set; } = "calc(var(--wa-shadow-offset-y-scale) * 0.25rem)";
    public string OffsetYL { get; set; } = "calc(var(--wa-shadow-offset-y-scale) * 0.5rem)";
    public string BlurS { get; set; } = "calc(var(--wa-shadow-blur-scale) * 0.125rem)";
    public string BlurM { get; set; } = "calc(var(--wa-shadow-blur-scale) * 0.25rem)";
    public string BlurL { get; set; } = "calc(var(--wa-shadow-blur-scale) * 0.5rem)";
    public string SpreadS { get; set; } = "calc(var(--wa-shadow-spread-scale) * 0.125rem)";
    public string SpreadM { get; set; } = "calc(var(--wa-shadow-spread-scale) * 0.25rem)";
    public string SpreadL { get; set; } = "calc(var(--wa-shadow-spread-scale) * 0.5rem)";
}
