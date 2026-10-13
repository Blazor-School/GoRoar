using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class SliderSettingsForm
{
    [Range(2, 6)]
    public double TeamSize { get; set; } = 1;

    [Range(2, 4)]
    public double Lower { get; set; } = 1;

    [Range(6, 8)]
    public double Upper { get; set; } = 9;
}
