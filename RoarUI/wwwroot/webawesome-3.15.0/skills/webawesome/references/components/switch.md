# Switch

`<wa-switch>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Switches toggle a single setting on or off and apply the change immediately, without requiring a form submission.

```html
<wa-switch>Enable notifications</wa-switch>
```

This component works with standard `<form>` elements. See [form controls](https://webawesome.com/docs/form-controls) for form submission and client-side validation.

## API

### Importing

If you're using the autoloader or a hosted project, components load on demand — no manual import needed. To cherry-pick a component manually, use one of the following snippets.

\*\*CDN\*\*

Import this component directly from the CDN:

```js
import 'https://ka-f.webawesome.com/webawesome@3.15.0/components/switch/switch.js';
```

\*\*npm\*\*

After installing Web Awesome via npm, import this component:

```js
import '@awesome.me/webawesome/dist/components/switch/switch.js';
```

\*\*Self-Hosted\*\*

If you're self-hosting Web Awesome, import this component from your server:

```js
import './webawesome/dist/components/switch/switch.js';
```

\*\*React\*\*

To import this component for React 18 or below, use the following code:

```js
import WaSwitch from '@awesome.me/webawesome/dist/react/switch/index.js';
```

### Slots

Valid slot names for this component (use exactly these — any other `slot` value is
silently ignored and the element falls back to the default slot):

- `(default)` — The switch's label.
- `hint` — Text that describes how to use the switch. Alternatively, you can use the `hint` attribute.

### Attributes & Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `validators` | — | Validators are static because they have `observedAttributes`, essentially attributes to "watch" for changes. Whenever these attributes change, we want to be notified and update the validator. | `Validator[]` | `[]` |
| `name` | `name` | The name of the switch, submitted as a name/value pair with form data. | `string \| null` | `null` |
| `value` | `value` | The value of the switch, submitted as a name/value pair with form data. | `string \| null` | — |
| `size` | `size` | The switch's size. The long-form values `small`, `medium`, and `large` are deprecated; use `s`, `m`, and `l` instead. | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` |
| `disabled` | `disabled` | Disables the switch. | `boolean` | `false` |
| `checked` | — | Draws the checkbox in a checked state. | — | — |
| `defaultChecked` | `checked` | The default value of the form control. Primarily used for resetting the form control. | `boolean` | — |
| `required` | `required` | Makes the switch a required field. | `boolean` | `false` |
| `hint` | `hint` | The switch's hint. If you need to display HTML, use the `hint` slot instead. | `string` | `''` |
| `withHint` | `with-hint` | Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes the hint before the component hydrates on the client. | `boolean` | `false` |
| `form` | — | By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you to place the form control outside of a form and associate it with the form that has this `id`. The form must be in the same document or shadow root for this to work. | `HTMLFormElement \| null` | — |
| `validationTarget` | — | Override this to change where constraint validation popups are anchored. | `undefined \| HTMLElement` | — |

### Methods

| Name | Description | Arguments |
| --- | --- | --- |
| `click()` | Simulates a click on the switch. | — |
| `focus()` | Sets focus on the switch. | `options: FocusOptions` |
| `blur()` | Removes focus from the switch. | — |
| `setCustomValidity()` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback()` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \\| File \\| FormData \\| null, reason: 'autocomplete' \\| 'restore'` |
| `resetValidity()` | Reset validity is a way of removing manual custom errors and native validation. | — |

### Events

| Name | Description |
| --- | --- |
| `change` | Emitted when the control's checked state changes. |
| `input` | Emitted when the control receives input. |
| `blur` | Emitted when the control loses focus. |
| `focus` | Emitted when the control gains focus. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

### CSS Custom Properties

| Name | Description | Default |
| --- | --- | --- |
| `--width` | The width of the switch. | — |
| `--height` | The height of the switch. | — |
| `--thumb-size` | The size of the thumb. | — |

### CSS Parts

| Name | Description | CSS selector |
| --- | --- | --- |
| `switch` | The component's outer wrapper. | `::part(switch)` |
| `control` | The control that houses the switch's thumb. | `::part(control)` |
| `thumb` | The switch's thumb. | `::part(thumb)` |
| `label` | The switch's label. | `::part(label)` |
| `hint` | The hint's wrapper. | `::part(hint)` |
| `base` | Deprecated. Use the `switch` part instead. | `::part(base)` |

## Examples

### Label

Add label text as the switch's default content. For labels that contain HTML, slot the markup in directly.

```html
<wa-switch>Subscribe to the newsletter</wa-switch>
```

### Hint

Add descriptive hint to a switch with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-switch hint="You can change this at any time in settings.">Email me about new releases</wa-switch>
```

### Initial Value

Use the `checked` attribute to activate the switch.

```html
<wa-switch checked>Remember this device</wa-switch>
```

**`checked` sets the initial value, not the current state.**  
Consistent with native checkboxes, it doesn't reflect later changes. To toggle the checked state with JavaScript, use the `checked` property instead. To target checked switches with CSS, use the `:state(checked)` selector.

### Disabled

Use the `disabled` attribute to disable the switch.

```html
<wa-switch disabled>Sync over cellular</wa-switch>
```

### Size

Use the `size` attribute to change a switch's size.

```html
<div class="wa-stack">
  <wa-switch size="xs">Extra Small</wa-switch>
  <wa-switch size="s">Small</wa-switch>
  <wa-switch size="m">Medium</wa-switch>
  <wa-switch size="l">Large</wa-switch>
  <wa-switch size="xl">Extra Large</wa-switch>
</div>
```

### Custom Properties

Use the available custom properties to change how the switch is styled.

```html
<wa-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</wa-switch>
```
