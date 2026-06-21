# Color Picker

**Full documentation:** https://webawesome.com/docs/components/color-picker


`<wa-color-picker>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Color pickers let users choose a color from a visual palette or by entering a value. They support HEX, RGB, HSL, and HSV formats with optional alpha channel and swatch presets.

```html
<wa-color-picker label="Select a color"></wa-color-picker>
```

This component works with standard `<form>` elements. Please refer to the section on [form controls](https://webawesome.com/docs/form-controls) to learn more about form submission and client-side validation.

## Examples

Link to This Section

### Initial Value

Link to This Section

Use the `value` attribute to set an initial value for the color picker.

```html
<wa-color-picker value="#4a90e2" label="Select a color"></wa-color-picker>
```

### Opacity

Link to This Section

Use the `opacity` attribute to enable the opacity slider. When this is enabled, the value will be displayed as HEXA, RGBA, HSLA, or HSVA based on `format`.

```html
<wa-color-picker value="#f5a623ff" opacity label="Select a color"></wa-color-picker>
```

### Formats

Link to This Section

Set the color picker's format with the `format` attribute. Valid options include `hex`, `rgb`, `hsl`, and `hsv`. Note that the color picker's input will accept any parsable format (including CSS color names) regardless of this option.

To prevent users from toggling the format themselves, add the `without-format-toggle` attribute.

```html
<div class="wa-grid" style="--min-column-size: 12ch;">
  <wa-color-picker format="hex" value="#4a90e2" label="Pick a hex color"></wa-color-picker>
  <wa-color-picker format="rgb" value="rgb(80, 227, 194)" label="Pick an RGB color"></wa-color-picker>
  <wa-color-picker format="hsl" value="hsl(290, 87%, 47%)" label="Pick an HSL color"></wa-color-picker>
  <wa-color-picker format="hsv" value="hsv(55, 89%, 97%)" label="Pick an HSV color"></wa-color-picker>
</div>
```

### Swatches

Link to This Section

Use the `swatches` attribute to add convenient presets to the color picker. Any format the color picker can parse is acceptable (including [CSS color names](https://www.w3schools.com/colors/colors_names.asp)), but each value must be separated by a semicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.

```html
<wa-color-picker
  label="Select a color"
  swatches="
    #d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe;
    #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;
  "
></wa-color-picker>
```

You can also pass an array of objects with `color` and `label` properties using JavaScript. When labels are provided, they will be used as the accessible name for each swatch instead of the raw color value.

```html
<wa-color-picker id="labeled-swatches" label="Select a color"></wa-color-picker>

<script>
  const colorPicker = document.getElementById('labeled-swatches');
  await customElements.whenDefined("wa-color-picker")
  await colorPicker.updateComplete
  colorPicker.swatches = [
    { color: '#d0021b', label: 'Red' },
    { color: '#f5a623', label: 'Orange' },
    { color: '#f8e71c', label: 'Yellow' },
    { color: '#7ed321', label: 'Green' },
    { color: '#4a90e2', label: 'Blue' },
    { color: '#bd10e0', label: 'Purple' },
    { color: '#000', label: 'Black' },
    { color: '#fff', label: 'White' },
  ];
</script>
```

### Placement

Link to This Section

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html
<div class="wa-gap-m wa-align-items-baseline">
  <wa-color-picker placement="top-start" label="Select a color"></wa-color-picker>
  <wa-color-picker placement="bottom-end" label="Select a color"></wa-color-picker>
  <wa-color-picker placement="right" label="Select a color"></wa-color-picker>
  <wa-color-picker placement="left" label="Select a color"></wa-color-picker>
</div>
```

### Sizes

Link to This Section

Use the `size` attribute to change the color picker's trigger size.

```html
<div class="wa-gap-m wa-align-items-baseline">
  <wa-color-picker size="xs" label="Select a color"></wa-color-picker>
  <wa-color-picker size="s" label="Select a color"></wa-color-picker>
  <wa-color-picker size="m" label="Select a color"></wa-color-picker>
  <wa-color-picker size="l" label="Select a color"></wa-color-picker>
  <wa-color-picker size="xl" label="Select a color"></wa-color-picker>
</div>
```

### Disabled

Link to This Section

The color picker can be rendered as disabled.

```html
<wa-color-picker disabled label="Select a color"></wa-color-picker>
```

### Hint

Link to This Section

