using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class RadioGroupCustomValidityForm : IValidatableObject
{
    [Required(ErrorMessage = "Please select a coffee option.")]
    public string SelectedCoffee { get; set; } = "";

    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        if (SelectedCoffee != "dark")
        {
            yield return new ValidationResult("Sorry we only have dark roast today", [nameof(SelectedCoffee)]);
        }
    }
}
