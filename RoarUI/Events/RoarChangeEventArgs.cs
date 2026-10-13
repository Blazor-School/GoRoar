namespace RoarUI.Events;

public class RoarChangeEventArgs : EventArgs
{
    public CheckboxChangeEventArgs? Checkbox { get; set; }
    public SwitchChangeEventArgs? Switch { get; set; }
    public SliderChangeEventArgs? Slider { get; set; }
    public RatingChangeEventArgs? Rating { get; set; }
    public RangeSliderChangeEventArgs? RangeSlider { get; set; }
    public ComparisonChangeEventArgs? Comparison { get; set; }
    public InputChangeEventArgs<string?>? Input { get; set; }
    public KnownDateChangeEventArgs? KnownDate { get; set; }
    public NumberInputChangeEventArgs? NumberInput { get; set; }
    public RadioGroupChangeEventArgs? RadioGroup { get; set; }
    public ColorPickerChangeEventArgs? ColorPicker { get; set; }
    public SelectChangeEventArgs? Select { get; set; }
}
