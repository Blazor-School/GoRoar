# Step

`<wa-step>`

Stable [Navigation](https://webawesome.com/docs/components/?category=navigation) [Since 3.14](https://webawesome.com/docs/resources/changelog#wa_3140)

Steps represent a single stage inside a [`<wa-stepper>`](https://webawesome.com/docs/components/stepper), showing its position, label, and status.

This component must be used as a child of [`<wa-stepper>`](https://webawesome.com/docs/components/stepper). Please see the [Stepper docs](https://webawesome.com/docs/components/stepper) to see examples of this component in action.

```html
<wa-stepper active="shipping">
  <wa-step name="cart" completed>Cart</wa-step>
  <wa-step name="shipping" data-anatomy-subject="true">
    Shipping
    <span slot="description">Enter your address</span>
  </wa-step>
  <wa-step name="payment">Payment</wa-step>
</wa-stepper>
```

## API

### Importing

If you're using the autoloader or a hosted project, components load on demand — no manual import needed. To cherry-pick a component manually, use one of the following snippets.

\*\*CDN\*\*

Import this component directly from the CDN:

```js
import 'https://ka-f.webawesome.com/webawesome@3.15.0/components/step/step.js';
```

\*\*npm\*\*

After installing Web Awesome via npm, import this component:

```js
import '@awesome.me/webawesome/dist/components/step/step.js';
```

\*\*Self-Hosted\*\*

If you're self-hosting Web Awesome, import this component from your server:

```js
import './webawesome/dist/components/step/step.js';
```

\*\*React\*\*

To import this component for React 18 or below, use the following code:

```js
import WaStep from '@awesome.me/webawesome/dist/react/step/index.js';
```

### Slots

Valid slot names for this component (use exactly these — any other `slot` value is
silently ignored and the element falls back to the default slot):

- `(default)` — The step's label.
- `description` — Optional text shown under the label.
- `icon` — An element, such as `<wa-icon>`, that replaces the step number, checkmark, or loading indicator.

### Attributes & Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `name` | `name` | Identifies the step. Matched against the stepper's `active` attribute and used in events. | `string` | `''` |
| `completed` | `completed` | Marks the step done. Shows a checkmark instead of the step number. | `boolean` | `false` |
| `loading` | `loading` | Shows a loading indicator instead of the step number, e.g. while an async transition is in progress. | `boolean` | `false` |
| `disabled` | `disabled` | Makes the step non-interactive. It can't be clicked or reached with `next()`/`goTo()`, and it renders as a disabled button when the stepper is `clickable`. | `boolean` | `false` |
| `variant` | `variant` | Colors the step's marker with a semantic color. Upcoming `brand` steps keep a neutral outline so a default stepper reads quietly. The color is cosmetic; pair it with an icon in the `icon` slot and a clear label when a step needs to read as failed or flagged. | `'neutral' \| 'brand' \| 'success' \| 'warning' \| 'danger'` | `'brand'` |
| `attention` | `attention` | Adds an animation to the step's marker to draw attention to it, e.g. the step the user should do next. | `'none' \| 'pulse' \| 'bounce'` | `'none'` |
| `withDescription` | `with-description` | Only required for SSR. Set to `true` if you're slotting in a `description` element, so the server-rendered markup includes it before the component hydrates on the client. | `boolean` | `false` |
| `active` | `active` | Draws the step as the stepper's current step. The parent `<wa-stepper>` sets this from its own `active` attribute, so you only need to set it yourself for SSR. | `boolean` | `false` |

### CSS Custom Properties

| Name | Description | Default |
| --- | --- | --- |
| `--pulse-color` | The color of the marker's pulse effect when using `attention="pulse"`. Defaults to the step's accent color. | — |

### Custom States

| Name | Description | CSS selector |
| --- | --- | --- |
| `active` | Applied when this is the parent stepper's current step. | `:state(active)` |
| `completed` | Mirrors the `completed` attribute. | `:state(completed)` |
| `loading` | Mirrors the `loading` attribute. | `:state(loading)` |
| `disabled` | Mirrors the `disabled` attribute. | `:state(disabled)` |
| `locked` | Applied by the parent stepper when `linear` is set and this step can't be reached yet, i.e. it comes after the first incomplete step. | `:state(locked)` |
| `clickable` | Applied by the parent stepper when its `clickable` attribute is set, allowing this step to be clicked or activated (Enter/Space) directly. | `:state(clickable)` |

### CSS Parts

| Name | Description | CSS selector |
| --- | --- | --- |
| `step` | The component's outer wrapper. | `::part(step)` |
| `connector` | The line connecting this step to its neighbors. Each step draws the half leading in and the half leading out, and both carry this part name. | `::part(connector)` |
| `button` | The `<button>` wrapping the marker and content. Only rendered when the parent stepper is `clickable`; otherwise the same wrapper is a plain, non-focusable element. | `::part(button)` |
| `marker` | The circular marker that shows the step's number, checkmark, or loading indicator. | `::part(marker)` |
| `spinner` | The spinner shown in the marker while the step is `loading`. | `::part(spinner)` |
| `content` | The wrapper around the label, status text, and description. | `::part(content)` |
| `label` | The step's label. | `::part(label)` |
| `status` | Visually hidden text that tells assistive technology whether the step is completed, not completed, or locked. | `::part(status)` |
| `description` | The step's description. | `::part(description)` |

### Dependencies

This component automatically imports the following elements. Sub-dependencies, if any exist, will also be included in this list.

-   [`<wa-icon>`](https://webawesome.com/docs/components/icon)
-   [`<wa-spinner>`](https://webawesome.com/docs/components/spinner)