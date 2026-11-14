using System.Text.Json.Serialization;

namespace RoarUI;

[JsonConverter(typeof(JsonStringEnumConverter<ThemeMode>))]
public enum ThemeMode
{
    [JsonStringEnumMemberName("light")]
    Light,

    [JsonStringEnumMemberName("dark")]
    Dark
}
