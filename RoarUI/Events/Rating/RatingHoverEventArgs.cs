namespace RoarUI.Events;

/// <summary>
/// Describes a hover preview without changing the rating's current value.
/// </summary>
/// <param name="Phase">Start when hovering begins, Move when the preview value changes, or End when hovering ends.</param>
/// <param name="Value">The value that would be selected if the user committed to the hovered position.</param>
public record RatingHoverEventArgs(RatingHoverPhase Phase, double Value);
