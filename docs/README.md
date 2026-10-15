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

## Preview status and requirements

RoarUI is currently in preview. APIs may change before the first stable release.

- .NET 10 SDK to build or run from source.
- Git to clone the repository.
- Interactive Blazor rendering for C# event handlers and two-way binding.

The repository includes showcases for Interactive Server and standalone WebAssembly.

## Getting started

Clone the repository and run the Interactive Server showcase:

```sh
git clone https://github.com/Blazor-School/GoRoar.git
cd GoRoar
dotnet run --project ShowcaseWebApp/ShowcaseWebApp.csproj --launch-profile "No Debug"
```

Open the URL printed in the terminal. The launch profile uses HTTPS. If needed,
trust the ASP.NET Core development certificate before running the showcase:

```sh
dotnet dev-certs https --trust
```

To run the standalone WebAssembly showcase instead, stop the Server showcase and run:

```sh
dotnet run --project ShowcaseWebAssembly/ShowcaseWebAssembly.csproj --launch-profile "No Debug"
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

Qualifying personal projects may earn revenue, sell application copies or licenses,
or operate as paid SaaS. An organization merely buying or subscribing to a generally
offered application as an end user does not, by that fact alone, own or commission it.
Development commissioned by an organization still requires a Commercial License.

This is a summary. The [full license](LICENSE.txt) governs eligibility, source access,
modification, redistribution, and changes in project ownership or development.

## Contact

For Commercial Licenses, contact: info@blazorschool.com
