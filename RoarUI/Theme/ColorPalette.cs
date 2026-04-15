namespace RoarUI.Theme;

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

    public string Red95 { get; set; } = "#fff0ef";
    public string Red90 { get; set; } = "#ffdedc";
    public string Red80 { get; set; } = "#ffb8b6";
    public string Red70 { get; set; } = "#fd8f90";
    public string Red60 { get; set; } = "#f3676c";
    public string Red50 { get; set; } = "#dc3146";
    public string Red40 { get; set; } = "#b30532";
    public string Red30 { get; set; } = "#8a132c";
    public string Red20 { get; set; } = "#631323";
    public string Red10 { get; set; } = "#3e0913";
    public string Red05 { get; set; } = "#2a040b";
    public string Red { get; set; } = "var(--wa-color-red-50)";

    public string Orange95 { get; set; } = "#fff0e6";
    public string Orange90 { get; set; } = "#ffdfca";
    public string Orange80 { get; set; } = "#ffbb94";
    public string Orange70 { get; set; } = "#ff9266";
    public string Orange60 { get; set; } = "#f46a45";
    public string Orange50 { get; set; } = "#cd491c";
    public string Orange40 { get; set; } = "#9f3501";
    public string Orange30 { get; set; } = "#802700";
    public string Orange20 { get; set; } = "#601b00";
    public string Orange10 { get; set; } = "#3c0d00";
    public string Orange05 { get; set; } = "#280600";
    public string Orange { get; set; } = "var(--wa-color-orange-60)";

    public string Yellow95 { get; set; } = "#fef3cd";
    public string Yellow90 { get; set; } = "#ffe495";
    public string Yellow80 { get; set; } = "#fac22b";
    public string Yellow70 { get; set; } = "#ef9d00";
    public string Yellow60 { get; set; } = "#da7e00";
    public string Yellow50 { get; set; } = "#b45f04";
    public string Yellow40 { get; set; } = "#8c4602";
    public string Yellow30 { get; set; } = "#6f3601";
    public string Yellow20 { get; set; } = "#532600";
    public string Yellow10 { get; set; } = "#331600";
    public string Yellow05 { get; set; } = "#220c00";
    public string Yellow { get; set; } = "var(--wa-color-yellow-80)";

    public string Green95 { get; set; } = "#e3f9e3";
    public string Green90 { get; set; } = "#c2f2c1";
    public string Green80 { get; set; } = "#93da98";
    public string Green70 { get; set; } = "#5dc36f";
    public string Green60 { get; set; } = "#00ac49";
    public string Green50 { get; set; } = "#00883c";
    public string Green40 { get; set; } = "#036730";
    public string Green30 { get; set; } = "#0a5027";
    public string Green20 { get; set; } = "#0a3a1d";
    public string Green10 { get; set; } = "#052310";
    public string Green05 { get; set; } = "#031608";
    public string Green { get; set; } = "var(--wa-color-green-60)";

    public string Cyan95 { get; set; } = "#e3f6fb";
    public string Cyan90 { get; set; } = "#c5ecf7";
    public string Cyan80 { get; set; } = "#7fd6ec";
    public string Cyan70 { get; set; } = "#2fbedc";
    public string Cyan60 { get; set; } = "#00a3c0";
    public string Cyan50 { get; set; } = "#078098";
    public string Cyan40 { get; set; } = "#026274";
    public string Cyan30 { get; set; } = "#014c5b";
    public string Cyan20 { get; set; } = "#003844";
    public string Cyan10 { get; set; } = "#002129";
    public string Cyan05 { get; set; } = "#00151b";
    public string Cyan { get; set; } = "var(--wa-color-cyan-70)";

    public string Blue95 { get; set; } = "#e8f3ff";
    public string Blue90 { get; set; } = "#d1e8ff";
    public string Blue80 { get; set; } = "#9fceff";
    public string Blue70 { get; set; } = "#6eb3ff";
    public string Blue60 { get; set; } = "#3e96ff";
    public string Blue50 { get; set; } = "#0071ec";
    public string Blue40 { get; set; } = "#0053c0";
    public string Blue30 { get; set; } = "#003f9c";
    public string Blue20 { get; set; } = "#002d77";
    public string Blue10 { get; set; } = "#001a4e";
    public string Blue05 { get; set; } = "#000f35";
    public string Blue { get; set; } = "var(--wa-color-blue-50)";

    public string Indigo95 { get; set; } = "#f0f2ff";
    public string Indigo90 { get; set; } = "#dfe5ff";
    public string Indigo80 { get; set; } = "#bcc7ff";
    public string Indigo70 { get; set; } = "#9da9ff";
    public string Indigo60 { get; set; } = "#808aff";
    public string Indigo50 { get; set; } = "#6163f2";
    public string Indigo40 { get; set; } = "#4945cb";
    public string Indigo30 { get; set; } = "#3933a7";
    public string Indigo20 { get; set; } = "#292381";
    public string Indigo10 { get; set; } = "#181255";
    public string Indigo05 { get; set; } = "#0d0a3a";
    public string Indigo { get; set; } = "var(--wa-color-indigo-50)";

    public string Purple95 { get; set; } = "#f7f0ff";
    public string Purple90 { get; set; } = "#eedfff";
    public string Purple80 { get; set; } = "#ddbdff";
    public string Purple70 { get; set; } = "#ca99ff";
    public string Purple60 { get; set; } = "#b678f5";
    public string Purple50 { get; set; } = "#9951db";
    public string Purple40 { get; set; } = "#7936b3";
    public string Purple30 { get; set; } = "#612692";
    public string Purple20 { get; set; } = "#491870";
    public string Purple10 { get; set; } = "#2d0b48";
    public string Purple05 { get; set; } = "#1e0532";
    public string Purple { get; set; } = "var(--wa-color-purple-50)";

    public string Pink95 { get; set; } = "#feeff9";
    public string Pink90 { get; set; } = "#feddf0";
    public string Pink80 { get; set; } = "#fcb5d8";
    public string Pink70 { get; set; } = "#f78dbf";
    public string Pink60 { get; set; } = "#e66ba3";
    public string Pink50 { get; set; } = "#c84382";
    public string Pink40 { get; set; } = "#9e2a6c";
    public string Pink30 { get; set; } = "#7d1e58";
    public string Pink20 { get; set; } = "#5e1342";
    public string Pink10 { get; set; } = "#3c0828";
    public string Pink05 { get; set; } = "#28041a";
    public string Pink { get; set; } = "var(--wa-color-pink-50)";

    public string Gray95 { get; set; } = "#f1f2f3";
    public string Gray90 { get; set; } = "#e4e5e9";
    public string Gray80 { get; set; } = "#c7c9d0";
    public string Gray70 { get; set; } = "#abaeb9";
    public string Gray60 { get; set; } = "#9194a2";
    public string Gray50 { get; set; } = "#717584";
    public string Gray40 { get; set; } = "#545868";
    public string Gray30 { get; set; } = "#424554";
    public string Gray20 { get; set; } = "#2f323f";
    public string Gray10 { get; set; } = "#1b1d26";
    public string Gray05 { get; set; } = "#101219";
    public string Gray { get; set; } = "var(--wa-color-gray-40)";
}
