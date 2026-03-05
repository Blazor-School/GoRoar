using RoarUI.Infrastructure;

namespace RoarUI.Definitions.Icon;

[StringEnum("IconAnimation", "undefined")]
[StringEnumMember("None", "undefined")]
[StringEnumMember("Beat")]
[StringEnumMember("Fade")]
[StringEnumMember("BeatFade", "beat-fade")]
[StringEnumMember("Bounce")]
[StringEnumMember("Flip")]
[StringEnumMember("Shake")]
[StringEnumMember("Spin")]
[StringEnumMember("SpinPulse", "spin-pulse")]
[StringEnumMember("SpinReserve", "spin-reserve")]
internal class IconAnimationDef
{
}
