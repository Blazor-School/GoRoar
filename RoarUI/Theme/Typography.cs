namespace RoarUI.Theme;

public class Typography
{
    public string FontFamilyBody { get; set; } = "ui-sans-serif, system-ui, sans-serif";
    public string FontFamilyHeading { get; set; } = "var(--wa-font-family-body)";
    public string FontFamilyCode { get; set; } = "ui-monospace, monospace";
    public string FontFamilyLongForm { get; set; } = "ui-serif, serif";
    public string FontSize3XS { get; set; } = "round(calc(var(--wa-font-size-2xs) / 1.125), 1px)";
    public string FontSize2XS { get; set; } = "round(calc(var(--wa-font-size-xs) / 1.125), 1px)";
    public string FontSizeXS { get; set; } = "round(calc(var(--wa-font-size-s) / 1.125), 1px)";
    public string FontSizeS { get; set; } = "round(calc(var(--wa-font-size-m) / 1.125), 1px)";
    public string FontSizeM { get; set; } = "calc(1rem * var(--wa-font-size-scale))";
    public string FontSizeL { get; set; } = "round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px)";
    public string FontSizeXL { get; set; } = "round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px)";
    public string FontSize2XL { get; set; } = "round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px)";
    public string FontSize3XL { get; set; } = "round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px)";
    public string FontSize4XL { get; set; } = "round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px)";
    public string FontSize5XL { get; set; } = "round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px)";
    public string FontSizeSmaller { get; set; } = "round(calc(1em / 1.125), 1px)";
    public string FontSizeLarger { get; set; } = " round(calc(1em * 1.125 * 1.125), 1px)";
    public string FontWeightLight { get; set; } = "300";
    public string FontWeightNormal { get; set; } = "400";
    public string FontWeightSemiBold { get; set; } = "500";
    public string FontWeightBold { get; set; } = "600";
    public string FontWeightBody { get; set; } = "var(--wa-font-weight-normal)";
    public string FontWeightHeading { get; set; } = "var(--wa-font-weight-bold)";
    public string FontWeightCode { get; set; } = "var(--wa-font-weight-normal)";
    public string FontWeightLongform { get; set; } = "var(--wa-font-weight-normal)";
    public string FontWeightAction { get; set; } = "var(--wa-font-weight-semibold)";
    public string LineHeightCondensed { get; set; } = "1.2";
    public string LineHeightNormal { get; set; } = "1.6";
    public string LineHeightExpanded { get; set; } = "2";
    public string LinkDecorationDefault { get; set; } = "underline color-mix(in oklab, var(--wa-color-text-link) 70%, transparent) dotted";
    public string LinkDecorationHover { get; set; } = "underline";
}
