using System.Diagnostics;

namespace BlazorAccelerator.Services;

public class DevConsoleService
{
    public async Task CompileTheme(string scssFile, string outCss)
    {
        var p = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "sass",
                Arguments = $"{scssFile}:{outCss} --no-source-map",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false
            }
        };

        p.Start();
        await p.WaitForExitAsync();
    }
}
