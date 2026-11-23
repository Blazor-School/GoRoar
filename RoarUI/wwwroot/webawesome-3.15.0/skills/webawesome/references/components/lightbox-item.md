# Lightbox Item

`<wa-lightbox-item>`

Experimental [Media](https://webawesome.com/docs/components/?category=media) [Since 3.15](https://webawesome.com/docs/resources/changelog#wa_3150)

Lightbox items represent the individual images and videos shown in a lightbox. Each one wraps the thumbnail that opens it.

This component must be used as a child of [`<wa-lightbox>`](https://webawesome.com/docs/components/lightbox). Please see the [Lightbox docs](https://webawesome.com/docs/components/lightbox) to see examples of this component in action.

## API

### Importing

If you're using the autoloader or a hosted project, components load on demand — no manual import needed. To cherry-pick a component manually, use one of the following snippets.

\*\*CDN\*\*

Import this component directly from the CDN:

```js
import 'https://ka-f.webawesome.com/webawesome@3.15.0/components/lightbox-item/lightbox-item.js';
```

\*\*npm\*\*

After installing Web Awesome via npm, import this component:

```js
import '@awesome.me/webawesome/dist/components/lightbox-item/lightbox-item.js';
```

\*\*Self-Hosted\*\*

If you're self-hosting Web Awesome, import this component from your server:

```js
import './webawesome/dist/components/lightbox-item/lightbox-item.js';
```

\*\*React\*\*

To import this component for React 18 or below, use the following code:

```js
import WaLightboxItem from '@awesome.me/webawesome/dist/react/lightbox-item/index.js';
```

### Slots

Valid slot names for this component (use exactly these — any other `slot` value is
silently ignored and the element falls back to the default slot):

- `(default)` — The item's thumbnail, usually an `<img>`. Clicking it opens the lightbox at this item. Leave it empty to add an item that only appears in the lightbox. To show your own content in the lightbox, such as a video player or an embed, add it in a `<template>`.
- `play-icon` — Optional play icon to use instead of the default. Works best with `<wa-icon>`.

### Attributes & Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `type` | `type` | The kind of media the item shows in the lightbox. Videos show a play button over their thumbnail. | `'image' \| 'video'` | `'image'` |
| `src` | `src` | The URL of the full-size image or video. The thumbnail links to it, so the item still works without JavaScript and when opened in a new tab. | `string` | `''` |
| `srcset` | `srcset` | A set of image sources for the full-size image, in the same format as the `<img>` `srcset` attribute. | `string` | `''` |
| `sizes` | `sizes` | The `sizes` to use with `srcset`. When omitted, the lightbox uses the viewport width, and the zoomed width once the image is zoomed in. | `string` | `''` |
| `alt` | `alt` | Alternative text for the full-size media. Defaults to the slotted thumbnail's `alt`. | `string` | `''` |
| `caption` | `caption` | A plain text caption to show with the item in the lightbox. | `string` | `''` |
| `thumbnail` | `thumbnail` | The URL of a thumbnail to use in the lightbox's thumbnail strip and as a placeholder while the full-size media loads. Only needed when no `<img>` is slotted in. | `string` | `''` |
| `width` | `width` | The intrinsic width of the full-size media in pixels. Set this with `height` so the lightbox can size the slide before the media loads. | `number` | — |
| `height` | `height` | The intrinsic height of the full-size media in pixels. | `number` | — |

### Methods

| Name | Description | Arguments |
| --- | --- | --- |
| `focus()` | Sets focus on the item's trigger. | `options: FocusOptions` |

### Custom States

| Name | Description | CSS selector |
| --- | --- | --- |
| `active` | Applied when this is the current item in an open lightbox. | `:state(active)` |
| `empty` | Applied when nothing is slotted in. Empty items aren't displayed on the page. | `:state(empty)` |
| `morphing` | Applied while the lightbox animates between this item's thumbnail and its full-size media. | `:state(morphing)` |

### CSS Parts

| Name | Description | CSS selector |
| --- | --- | --- |
| `trigger` | The link that wraps the thumbnail and opens the lightbox. | `::part(trigger)` |
| `play-button` | The play button shown over a video's thumbnail. | `::part(play-button)` |

### Dependencies

This component automatically imports the following elements. Sub-dependencies, if any exist, will also be included in this list.

-   [`<wa-icon>`](https://webawesome.com/docs/components/icon)