# Zoomable Frame

**Full documentation:** https://webawesome.com/docs/components/zoomable-frame


`<wa-zoomable-frame>`

Stable [Media](https://webawesome.com/docs/components/?category=media) [Since 3.0](https://webawesome.com/docs/resources/changelog#wa_300)

Zoomable frames embed iframe content with built-in controls for zooming, panning, and managing interaction.

```html
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5"> </wa-zoomable-frame>
```

## Examples

Link to This Section

### Loading external content

Link to This Section

Use the `src` attribute to embed external websites or resources. The URL must be accessible, and cross-origin restrictions may apply due to the Same-Origin Policy, potentially limiting access to the iframe's content.

```html
<wa-zoomable-frame src="https://example.com/"> </wa-zoomable-frame>
```

The zoomable frame fills 100% width by default with a 16:9 aspect ratio. Customize this using the `aspect-ratio` CSS property.

```html
<wa-zoomable-frame src="https://example.com/" style="aspect-ratio: 4/3;"> </wa-zoomable-frame>
```

Use the `srcdoc` attribute or property to display custom HTML content directly within the iframe, perfect for rendering inline content without external resources.

```html
<wa-zoomable-frame srcdoc="<html><body><h1>Hello, World!</h1><p>This is inline content.</p></body></html>">
</wa-zoomable-frame>
```

When both `src` and `srcdoc` are specified, `srcdoc` takes precedence.

### Controlling zoom behavior

Link to This Section

Set the `zoom` attribute to control the frame's zoom level. Use `1` for 100%, `2` for 200%, `0.5` for 50%, and so on.

Define specific zoom increments with the `zoom-levels` attribute using space-separated percentages and decimal values like `zoom-levels="0.25 0.5 75% 100%"`.

```html
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5" zoom-levels="50% 0.75 100%"> </wa-zoomable-frame>
```

### Hiding zoom controls

Link to This Section

Add the `without-controls` attribute to hide the zoom control interface from the frame.

```html
<wa-zoomable-frame src="/examples/themes/showcase" without-controls zoom="0.5"> </wa-zoomable-frame>
```

### Preventing user interaction

Link to This Section

Apply the `without-interaction` attribute to make the frame non-interactive. Note that this prevents keyboard navigation into the frame, which may impact accessibility for some users.

```html
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5" without-interaction> </wa-zoomable-frame>
```

### Enabling theme sync

Link to This Section

By default, the frame does not sync theme classes into the iframe. Add the `with-theme-sync` attribute to mirror the host page's light/dark mode and [theme selector classes](https://webawesome.com/docs/theming-overview) (such as `wa-theme-*`, `wa-brand-*`, and `wa-palette-*`) into the iframe document. This is useful when the iframe renders Web Awesome styles that should match the host page's theme.

```html
<wa-zoomable-frame src="/examples/themes/showcase" zoom="0.5" with-theme-sync> </wa-zoomable-frame>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `zoom-in-icon` — The slot that contains the zoom in icon.
- `zoom-out-icon` — The slot that contains the zoom out icon.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `src` |  | `string` |  | The URL of the content to display. |
| `srcdoc` |  | `string` |  | Inline HTML to display. |
| `allowfullscreen` |  | `boolean` | `false` | Allows fullscreen mode. |
| `loading` |  | `'eager' \| 'lazy'` | `'eager'` | Controls iframe loading behavior. |
| `referrerpolicy` |  | `string` |  | Controls referrer information. |
| `sandbox` |  | `string` |  | Security restrictions for the iframe. |
| `zoom` |  | `number` | `1` | The current zoom of the frame, e.g. 0 = 0% and 1 = 100%. |
| `zoom-levels` | `zoomLevels` | `string` | `'25% 50% 75% 100% 125% 150% 175% 200%'` | The zoom levels to step through when using zoom controls. This does not restrict programmatic changes to the zoom. |
| `without-controls` | `withoutControls` | `boolean` | `false` | Removes the zoom controls. |
| `without-interaction` | `withoutInteraction` | `boolean` | `false` | Disables interaction when present. |
| `with-theme-sync` | `withThemeSync` | `boolean` | `false` | Enables automatic theme syncing (light/dark mode and theme selector classes) from the host document to the iframe. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `zoomIn` | Zooms in to the next available zoom level. |  |
| `zoomOut` | Zooms out to the previous available zoom level. |  |

## Events

| Event | Description |
| --- | --- |
| `load` | Emitted when the internal iframe when it finishes loading. |
| `error` | Emitted from the internal iframe when it fails to load. |

## CSS Parts

| Part | Description |
| --- | --- |
| `iframe` | The internal `<iframe>` element. |
| `controls` | The container that surrounds zoom control buttons. |
| `zoom-in-button` | The zoom in button. |
| `zoom-out-button` | The zoom out button. |
