using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class TagInputValidationForm
{
    [MinLength(2, ErrorMessage = "Add at least two tags.")]
    [MaxLength(5, ErrorMessage = "Add no more than five tags.")]
    public string[] Tags { get; set; } = [];
}
