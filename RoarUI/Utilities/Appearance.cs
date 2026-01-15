namespace RoarUI.Utilities;

public readonly struct Appearance : IEquatable<Appearance>
{
    private const string _default = "accent";
    public string Value => field ?? _default;

    public Appearance(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly Appearance Accent = new("accent");
    public static readonly Appearance FilledOutline = new("filled-outlined");
    public static readonly Appearance Filled = new("filled");
    public static readonly Appearance Outlined = new("outlined");
    public static readonly Appearance Plain = new("plain");

    public override string ToString() => Value;
    public bool Equals(Appearance other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is Appearance v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator Appearance(string value) => new(value);
    public static implicit operator string(Appearance v) => v.Value;

    public static bool operator ==(Appearance left, Appearance right) => left.Equals(right);
    public static bool operator !=(Appearance left, Appearance right) => !(left == right);
}
