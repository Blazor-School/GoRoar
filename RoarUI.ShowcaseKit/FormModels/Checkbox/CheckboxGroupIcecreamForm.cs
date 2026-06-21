using RoarUI.Validations;

namespace RoarUI.ShowcaseKit.FormModels;

public class CheckboxGroupIcecreamForm
{
    [CheckboxGroupRequired(ErrorMessage = "Choose at least 1 option")]
    public List<bool> CheckboxGroup1 { get; set; } = [false, false, false];
}
