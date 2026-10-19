# RoarUI

RoarUI is a Blazor component library built on Web Awesome. It combines strongly
typed C# APIs with flexible string values and syntax designed to stay close to
native Blazor and HTML.

## Highlights

- **Built on Web Awesome:** Inherit Web Awesome's components and styling flexibility,
  including custom variants for buttons, toasts, and other components.
- **Typed APIs with string flexibility:** Choose discoverable C# values such as
  `ButtonVariant.Neutral`, or supply strings for your custom variants. Define the
  corresponding styles in your CSS or theme.
- **Familiar Blazor and HTML syntax:** Use standard HTML attributes such as `class`,
  `style`, and `id`, alongside Blazor binding and events such as `@bind-Value` and `@onclick`.
- **Blazor form integration:** Use input components with `EditForm` and C# validation,
  including DataAnnotations.

## Requirements

- A Blazor application targeting .NET 10.
- Interactive rendering for C# event handlers and two-way binding.

## Install RoarUI

Run the following command in your Blazor application's project directory:

```sh
dotnet add package RoarUI
```

Add the RoarUI namespace to your application's `_Imports.razor` file. In a Blazor
Web App, this file is usually in the `Components` directory:

```razor
@using RoarUI
```

In `Program.cs`, import the namespace and register RoarUI services after creating
`builder` and before calling `builder.Build()`:

```csharp
using RoarUI;
```

```csharp
builder.Services.GoRoar();
```

Then follow the setup for your application type below.

## Blazor Web App

For a Blazor Web App using Interactive Server rendering, wrap the existing
`Routes` component with `GoRoar` in the body of `Components/App.razor`:

```razor
<GoRoar>
    <Routes @rendermode="InteractiveServer" />
</GoRoar>
```

Keep the application's existing document structure and Blazor script. The example
assumes Interactive Server rendering is already configured in `Program.cs` and
`@using static Microsoft.AspNetCore.Components.Web.RenderMode` is available in
`Components/_Imports.razor`.

Apply the interactive render mode to `Routes`. Keep the `GoRoar` wrapper outside
that render mode boundary.

### Asset setup

RoarUI loads stylesheets, component scripts, and theme updates through
`RoarAsset`. Add it once inside the `<head>` element of `Components/App.razor`:

```razor
<RoarAsset @rendermode="InteractiveServer" />
```

## Blazor WebAssembly Standalone

In `App.razor`, wrap your existing `Router` component with `GoRoar`. Keep your
application's existing routing configuration inside the wrapper:

```razor
<GoRoar>
    <Router AppAssembly="@typeof(App).Assembly">
        <Found Context="routeData">
            <RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />
            <FocusOnNavigate RouteData="@routeData" Selector="h1" />
        </Found>
    </Router>
</GoRoar>
```

Standalone WebAssembly runs interactively without an `@rendermode` attribute.

### Asset setup

RoarUI uses `RoarAsset` to load stylesheets, component
scripts, and theme updates. In `Program.cs`, register it alongside the existing
root components, before `builder.Build()`:

```csharp
builder.RootComponents.Add<RoarAsset>("head::after");
```

## License

RoarUI is **source-available** under a **dual-license model**.
Public source access does not grant unrestricted use or make RoarUI open source.

| Project | License |
|---------|---------|
| A project owned by one individual in a personal capacity, developed and maintained by that individual alone, and not commissioned by or developed on behalf of an organization | **Community License (Free)** |
| Owned or commissioned by, or developed on behalf of, any organization, including a one-person company or an organization hiring one freelancer | **Commercial License (Paid)** |
| Developed or maintained by more than one person | **Commercial License (Paid)** |
| End users running a lawfully licensed application or subscribing to it as SaaS | **No separate RoarUI license required** |

Developer counts refer to people developing or maintaining the application's code.
Automated tools, AI assistants, and build or CI systems do not count as additional
developers.

Qualifying personal projects may earn revenue, sell application copies or licenses,
or operate as paid SaaS. An organization merely buying or subscribing to a generally
offered application as an end user does not, by that fact alone, own or commission it.
Development commissioned by an organization still requires a Commercial License.

This is a summary. The [full license](LICENSE.txt) governs eligibility, source access,
modification, redistribution, and changes in project ownership or development.

## Contact

For Commercial Licenses, contact: info@blazorschool.com
