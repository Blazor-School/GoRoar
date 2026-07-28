using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using RoarUI.Utilities;

namespace RoarUI.Components;

public abstract class RoarJsComponentBase : ComponentBase
{
    [Inject]
    public IJSRuntime JSRuntime { get; set; } = default!;

    internal ElementReference Element { get; set; }

    protected ValueTask CallComponentVoidFunctionAsync(string functionName, params object?[] args) => JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.ExecuteJsFunctionFromJsObject, [Element, functionName, .. args]);

    protected ValueTask<TValue> CallComponentFunctionAsync<TValue>(string functionName, params object?[] args) => JSRuntime.InvokeAsync<TValue>(JavascriptFunctionNames.ExecuteJsFunctionFromJsObject, [Element, functionName, .. args]);

    protected ValueTask ToggleComponentPropertyAsync(string propertyName) => JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.ToggleBooleanProperty, Element, propertyName);

    protected ValueTask SetComponentPropertyAsync(string propertyName, object value) => JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.SetObjectProperty, Element, propertyName, value);

    protected ValueTask SetComponentPropertyWithJsonAsync(string propertyName, string json) => JSRuntime.InvokeVoidAsync(JavascriptFunctionNames.SetObjectPropertyWithJson, Element, propertyName, json);
}
