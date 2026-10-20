using System.Text.Json.Serialization;
using System.Text.Json;

namespace RoarUI.Theme;

[JsonSourceGenerationOptions(JsonSerializerDefaults.Web)]
[JsonSerializable(typeof(RoarTheme))]
internal partial class ThemeJsonContext : JsonSerializerContext;
