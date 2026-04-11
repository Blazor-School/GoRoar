namespace RoarUI.Models.Theme;

public class ColorPalette
{
    public string SurfaceRaised { get; set; } = "white";
    public string SurfaceDefault { get; set; } = "white";
    public string SurfaceLowered { get; set; } = "var(--wa-color-neutral-95)";
    public string SurfaceBorder { get; set; } = "var(--wa-color-neutral-90)";
    public string TextNormal { get; set; } = "var(--wa-color-neutral-10)";
    public string TextQuiet { get; set; } = "var(--wa-color-neutral-40)";
    public string TextLink { get; set; } = "var(--wa-color-brand-40)";
    public string OverlayModal { get; set; } = "color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);";
    public string OverlayInline { get; set; } = "color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent)";
    public string Shadow { get; set; } = "color-mix( in oklab, var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%), transparent)";
    public string Focus { get; set; } = "var(--wa-color-brand-60)";
    public string MixHover { get; set; } = "black 10%";
    public string MixActive { get; set; } = "black 20%";

    public string BrandFillQuiet { get; set; } = "var(--wa-color-brand-95)";
    public string BrandFillNormal { get; set; } = "var(--wa-color-brand-90)";
    public string BrandFillLoud { get; set; } = "var(--wa-color-brand-50)";
    public string BrandBorderQuiet { get; set; } = "var(--wa-color-brand-90)";
    public string BrandBorderNormal { get; set; } = "var(--wa-color-brand-80)";
    public string BrandBorderLoud { get; set; } = "var(--wa-color-brand-60)";
    public string BrandOnQuiet { get; set; } = "var(--wa-color-brand-95)";
    public string BrandOnNormal { get; set; } = "var(--wa-color-brand-30)";
    public string BrandOnLoud { get; set; } = "white";

    public string SuccessFillQuiet { get; set; } = "var(--wa-color-success-95)";
    public string SuccessFillNormal { get; set; } = "var(--wa-color-success-90)";
    public string SuccessFillLoud { get; set; } = "var(--wa-color-success-50)";
    public string SuccessBorderQuiet { get; set; } = "var(--wa-color-success-90)";
    public string SuccessBorderNormal { get; set; } = "var(--wa-color-success-80)";
    public string SuccessBorderLoud { get; set; } = "var(--wa-color-success-60)";
    public string SuccessOnQuiet { get; set; } = "var(--wa-color-success-40)";
    public string SuccessOnNormal { get; set; } = "var(--wa-color-success-30)";
    public string SuccessOnLoud { get; set; } = "white";

    public string NeutralFillQuiet { get; set; } = "var(--wa-color-neutral-95)";
    public string NeutralFillNormal { get; set; } = "var(--wa-color-neutral-90)";
    public string NeutralFillLoud { get; set; } = "var(--wa-color-neutral-20)";
    public string NeutralBorderQuiet { get; set; } = "var(--wa-color-neutral-90)";
    public string NeutralBorderNormal { get; set; } = "var(--wa-color-neutral-80)";
    public string NeutralBorderLoud { get; set; } = "var(--wa-color-neutral-60)";
    public string NeutralOnQuiet { get; set; } = "var(--wa-color-neutral-40)";
    public string NeutralOnNormal { get; set; } = "var(--wa-color-neutral-30)";
    public string NeutralOnLoud { get; set; } = "white";

    public string WarningFillQuiet { get; set; } = "var(--wa-color-warning-95)";
    public string WarningFillNormal { get; set; } = "var(--wa-color-warning-90)";
    public string WarningFillLoud { get; set; } = "var(--wa-color-warning-50)";
    public string WarningBorderQuiet { get; set; } = "var(--wa-color-warning-90)";
    public string WarningBorderNormal { get; set; } = "var(--wa-color-neutral-80)";
    public string WarningBorderLoud { get; set; } = "var(--wa-color-warning-60)";
    public string WarningOnQuiet { get; set; } = "var(--wa-color-warning-40)";
    public string WarningOnNormal { get; set; } = "var(--wa-color-warning-30)";
    public string WarningOnLoud { get; set; } = "white";

    public string DangerFillQuiet { get; set; } = "var(--wa-color-danger-95)";
    public string DangerFillNormal { get; set; } = "var(--wa-color-danger-90)";
    public string DangerFillLoud { get; set; } = "var(--wa-color-danger-50)";
    public string DangerBorderQuiet { get; set; } = "var(--wa-color-danger-90)";
    public string DangerBorderNormal { get; set; } = "var(--wa-color-danger-80)";
    public string DangerBorderLoud { get; set; } = "var(--wa-color-danger-60)";
    public string DangerOnQuiet { get; set; } = "var(--wa-color-danger-40)";
    public string DangerOnNormal { get; set; } = "var(--wa-color-danger-30)";
    public string DangerOnLoud { get; set; } = "white";
}
