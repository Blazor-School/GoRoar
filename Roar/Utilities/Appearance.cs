namespace Roar.Utilities;

public readonly struct Appearance : IEquatable<Appearance>
{
    private const string _default = "accent";
    public string Value => field ?? _default;

    public Appearance(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly Variant Accent = new("accent");
    public static readonly Variant FilledOutline = new("filled-outlined");
    public static readonly Variant Filled = new("filled");
    public static readonly Variant Outlined = new("outlined");
    public static readonly Variant Plain = new("plain");

    public override string ToString() => Value;
    public bool Equals(Appearance other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is Appearance v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator Appearance(string value) => new(value);
    public static implicit operator string(Appearance v) => v.Value;

    public static bool operator ==(Appearance left, Appearance right) => left.Equals(right);
    public static bool operator !=(Appearance left, Appearance right) => !(left == right);
}
