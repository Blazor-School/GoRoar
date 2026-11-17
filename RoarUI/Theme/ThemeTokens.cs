using System.Text.Json.Serialization;

namespace RoarUI.Theme;

public class ThemeTokens
{
    public BorderTokens Border { get; set; } = new();
    public ColorPalette Palette { get; set; } = new();

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public SchemeColors Light { get; set; } = new("light")
    {
        SurfaceRaised = "white",
        SurfaceDefault = "white",
        SurfaceLowered = "var(--wa-color-neutral-95)",
        SurfaceBorder = "var(--wa-color-neutral-90)",
        TextNormal = "var(--wa-color-neutral-10)",
        TextQuiet = "var(--wa-color-neutral-40)",
        TextLink = "var(--wa-color-brand-40)",
        OverlayModal = "color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent)",
        OverlayInline = "color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent)",
        Shadow = "color-mix(in oklab, var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%), transparent)",
        Focus = "var(--wa-color-brand-60)",
        MixHover = "oklch(from currentColor calc(1 - l) c h) 10%",
        MixActive = "var(--wa-color-surface-default) 10%"
    };

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public SchemeColors Dark { get; set; } = new("dark")
    {
        SurfaceRaised = "var(--wa-color-neutral-10)",
        SurfaceDefault = "var(--wa-color-neutral-05)",
        SurfaceLowered = "color-mix(in oklab, var(--wa-color-surface-default), black 20%)",
        SurfaceBorder = "var(--wa-color-neutral-20)",
        TextNormal = "var(--wa-color-neutral-95)",
        TextQuiet = "var(--wa-color-neutral-60)",
        TextLink = "var(--wa-color-brand-70)",
        OverlayModal = "color-mix(in oklab, black 60%, transparent)",
        OverlayInline = "color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent)",
        Shadow = "color-mix(in oklab, var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%), transparent)",
        Focus = "var(--wa-color-brand-60)",
        MixHover = "oklch(from currentColor calc(1 - l) c h) 20%",
        MixActive = "var(--wa-color-surface-default) 20%"
    };

    public Dictionary<string, VariantColors> Variants { get; set; } = CreateBuiltInVariants();
    public FocusRingTokens FocusRing { get; set; } = new();
    public ShadowTokens Shadow { get; set; } = new();
    public SpacingTokens Spacing { get; set; } = new();
    public TransitionTokens Transition { get; set; } = new();
    public TypographyTokens Typography { get; set; } = new();
    public ComponentTokens Components { get; set; } = new();

    internal void RestoreBuiltInVariantDefaults()
    {
        var builtInVariants = CreateBuiltInVariants();
        Variants ??= new();

        foreach (var (name, defaults) in builtInVariants)
        {
            if (!Variants.TryGetValue(name, out var variant) || variant is null)
            {
                Variants[name] = defaults;
                continue;
            }

            variant.Color95 ??= defaults.Color95;
            variant.Color90 ??= defaults.Color90;
            variant.Color80 ??= defaults.Color80;
            variant.Color70 ??= defaults.Color70;
            variant.Color60 ??= defaults.Color60;
            variant.Color50 ??= defaults.Color50;
            variant.Color40 ??= defaults.Color40;
            variant.Color30 ??= defaults.Color30;
            variant.Color20 ??= defaults.Color20;
            variant.Color10 ??= defaults.Color10;
            variant.Color05 ??= defaults.Color05;
            variant.Color ??= defaults.Color;
            variant.On ??= defaults.On;

            RestoreSchemeDefaults(variant.Light ??= new(), defaults.Light);
            RestoreSchemeDefaults(variant.Dark ??= new(), defaults.Dark);
        }
    }

    private static void RestoreSchemeDefaults(VariantSchemeColors scheme, VariantSchemeColors defaults)
    {
        scheme.FillQuiet ??= defaults.FillQuiet;
        scheme.FillNormal ??= defaults.FillNormal;
        scheme.FillLoud ??= defaults.FillLoud;
        scheme.BorderQuiet ??= defaults.BorderQuiet;
        scheme.BorderNormal ??= defaults.BorderNormal;
        scheme.BorderLoud ??= defaults.BorderLoud;
        scheme.OnQuiet ??= defaults.OnQuiet;
        scheme.OnNormal ??= defaults.OnNormal;
        scheme.OnLoud ??= defaults.OnLoud;
    }

