# Copy Button

**Full documentation:** https://webawesome.com/docs/components/copy-button


`<wa-copy-button>`

Stable [Actions](https://webawesome.com/docs/components/?category=actions) [Since 3.6](https://webawesome.com/docs/resources/changelog#wa_360)

Copy buttons copy text to the clipboard when the user activates them. They provide built-in success and error feedback so users know the copy worked.

```html
<wa-copy-button value="Web Awesome rocks!"></wa-copy-button>
```

Copy buttons use the browser's [`clipboard.writeText()`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) method, which requires a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) (HTTPS) in most browsers.

## Examples

Link to This Section

### Custom Labels

Link to This Section

The default copy button shows a tooltip on hover and focus, and the tooltip text changes briefly to confirm a successful or failed copy. You can customize these labels using the `copy-label`, `success-label`, and `error-label` attributes. The `copy-label` is also used as the button's accessible name.

```html
<wa-copy-button
  value="Custom labels are easy"
  copy-label="Click to copy"
  success-label="You did it!"
  error-label="Whoops, your browser doesn't support this!"
></wa-copy-button>
```

### Custom Icons

Link to This Section

Use the `copy-icon`, `success-icon`, and `error-icon` slots to customize the icons that get displayed for each state. You can use [`<wa-icon>`](https://webawesome.com/docs/components/icon) or your own images.

```html
<wa-copy-button value="Copied from a custom button">
  <wa-icon slot="copy-icon" name="clipboard" variant="regular"></wa-icon>
  <wa-icon slot="success-icon" name="thumbs-up" variant="solid"></wa-icon>
  <wa-icon slot="error-icon" name="xmark" variant="solid"></wa-icon>
</wa-copy-button>
```

### Custom Trigger

Link to This Section

By default, the copy button renders an icon-only button. You can slot in any element to use as a custom trigger instead. This works with Web Awesome buttons, native buttons, or any clickable element.

```html
<wa-copy-button value="You can copy anything with a custom trigger!">
  <wa-button appearance="filled">Copy to Clipboard</wa-button>
</wa-copy-button>
```

You can also use a native button as the trigger.

```html
<wa-copy-button value="Native buttons work too!">
  <button type="button" class="wa-filled">Copy to Clipboard</button>
</wa-copy-button>
```

Custom triggers automatically receive the same tooltip and copy feedback as the default trigger — no extra wiring required. The icon swap is the only piece that's specific to the default trigger. Use `without-tooltip` to opt out of the tooltip, and use the `wa-copy` and `wa-error` events or the `:state(success)` and `:state(error)` CSS custom states for additional feedback.

### Copying Values From Other Elements

Link to This Section

Normally, the data that gets copied will come from the component's `value` attribute, but you can copy data from any element within the same document by providing its `id` to the `from` attribute.

When using the `from` attribute, the element's [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) will be copied by default. Passing an attribute or property modifier will let you copy data from one of the element's attributes or properties instead.

To copy data from an attribute, use `from="id[attr]"` where `id` is the id of the target element and `attr` is the name of the attribute you'd like to copy. To copy data from a property, use `from="id.prop"` where `id` is the id of the target element and `prop` is the name of the property you'd like to copy.

```html
<!-- Copies the span's textContent -->
<div class="wa-cluster wa-align-items-center wa-gap-2xs">
  <span id="my-phone">+1 (234) 456-7890</span>
  <wa-copy-button from="my-phone"></wa-copy-button>
</div>

<br />

<!-- Copies the input's "value" property -->
<div class="wa-cluster wa-align-items-center wa-gap-2xs">
  <wa-input id="my-input" type="text" value="User input" style="max-width: 300px;"></wa-input>
  <wa-copy-button from="my-input.value"></wa-copy-button>
</div>

<br />

<!-- Copies the link's "href" attribute -->
<div class="wa-cluster wa-align-items-center wa-gap-2xs">
  <a id="my-link" href="https://shoelace.style/">Web Awesome Website</a>
  <wa-copy-button from="my-link[href]"></wa-copy-button>
</div>
```

### Handling Errors

Link to This Section

A copy error will occur if the value is an empty string, if the `from` attribute points to an id that doesn't exist, or if the browser rejects the operation for any reason. When this happens, the `wa-error` event will be emitted.

This example demonstrates what happens when a copy error occurs. You can customize the error label and icon using the `error-label` attribute and the `error-icon` slot, respectively.

```html
<wa-copy-button from="i-do-not-exist"></wa-copy-button>
```

### Disabled

Link to This Section

Copy buttons can be disabled by adding the `disabled` attribute.

```html
<wa-copy-button value="You can't copy me" disabled></wa-copy-button>
```

### Changing Feedback Duration

Link to This Section

After copying, the tooltip briefly displays a success or error label. Use the `feedback-duration` attribute to control how long it stays visible.

```html
<wa-copy-button value="Web Awesome rocks!" feedback-duration="250"></wa-copy-button>
```

### Tooltip Modes

Link to This Section

The `tooltip` attribute controls when the built-in tooltip appears. It applies to both the default trigger and [custom triggers](#custom-trigger).

-   `full` (default): the tooltip shows on hover and focus, and is reused to display copy feedback.
-   `copy`: the tooltip stays silent on hover and focus, and only appears briefly to confirm a successful or failed copy.
-   `none`: no tooltip is shown in any state.

```html
<wa-copy-button value="Full" tooltip="full"></wa-copy-button>
<wa-copy-button value="Copy" tooltip="copy"></wa-copy-button>
<wa-copy-button value="None" tooltip="none"></wa-copy-button>
```

```html
<wa-copy-button value="Full" tooltip="full">
  <wa-button appearance="filled">Full</wa-button>
</wa-copy-button>
<wa-copy-button value="Copy" tooltip="copy">
  <wa-button appearance="filled">Copy</wa-button>
</wa-copy-button>
<wa-copy-button value="None" tooltip="none">
  <wa-button appearance="filled">None</wa-button>
</wa-copy-button>
```

### Changing Tooltip Placement

Link to This Section

The tooltip is shown above the trigger by default. Use the `tooltip-placement` attribute to position it on the `top`, `right`, `bottom`, or `left`.

```html
<wa-copy-button value="Above" tooltip-placement="top"></wa-copy-button>
<wa-copy-button value="Right" tooltip-placement="right"></wa-copy-button>
<wa-copy-button value="Below" tooltip-placement="bottom"></wa-copy-button>
<wa-copy-button value="Left" tooltip-placement="left"></wa-copy-button>
```

The same attribute applies to custom triggers.

```html
<wa-copy-button value="Above" tooltip-placement="top">
  <wa-button appearance="filled">Above</wa-button>
</wa-copy-button>
<wa-copy-button value="Right" tooltip-placement="right">
  <wa-button appearance="filled">Right</wa-button>
</wa-copy-button>
<wa-copy-button value="Below" tooltip-placement="bottom">
  <wa-button appearance="filled">Below</wa-button>
</wa-copy-button>
<wa-copy-button value="Left" tooltip-placement="left">
  <wa-button appearance="filled">Left</wa-button>
</wa-copy-button>
```

### Custom Styles

Link to This Section

You can customize the button to your liking with CSS.

```html
<wa-copy-button value="I'm so stylish" class="custom-styles">
  <wa-icon slot="copy-icon" name="clipboard"></wa-icon>
  <wa-icon slot="success-icon" name="thumbs-up"></wa-icon>
  <wa-icon slot="error-icon" name="thumbs-down"></wa-icon>
</wa-copy-button>

<style>
  .custom-styles,
  .custom-styles::part(success-icon),
  .custom-styles::part(error-icon) {
    color: white;
  }

  .custom-styles::part(button) {
    background-color: #ff1493;
    border: solid 2px #ff7ac1;
    border-right-color: #ad005c;
    border-bottom-color: #ad005c;
    border-radius: 6px;
    transition: all var(--wa-transition-slow) var(--wa-transition-easing);
  }

  .custom-styles::part(button):hover {
    transform: scale(1.05);
  }

  .custom-styles::part(button):active {
    transform: translateY(1px);
  }

  .custom-styles::part(button):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The trigger element. By default, a copy icon button is rendered so this is optional. If desired, you can slot in a custom element such as `<wa-button>` or `<button>`.
- `copy-icon` — The icon to show in the default copy state. Works best with `<wa-icon>`.
- `success-icon` — The icon to show when the content is copied. Works best with `<wa-icon>`.
- `error-icon` — The icon to show when a copy error occurs. Works best with `<wa-icon>`.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `string` | `''` | The text value to copy. |
| `from` |  | `string` | `''` | An id that references an element in the same document from which data will be copied. If both this and `value` are present, this value will take precedence. By default, the target element's `textContent` will be copied. To copy an attribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property, append a dot and the property name, e.g. `from="el.value"`. |
| `disabled` |  | `boolean` | `false` | Disables the copy button. |
| `copy-label` | `copyLabel` | `string` | `''` | A custom label to use as the accessible name and tooltip text in the default copy state. |
| `success-label` | `successLabel` | `string` | `''` | A custom label to show in the tooltip after copying. |
| `error-label` | `errorLabel` | `string` | `''` | A custom label to show in the tooltip when a copy error occurs. |
| `feedback-duration` | `feedbackDuration` | `number` | `1000` | The length of time to show feedback before restoring the default trigger. |
| `tooltip-placement` | `tooltipPlacement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` | The preferred placement of the tooltip. |
| `tooltip` |  | `'full' \| 'copy' \| 'none'` | `'full'` | Controls the built-in tooltip. `full` (default) shows the tooltip on hover and focus and during copy feedback. `copy` keeps the tooltip silent on hover/focus and only shows it briefly to confirm a successful or failed copy. `none` disables the tooltip entirely. Applies to both the default and custom triggers. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Events

| Event | Description |
| --- | --- |
| `wa-copy` | Emitted when the data has been copied. |
| `wa-error` | Emitted when the data could not be copied. |

## Custom States

| State | Description |
| --- | --- |
| `success` | Applied when the copy operation succeeds. |
| `error` | Applied when the copy operation fails. |

## CSS Parts

| Part | Description |
| --- | --- |
| `button` | The internal `<button>` element. |
| `copy-icon` | The container that holds the copy icon. |
| `success-icon` | The container that holds the success icon. |
| `error-icon` | The container that holds the error icon. |
| `feedback` | The internal `<wa-tooltip>` element. |
