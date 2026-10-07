using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class TextareaRequiredForm
{
    [Required]
    public string? Comments { get; set; }
}
