using Microsoft.JSInterop;

namespace RoarUI;

/// <summary>
/// A reference to a notification created by <see cref="RoarToast.CreateAsync" />. Dispose the reference when it is no longer needed.
/// </summary>
public sealed class ToastItemReference : IAsyncDisposable
{
    internal ToastItemReference(IJSObjectReference element) => Element = element;

    /// <summary>
    /// The native toast item, for custom JavaScript integration.
    /// </summary>
    public IJSObjectReference Element { get; }

    /// <summary>
    /// Hides the notification and waits for its animation to finish.
    /// </summary>
    public ValueTask HideAsync() => Element.InvokeVoidAsync("hide");

    /// <summary>
    /// Releases the JavaScript reference. This does not dismiss the notification.
    /// </summary>
    public ValueTask DisposeAsync() => Element.DisposeAsync();
}
