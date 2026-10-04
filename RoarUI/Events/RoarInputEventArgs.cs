namespace RoarUI.Events;

public class RoarInputEventArgs : EventArgs
{
    public CheckboxChangeEventArgs? Checkbox { get; set; }
    public SwitchChangeEventArgs? Switch { get; set; }
    public InputChangeEventArgs<string?>? Input { get; set; }
    public KnownDateChangeEventArgs? KnownDate { get; set; }
    public NumberInputChangeEventArgs? NumberInput { get; set; }
    public RadioGroupChangeEventArgs? RadioGroup { get; set; }
    public ColorPickerChangeEventArgs? ColorPicker { get; set; }
    public SelectChangeEventArgs? Select { get; set; }
}
