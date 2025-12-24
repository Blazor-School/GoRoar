using BlazorSchool.BlazorLibrary2.Abstractions.AutoDependency;

namespace ShowcaseWebApp.Services;

public class TransientService : IAutoRegisterTransient
{
    public string GetMessage() => "Hello from TransientService!";
}
