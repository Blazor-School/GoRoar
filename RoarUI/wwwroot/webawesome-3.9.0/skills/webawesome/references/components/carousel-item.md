# Carousel Item

**Full documentation:** https://webawesome.com/docs/components/carousel-item


`<wa-carousel-item>`

Experimental [Media](https://webawesome.com/docs/components/?category=media) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Carousel items represent individual slides within a carousel.

This component must be used as a child of [`<wa-carousel>`](https://webawesome.com/docs/components/carousel). Please see the [Carousel docs](https://webawesome.com/docs/components/carousel) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The carousel item's content..

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--aspect-ratio` |  | The slide's aspect ratio. Inherited from the carousel by default. |
