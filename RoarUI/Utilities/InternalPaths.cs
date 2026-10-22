namespace RoarUI;

internal static class InternalPaths
{
    public const string BaseWebAwesomePath = "/_content/RoarUI/webawesome-3.14.0";
    public const string BaseRoarPath = "/_content/RoarUI/components";

    public static string ComposeComponentJsPath(string componentName)
    {
        bool isRoarComponent = componentName.StartsWith("roar-", StringComparison.Ordinal);
        string name = isRoarComponent ? componentName["roar-".Length..] : componentName;
        string basePath = isRoarComponent ? BaseRoarPath : $"{BaseWebAwesomePath}/components";

        return $"{basePath}/{name}/{name}.js";
    }
}
