using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Text;
using System.Text;

namespace BlazorSchool.BlazorLibrary2.Generators
{
    [Generator]
    public class Class1 : IIncrementalGenerator
    {
        public void Initialize(IncrementalGeneratorInitializationContext context)
        {
            string source = @"
namespace BlazorSchool.BlazorLibrary2.Generated
{
    public class HelloWorld
    {
        public static string SayHello() => ""Hello from generated code!"";
    }
}
";

            context.RegisterPostInitializationOutput(ctx => ctx.AddSource("HelloWorld.g.cs", SourceText.From(source, Encoding.UTF8)));
        }
    }
}