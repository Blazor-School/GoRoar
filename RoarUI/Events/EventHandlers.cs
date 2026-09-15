using Microsoft.AspNetCore.Components;

namespace RoarUI.Events;

[EventHandler("onroarselect", typeof(RoarSelectEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarafterhide", typeof(RoarAfterHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroaraftershow", typeof(RoarAfterShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarhide", typeof(RoarHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarshow", typeof(RoarShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
}
