namespace RoarUI.Infrastructure;

/// <summary>
/// Specifies an empty event args class to generate in the RoarUI.Events namespace.
/// </summary>
/// <param name="Name">
/// The name of the class to be generated.
/// </param>
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
internal sealed class EmptyEventArgsAttribute(string Name) : Attribute
{
    public string Name { get; } = Name;
}
