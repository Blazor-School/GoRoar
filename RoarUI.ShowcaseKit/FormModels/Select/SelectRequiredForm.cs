using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class SelectRequiredForm
{
    [Required]
    public int? Country { get; set; }

    [MinLength(1, ErrorMessage = "Choose at least one topping.")]
    public int[] Toppings { get; set; } = [];
}
