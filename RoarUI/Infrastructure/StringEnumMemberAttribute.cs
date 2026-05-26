namespace RoarUI.Infrastructure;

/// <param name="PropertyName">
/// The name of the property to be generated.
/// </param>
///
/// <param name="Value">
/// Explicitly specifies the value for the property.
/// If omitted, it is derived by converting <paramref name="PropertyName"/> to kebab-case.
/// If supplied, the value is used as-is, including an empty string.
/// </param>
/// <summary>
/// Specifies a property for the string enum.
/// </summary>
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
internal sealed class StringEnumMemberAttribute(string PropertyName, string? Value = null) : Attribute
{
    public string PropertyName { get; } = PropertyName;
    public string? Value { get; } = Value;
}
