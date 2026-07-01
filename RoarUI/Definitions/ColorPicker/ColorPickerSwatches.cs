using RoarUI.Definitions.ColorPicker;

namespace RoarUI; // Public struct so no deep namespace

public readonly struct ColorPickerSwatches
{
    private readonly object? _value;

    private ColorPickerSwatches(object value, ColorPickerSwatchesKind kind)
    {
        _value = value;
        Kind = kind;
    }

    internal ColorPickerSwatchesKind Kind { get; }

    public static ColorPickerSwatches FromColors(params string[] colors)
    {
        ArgumentNullException.ThrowIfNull(colors);
        string value = string.Join(";", colors.Where(color => !string.IsNullOrWhiteSpace(color)));

        return new(value, ColorPickerSwatchesKind.Colors);
    }

    public static ColorPickerSwatches FromSwatchList(params ColorPickerSwatch[] swatches)
    {
        ArgumentNullException.ThrowIfNull(swatches);

        return new(swatches, ColorPickerSwatchesKind.SwatchList);
    }

    public override string ToString() => _value switch
    {
        string value => value,
        ColorPickerSwatch[] swatches => System.Text.Json.JsonSerializer.Serialize(swatches),
        _ => string.Empty
    };
}
