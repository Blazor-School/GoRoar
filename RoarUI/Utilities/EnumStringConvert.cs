using RoarUI.Events;

namespace RoarUI.Utilities;

internal static class EnumStringConvert
{
    public static string ToStringValue(EventModifier value) => value switch
    {
        EventModifier.PreventDefault => "PreventDefault",
        EventModifier.StopPropagation => "StopPropagation",
        _ => throw new ArgumentOutOfRangeException(nameof(value), value, null)
    };
}
