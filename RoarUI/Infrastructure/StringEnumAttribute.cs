namespace RoarUI.Infrastructure;

/// <param name="Name">
/// The name of the struct to be generated.
/// </param>
///
/// <param name="Default">
/// The default value for the struct.
/// </param>
/// <summary>
/// Specifies the string enum struct.
/// </summary>
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
internal sealed class StringEnumAttribute(string Name, string Default) : Attribute
{
    public string Name { get; } = Name;
    public string Default { get; } = Default;
}
