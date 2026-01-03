using BlazorAccelerator.Abstractions.AutoDependency;

namespace ShowcaseWebApp.Services;

public class TransientService : IAutoRegisterTransient
{
    public string GetMessage() => "Hello from TransientService!";
}
