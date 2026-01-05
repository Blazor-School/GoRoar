namespace Roar.Utilities;

public readonly struct Size : IEquatable<Size>
{
    private const string _default = "medium";
    public string Value => field ?? _default;

    public Size(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly Size Small = new("small");
    public static readonly Size Medium = new("medium");
    public static readonly Size Large = new("large");

    public override string ToString() => Value;
    public bool Equals(Size other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is Size v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator Size(string value) => new(value);
    public static implicit operator string(Size v) => v.Value;

    public static bool operator ==(Size left, Size right) => left.Equals(right);
    public static bool operator !=(Size left, Size right) => !(left == right);
}
