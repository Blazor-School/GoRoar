namespace RoarUI;

/// <summary>
/// The icon displayed at the start of a notification.
/// </summary>
public class ToastIconOptions
{
    public required string Name { get; set; }

    public string? Library { get; set; }

    public FontAwesomeFamily? Family { get; set; }

    public FontAwesomeVariant? Variant { get; set; }

    public static implicit operator ToastIconOptions(string name) => new() { Name = name };
}
