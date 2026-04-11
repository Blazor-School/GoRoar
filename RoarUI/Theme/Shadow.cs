namespace RoarUI.Theme;

public class Shadow
{
    public string ShadowS { get; set; } = "var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s) var(--wa-shadow-spread-s) var(--wa-color-shadow)";
    public string ShadowM { get; set; } = "var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m) var(--wa-shadow-spread-m) var(--wa-color-shadow)";
    public string ShadowL { get; set; } = "var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l) var(--wa-shadow-spread-l) var(--wa-color-shadow)";
    public string ShadowOffsetXS { get; set; } = "calc(var(--wa-shadow-offset-x-scale) * 0.125rem)";
    public string ShadowOffsetXM { get; set; } = "calc(var(--wa-shadow-offset-x-scale) * 0.25rem)";
    public string ShadowOffsetXL { get; set; } = "calc(var(--wa-shadow-offset-x-scale) * 0.5rem)";
    public string ShadowOffsetYS { get; set; } = "calc(var(--wa-shadow-offset-y-scale) * 0.125rem)";
    public string ShadowOffsetYM { get; set; } = "calc(var(--wa-shadow-offset-y-scale) * 0.25rem)";
    public string ShadowOffsetYL { get; set; } = "calc(var(--wa-shadow-offset-y-scale) * 0.5rem)";
    public string ShadowBlurS { get; set; } = "calc(var(--wa-shadow-blur-scale) * 0.125rem)";
    public string ShadowBlurM { get; set; } = "calc(var(--wa-shadow-blur-scale) * 0.25rem)";
    public string ShadowBlurL { get; set; } = "calc(var(--wa-shadow-blur-scale) * 0.5rem)";
    public string ShadowSpreadS { get; set; } = "calc(var(--wa-shadow-spread-scale) * 0.125rem)";
    public string ShadowSpreadM { get; set; } = "calc(var(--wa-shadow-spread-scale) * 0.25rem)";
    public string ShadowSpreadL { get; set; } = "calc(var(--wa-shadow-spread-scale) * 0.5rem)";
}
