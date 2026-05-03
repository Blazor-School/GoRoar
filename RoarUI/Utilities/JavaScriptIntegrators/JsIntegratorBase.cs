using Microsoft.JSInterop;

namespace RoarUI.Utilities.JavaScriptIntegrators;

internal class JsIntegratorBase : IAsyncDisposable
{
    private readonly Lazy<Task<IJSObjectReference>> _moduleTask;

    protected JsIntegratorBase(IJSRuntime jsRuntime, string jsFile) => _moduleTask = new Lazy<Task<IJSObjectReference>>(
            () => jsRuntime
                .InvokeAsync<IJSObjectReference>("import", $"./_content/Roar/{jsFile}")
                .AsTask());

    protected async ValueTask<IJSObjectReference> GetModuleAsync() => await _moduleTask.Value;

    public async ValueTask DisposeAsync()
    {
        if (_moduleTask.IsValueCreated)
        {
            var module = await _moduleTask.Value;
            await module.DisposeAsync();
        }
    }
}
