import { type PropertyValues } from 'lit';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import '../icon/icon.js';
/**
 * @summary Lightbox items represent the individual images and videos shown in a lightbox. Each one wraps the
 *  thumbnail that opens it.
 * @documentation https://webawesome.com/docs/components/lightbox-item
 * @status experimental
 * @since 3.15
 *
 * @dependency wa-icon
 *
 * @slot - The item's thumbnail, usually an `<img>`. Clicking it opens the lightbox at this item. Leave it empty to
 *  add an item that only appears in the lightbox. To show your own content in the lightbox, such as a video player
 *  or an embed, add it in a `<template>`.
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<wa-icon>`.
 *
 * @csspart trigger - The link that wraps the thumbnail and opens the lightbox.
 * @csspart play-button - The play button shown over a video's thumbnail.
 *
 * @cssstate active - Applied when this is the current item in an open lightbox.
 * @cssstate empty - Applied when nothing is slotted in. Empty items aren't displayed on the page.
 * @cssstate morphing - Applied while the lightbox animates between this item's thumbnail and its full-size media.
 */
export default class WaLightboxItem extends WebAwesomeElement {
    static css: import("lit").CSSResult;
    trigger: HTMLAnchorElement;
    defaultSlot: HTMLSlotElement;
    private hasOnlyDecorativeImage;
    /** The kind of media the item shows in the lightbox. Videos show a play button over their thumbnail. */
    type: 'image' | 'video';
    /**
     * The URL of the full-size image or video. The thumbnail links to it, so the item still works without JavaScript
     * and when opened in a new tab.
     */
    src: string;
    /** A set of image sources for the full-size image, in the same format as the `<img>` `srcset` attribute. */
    srcset: string;
    /**
     * The `sizes` to use with `srcset`. When omitted, the lightbox uses the viewport width, and the zoomed width once
     * the image is zoomed in.
     */
    sizes: string;
    /** Alternative text for the full-size media. Defaults to the slotted thumbnail's `alt`. */
    alt: string;
    /** A plain text caption to show with the item in the lightbox. */
    caption: string;
    /**
     * The URL of a thumbnail to use in the lightbox's thumbnail strip and as a placeholder while the full-size media
     * loads. Only needed when no `<img>` is slotted in.
     */
    thumbnail: string;
    /**
     * The intrinsic width of the full-size media in pixels. Set this with `height` so the lightbox can size the slide
     * before the media loads.
     */
    width: number;
    /** The intrinsic height of the full-size media in pixels. */
    height: number;
    firstUpdated(changedProperties: PropertyValues<typeof this>): void;
    updated(changedProperties: PropertyValues<typeof this>): void;
    /** @internal The slotted thumbnail image, if there is one. */
    get thumbnailElement(): HTMLImageElement | null;
    /** @internal The URL of the item's thumbnail, from the slotted image or the `thumbnail` attribute. */
    get thumbnailSrc(): string;
    /** @internal A template holding custom content to show in the lightbox in place of an image or video. */
    get contentTemplate(): HTMLTemplateElement | null;
    /** @internal The alt text to use in the lightbox. */
    get resolvedAlt(): string;
    /** Sets focus on the item's trigger. */
    focus(options?: FocusOptions): void;
    private handleSlotChange;
    /** Without a URL the trigger isn't a real link, so it needs the keyboard behavior of a button. */
    private handleKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-lightbox-item': WaLightboxItem;
    }
}
