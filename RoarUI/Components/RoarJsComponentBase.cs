using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using RoarUI.Utilities;

namespace RoarUI.Components;

public abstract class RoarJsComponentBase : ComponentBase
{
    [Inject]
    public IJSRuntime JSRuntime { get; set; } = default!;

    internal ElementReference Element { get; set; }

    protected ValueTask CallComponentFunctionAsync(string functionName, params object?[] args)
    {
        object?[] invocationArguments = [Element, functionName, .. args];

        return JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.ExecuteJsFunctionFromJsObject, invocationArguments);
    }
}
