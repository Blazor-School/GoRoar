using Microsoft.JSInterop;
using RoarUI.Utilities;

namespace RoarUI.Components;

public abstract class RoarJsPropertyObserverComponentBase : RoarJsComponentBase, IAsyncDisposable
{
    private DotNetObjectReference<RoarJsPropertyObserverComponentBase>? _reference;
    private bool _disposing;

    protected ValueTask ObserveComponentPropertyAsync(string propertyName, string methodName)
    {
        _reference ??= DotNetObjectReference.Create(this);

        return JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.ObserveProperty, Element, propertyName, _reference, methodName);
    }

    public async ValueTask DisposeAsync()
    {
        if (_disposing)
        {
            return;
        }

        _disposing = true;

        try
        {
            await DisposeAsyncCore();
        }
        finally
        {
            _reference?.Dispose();
            GC.SuppressFinalize(this);
        }
    }

    protected virtual ValueTask DisposeAsyncCore() => ValueTask.CompletedTask;
}
