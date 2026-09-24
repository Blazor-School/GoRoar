using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace RoarUI.Events;

// Generated event args classes need to specify the full namespace with global:: prefix due to Razor generator run parallelly with our generator
[EventHandler("onroarselect", typeof(RoarSelectEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarcomplete", typeof(global::RoarUI.Events.RoarCompleteEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarafterhide", typeof(global::RoarUI.Events.RoarAfterHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroaraftershow", typeof(global::RoarUI.Events.RoarAfterShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarhide", typeof(RoarHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarshow", typeof(global::RoarUI.Events.RoarShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarblur", typeof(FocusEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarfocus", typeof(FocusEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarchange", typeof(RoarChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarreposition", typeof(RoarRepositionEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroartabshow", typeof(RoarTabShowEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroartabhide", typeof(RoarTabHideEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarselectionchange", typeof(RoarSelectionChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarinput", typeof(RoarInputEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarclear", typeof(global::RoarUI.Events.RoarClearEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarbeforeinput", typeof(global::RoarUI.Events.RoarBeforeInputEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroaraftercollapse", typeof(global::RoarUI.Events.RoarAfterCollapseEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarafterexpand", typeof(global::RoarUI.Events.RoarAfterExpandEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarcollapse", typeof(global::RoarUI.Events.RoarCollapseEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarexpand", typeof(global::RoarUI.Events.RoarExpandEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarlazychange", typeof(global::RoarUI.Events.RoarLazyChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarlazyload", typeof(global::RoarUI.Events.RoarLazyLoadEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
[EventHandler("onroarremove", typeof(global::RoarUI.Events.RoarRemoveEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
}
