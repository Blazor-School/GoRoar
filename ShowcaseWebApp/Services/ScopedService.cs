using BlazorAccelerator.Abstractions.AutoDependency;

namespace ShowcaseWebApp.Services;

public class ScopedService : IAutoRegisterScoped
{
    public string GetMessage() => "Hello from ScopedService!";
}
