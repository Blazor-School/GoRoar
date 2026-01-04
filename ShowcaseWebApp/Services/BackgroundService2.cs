using Roar.Abstractions.Runtime;

namespace ShowcaseWebApp.Services;

public class BackgroundService2 : BackgroundService, IRoarBackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        Console.WriteLine("Started");
        await Task.Delay(TimeSpan.FromSeconds(10));
        Console.WriteLine("Done");
    }
}
