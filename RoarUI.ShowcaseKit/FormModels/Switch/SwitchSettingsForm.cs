using System.ComponentModel.DataAnnotations;

namespace RoarUI.ShowcaseKit.FormModels;

public class SwitchSettingsForm
{
    [Range(typeof(bool), "true", "true", ErrorMessage = "Enable notifications to continue.")]
    public bool NotificationsEnabled { get; set; }
}
