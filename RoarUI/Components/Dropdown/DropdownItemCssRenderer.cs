using RoarUI.Theme;

namespace RoarUI.Components.Dropdown;

internal sealed class DropdownItemCssRenderer : IVariantCssRenderer
{
    public string BuildVariantMappings(string variant)
    {
        // WebAwesome already supplies these mappings, including its native interaction states.
        if (variant is "default" or "danger")
        {
            return string.Empty;
        }

        string selector = $"wa-dropdown-item[variant=\"{variant}\"]";
        string enabledSelector = $"{selector}:not([disabled]):not(:state(disabled))";

        List<VariantCssRule> rules =
        [
            new()
            {
                Selector = selector,
                Properties = new()
                {
                    ["color"] = $"var(--wa-color-{variant}-on-quiet)"
                }
            },
            new()
            {
                Selector = $"{selector}::part(details), {selector}::part(submenu-icon)",
                Properties = new()
                {
                    ["color"] = $"var(--wa-color-{variant}-on-quiet)"
                }
            },
            new()
            {
                Selector = $"{enabledSelector}:hover",
                MediaQuery = "(hover: hover)",
                Properties = new()
                {
                    ["background-color"] = $"var(--wa-color-{variant}-fill-normal)",
                    ["color"] = $"var(--wa-color-{variant}-on-normal)"
                }
            },
            new()
            {
                Selector = $"{enabledSelector}:hover::part(details), {enabledSelector}:hover::part(submenu-icon)",
                MediaQuery = "(hover: hover)",
                Properties = new()
                {
                    ["color"] = $"var(--wa-color-{variant}-on-normal)"
                }
            },
            new()
            {
                Selector = $"{enabledSelector}:state(submenu-open), {enabledSelector}:focus-visible",
                Properties = new()
                {
                    ["background-color"] = $"var(--wa-color-{variant}-fill-normal)",
                    ["color"] = $"var(--wa-color-{variant}-on-normal)"
                }
            },
            new()
            {
                Selector = $"{enabledSelector}:state(submenu-open)::part(details), {enabledSelector}:state(submenu-open)::part(submenu-icon), {enabledSelector}:focus-visible::part(details), {enabledSelector}:focus-visible::part(submenu-icon)",
                Properties = new()
                {
                    ["color"] = $"var(--wa-color-{variant}-on-normal)"
                }
            }
        ];

        return rules.ToCss();
    }
}
