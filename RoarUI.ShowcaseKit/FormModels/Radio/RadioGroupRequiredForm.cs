using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class RadioGroupRequiredForm
{
    [Required(ErrorMessage = "Please select a coffee option.")]
    public string SelectedCoffee { get; set; } = "";
}
