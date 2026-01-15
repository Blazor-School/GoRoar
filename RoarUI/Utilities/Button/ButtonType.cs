namespace RoarUI.Utilities;

public readonly struct ButtonType : IEquatable<ButtonType>
{
    private const string _default = "button";
    public string Value => field ?? _default;

    public ButtonType(string value) => Value = string.IsNullOrEmpty(value) ? _default : value;

    public static readonly ButtonType Button = new("button");
    public static readonly ButtonType Submit = new("submit");
    public static readonly ButtonType Reset = new("reset");

    public override string ToString() => Value;
    public bool Equals(ButtonType other) => Value == other.Value;
    public override bool Equals(object? obj) => obj is ButtonType v && Equals(v);
    public override int GetHashCode() => Value.GetHashCode();

    public static implicit operator ButtonType(string value) => new(value);
    public static implicit operator string(ButtonType v) => v.Value;

    public static bool operator ==(ButtonType left, ButtonType right) => left.Equals(right);
    public static bool operator !=(ButtonType left, ButtonType right) => !(left == right);
}