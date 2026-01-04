using Roar.Abstractions.Runtime;

namespace ShowcaseWebApp.Services;

public class ScopedServiceWithInterface : IRoarScopedService<IScopedServiceWithInterface>, IScopedServiceWithInterface
{
    public string GetInfo() => "Hello from ScopedServiceWithInterface!";
}

public interface IScopedServiceWithInterface
{
    string GetInfo();
}