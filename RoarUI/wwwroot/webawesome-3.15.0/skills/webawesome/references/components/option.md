# Option

`<wa-option>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Options represent the individual choices inside a select or similar form control. Each option holds a value and the label shown to the user.

This component must be used as a child of [`<wa-select>`](https://webawesome.com/docs/components/select). Please see the [Select docs](https://webawesome.com/docs/components/select) to see examples of this component in action.

```html
<!-- select is an overlay that won't render on a static stage, so the options show among dimmed siblings. -->
<div style="display: flex; flex-direction: column;">
  <wa-option><wa-icon slot="start" name="mug-hot"></wa-icon>Espresso</wa-option>
  <wa-option data-anatomy-subject="true"><wa-icon slot="start" name="star"></wa-icon>Cortado</wa-option>
  <wa-option><wa-icon slot="start" name="mug-saucer"></wa-icon>Cappuccino</wa-option>
</div>
```

## API

### Importing

If you're using the autoloader or a hosted project, components load on demand — no manual import needed. To cherry-pick a component manually, use one of the following snippets.

\*\*CDN\*\*

Import this component directly from the CDN:

```js
import 'https://ka-f.webawesome.com/webawesome@3.15.0/components/option/option.js';
```

\*\*npm\*\*

After installing Web Awesome via npm, import this component:

```js
import '@awesome.me/webawesome/dist/components/option/option.js';
```

\*\*Self-Hosted\*\*

If you're self-hosting Web Awesome, import this component from your server:

```js
import './webawesome/dist/components/option/option.js';
```

\*\*React\*\*

To import this component for React 18 or below, use the following code:

```js
import WaOption from '@awesome.me/webawesome/dist/react/option/index.js';
```

### Slots

Valid slot names for this component (use exactly these — any other `slot` value is
silently ignored and the element falls back to the default slot):

- `(default)` — The option's label.
- `start` — An element, such as `<wa-icon>`, placed before the label.
- `end` — An element, such as `<wa-icon>`, placed after the label.

### Attributes & Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `value` | `value` | The option's value. When selected, the containing form control will receive this value. The value must be unique from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing multiple values. | `string` | `''` |
| `disabled` | `disabled` | Draws the option in a disabled state, preventing selection. | `boolean` | `false` |
| `defaultSelected` | `selected` | Selects an option initially. | `boolean` | `false` |
| `label` | `label` | The option’s plain text label. Usually automatically generated, but can be useful to provide manually for cases involving complex content. | `string` | — |
| `defaultLabel` | — | The default label, generated from the element contents. Will be equal to `label` in most cases. | `string` | — |

### CSS Custom Properties

| Name | Description | Default |
| --- | --- | --- |
| `--current-text-color` | The text color of the current (highlighted) option, paired with `--wa-form-control-activated-color`. | — |

### Custom States

| Name | Description | CSS selector |
| --- | --- | --- |
| `current` | The user has keyed into the option, but hasn't selected it yet (shows a highlight) | `:state(current)` |
| `selected` | The option is selected and has aria-selected="true" | `:state(selected)` |
| `disabled` | Applied when the option is disabled | `:state(disabled)` |
| `hover` | Like `:hover` but works while dragging in Safari | `:state(hover)` |

### CSS Parts

| Name | Description | CSS selector |
| --- | --- | --- |
| `checked-icon` | The checked icon, a `<wa-icon>` element. | `::part(checked-icon)` |
| `label` | The option's label. | `::part(label)` |
| `start` | The container that wraps the `start` slot. | `::part(start)` |
| `end` | The container that wraps the `end` slot. | `::part(end)` |

### Dependencies

This component automatically imports the following elements. Sub-dependencies, if any exist, will also be included in this list.

-   [`<wa-icon>`](https://webawesome.com/docs/components/icon)