using BlazorAccelerator.Abstractions.AutoDependency;

namespace ShowcaseWebApp.Services;

public class SingletonService : IAutoRegisterSingleton
{
    public string GetMessage() => "Hello from SingletonService!";
}
