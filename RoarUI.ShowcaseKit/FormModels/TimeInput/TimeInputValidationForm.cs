using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class TimeInputValidationForm
{
    [Required(ErrorMessage = "Choose an appointment time.")]
    public TimeOnly? Appointment { get; set; }
}
