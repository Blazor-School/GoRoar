using System.Text.Json.Serialization;

namespace RoarUI;

public class RoarTheme
{
    [JsonPropertyName("$schema")]
    public string? Schema { get; set; }

    public int Version { get; set; }
    public string? Name { get; set; }
    public string? Author { get; set; }
    public Token Token { get; set; } = new();
}
