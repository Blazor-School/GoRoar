# Input

**Full documentation:** https://webawesome.com/docs/components/input


`<wa-input>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Inputs collect single-line data from the user, such as text, numbers, email addresses, and passwords. They support labels, hints, validation, and prefix or suffix slots.

```html
<wa-input></wa-input>
```

This component works with standard `<form>` elements. Please refer to the section on [form controls](https://webawesome.com/docs/form-controls) to learn more about form submission and client-side validation.

## Examples

Link to This Section

### Labels

Link to This Section

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html
<wa-input label="What is your name?"></wa-input>
```

### Hint

Link to This Section

Add descriptive hint to an input with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-input label="Nickname" hint="What would you like people to call you?"></wa-input>
```

### Placeholders

Link to This Section

Use the `placeholder` attribute to add a placeholder.

```html
<wa-input placeholder="Type something"></wa-input>
```

### Clearable

Link to This Section

Add the `with-clear` attribute to add a clear button when the input has content.

```html
<wa-input placeholder="Clearable" with-clear></wa-input>
```

### Toggle Password

Link to This Section

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html
<wa-input type="password" placeholder="Password Toggle" password-toggle></wa-input>
```

### Appearance

Link to This Section

Use the `appearance` attribute to change the input's visual appearance.

```html
<wa-input placeholder="Type something" appearance="filled"></wa-input><br />
<wa-input placeholder="Type something" appearance="filled-outlined"></wa-input><br />
<wa-input placeholder="Type something" appearance="outlined"></wa-input>
```

### Disabled

Link to This Section

Use the `disabled` attribute to disable an input.

```html
<wa-input placeholder="Disabled" disabled></wa-input>
```

### Sizes

Link to This Section

Use the `size` attribute to change an input's size.

```html
<wa-input placeholder="Extra Small" size="xs"></wa-input>
<br />
<wa-input placeholder="Small" size="s"></wa-input>
<br />
<wa-input placeholder="Medium" size="m"></wa-input>
<br />
<wa-input placeholder="Large" size="l"></wa-input>
<br />
<wa-input placeholder="Extra Large" size="xl"></wa-input>
```

### Pill

Link to This Section

Use the `pill` attribute to give inputs rounded edges.

```html
<wa-input placeholder="Extra Small" size="xs" pill></wa-input>
<br />
<wa-input placeholder="Small" size="s" pill></wa-input>
<br />
<wa-input placeholder="Medium" size="m" pill></wa-input>
<br />
<wa-input placeholder="Large" size="l" pill></wa-input>
<br />
<wa-input placeholder="Extra Large" size="xl" pill></wa-input>
```

### Input Types

Link to This Section

The `type` attribute controls the type of input the browser renders.

```html
<wa-input type="email" placeholder="Email"></wa-input>
<br />
<wa-input type="number" placeholder="Number"></wa-input>
<br />
<wa-input type="date" placeholder="Date"></wa-input>
```

### Start & End Decorations

Link to This Section

Use the `start` and `end` slots to add presentational elements like [`<wa-icon>`](https://webawesome.com/docs/components/icon) within the input.

```html
<wa-input placeholder="Small" size="s">
  <wa-icon name="house" slot="start"></wa-icon>
  <wa-icon name="comment" slot="end"></wa-icon>
</wa-input>
<br />
<wa-input placeholder="Medium" size="m">
  <wa-icon name="house" slot="start"></wa-icon>
  <wa-icon name="comment" slot="end"></wa-icon>
</wa-input>
<br />
<wa-input placeholder="Large" size="l">
  <wa-icon name="house" slot="start"></wa-icon>
  <wa-icon name="comment" slot="end"></wa-icon>
</wa-input>
```

### Customizing Label Position

Link to This Section

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html
<div class="label-on-left">
  <wa-input label="Name" hint="Enter your name"></wa-input>
  <wa-input label="Email" type="email" hint="Enter your email"></wa-input>
  <wa-textarea label="Bio" hint="Tell us something about yourself"></wa-textarea>
</div>

<style>
  .label-on-left {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--wa-space-l);
    align-items: center;

    wa-input,
    wa-textarea {
      grid-column: 1 / -1;
      grid-row-end: span 2;
      display: grid;
      grid-template-columns: subgrid;
      gap: 0 var(--wa-space-l);
      align-items: center;
    }

    ::part(label) {
      text-align: right;
    }

    ::part(hint) {
      grid-column: 2;
    }
  }
