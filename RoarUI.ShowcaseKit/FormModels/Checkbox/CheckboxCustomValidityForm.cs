using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class CheckboxCustomValidityForm
{
    [Required(ErrorMessage = "Don't forget to check me")]
    public bool CheckMe { get; set; } = false;
}
