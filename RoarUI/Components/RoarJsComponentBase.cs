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

    protected ValueTask<TValue> GetComponentPropertyAsync<TValue>(string propertyName) => JSRuntime.InvokeAsync<TValue>(JavascriptFunctionNames.GetObjectProperty, Element, propertyName);

    protected async Task SyncComponentPropertyAsync<TValue>(string parameterName, string propertyName, EventCallback<TValue> valueChanged)
    {
        var parameter = GetType().GetProperty(parameterName) ?? throw new ArgumentException("Component parameter was not found.", nameof(parameterName));
        var value = await GetComponentPropertyAsync<TValue>(propertyName);

        if (!EqualityComparer<TValue>.Default.Equals((TValue)parameter.GetValue(this)!, value))
        {
            parameter.SetValue(this, value);
            await valueChanged.InvokeAsync(value);
        }
    }
}
