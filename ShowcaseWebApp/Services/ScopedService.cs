using BlazorSchool.BlazorLibrary2.Abstractions.AutoDependency;

namespace ShowcaseWebApp.Services;

public class ScopedService : IAutoRegisterScoped
{
    public string GetMessage() => "Hello from ScopedService!";
}
