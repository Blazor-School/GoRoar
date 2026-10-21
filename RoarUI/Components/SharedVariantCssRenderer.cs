using RoarUI.Theme;

namespace RoarUI.Components;

internal sealed class SharedVariantCssRenderer : IVariantCssRenderer
{
    public string BuildVariantMappings(string variant) => $$"""
[variant="{{variant}}"] {
    --wa-color-fill-quiet: var(--wa-color-{{variant}}-fill-quiet);
    --wa-color-fill-normal: var(--wa-color-{{variant}}-fill-normal);
    --wa-color-fill-loud: var(--wa-color-{{variant}}-fill-loud);
    --wa-color-border-quiet: var(--wa-color-{{variant}}-border-quiet);
    --wa-color-border-normal: var(--wa-color-{{variant}}-border-normal);
    --wa-color-border-loud: var(--wa-color-{{variant}}-border-loud);
    --wa-color-on-quiet: var(--wa-color-{{variant}}-on-quiet);
    --wa-color-on-normal: var(--wa-color-{{variant}}-on-normal);
    --wa-color-on-loud: var(--wa-color-{{variant}}-on-loud);
}
""";
}
