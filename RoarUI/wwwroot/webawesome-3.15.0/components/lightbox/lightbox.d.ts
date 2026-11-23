import { type PropertyValues } from 'lit';
import '../../internal/scrollend-polyfill.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import '../icon/icon.js';
import '../lightbox-item/lightbox-item.js';
import type WaLightboxItem from '../lightbox-item/lightbox-item.js';
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
export default class WaLightbox extends WebAwesomeElement {
    static css: import("lit").CSSResult[];
    private readonly localize;
    private mutationObserver?;
    private originalTrigger;
    private announcer;
    private announceFrame;
    private isClosing;
    private morphId;
    private morphAnimations;
    private isReady;
    private hasRunSync;
    private hasSyncedItems;
    private lastItem;
    private lastIndex;
    private pitch;
    private stageWidth;
    private scrollFrame;
    private indexFromScroll;
    private isJump;
    private requestedDirection;
    private departing;
    private isProgrammaticScroll;
    private scrollOrigin;
    private visibleFrom;
    private visibleTo;
    private naturalSizes;
    private failedItems;
    private loadedItems;
    private contentContainers;
    private contentSlots;
    private contentCount;
    private scale;
    private x;
    private y;
    private activeMedia;
    private fitRect;
    private stageRect;
    private transformFrame;
    private overlapFrame;
    private gesture;
    private pointer;
    private pinch;
    private gestureScale;
    private didDrag;
    private downOnMedia;
    private lastTap;
    private tapTimeout;
    dialog: HTMLDialogElement;
    backdrop: HTMLElement;
    slides: HTMLElement;
    chrome: HTMLElement;
    ghost: HTMLElement;
    ghostImage: HTMLImageElement;
    departingImage: HTMLImageElement;
    thumbnails: HTMLElement;
    private itemList;
    private hasOpened;
    private isZoomed;
    /** Indicates whether or not the lightbox is open. Toggle this attribute to show and hide the lightbox. */
    open: boolean;
    /** The zero-based index of the current item. Set this before opening to choose which item the lightbox starts on. */
    index: number;
    /** A label that describes the lightbox to assistive devices, e.g. "Vacation photos". */
    label: string;
    /** Wraps around when navigating past the first or last item with the buttons or the keyboard. */
    loop: boolean;
    /** Shows a strip of thumbnails for jumping between items. */
    withThumbnails: boolean;
    /**
     * Hides the previous and next buttons. Swiping and the arrow keys still work. The buttons are always hidden on touch
     * screens, where swiping takes their place.
     */
    withoutNavigation: boolean;
    /** Hides the counter that shows the current item's position. */
    withoutCounter: boolean;
    /** Disables zooming and removes the zoom button. */
    withoutZoom: boolean;
    /** The lightbox's items, in document order. */
    get items(): WaLightboxItem[];
    /** The current item. Useful for download and share buttons in the `actions` slot. */
    get currentItem(): WaLightboxItem | undefined;
    /** The index, kept within the range of available items. */
    private get currentIndex();
    private get currentMedia();
    private get canZoom();
    /** The most the current image can be zoomed: its natural size, but never less than 2x. */
    private get maxZoom();
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<typeof this>): void;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    updated(changedProperties: PropertyValues<typeof this>): void;
    private syncItems;
    private syncActiveItem;
    /** Stops anything that's playing. Embeds can't be paused from outside, so the item being left reloads its own. */
    private pauseVideos;
    private getContentSlot;
    /** Copies custom content into place for the slides that are showing or about to, and clears out what's gone. */
    private syncContent;
    private addOpenListeners;
    private removeOpenListeners;
    private getDuration;
    handleOpenChange(): void;
    private show;
    private requestClose;
    /** Returns the item's thumbnail image if it's on screen, the only time it can be animated to or from. */
    private getVisibleThumbnail;
    /**
     * Animates a copy of the image between the item's thumbnail and its slide. The copy lives outside the scroll
     * container, which would clip it. Resolves when the animation ends with a function that restores everything, or
     * with null if it couldn't run and the caller should fade instead.
     */
    private morph;
    /** Captures the image and position of the slide being left, including any zoom. */
    private getDepartingImage;
    /** Pushes the new slide in from the side it's coming from. Opaque early so the backdrop never shows through. */
    private crossfade;
    /** Hides the animated copy and restores everything it was standing in for. */
    private resetMorph;
    /** Hides one item's thumbnail on the page while its image is animating or being pulled in the lightbox. */
    private setMorphingItem;
    private getPitch;
    /** The scroll position that centers a slide. Negative in RTL. */
    private getScrollLeft;
    private scrollToIndex;
    private handleScroll;
    private handleScrollEnd;
    private handleResize;
    private scrollThumbnailIntoView;
    /**
     * Notes whether the current media is wide enough at rest to sit under the previous and next buttons, so they can
     * show a backing only when they need one. Uses layout widths, which don't change while a slide is scrolling.
     */
    private updateOverlap;
    /** Measures the current media at rest. Zooming and panning are relative to this box. */
    private measure;
    private setTransform;
    /** Zooms to a scale while keeping the point under the given viewport coordinates in place. */
    private zoomAt;
    private zoomAtCenter;
    private panBy;
    /** Eases the media back within its limits after a gesture. */
    private settle;
    private resetZoom;
    private handlePointerDown;
    private handlePointerMove;
    private handlePointerUp;
    /** The browser took over the gesture (e.g. to scroll between slides), so abandon the current one. */
    private handlePointerCancel;
    /** Moves and shrinks the media with the finger while the backdrop and controls fade out. */
    private pull;
    /** The zoom button toggles between fitting the image and a comfortable zoom. */
    private handleZoomClick;
    /** Picking a thumbnail always cuts to its slide, so every thumbnail behaves the same however far away it is. */
    private handleThumbnailClick;
    private handleSlidesClick;
    private handleWheel;
    private getPinch;
    private handleTouchStart;
    private handleTouchMove;
    private handleTouchEnd;
    private handleGestureStart;
    private handleGestureChange;
    private handleDialogCancel;
    private handleDocumentKeyDown;
    private handleKeyDown;
    private handleHostClick;
    /**
     * Tells screen readers which item is showing. The region is a light DOM child slotted into the dialog because a
     * modal dialog makes the shared announcer on the body inert, and some screen readers ignore shadow DOM live regions.
     */
    private announce;
    /** Shows the next item. */
    next(): void;
    /** Shows the previous item. */
    previous(): void;
    /** Zooms in on the current image. */
    zoomIn(): void;
    /** Zooms out of the current image. */
    zoomOut(): void;
    private handleImageLoad;
    private handleMediaLoad;
    private handleMediaError;
    private renderSlide;
    private renderMedia;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-lightbox': WaLightbox;
    }
}
