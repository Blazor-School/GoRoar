namespace RoarUI.Services;

internal class RoarDependencyService
{
    public HashSet<string> Components { get; private set; } = [];
    public event EventHandler OnComponentsChanged = delegate { };

    public void RegisterComponent(string componentName)
    {
        ArgumentException.ThrowIfNullOrEmpty(componentName);
        Components.Add(componentName);
        OnComponentsChanged?.Invoke(this, EventArgs.Empty);
    }
}
