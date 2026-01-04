using Roar.Abstractions.Runtime;

namespace ShowcaseWebApp.Services;

public class TransientService : IRoarTransientService
{
    public string GetMessage() => "Hello from TransientService!";
}
