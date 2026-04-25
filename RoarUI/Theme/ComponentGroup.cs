namespace RoarUI.Theme;

public class ComponentGroup
{
    public string BackgroundColor { get; set; } = "var(--wa-color-surface-default)";
    public string BorderColor { get; set; } = "var(--wa-color-neutral-border-loud)";
    public string BorderStyle { get; set; } = "var(--wa-border-style)";
    public string BorderWidth { get; set; } = "var(--wa-border-width-s)";
    public string BorderRadius { get; set; } = "var(--wa-border-radius-m)";
    public string ActivatedColor { get; set; } = "var(--wa-color-brand-fill-loud)";
    public string LabelColor { get; set; } = "var(--wa-color-neutral-border-loud)";
    public string LabelFontWeight { get; set; } = "var(--wa-font-weight-normal)";
    public string LabelLineHeight { get; set; } = "var(--wa-line-height-normal)";
    public string ValueColor { get; set; } = "var(--wa-color-text-normal)";
    public string ValueFontWeight { get; set; } = "var(--wa-font-weight-body)";
    public string ValueLineHeight { get; set; } = "var(--wa-line-height-condensed)";
    public string HintColor { get; set; } = "var(--wa-color-text-quiet)";
    public string HintFontWeight { get; set; } = "var(--wa-font-weight-body)";
    public string HintLineHeight { get; set; } = "var(--wa-line-height-normal)";
    public string PlaceholderColor { get; set; } = "var(--wa-color-gray-60)";
    public string RequiredContent { get; set; } = "'*'";
    public string RequiredContentColor { get; set; } = "inherit";
    public string RequiredContentOffset { get; set; } = "-0.1em";
    public string PaddingBlock { get; set; } = "0.75em";
    public string PaddingInline { get; set; } = "1em";
    public string Height { get; set; } = "round(calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)), 1px)";
    public string ToggleSize { get; set; } = "round(1.25em, 1px)";
    public string PanelBorderStyle { get; set; } = "var(--wa-border-style)";
    public string PanelBorderWidth { get; set; } = "var(--wa-border-width-s)";
    public string PanelBorderRadius { get; set; } = "var(--wa-border-radius-l)";
    public string TooltipArrowSize { get; set; } = "0.375rem";
    public string TooltipBackgroundColor { get; set; } = "var(--wa-color-neutral-fill-loud)";
    public string TooltipBorderColor { get; set; } = "var(--wa-tooltip-background-color)";
    public string TooltipBorderStyle { get; set; } = "var(--wa-border-style)";
    public string TooltipBorderWidth { get; set; } = "var(--wa-border-width-s)";
    public string TooltipBorderRadius { get; set; } = "var(--wa-border-radius-s)";
    public string TooltipContentColor { get; set; } = "var(--wa-color-neutral-on-loud)";
    public string TooltipFontSize { get; set; } = "var(--wa-font-size-s)";
    public string TooltipLineHeight { get; set; } = "var(--wa-line-height-normal)";
}
