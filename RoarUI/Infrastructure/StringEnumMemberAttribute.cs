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
    public string Value { get; } = string.IsNullOrEmpty(Value) ? char.ToLowerInvariant(PropertyName[0]) + PropertyName[1..] : Value;
}
