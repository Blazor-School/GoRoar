namespace Roar.Utilities;

public readonly struct Variant : IEquatable<Variant>
{
    private const string _default = "neutral";
    public string Value => field ?? _default;

    public Variant(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly Variant Neutral = new("neutral");
    public static readonly Variant Brand = new("brand");
    public static readonly Variant Success = new("success");
    public static readonly Variant Warning = new("warning");
    public static readonly Variant Danger = new("danger");

    public override string ToString() => Value;
    public bool Equals(Variant other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is Variant v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator Variant(string value) => new(value);
    public static implicit operator string(Variant v) => v.Value;

    public static bool operator ==(Variant left, Variant right) => left.Equals(right);
    public static bool operator !=(Variant left, Variant right) => !(left == right);
}
