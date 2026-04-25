using Microsoft.JSInterop;

namespace RoarUI.Utilities.JavaScriptIntegrators;

internal class RoarBasicJsIntegrator(IJSRuntime JsRuntime) : JsIntegratorBase(JsRuntime, "roarBasic.js")
{
    //public async ValueTask SetObjectPropertyAsync(ElementReference element, string propertyName, object value)
    //{
    //    var module = await GetModuleAsync();
    //    await module.InvokeVoidAsync("setObjectProperty", element, propertyName, value);
    //}

    //public async ValueTask<T> GetObjectPropertyAsync<T>(ElementReference element, string propertyName)
    //{
    //    var module = await GetModuleAsync();

    //    return await module.InvokeAsync<T>("getObjectProperty", element, propertyName);
    //}

    //public async ValueTask ToggleBooleanPropertyAsync(ElementReference element, string propertyName)
    //{
    //    var module = await GetModuleAsync();
    //    await module.InvokeVoidAsync("toggleBooleanProperty", element, propertyName);
    //}
}
