namespace RoarUI.Utilities;

// Keep this file in sync with the function names in wwwroot/RoarUI.lib.module.js
internal static class JavascriptFunctionNames
{
    /// <summary>
    /// Element/JsObject, JsFunctionName, ...params
    /// </summary>
    public const string ExecuteJsFunctionFromJsObject = "executeJsFunctionFromJsObject";

    /// <summary>
    /// Element, JsEventName, DotNetObjectReference, CsharpCallbackMethodName
    /// </summary>
    public const string SubscribeEvent = "subscribeEvent";

    /// <summary>
    /// Element, JsEventName, CSharpEventArgsName, DotNetObjectReference, CsharpCallbackMethodName
    /// </summary>
    public const string SubscribeEventWithArgs = "subscribeEventWithArgs";

    /// <summary>
    /// Element, PropertyName, Value
    /// </summary>
    public const string SetObjectProperty = "setObjectProperty";

    /// <summary>
    /// Element, PropertyName
    /// </summary>
    public const string GetObjectProperty = "getObjectProperty";

    /// <summary>
    /// Element, PropertyName
    /// </summary>
    public const string ToggleBooleanProperty = "toggleBooleanProperty";

    /// <summary>
    /// Element, ProeprtyName, DotNetObjectReference, CsharpCallbackMethodName
    /// </summary>
    public const string ObserveProperty = "observeProperty";
}
