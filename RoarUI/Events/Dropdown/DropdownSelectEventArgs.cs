namespace RoarUI.Events;

public class DropdownSelectEventArgs() : EventArgs
{
    public string? SelectedItem { get; set; }
    public bool? Checked { get; set; }
}
