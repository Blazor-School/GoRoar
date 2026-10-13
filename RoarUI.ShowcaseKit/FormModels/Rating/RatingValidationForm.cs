using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class RatingValidationForm
{
    [Range(1.0, 5.0, ErrorMessage = "Choose a rating between 1 and 5.")]
    public double Rating { get; set; }
}
