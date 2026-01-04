using Microsoft.AspNetCore.Builder;
using Roar.BlazorConsole;

namespace Roar.Utilities;

public static partial class RoarExtensions
{
    public static RazorComponentsEndpointConventionBuilder EnableRoarDevConsole(this RazorComponentsEndpointConventionBuilder builder)
    {
        builder.AddAdditionalAssemblies(typeof(DevConsole).Assembly);

        return builder;
    }
}
