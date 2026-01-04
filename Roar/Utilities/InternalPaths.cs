namespace Roar.Utilities;

internal static class InternalPaths
{
    public const string BaseWebAwesomePath = "/_content/Roar/webawesome-3.1.0";

    public static string ComposeWebAwesomeComponentJsPath(string componentName) => string.Join("/", BaseWebAwesomePath, "components", componentName, $"{componentName}.js");
}
