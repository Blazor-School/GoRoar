namespace RoarUI.Utilities;

public readonly struct Slot : IEquatable<Slot>
{
    private const string _default = "start";
    public string Value => field ?? _default;

    public Slot(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly Slot Start = new("start");
    public static readonly Slot End = new("end");

    public override string ToString() => Value;
    public bool Equals(Slot other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is Slot v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator Slot(string value) => new(value);
    public static implicit operator string(Slot v) => v.Value;

    public static bool operator ==(Slot left, Slot right) => left.Equals(right);
    public static bool operator !=(Slot left, Slot right) => !(left == right);
}
