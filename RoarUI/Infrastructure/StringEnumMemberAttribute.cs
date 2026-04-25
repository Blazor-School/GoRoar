namespace RoarUI.Infrastructure;

/// <param name="PropertyName">
/// The name of the property to be generated.
/// </param>
///
/// <param name="Value">
/// Explicitly specifies the value for the property.
/// If omitted or empty, it is derived by converting
/// <paramref name="PropertyName"/> to camelCase.
/// </param>
/// <summary>
/// Specifies a property for the string enum.
/// </summary>
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
internal sealed class StringEnumMemberAttribute(string PropertyName, string? Value = null) : Attribute
{
    public string PropertyName { get; } = PropertyName;
    public string Value { get; } = string.IsNullOrEmpty(Value) ? ToKebabCase(PropertyName) : Value;

    private static string ToKebabCase(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return input;
        }

        var result = new System.Text.StringBuilder();

        for (int i = 0; i < input.Length; i++)
        {
            char c = input[i];

            if (char.IsUpper(c))
            {
                if (i > 0)
                {
                    result.Append('-');
                }

                result.Append(char.ToLowerInvariant(c));
            }
            else
            {
                result.Append(c);
            }
        }

        return result.ToString();
    }
}