    private static Dictionary<string, VariantColors> CreateBuiltInVariants() => new()
    {
        [RoarVariant.Brand] = new()
        {
            Color95 = "var(--wa-color-blue-95)",
            Color90 = "var(--wa-color-blue-90)",
            Color80 = "var(--wa-color-blue-80)",
            Color70 = "var(--wa-color-blue-70)",
            Color60 = "var(--wa-color-blue-60)",
            Color50 = "var(--wa-color-blue-50)",
            Color40 = "var(--wa-color-blue-40)",
            Color30 = "var(--wa-color-blue-30)",
            Color20 = "var(--wa-color-blue-20)",
            Color10 = "var(--wa-color-blue-10)",
            Color05 = "var(--wa-color-blue-05)",
            Color = "var(--wa-color-blue)",
            On = "var(--wa-color-blue-on)",
            Light = new()
            {
                FillQuiet = "var(--wa-color-brand-95)",
                FillNormal = "var(--wa-color-brand-90)",
                FillLoud = "var(--wa-color-brand-50)",
                BorderQuiet = "var(--wa-color-brand-90)",
                BorderNormal = "var(--wa-color-brand-80)",
                BorderLoud = "var(--wa-color-brand-60)",
                OnQuiet = "var(--wa-color-brand-40)",
                OnNormal = "var(--wa-color-brand-30)",
                OnLoud = "white"
            },
            Dark = new()
            {
                FillQuiet = "var(--wa-color-brand-10)",
                FillNormal = "var(--wa-color-brand-20)",
                FillLoud = "var(--wa-color-brand-50)",
                BorderQuiet = "var(--wa-color-brand-20)",
                BorderNormal = "var(--wa-color-brand-30)",
                BorderLoud = "var(--wa-color-brand-40)",
                OnQuiet = "var(--wa-color-brand-60)",
                OnNormal = "var(--wa-color-brand-70)",
                OnLoud = "white"
            }
        },
        [RoarVariant.Neutral] = new()
        {
            Color95 = "var(--wa-color-gray-95)",
            Color90 = "var(--wa-color-gray-90)",
            Color80 = "var(--wa-color-gray-80)",
            Color70 = "var(--wa-color-gray-70)",
            Color60 = "var(--wa-color-gray-60)",
            Color50 = "var(--wa-color-gray-50)",
            Color40 = "var(--wa-color-gray-40)",
            Color30 = "var(--wa-color-gray-30)",
            Color20 = "var(--wa-color-gray-20)",
            Color10 = "var(--wa-color-gray-10)",
            Color05 = "var(--wa-color-gray-05)",
            Color = "var(--wa-color-gray)",
            On = "var(--wa-color-gray-on)",
            Light = new()
            {
                FillQuiet = "var(--wa-color-neutral-95)",
                FillNormal = "var(--wa-color-neutral-90)",
                FillLoud = "var(--wa-color-neutral-20)",
                BorderQuiet = "var(--wa-color-neutral-90)",
                BorderNormal = "var(--wa-color-neutral-80)",
                BorderLoud = "var(--wa-color-neutral-60)",
                OnQuiet = "var(--wa-color-neutral-40)",
                OnNormal = "var(--wa-color-neutral-30)",
                OnLoud = "white"
            },
            Dark = new()
            {
                FillQuiet = "var(--wa-color-neutral-10)",
                FillNormal = "var(--wa-color-neutral-20)",
                FillLoud = "var(--wa-color-neutral-90)",
                BorderQuiet = "var(--wa-color-neutral-20)",
                BorderNormal = "var(--wa-color-neutral-30)",
                BorderLoud = "var(--wa-color-neutral-40)",
                OnQuiet = "var(--wa-color-neutral-60)",
                OnNormal = "var(--wa-color-neutral-70)",
                OnLoud = "var(--wa-color-neutral-05)"
            }
        },
        [RoarVariant.Success] = new()
        {
            Color95 = "var(--wa-color-green-95)",
            Color90 = "var(--wa-color-green-90)",
            Color80 = "var(--wa-color-green-80)",
            Color70 = "var(--wa-color-green-70)",
            Color60 = "var(--wa-color-green-60)",
            Color50 = "var(--wa-color-green-50)",
            Color40 = "var(--wa-color-green-40)",
            Color30 = "var(--wa-color-green-30)",
            Color20 = "var(--wa-color-green-20)",
            Color10 = "var(--wa-color-green-10)",
            Color05 = "var(--wa-color-green-05)",
            Color = "var(--wa-color-green)",
            On = "var(--wa-color-green-on)",
            Light = new()
            {
                FillQuiet = "var(--wa-color-success-95)",
                FillNormal = "var(--wa-color-success-90)",
                FillLoud = "var(--wa-color-success-50)",
                BorderQuiet = "var(--wa-color-success-90)",
                BorderNormal = "var(--wa-color-success-80)",
                BorderLoud = "var(--wa-color-success-60)",
                OnQuiet = "var(--wa-color-success-40)",
                OnNormal = "var(--wa-color-success-30)",
                OnLoud = "white"
            },
            Dark = new()
            {
                FillQuiet = "var(--wa-color-success-10)",
                FillNormal = "var(--wa-color-success-20)",
                FillLoud = "var(--wa-color-success-50)",
                BorderQuiet = "var(--wa-color-success-20)",
                BorderNormal = "var(--wa-color-success-30)",
                BorderLoud = "var(--wa-color-success-40)",
                OnQuiet = "var(--wa-color-success-60)",
                OnNormal = "var(--wa-color-success-70)",
                OnLoud = "white"
            }
        },
        [RoarVariant.Warning] = new()
        {
            Color95 = "var(--wa-color-yellow-95)",
            Color90 = "var(--wa-color-yellow-90)",
            Color80 = "var(--wa-color-yellow-80)",
            Color70 = "var(--wa-color-yellow-70)",
            Color60 = "var(--wa-color-yellow-60)",
            Color50 = "var(--wa-color-yellow-50)",
            Color40 = "var(--wa-color-yellow-40)",
            Color30 = "var(--wa-color-yellow-30)",
            Color20 = "var(--wa-color-yellow-20)",
            Color10 = "var(--wa-color-yellow-10)",
            Color05 = "var(--wa-color-yellow-05)",
            Color = "var(--wa-color-yellow)",
            On = "var(--wa-color-yellow-on)",
            Light = new()
            {
                FillQuiet = "var(--wa-color-warning-95)",
                FillNormal = "var(--wa-color-warning-90)",
                FillLoud = "var(--wa-color-warning-50)",
                BorderQuiet = "var(--wa-color-warning-90)",
                BorderNormal = "var(--wa-color-warning-80)",
                BorderLoud = "var(--wa-color-warning-60)",
                OnQuiet = "var(--wa-color-warning-40)",
                OnNormal = "var(--wa-color-warning-30)",
                OnLoud = "white"
            },
            Dark = new()
            {
                FillQuiet = "var(--wa-color-warning-10)",
                FillNormal = "var(--wa-color-warning-20)",
                FillLoud = "var(--wa-color-warning-50)",
                BorderQuiet = "var(--wa-color-warning-20)",
                BorderNormal = "var(--wa-color-warning-30)",
                BorderLoud = "var(--wa-color-warning-40)",
                OnQuiet = "var(--wa-color-warning-60)",
                OnNormal = "var(--wa-color-warning-70)",
                OnLoud = "white"
            }
        },
        [RoarVariant.Danger] = new()
        {
            Color95 = "var(--wa-color-red-95)",
            Color90 = "var(--wa-color-red-90)",
            Color80 = "var(--wa-color-red-80)",
            Color70 = "var(--wa-color-red-70)",
            Color60 = "var(--wa-color-red-60)",
            Color50 = "var(--wa-color-red-50)",
            Color40 = "var(--wa-color-red-40)",
            Color30 = "var(--wa-color-red-30)",
            Color20 = "var(--wa-color-red-20)",
            Color10 = "var(--wa-color-red-10)",
            Color05 = "var(--wa-color-red-05)",
            Color = "var(--wa-color-red)",
            On = "var(--wa-color-red-on)",
            Light = new()
            {
                FillQuiet = "var(--wa-color-danger-95)",
                FillNormal = "var(--wa-color-danger-90)",
                FillLoud = "var(--wa-color-danger-50)",
                BorderQuiet = "var(--wa-color-danger-90)",
                BorderNormal = "var(--wa-color-danger-80)",
                BorderLoud = "var(--wa-color-danger-60)",
                OnQuiet = "var(--wa-color-danger-40)",
                OnNormal = "var(--wa-color-danger-30)",
                OnLoud = "white"
            },
            Dark = new()
            {
                FillQuiet = "var(--wa-color-danger-10)",
                FillNormal = "var(--wa-color-danger-20)",
                FillLoud = "var(--wa-color-danger-50)",
                BorderQuiet = "var(--wa-color-danger-20)",
                BorderNormal = "var(--wa-color-danger-30)",
                BorderLoud = "var(--wa-color-danger-40)",
                OnQuiet = "var(--wa-color-danger-60)",
                OnNormal = "var(--wa-color-danger-70)",
                OnLoud = "white"
            }
        }
    };
}
