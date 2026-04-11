namespace RoarUI.Theme;

public class ComponentGroup
{
    public string FormControlBackgroundColor { get; set; } = "var(--wa-color-surface-default)";
    public string FormControlBorderColor { get; set; } = "var(--wa-color-neutral-border-loud)";
    public string FormControlBorderStyle { get; set; } = "var(--wa-border-style)";
    public string FormControlBorderWidth { get; set; } = "var(--wa-border-width-s)";
    public string FormControlBorderRadius { get; set; } = "var(--wa-border-radius-m)";
    public string FormControlActivatedColor { get; set; } = "var(--wa-color-brand-fill-loud)";
    public string FormControlLabelColor { get; set; } = "var(--wa-color-neutral-border-loud)";
    public string FormControlLabelFontWeight { get; set; } = "var(--wa-font-weight-normal)";
    public string FormControlLabelLineHeight { get; set; } = "var(--wa-line-height-normal)";
    public string FormControlValueColor { get; set; } = "var(--wa-color-text-normal)";
    public string FormControlValueFontWeight { get; set; } = "var(--wa-font-weight-body)";
    public string FormControlValueLineHeight { get; set; } = "var(--wa-line-height-condensed)";
    public string FormControlHintColor { get; set; } = "var(--wa-color-text-quiet)";
    public string FormControlHintFontWeight { get; set; } = "var(--wa-font-weight-body)";
    public string FormControlHintLineHeight { get; set; } = "var(--wa-line-height-normal)";
    public string FormControlPlaceholderColor { get; set; } = "var(--wa-color-gray-60)";
    public string FormControlRequiredContent { get; set; } = "'*'";
    public string FormControlRequiredContentColor { get; set; } = "inherit";
    public string FormControlRequiredContentOffset { get; set; } = "-0.1em";
    public string FormControlPaddingBlock { get; set; } = "0.75em";
    public string FormControlPaddingInline { get; set; } = "1em";
    public string FormControlHeight { get; set; } = "round(calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)), 1px)";
    public string FormControlToggleSize { get; set; } = "round(1.25em, 1px)";
}
