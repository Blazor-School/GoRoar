# Switch

**Full documentation:** https://webawesome.com/docs/components/switch


`<wa-switch>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Switches toggle a single setting on or off and apply the change immediately, without requiring a form submission.

```html
<wa-switch>Switch</wa-switch>
```

This component works with standard `<form>` elements. Please refer to the section on [form controls](https://webawesome.com/docs/form-controls) to learn more about form submission and client-side validation.

## Examples

Link to This Section

### Checked

Link to This Section

Use the `checked` attribute to activate the switch.

```html
<wa-switch checked>Checked</wa-switch>
```

The `checked` attribute is the initial value and does not reflect changes, consistent with native checkboxes. To toggle the checked state with JavaScript, use the `checked` property instead. To target checked switches with CSS, use the `:state(checked)` selector.

### Disabled

Link to This Section

Use the `disabled` attribute to disable the switch.

```html
<wa-switch disabled>Disabled</wa-switch>
```

### Sizes

Link to This Section

Use the `size` attribute to change a switch's size.

```html
<wa-switch size="xs">Extra Small</wa-switch>
<br />
<wa-switch size="s">Small</wa-switch>
<br />
<wa-switch size="m">Medium</wa-switch>
<br />
<wa-switch size="l">Large</wa-switch>
<br />
<wa-switch size="xl">Extra Large</wa-switch>
```

### Hint

Link to This Section

Add descriptive hint to a switch with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-switch hint="What should the user know about the switch?">Label</wa-switch>
```

### Custom Styles

Link to This Section

Use the available custom properties to change how the switch is styled.

```html
<wa-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</wa-switch>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The switch's label.
- `hint` — Text that describes how to use the switch. Alternatively, you can use the `hint` attribute.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `title` |  | `string` | `''` |  |
| `name` |  | `string \| null` | `null` | The name of the switch, submitted as a name/value pair with form data. |
| `value` |  | `string \| null` |  | The value of the switch, submitted as a name/value pair with form data. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | The switch's size. |
| `disabled` |  | `boolean` | `false` | Disables the switch. |
| `checked` | `defaultChecked` | `boolean` |  | The default value of the form control. Primarily used for resetting the form control. |
| `required` |  | `boolean` | `false` | Makes the switch a required field. |
| `hint` |  | `string` | `''` | The switch's hint. If you need to display HTML, use the `hint` slot instead. |
| `with-hint` | `withHint` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes the hint before the component hydrates on the client. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `click` | Simulates a click on the switch. |  |
| `focus` | Sets focus on the switch. | `options: FocusOptions` |
| `blur` | Removes focus from the switch. |  |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `change` | Emitted when the control's checked state changes. |
| `input` | Emitted when the control receives input. |
| `blur` | Emitted when the control loses focus. |
| `focus` | Emitted when the control gains focus. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `control` | The control that houses the switch's thumb. |
| `thumb` | The switch's thumb. |
| `label` | The switch's label. |
| `hint` | The hint's wrapper. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--width` |  | The width of the switch. |
| `--height` |  | The height of the switch. |
| `--thumb-size` |  | The size of the thumb. |