</style>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `label` — The input's label. Alternatively, you can use the `label` attribute.
- `start` — An element, such as `<wa-icon>`, placed at the start of the input control.
- `end` — An element, such as `<wa-icon>`, placed at the end of the input control.
- `clear-icon` — An icon to use in lieu of the default clear icon.
- `show-password-icon` — An icon to use in lieu of the default show password icon.
- `hide-password-icon` — An icon to use in lieu of the default hide password icon.
- `hint` — Text that describes how to use the input. Alternatively, you can use the `hint` attribute.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `title` |  | `string` | `''` |  |
| `type` |  | `\| 'date' \| 'datetime-local' \| 'email' \| 'number' \| 'password' \| 'search' \| 'tel' \| 'text' \| 'time' \| 'url'` | `'text'` | The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults to `text`. |
| `value` | `defaultValue` | `string \| null` |  | The default value of the form control. Primarily used for resetting the form control. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | The input's size. |
| `appearance` |  | `'filled' \| 'outlined' \| 'filled-outlined'` | `'outlined'` | The input's visual appearance. |
| `pill` |  | `boolean` | `false` | Draws a pill-style input with rounded edges. |
| `label` |  | `string` | `''` | The input's label. If you need to display HTML, use the `label` slot instead. |
| `hint` |  | `string` | `''` | The input's hint. If you need to display HTML, use the `hint` slot instead. |
| `with-clear` | `withClear` | `boolean` | `false` | Adds a clear button when the input is not empty. |
| `placeholder` |  | `string` | `''` | Placeholder text to show as a hint when the input is empty. |
| `readonly` |  | `boolean` | `false` | Makes the input readonly. |
| `password-toggle` | `passwordToggle` | `boolean` | `false` | Adds a button to toggle the password's visibility. Only applies to password types. |
| `password-visible` | `passwordVisible` | `boolean` | `false` | Determines whether or not the password is currently visible. Only applies to password input types. |
| `without-spin-buttons` | `withoutSpinButtons` | `boolean` | `false` | Hides the browser's built-in increment/decrement spin buttons for number inputs. |
| `required` |  | `boolean` | `false` | Makes the input a required field. |
| `pattern` |  | `string` |  | A regular expression pattern to validate input against. |
| `minlength` |  | `number` |  | The minimum length of input that will be considered valid. |
| `maxlength` |  | `number` |  | The maximum length of input that will be considered valid. |
| `min` |  | `number \| string` |  | The input's minimum value. Only applies to date and number input types. |
| `max` |  | `number \| string` |  | The input's maximum value. Only applies to date and number input types. |
| `step` |  | `number \| 'any'` |  | Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is implied, allowing any numeric value. Only applies to date and number input types. |
| `autocapitalize` |  | `'off' \| 'none' \| 'on' \| 'sentences' \| 'words' \| 'characters'` |  | Controls whether and how text input is automatically capitalized as it is entered by the user. |
| `autocorrect` |  | `boolean` |  | Indicates whether the browser's autocorrect feature is on or off. When set as an attribute, use `"off"` or `"on"`. When set as a property, use `true` or `false`. |
| `autocomplete` |  | `string` |  | Specifies what permission the browser has to provide assistance in filling out form field values. Refer to [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. |
| `autofocus` |  | `boolean` |  | Indicates that the input should receive focus on page load. |
| `enterkeyhint` |  | `'enter' \| 'done' \| 'go' \| 'next' \| 'previous' \| 'search' \| 'send'` |  | Used to customize the label or icon of the Enter key on virtual keyboards. |
| `spellcheck` |  | `boolean` | `true` | Enables spell checking on the input. |
| `inputmode` |  | `'none' \| 'text' \| 'decimal' \| 'numeric' \| 'tel' \| 'search' \| 'email' \| 'url'` |  | Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual keyboard on supportive devices. |
| `with-label` | `withLabel` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup includes the label before the component hydrates on the client. |
| `with-hint` | `withHint` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes the hint before the component hydrates on the client. |
| `name` |  | `string \| null` | `null` | The name of the input, submitted as a name/value pair with form data. |
| `disabled` |  | `boolean` | `false` | Disables the form control. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `focus` | Sets focus on the input. | `options: FocusOptions` |
| `blur` | Removes focus from the input. |  |
| `select` | Selects all the text in the input. |  |
| `setSelectionRange` | Sets the start and end positions of the text selection (0-based). | `selectionStart: number, selectionEnd: number, selectionDirection: 'forward' \| 'backward' \| 'none'` |
| `setRangeText` | Replaces a range of text with a new string. | `replacement: string, start: number, end: number, selectMode: 'select' \| 'start' \| 'end' \| 'preserve'` |
| `showPicker` | Displays the browser picker for an input element (only works if the browser supports it for the input type). |  |
| `stepUp` | Increments the value of a numeric input type by the value of the step attribute. |  |
| `stepDown` | Decrements the value of a numeric input type by the value of the step attribute. |  |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `input` | Emitted when the control receives input. |
| `change` | Emitted when an alteration to the control's value is committed by the user. |
| `blur` | Emitted when the control loses focus. |
| `focus` | Emitted when the control gains focus. |
| `wa-clear` | Emitted when the clear button is activated. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Custom States

| State | Description |
| --- | --- |
| `blank` | The input is empty. |

## CSS Parts

| Part | Description |
| --- | --- |
| `label` | The label |
| `hint` | The hint's wrapper. |
| `base` | The wrapper being rendered as an input |
| `input` | The internal `<input>` control. |
| `start` | The container that wraps the `start` slot. |
| `clear-button` | The clear button. |
| `password-toggle-button` | The password toggle button. |
| `end` | The container that wraps the `end` slot. |
