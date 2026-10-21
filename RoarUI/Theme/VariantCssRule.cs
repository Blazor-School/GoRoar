namespace RoarUI.Theme;

/// <summary>
/// Defines a CSS selector and its declarations, optionally restricted by a media query.
/// </summary>
public sealed class VariantCssRule
{
    public required string Selector { get; init; }

    public Dictionary<string, string> Properties { get; init; } = [];

    /// <summary>
    /// The media query condition without the @media prefix, or null for an unconditional rule.
    /// </summary>
    public string? MediaQuery { get; init; }
}
