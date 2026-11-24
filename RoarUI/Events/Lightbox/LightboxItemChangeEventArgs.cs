namespace RoarUI.Events;

/// <summary>
/// The current and previous items and their zero-based indices.
/// </summary>
public record LightboxItemChangeEventArgs(int Index, int PreviousIndex, LightboxItemInfo Item, LightboxItemInfo? PreviousItem);
