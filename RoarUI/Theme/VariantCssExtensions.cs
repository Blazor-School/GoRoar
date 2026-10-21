using System.Text;

namespace RoarUI.Theme;

/// <summary>
/// Serializes structured CSS rules for use by <see cref="IVariantCssRenderer"/>.
/// </summary>
public static class VariantCssExtensions
{
    /// <summary>
    /// Returns CSS for a rule, including an @media wrapper when MediaQuery is nonempty.
    /// Selectors, conditions, and declarations are emitted as authored CSS without escaping.
    /// </summary>
    public static string ToCss(this VariantCssRule rule)
    {
        ArgumentNullException.ThrowIfNull(rule);
        var css = new StringBuilder();
        AppendRule(css, rule);

        return css.ToString();
    }

    /// <summary>
    /// Returns CSS in enumeration order without merging rules that share a selector or media query.
    /// </summary>
    public static string ToCss(this IEnumerable<VariantCssRule> rules)
    {
        var css = new StringBuilder();

        foreach (var rule in rules)
        {
            AppendRule(css, rule);
        }

        return css.ToString();
    }

    private static void AppendRule(StringBuilder css, VariantCssRule rule)
    {
        bool hasMediaQuery = !string.IsNullOrWhiteSpace(rule.MediaQuery);
        string indentation = hasMediaQuery ? "    " : string.Empty;

        if (hasMediaQuery)
        {
            css.Append("@media ").Append(rule.MediaQuery).AppendLine(" {");
        }

        css.Append(indentation).Append(rule.Selector).AppendLine(" {");

        foreach (var property in rule.Properties)
        {
            css.Append(indentation).Append("    ").Append(property.Key).Append(": ").Append(property.Value).AppendLine(";");
        }

        css.Append(indentation).AppendLine("}");

        if (hasMediaQuery)
        {
            css.AppendLine("}");
        }
    }
}
