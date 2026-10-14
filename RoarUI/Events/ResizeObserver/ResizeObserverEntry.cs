namespace RoarUI.Events;

/// <summary>
/// A snapshot of an observed element's dimensions. TargetId is empty when the element has no ID.
/// </summary>
public record ResizeObserverEntry(string TargetId, ResizeObserverRect ContentRect, IReadOnlyList<ResizeObserverSize> BorderBoxSize, IReadOnlyList<ResizeObserverSize> ContentBoxSize, IReadOnlyList<ResizeObserverSize> DevicePixelContentBoxSize);
