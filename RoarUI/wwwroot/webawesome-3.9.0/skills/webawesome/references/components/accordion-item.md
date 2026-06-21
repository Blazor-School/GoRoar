# Accordion Item

**Full documentation:** https://webawesome.com/docs/components/accordion-item


`<wa-accordion-item>`

Experimental [Layout](https://webawesome.com/docs/components/?category=layout) [Since 1.0](https://webawesome.com/docs/resources/changelog#wa_100)

Accordion items are used inside [`<wa-accordion>`](https://webawesome.com/docs/components/accordion) to create expandable sections with accessible headers.

This component must be used as a child of [`<wa-accordion>`](https://webawesome.com/docs/components/accordion). Please see the [Accordion docs](https://webawesome.com/docs/components/accordion) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The accordion item's body content.
- `label` — The accordion item's label. Alternatively, use the `label` attribute.
- `icon` — Optional expand/collapse icon. Works best with `<wa-icon>`.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `label` |  | `string` | `''` | The text label shown in the header. If you need HTML, use the `label` slot instead. |
| `expanded` |  | `boolean` | `false` | Expands the accordion item. |
| `disabled` |  | `boolean` | `false` | Disables the accordion item so it can't be toggled. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `expand` | Expands the accordion item with animation. |  |
| `collapse` | Collapses the accordion item with animation. |  |
| `toggle` | Toggles the accordion item's expanded state. |  |
| `focus` | Focuses the accordion item's trigger button. | `options: FocusOptions` |

## Custom States

| State | Description |
| --- | --- |
| `animating` | Applied while the panel is animating. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `heading` | The heading element wrapping the trigger button. Omitted when `heading-level="none"`. |
| `button` | The trigger button that toggles the panel. |
| `label` | The container that wraps the label. |
| `icon` | The container that wraps the expand/collapse icon. |
| `panel` | The panel that contains the item's content. |
| `content` | The content slot inside the panel. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--spacing` | `var(--wa-space-m)` | The amount of space around and between the item's header and content. |
| `--show-duration` | `var(--wa-transition-normal)` | The duration of the expand animation. |
| `--hide-duration` | `var(--wa-transition-normal)` | The duration of the collapse animation. |
| `--easing` | `var(--wa-transition-easing)` | The easing of the expand/collapse animation. |
