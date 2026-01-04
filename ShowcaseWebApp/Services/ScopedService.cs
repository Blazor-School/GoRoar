using Roar.Abstractions.Runtime;

namespace ShowcaseWebApp.Services;

public class ScopedService : IRoarScopedService
{
    public string GetMessage() => "Hello from ScopedService!";
}
