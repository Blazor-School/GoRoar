# Comparison

**Full documentation:** https://webawesome.com/docs/components/comparison


`<wa-comparison>`

Stable [Media](https://webawesome.com/docs/components/?category=media) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Comparisons show the visual differences between two pieces of similar content using a draggable divider. Use them for before/after images, design revisions, or side-by-side previews.

This is especially useful for comparing images, but can be used for comparing any type of content (for an example of using it to compare entire UIs, check out our [theme page](https://webawesome.com/docs/themes)). For best results, use content that shares the same dimensions. The slider can be controlled by dragging or pressing the left and right arrow keys. (Tip: press shift + arrows to move the slider in larger intervals, or home + end to jump to the beginning or end.)

```html
<wa-comparison>
  <img
    slot="before"
    src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&sat=-100&bri=-5"
    alt="Grayscale version of kittens in a basket looking around."
  />
  <img
    slot="after"
    src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    alt="Color version of kittens in a basket looking around."
  />
</wa-comparison>
```

## Examples

Link to This Section

### Initial Position

Link to This Section

Use the `position` attribute to set the initial position of the slider. This is a percentage from `0` to `100`.

```html
<wa-comparison position="25">
  <img
    slot="before"
    src="https://images.unsplash.com/photo-1520903074185-8eca362b3dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
    alt="A person sitting on bricks wearing untied boots."
  />
  <img
    slot="after"
    src="https://images.unsplash.com/photo-1520640023173-50a135e35804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    alt="A person sitting on a yellow curb tying shoelaces on a boot."
  />
</wa-comparison>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `before` — The before content, often an `<img>` or `<svg>` element.
- `after` — The after content, often an `<img>` or `<svg>` element.
- `handle` — The icon used inside the handle.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `position` |  | `number` | `50` | The position of the divider as a percentage. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Events

| Event | Description |
| --- | --- |
| `change` | Emitted when the position changes. |

## Custom States

| State | Description |
| --- | --- |
| `dragging` | Applied when the comparison is being dragged. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The container that wraps the before and after content. |
| `before` | The container that wraps the before content. |
| `after` | The container that wraps the after content. |
| `divider` | The divider that separates the before and after content. |
| `handle` | The handle that the user drags to expose the after content. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--divider-width` |  | The width of the dividing line. |
| `--handle-size` |  | The size of the compare handle. |
