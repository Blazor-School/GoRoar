using Roar.Abstractions.Runtime;

namespace ShowcaseWebApp.Services;

public class SingletonService : IRoarSingletonService
{
    public string GetMessage() => "Hello from SingletonService!";
}
