using RoarUI.Models.Theme;

namespace RoarUI;

public class Token
{
    public Border Border { get; set; } = new();
    public ColorPalette Color { get; set; } = new();
    public Focus Focus { get; set; } = new();
}
