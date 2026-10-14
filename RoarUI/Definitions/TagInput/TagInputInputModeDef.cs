using RoarUI.Infrastructure;

namespace RoarUI.Definitions.TagInput;

[StringEnum("TagInputInputMode", "text")]
[StringEnumMember("None")]
[StringEnumMember("Text")]
[StringEnumMember("Decimal")]
[StringEnumMember("Numeric")]
[StringEnumMember("Tel")]
[StringEnumMember("Search")]
[StringEnumMember("Email")]
[StringEnumMember("Url")]
internal class TagInputInputModeDef
{
}
