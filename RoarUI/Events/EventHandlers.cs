using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace RoarUI.Events;

[EventHandler("onroarselect", typeof(RoarSelectEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarafterhide", typeof(RoarAfterHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroaraftershow", typeof(RoarAfterShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarhide", typeof(RoarHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarshow", typeof(RoarShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarblur", typeof(FocusEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarfocus", typeof(FocusEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarchange", typeof(RoarChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarreposition", typeof(RoarRepositionEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroartabshow", typeof(RoarTabShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroartabhide", typeof(RoarTabHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarselectionchange", typeof(RoarSelectionChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarinput", typeof(RoarInputEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarclear", typeof(RoarClearEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarbeforeinput", typeof(RoarBeforeInputEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroaraftercollapse", typeof(RoarAfterCollapseEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarafterexpand", typeof(RoarAfterExpandEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarcollapse", typeof(RoarCollapseEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarexpand", typeof(RoarExpandEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarlazychange", typeof(RoarLazyChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarlazyload", typeof(RoarLazyLoadEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarremove", typeof(RoarRemoveEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
}
