# Animated Image

**Full documentation:** https://webawesome.com/docs/components/animated-image


`<wa-animated-image>`

Stable [Media](https://webawesome.com/docs/components/?category=media) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Animated images display GIFs and WEBPs with controls to play and pause them on demand. Use them when you want motion but need to give users control over when it plays.

```html
<wa-animated-image
  src="https://shoelace.style/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
></wa-animated-image>
```

This component uses `<canvas>` to draw freeze frames, so images are subject to [cross-origin restrictions](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).

## Examples

Link to This Section

### WEBP Images

Link to This Section

Both GIF and WEBP images are supported.

```html
<wa-animated-image
  src="https://shoelace.style/assets/images/tie.webp"
  alt="Animation of a shoe being tied"
></wa-animated-image>
```

### Setting a Width and Height

Link to This Section

To set a custom size, apply a width and/or height to the host element.

```html
<wa-animated-image
  src="https://shoelace.style/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  style="width: 150px; height: 200px;"
>
</wa-animated-image>
```

### Customizing the Control Box

Link to This Section

You can change the appearance and location of the control box by targeting the `control-box` part in your styles.

```html
<wa-animated-image
  src="https://shoelace.style/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  class="animated-image-custom-control-box"
></wa-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
</style>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `play-icon` — Optional play icon to use instead of the default. Works best with `<wa-icon>`.
- `pause-icon` — Optional pause icon to use instead of the default. Works best with `<wa-icon>`.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `src` |  | `string` |  | The path to the image to load. |
| `alt` |  | `string` |  | A description of the image used by assistive devices. |
| `play` |  | `boolean` |  | Plays the animation. When this attribute is remove, the animation will pause. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Events

| Event | Description |
| --- | --- |
| `wa-load` | Emitted when the image loads successfully. |
| `wa-error` | Emitted when the image fails to load. |

## CSS Parts

| Part | Description |
| --- | --- |
| `control-box` | The container that surrounds the pause/play icons and provides their background. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--control-box-size` |  | The size of the icon box. |
| `--icon-size` |  | The size of the play/pause icons. |
