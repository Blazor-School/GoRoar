# Textarea

**Full documentation:** https://webawesome.com/docs/components/textarea


`<wa-textarea>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Textareas collect multi-line text input from the user, with optional resizing and character counting.

```html
<wa-textarea label="Type somethin', will ya"></wa-textarea>
```

This component works with standard `<form>` elements. Please refer to the section on [form controls](https://webawesome.com/docs/form-controls) to learn more about form submission and client-side validation.

## Examples

Link to This Section

### Labels

Link to This Section

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html
<wa-textarea label="Comments"></wa-textarea>
```

### Hint

Link to This Section

Add descriptive hint to a textarea with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-textarea label="Feedback" hint="Please tell us what you think."> </wa-textarea>
```

### Rows

Link to This Section

Use the `rows` attribute to change the number of text rows that get shown.

```html
<wa-textarea rows="2"></wa-textarea>
```

### Placeholders

Link to This Section

Use the `placeholder` attribute to add a placeholder.

```html
<wa-textarea placeholder="Type something"></wa-textarea>
```

### Appearance

Link to This Section

Use the `appearance` attribute to change the textarea's visual appearance.

```html
<wa-textarea placeholder="Type something" appearance="filled"></wa-textarea><br />
<wa-textarea placeholder="Type something" appearance="filled-outlined"></wa-textarea><br />
<wa-textarea placeholder="Type something" appearance="outlined"></wa-textarea>
```

### Disabled

Link to This Section

Use the `disabled` attribute to disable a textarea.

```html
<wa-textarea placeholder="Textarea" disabled></wa-textarea>
```

### Value

Link to This Section

Use the `value` attribute to set an initial value.

```html
<wa-textarea value="Write something awesome!"></wa-textarea>
```

### Sizes

Link to This Section

Use the `size` attribute to change a textarea's size.

```html
<wa-textarea placeholder="Extra Small" size="xs"></wa-textarea>
<br />
<wa-textarea placeholder="Small" size="s"></wa-textarea>
<br />
<wa-textarea placeholder="Medium" size="m"></wa-textarea>
<br />
<wa-textarea placeholder="Large" size="l"></wa-textarea>
<br />
<wa-textarea placeholder="Extra Large" size="xl"></wa-textarea>
```

### Prevent Resizing

Link to This Section

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html
<wa-textarea resize="none"></wa-textarea>
```

### Expand with Content

Link to This Section

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html
<wa-textarea resize="auto"></wa-textarea>
```

### Resize horizontal

Link to This Section

Textareas can be made to resize horizontally when `resize` is set to `"horizontal"`

```html
<wa-textarea resize="horizontal"></wa-textarea>
```

### Resize both

Link to This Section

Textareas can be made to resize both vertically and horizontally when `resize` is set to `"both"`

```html
<wa-textarea resize="both"></wa-textarea>
```

### Character Count

Link to This Section

Add the `with-count` attribute to show a character count below the textarea. When combined with `maxlength`, the count shows remaining characters instead. The count is exposed to assistive technologies using a live region so screen readers can announce updates as the user types.

```html
<wa-textarea label="Comments" hint="Share your thoughts with us" with-count></wa-textarea>
<br />
<wa-textarea label="Bio" hint="Tell us a little about yourself" with-count maxlength="100"></wa-textarea>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `label` — The textarea's label. Alternatively, you can use the `label` attribute.
- `hint` — Text that describes how to use the input. Alternatively, you can use the `hint` attribute.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `title` |  | `string` | `''` |  |
| `name` |  | `string \| null` | `null` | The name of the textarea, submitted as a name/value pair with form data. |
| `value` | `defaultValue` | `string` |  | The default value of the form control. Primarily used for resetting the form control. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | The textarea's size. |
| `appearance` |  | `'filled' \| 'outlined' \| 'filled-outlined'` | `'outlined'` | The textarea's visual appearance. |
| `label` |  | `string` | `''` | The textarea's label. If you need to display HTML, use the `label` slot instead. |
| `hint` |  | `string` | `''` | The textarea's hint. If you need to display HTML, use the `hint` slot instead. |
| `placeholder` |  | `string` | `''` | Placeholder text to show as a hint when the input is empty. |
| `rows` |  | `number` | `4` | The number of rows to display by default. |
| `resize` |  | `'none' \| 'vertical' \| 'horizontal' \| 'both' \| 'auto'` | `'vertical'` | Controls how the textarea can be resized. |
| `disabled` |  | `boolean` | `false` | Disables the textarea. |
| `readonly` |  | `boolean` | `false` | Makes the textarea readonly. |
| `required` |  | `boolean` | `false` | Makes the textarea a required field. |
| `minlength` |  | `number` |  | The minimum length of input that will be considered valid. |
| `maxlength` |  | `number` |  | The maximum length of input that will be considered valid. |
| `autocapitalize` |  | `'off' \| 'none' \| 'on' \| 'sentences' \| 'words' \| 'characters'` |  | Controls whether and how text input is automatically capitalized as it is entered by the user. |
| `autocorrect` |  | `boolean` |  | Indicates whether the browser's autocorrect feature is on or off. When set as an attribute, use `"off"` or `"on"`. When set as a property, use `true` or `false`. |
| `autocomplete` |  | `string` |  | Specifies what permission the browser has to provide assistance in filling out form field values. Refer to [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values. |
| `autofocus` |  | `boolean` |  | Indicates that the input should receive focus on page load. |
| `enterkeyhint` |  | `'enter' \| 'done' \| 'go' \| 'next' \| 'previous' \| 'search' \| 'send'` |  | Used to customize the label or icon of the Enter key on virtual keyboards. |
| `spellcheck` |  | `boolean` | `true` | Enables spell checking on the textarea. |
| `inputmode` |  | `'none' \| 'text' \| 'decimal' \| 'numeric' \| 'tel' \| 'search' \| 'email' \| 'url'` |  | Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual keyboard on supportive devices. |
| `with-label` | `withLabel` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup includes the label before the component hydrates on the client. |
| `with-hint` | `withHint` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes the hint before the component hydrates on the client. |
| `with-count` | `withCount` | `boolean` | `false` | Shows a character count below the textarea. When `maxlength` is set, shows remaining characters instead. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `focus` | Sets focus on the textarea. | `options: FocusOptions` |
| `blur` | Removes focus from the textarea. |  |
| `select` | Selects all the text in the textarea. |  |
| `scrollPosition` | Gets or sets the textarea's scroll position. | `position: { top?: number; left?: number }` |
| `setSelectionRange` | Sets the start and end positions of the text selection (0-based). | `selectionStart: number, selectionEnd: number, selectionDirection: 'forward' \| 'backward' \| 'none'` |
| `setRangeText` | Replaces a range of text with a new string. | `replacement: string, start: number, end: number, selectMode: 'select' \| 'start' \| 'end' \| 'preserve'` |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `blur` | Emitted when the control loses focus. |
| `change` | Emitted when an alteration to the control's value is committed by the user. |
| `focus` | Emitted when the control gains focus. |
| `input` | Emitted when the control receives input. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Custom States

| State | Description |
| --- | --- |
| `blank` | The textarea is empty. |

## CSS Parts

| Part | Description |
| --- | --- |
| `label` | The label |
| `form-control-input` | The input's wrapper. |
| `hint` | The hint's wrapper. |
| `textarea` | The internal `<textarea>` control. |
| `base` | The wrapper around the `<textarea>` control. |
| `count` | The character count element, rendered when the `with-count` attribute is present. |
