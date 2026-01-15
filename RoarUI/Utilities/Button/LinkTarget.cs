namespace RoarUI.Utilities;

public readonly struct LinkTarget : IEquatable<LinkTarget>
{
    private const string _default = "_self";
    public string Value => field ?? _default;

    public LinkTarget(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly LinkTarget Self = new("_self");
    public static readonly LinkTarget Blank = new("_blank");
    public static readonly LinkTarget Parent = new("_parent");
    public static readonly LinkTarget Top = new("_top");

    public override string ToString() => Value;
    public bool Equals(LinkTarget other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is ButtonType v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator LinkTarget(string value) => new(value);
    public static implicit operator string(LinkTarget v) => v.Value;

    public static bool operator ==(LinkTarget left, ButtonType right) => left.Equals(right);
    public static bool operator !=(LinkTarget left, ButtonType right) => !(left == right);
}