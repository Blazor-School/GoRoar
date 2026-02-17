namespace RoarUI;

internal static class InternalPaths
{
    public const string BaseWebAwesomePath = "/_content/RoarUI/webawesome-3.2.1";

    public static string ComposeWebAwesomeComponentJsPath(string componentName)
    {
        ArgumentException.ThrowIfNullOrEmpty(componentName);

        return string.Join("/", BaseWebAwesomePath, "components", componentName, $"{componentName}.js");
    }
}
