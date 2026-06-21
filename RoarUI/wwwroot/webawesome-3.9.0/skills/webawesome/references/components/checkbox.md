# Checkbox

**Full documentation:** https://webawesome.com/docs/components/checkbox


`<wa-checkbox>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Checkboxes let users toggle an option on or off, or select multiple items from a list. They also support an indeterminate state for partial selections in groups.

```html
<wa-checkbox>Checkbox</wa-checkbox>
```

This component works with standard `<form>` elements. Please refer to the section on [form controls](https://webawesome.com/docs/form-controls) to learn more about form submission and client-side validation.

## Examples

Link to This Section

### Checked

Link to This Section

Use the `checked` attribute to activate the checkbox.

```html
<wa-checkbox checked>Checked</wa-checkbox>
```

The `checked` attribute is the initial value and does not reflect changes, consistent with native checkboxes. To toggle the checked state with JavaScript, use the `checked` property instead. To target checked checkboxes with CSS, use the `:state(checked)` selector.

### Indeterminate

Link to This Section

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html
<wa-checkbox indeterminate>Indeterminate</wa-checkbox>
```

### Disabled

Link to This Section

Use the `disabled` attribute to disable the checkbox.

```html
<wa-checkbox disabled>Disabled</wa-checkbox>
```

### Sizes

Link to This Section

Use the `size` attribute to change a checkbox's size.

```html
<wa-checkbox size="xs">Extra Small</wa-checkbox>
<br />
<wa-checkbox size="s">Small</wa-checkbox>
<br />
<wa-checkbox size="m">Medium</wa-checkbox>
<br />
<wa-checkbox size="l">Large</wa-checkbox>
<br />
<wa-checkbox size="xl">Extra Large</wa-checkbox>
```

### Hint

Link to This Section

Add descriptive hint to a switch with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-checkbox hint="What should the user know about the checkbox?">Label</wa-checkbox>
```

### Custom Validity

Link to This Section

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html
<form class="custom-validity">
  <wa-checkbox>Check me</wa-checkbox>
  <br />
  <wa-button appearance="filled" type="submit" variant="neutral" style="margin-top: 1rem;">Submit</wa-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('wa-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('wa-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  customElements.whenDefined('wa-checkbox').then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The checkbox's label.
- `hint` — Text that describes how to use the checkbox. Alternatively, you can use the `hint` attribute.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `title` |  | `string` | `''` |  |
| `name` |  | `string \| null` | `null` | The name of the checkbox, submitted as a name/value pair with form data. |
| `value` |  | `string \| null` |  | The value of the checkbox, submitted as a name/value pair with form data. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | The checkbox's size. |
| `disabled` |  | `boolean` | `false` | Disables the checkbox. |
| `indeterminate` |  | `boolean` | `false` | Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select all/none" behavior when associated checkboxes have a mix of checked and unchecked states. |
| `checked` | `defaultChecked` | `boolean` |  | The default value of the form control. Primarily used for resetting the form control. |
| `required` |  | `boolean` | `false` | Makes the checkbox a required field. |
| `hint` |  | `string` | `''` | The checkbox's hint. If you need to display HTML, use the `hint` slot instead. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `click` | Simulates a click on the checkbox. |  |
| `focus` | Sets focus on the checkbox. | `options: FocusOptions` |
| `blur` | Removes focus from the checkbox. |  |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `change` | Emitted when the checked state changes. |
| `blur` | Emitted when the checkbox loses focus. |
| `focus` | Emitted when the checkbox gains focus. |
| `input` | Emitted when the checkbox receives input. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Custom States

| State | Description |
| --- | --- |
| `checked` | Applied when the checkbox is checked. |
| `disabled` | Applied when the checkbox is disabled. |
| `indeterminate` | Applied when the checkbox is in an indeterminate state. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's label . |
| `control` | The square container that wraps the checkbox's checked state. |
| `checked-icon` | The checked icon, a `<wa-icon>` element. |
| `indeterminate-icon` | The indeterminate icon, a `<wa-icon>` element. |
| `label` | The container that wraps the checkbox's label. |
| `hint` | The hint's wrapper. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--checked-icon-color` |  | The color of the checked and indeterminate icons. |
| `--checked-icon-scale` |  | The size of the checked and indeterminate icons relative to the checkbox. |
