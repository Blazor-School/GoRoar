using BlazorAccelerator.BlazorConsole;
using Microsoft.AspNetCore.Builder;

namespace BlazorAccelerator.Utilities;

public static partial class BlazorAcceleratorExtensions
{
    public static RazorComponentsEndpointConventionBuilder EnableBlazorAcceleratorDevConsole(this RazorComponentsEndpointConventionBuilder builder)
    {
        builder.AddAdditionalAssemblies(typeof(DevConsole).Assembly);

        return builder;
    }
}
