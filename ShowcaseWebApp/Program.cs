using BlazorSchool.BlazorLibrary2.Utilities;
using ShowcaseWebApp.Components;
using ShowcaseWebApp.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

builder.Services.UseBlazorLibrary2().AddConsumerServices();
builder.Services.AddHostedService<BackgroundService2>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>()
    .EnableBlazorLibraryDevConsole()
    .AddInteractiveServerRenderMode();

app.Run();
