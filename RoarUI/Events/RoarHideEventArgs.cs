namespace RoarUI.Events;

public class RoarHideEventArgs : EventArgs
{
    public DialogHideEventArgs? Dialog { get; set; }
    public DrawerHideEventArgs? Drawer { get; set; }
    public LightboxHideEventArgs? Lightbox { get; set; }
}
