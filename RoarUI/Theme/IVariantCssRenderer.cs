namespace RoarUI.Theme;

/// <summary>
/// Generates component CSS for a theme variant. Register implementations as scoped services with <see cref="IVariantCssRenderer"/>.
/// </summary>
public interface IVariantCssRenderer
{
    /// <summary>
    /// Returns CSS rules without a style element or layer wrapper. RoarAsset combines the rules in registration order inside the wa-theme-overrides layer on each theme render.
    /// </summary>
    /// <param name="variant">The variant name, containing only ASCII letters, digits, hyphens, or underscores.</param>
    /// <returns>Component-scoped CSS rules, or an empty string when no mapping is needed.</returns>
    string BuildVariantMappings(string variant);
}
