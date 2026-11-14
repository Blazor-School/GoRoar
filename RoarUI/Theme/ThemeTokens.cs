namespace RoarUI.Theme;

public class ThemeTokens
{
    public BorderTokens Border { get; set; } = new();
    public ColorPalette Palette { get; set; } = new();

    public SchemeColors Light { get; set; } = new("light");
    public SchemeColors Dark { get; set; } = new("dark");

    public Dictionary<string, VariantColors> Variants { get; set; } = new()
    {
        [RoarVariant.Brand] = new(),
        [RoarVariant.Neutral] = new(),
        [RoarVariant.Success] = new(),
        [RoarVariant.Warning] = new(),
        [RoarVariant.Danger] = new()
    };

    public FocusRingTokens FocusRing { get; set; } = new();
    public ShadowTokens Shadow { get; set; } = new();
    public SpacingTokens Spacing { get; set; } = new();
    public TransitionTokens Transition { get; set; } = new();
    public TypographyTokens Typography { get; set; } = new();
    public ComponentTokens Components { get; set; } = new();
}
