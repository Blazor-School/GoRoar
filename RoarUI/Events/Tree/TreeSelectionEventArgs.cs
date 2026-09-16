namespace RoarUI.Events;

public class TreeSelectionEventArgs
{
    public string? SelectedValue { get; set; }
    public List<string> SelectedValues { get; set; } = [];
}
