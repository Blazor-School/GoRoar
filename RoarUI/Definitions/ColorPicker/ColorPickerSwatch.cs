using System.Text.Json.Serialization;

namespace RoarUI; // Public struct so no deep namespace

public readonly record struct ColorPickerSwatch([property: JsonPropertyName("color")] string Color, [property: JsonPropertyName("label")] string Label);
