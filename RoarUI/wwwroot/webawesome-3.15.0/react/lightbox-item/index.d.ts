import Component from '../../components/lightbox-item/lightbox-item.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
