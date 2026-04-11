namespace RoarUI;

public class Border
{
    public string Style { get; set; } = "solid";
    public string WidthS { get; set; } = "calc(var(--wa-border-width-scale) * 0.0625rem)";
    public string WidthM { get; set; } = "calc(var(--wa-border-width-scale) * 0.125rem)";
    public string WidthL { get; set; } = "calc(var(--wa-border-width-scale) * 0.1875rem)";
    public string RadiusPill { get; set; } = "9999px";
    public string RadiusCircle { get; set; } = "50%";
    public string RadiusSquare { get; set; } = "0px";
    public string RadiusS { get; set; } = "calc(var(--wa-border-radius-scale) * 0.1875rem)";
    public string RadiusM { get; set; } = "calc(var(--wa-border-radius-scale) * 0.375rem)";
    public string RadiusL { get; set; } = "calc(var(--wa-border-radius-scale) * 0.75rem)";
}
