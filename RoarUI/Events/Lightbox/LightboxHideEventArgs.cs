namespace RoarUI.Events;

/// <summary>
/// Identifies the element that requested closing. SelfClose indicates that the request came from the internal dialog.
/// </summary>
public record LightboxHideEventArgs(bool SelfClose, string? SourceTagName, string? SourceId, string? SourcePart);
