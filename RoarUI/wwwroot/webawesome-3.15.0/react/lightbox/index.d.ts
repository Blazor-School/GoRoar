import Component from '../../components/lightbox/lightbox.js';
import { type EventName } from '@lit/react';
import type { WaAfterHideEvent, WaAfterShowEvent, WaHideEvent, WaItemChangeEvent, WaShowEvent } from '../../events/events.js';
export type { WaAfterHideEvent, WaAfterShowEvent, WaHideEvent, WaItemChangeEvent, WaShowEvent, } from '../../events/events.js';
/**
 * @summary Lightboxes show images and videos in a full-screen viewer that opens from their thumbnails. Use them for
 *  photo galleries, product images, or any media that deserves a closer look.
 * @documentation https://webawesome.com/docs/components/lightbox
 * @status experimental
 * @since 3.15
 *
 * @dependency wa-icon
 * @dependency wa-lightbox-item
 *
 * @slot - One or more `<wa-lightbox-item>` elements, along with any markup you need to lay them out.
 * @slot actions - Extra buttons to show in the lightbox's toolbar, such as download or share. Works best with
 *  `<wa-button>`, which is styled to match the built-in controls.
 * @slot close-icon - Optional close icon to use instead of the default. Works best with `<wa-icon>`.
 * @slot previous-icon - Optional previous icon to use instead of the default. Works best with `<wa-icon>`.
 * @slot next-icon - Optional next icon to use instead of the default. Works best with `<wa-icon>`.
 * @slot zoom-in-icon - Optional icon to show on the zoom button when the image can be zoomed in. Works best with
 *  `<wa-icon>`.
 * @slot zoom-out-icon - Optional icon to show on the zoom button when the image is zoomed in. Works best with
 *  `<wa-icon>`.
 *
 * @event wa-show - Emitted when the lightbox opens. Calling `event.preventDefault()` will prevent it from opening.
 * @event wa-after-show - Emitted after the lightbox opens and all animations are complete.
 * @event {{ source: Element }} wa-hide - Emitted when the lightbox is requested to close. Calling
 *  `event.preventDefault()` will prevent the lightbox from closing. You can inspect `event.detail.source` to see
 *  which element caused the lightbox to close. If the source is the lightbox's internal dialog, the user has pressed
 *  [[Escape]], clicked the backdrop, pulled the media up or down, or the lightbox has been closed programmatically.
 * @event wa-after-hide - Emitted after the lightbox closes and all animations are complete.
 * @event {{ index: number, previousIndex: number, item: WaLightboxItem, previousItem: WaLightboxItem | null }} wa-item-change
 *  - Emitted when the current item changes.
 *
 * @csspart dialog - The lightbox's internal `<dialog>` element.
 * @csspart backdrop - The backdrop behind the media.
 * @csspart scroll-container - The scroll container that holds the slides.
 * @csspart slide - A slide.
 * @csspart image - The full-size image in a slide.
 * @csspart video - The video in a slide.
 * @csspart toolbar - The toolbar at the top of the lightbox.
 * @csspart counter - The "3 of 12" counter.
 * @csspart zoom-button - The button that zooms the current image in and out.
 * @csspart close-button - The close button.
 * @csspart navigation-button - The previous and next buttons.
 * @csspart navigation-button-previous - Applied to the previous button.
 * @csspart navigation-button-next - Applied to the next button.
 * @csspart caption - The current item's caption.
 * @csspart thumbnails - The thumbnail strip.
 * @csspart thumbnail - A thumbnail in the strip.
 * @csspart thumbnail-active - Applied to the current item's thumbnail.
 *
 * @cssproperty [--backdrop-color=var(--wa-color-overlay-media)] - The color of the backdrop.
 * @cssproperty [--backdrop-filter=blur(1rem)] - A filter to apply to the backdrop behind the lightbox.
 * @cssproperty [--media-border-radius=0px] - The border radius of the media in each slide.
 * @cssproperty [--controls-color=var(--wa-color-neutral-95)] - The text and icon color used for the controls,
 *  counter, and caption.
 * @cssproperty [--controls-background=rgb(0 0 0 / 0.5)] - The background of the controls when the media is behind
 *  them.
 * @cssproperty [--show-duration=var(--wa-transition-slow)] - The animation duration when showing the lightbox.
 * @cssproperty [--hide-duration=var(--wa-transition-slow)] - The animation duration when hiding the lightbox.
 * @cssproperty [--spacing=clamp(var(--wa-space-m), 3vw, var(--wa-space-2xl))] - The space around the media, the
 *  caption, and the lightbox's controls. Grows with the viewport by default.
 * @cssproperty [--slide-gap=var(--wa-space-xl)] - The space between slides.
 * @cssproperty [--thumbnail-size=3.5rem] - The size of each thumbnail in the strip.
 *
 * @cssstate open - Applied when the lightbox is open.
 * @cssstate zoomed - Applied when the current image is zoomed in.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onWaShow: EventName<WaShowEvent>;
    onWaAfterShow: EventName<WaAfterShowEvent>;
    onWaHide: EventName<WaHideEvent>;
    onWaAfterHide: EventName<WaAfterHideEvent>;
    onWaItemChange: EventName<WaItemChangeEvent>;
}>;
export default reactWrapper;
