namespace RoarUI.Theme;

public class Token
{
    public Border Border { get; set; } = new();
    public ColorPalette Color { get; set; } = new();
    public Focus Focus { get; set; } = new();
    public Shadow Shadow { get; set; } = new();
    public Space Space { get; set; } = new();
    public Transition Transition { get; set; } = new();
    public Typography Typography { get; set; } = new();
}
