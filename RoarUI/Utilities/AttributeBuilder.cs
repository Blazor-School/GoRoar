namespace RoarUI.Utilities;

internal class AttributeBuilder
{
    private readonly Dictionary<string, object> _attributes;

    public AttributeBuilder(IReadOnlyDictionary<string, object>? attributes = null) => _attributes = attributes?.ToDictionary(x => x.Key, x => x.Value) ?? [];

    public AttributeBuilder AddStyle(string name, string? value)
    {
        if (!string.IsNullOrWhiteSpace(value))
        {
            string newStyle = $"{name}:{value}";

            if (_attributes.TryGetValue("style", out object? existing))
            {
                string? style = existing?.ToString()?.Trim().TrimEnd(';');
                _attributes["style"] = $"{style}; {newStyle}";
            }
            else
            {
                _attributes["style"] = newStyle;
            }
        }

        return this;
    }

    public Dictionary<string, object> Build() => _attributes;
}
