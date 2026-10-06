namespace RoarUI.Events;

public class RoarBeforePageChangeEventArgs : EventArgs
{
    public PaginationPageChangeEventArgs? Pagination { get; set; }
}
