namespace RoarUI.Events;

public class RoarResizeEventArgs : EventArgs
{
    public IReadOnlyList<ResizeObserverEntry> Entries { get; set; } = [];
}