Add descriptive hint to a color picker with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-color-picker label="Select a color" hint="Choose a color with appropriate contrast!"></wa-color-picker>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `label` — The color picker's form label. Alternatively, you can use the `label` attribute.
- `hint` — The color picker's form hint. Alternatively, you can use the `hint` attribute.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `defaultValue` | `string \| null` |  | The default value of the form control. Primarily used for resetting the form control. |
| `with-label` | `withLabel` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `label` element so the server-rendered markup includes the label before the component hydrates on the client. |
| `with-hint` | `withHint` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `hint` element so the server-rendered markup includes the hint before the component hydrates on the client. |
| `label` |  | `string` | `''` | The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to display HTML, you can use the `label` slot` instead. |
| `hint` |  | `string` | `''` | The color picker's hint. If you need to display HTML, use the `hint` slot instead. |
| `format` |  | `'hex' \| 'rgb' \| 'hsl' \| 'hsv'` | `'hex'` | The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color picker will accept user input in any format (including CSS color names) and convert it to the desired format. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | Determines the size of the color picker's trigger |
| `placement` |  | `\| 'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'right' \| 'right-start' \| 'right-end' \| 'left' \| 'left-start' \| 'left-end'` | `'bottom-start'` | The preferred placement of the color picker's popup. Note that the actual placement will vary as configured to keep the panel inside of the viewport. |
| `without-format-toggle` | `withoutFormatToggle` | `boolean` | `false` | Removes the button that lets users toggle between format. |
| `name` |  | `string \| null` | `null` | The name of the form control, submitted as a name/value pair with form data. |
| `disabled` |  | `boolean` | `false` | Disables the color picker. |
| `open` |  | `boolean` | `false` | Indicates whether or not the popup is open. You can toggle this attribute to show and hide the popup, or you can use the `show()` and `hide()` methods and this attribute will reflect the popup's open state. |
| `opacity` |  | `boolean` | `false` | Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA. |
| `uppercase` |  | `boolean` | `false` | By default, values are lowercase. With this attribute, values will be uppercase instead. |
| `swatches` |  | `string \| string[] \| WaColorPickerSwatch[]` | `''` | One or more predefined color swatches to display as presets in the color picker. Can include any format the color picker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a semicolon (`;`). Alternatively, you can pass an array of color values or an array of `{ color, label }` objects to this property using JavaScript. When using objects with labels, the label will be used for the swatch's accessible name instead of the raw color value. |
| `required` |  | `boolean` | `false` | Makes the color picker a required field. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `getHexString` | Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. | `hue: number, saturation: number, brightness: number, alpha` |
| `focus` | Sets focus on the color picker. | `options: FocusOptions` |
| `blur` | Removes focus from the color picker. |  |
| `getFormattedValue` | Returns the current value as a string in the specified format. | `format: 'hex' \| 'hexa' \| 'rgb' \| 'rgba' \| 'hsl' \| 'hsla' \| 'hsv' \| 'hsva'` |
| `reportValidity` | Checks for validity and shows the browser's validation message if the control is invalid. |  |
| `show` | Shows the color picker panel. |  |
| `hide` | Hides the color picker panel |  |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `change` | Emitted when the color picker's value changes. |
| `input` | Emitted when the color picker receives input. |
| `wa-show` |  |
| `wa-after-show` |  |
| `wa-hide` |  |
| `wa-after-hide` |  |
| `blur` | Emitted when the color picker loses focus. |
| `focus` | Emitted when the color picker receives focus. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `trigger` | The color picker's dropdown trigger. |
| `swatches` | The container that holds the swatches. |
| `swatch` | Each individual swatch. |
| `grid` | The color grid. |
| `grid-handle` | The color grid's handle. |
| `slider` | Hue and opacity sliders. |
| `slider-handle` | Hue and opacity slider handles. |
| `hue-slider` | The hue slider. |
| `hue-slider-handle` | The hue slider's handle. |
| `opacity-slider` | The opacity slider. |
| `opacity-slider-handle` | The opacity slider's handle. |
| `preview` | The preview color. |
| `input` | The text input. |
| `eyedropper-button` | The eye dropper button. |
| `eyedropper-button__base` | The eye dropper button's exported `button` part. |
| `eyedropper-button__start` | The eye dropper button's exported `start` part. |
| `eyedropper-button__label` | The eye dropper button's exported `label` part. |
| `eyedropper-button__end` | The eye dropper button's exported `end` part. |
| `eyedropper-button__caret` | The eye dropper button's exported `caret` part. |
| `format-button` | The format button. |
| `format-button__base` | The format button's exported `button` part. |
| `format-button__start` | The format button's exported `start` part. |
| `format-button__label` | The format button's exported `label` part. |
| `format-button__end` | The format button's exported `end` part. |
| `format-button__caret` | The format button's exported `caret` part. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--grid-width` |  | The width of the color grid. |
| `--grid-height` |  | The height of the color grid. |
| `--grid-handle-size` |  | The size of the color grid's handle. |
| `--slider-height` |  | The height of the hue and alpha sliders. |
| `--slider-handle-size` |  | The diameter of the slider's handle. |
