using BlazorSchool.BlazorLibrary2.Abstractions.AutoDependency;

namespace ShowcaseWebApp.Services;

public class TestService : IAutoRegisterScoped
{
    public string GetMessage() => "Hello from TestService!";
}
