namespace RoarUI;

/// <summary>
/// Options for a notification created by <see cref="RoarToast.CreateAsync" />.
/// </summary>
public class ToastCreateOptions
{
    /// <summary>
    /// Renders the message as HTML instead of plain text. Only enable this for trusted content.
    /// </summary>
    public bool AllowHtml { get; set; }

    /// <summary>
    /// The duration in milliseconds. Set to 0 to keep the notification open until dismissed.
    /// </summary>
    public int Duration { get; set; } = 5000;

    /// <summary>
    /// An optional icon. An icon name can be assigned directly, or use an object to specify its library, family, and variant.
    /// </summary>
    public ToastIconOptions? Icon { get; set; }

    public ToastVariant Variant { get; set; }

    public ToastSize Size { get; set; }
}
