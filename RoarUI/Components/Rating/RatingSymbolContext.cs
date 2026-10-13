namespace RoarUI;

/// <summary>
/// Information passed to <see cref="RoarRating.SymbolTemplate"/> when rendering one rating symbol.
/// </summary>
/// <param name="Value">The symbol's position, starting at 1. This is not the rating's current value.</param>
/// <param name="IsSelectedOrHovered">
/// </remarks>
public record RatingSymbolContext(int Value, bool IsSelectedOrHovered);
