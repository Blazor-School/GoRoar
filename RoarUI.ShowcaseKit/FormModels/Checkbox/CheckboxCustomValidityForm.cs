using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class CheckboxCustomValidityForm
{
    [Range(typeof(bool), "true", "true", ErrorMessage = "Don't forget to check me")]
    public bool CheckMe { get; set; } = false;
}
