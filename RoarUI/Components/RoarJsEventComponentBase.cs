using Microsoft.JSInterop;
using RoarUI.Utilities;

namespace RoarUI.Components;

public abstract class RoarJsEventComponentBase : RoarJsComponentBase, IAsyncDisposable
{
    internal readonly string SubscriptionId = Guid.NewGuid().ToString("N");
    internal DotNetObjectReference<RoarJsEventComponentBase> ComponentDotNetObjectReference;

    private bool _disposing = false;
    private bool _hasEventSubscriptions = false;

    protected RoarJsEventComponentBase() => ComponentDotNetObjectReference = DotNetObjectReference.Create(this);

    public async ValueTask DisposeAsync()
    {
        if (_disposing)
        {
            return;
        }

        _disposing = true;

        try
        {
            if (_hasEventSubscriptions)
            {
                await JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.UnsubscribeEvent, SubscriptionId);
            }
        }
        catch (JSDisconnectedException)
        {
            // Handle for Blazor Web App running on server, no need to handle this case
        }
        finally
        {
            try
            {
                await DisposeAsyncCore();
            }
            finally
            {
                ComponentDotNetObjectReference.Dispose();
                GC.SuppressFinalize(this);
            }
        }
    }

    protected virtual ValueTask DisposeAsyncCore() => ValueTask.CompletedTask;

    protected async ValueTask RegisterEventAsync(string eventName, string methodName)
    {
        _hasEventSubscriptions = true;
        await JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.SubscribeEvent, Element, eventName, ComponentDotNetObjectReference, methodName, SubscriptionId);
    }

    protected async ValueTask RegisterEventAsync(string eventName, string eventArgsName, string methodName)
    {
        _hasEventSubscriptions = true;
        await JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.SubscribeEventWithArgs, Element, eventName, eventArgsName, ComponentDotNetObjectReference, methodName, SubscriptionId);
    }
}
