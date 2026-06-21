# Time Input

**Full documentation:** https://webawesome.com/docs/components/time-input


`<wa-time-input>`

Experimental [Forms](https://webawesome.com/docs/components/?category=forms) [Since 3.8](https://webawesome.com/docs/resources/changelog#wa_380)

Time pickers let users enter a time through a segmented field or select one visually from a popup column picker. They support 12- and 24-hour formats, optional seconds, and locale-aware segment order.

Time Input is the time-of-day counterpart to [Date Input](https://webawesome.com/docs/components/date-input). It renders a segmented input with hour, minute, optional seconds, and optional AM/PM spinbutton segments in the user's locale order, alongside a popup column picker modeled on Chrome's native time UI.

Type digits to fill the focused segment (focus auto-advances when a segment can accept no further digit), use the arrow keys to step through values, and press `Alt+Down Arrow` to open the popup. The entire segmented input is one tab stop.

```html
<wa-time-input label="Pick a time"></wa-time-input>
```

The submitted form value matches HTML `<input type="time">`: `HH:mm` for whole-minute steps, `HH:mm:ss` when seconds are shown (`step` < 60). The wire value is always 24-hour even when the UI is 12-hour. The displayed text follows the user's locale, inherited from the `lang` attribute on the host or an ancestor.

## Form Submission

Link to This Section

The hidden form value is canonical 24-hour time, regardless of the user's locale or `hour-format`:

-   **Whole-minute steps** (default `step="60"` or any multiple of 60): `HH:mm` (e.g., `14:30`).
-   **Sub-minute steps** (`step` < 60, seconds segment shown): `HH:mm:ss` (e.g., `14:30:15`).
-   **12-hour UI**: still submits 24-hour on the wire, i.e. `2:30 PM` becomes `14:30`.
-   **Partial input**: the form value is empty until every required segment is filled.

The example below renders a working form. Submit it (or change the time) and watch the console. The time input submits its value just like a native `<input type="time">`, regardless of how the user typed or what locale they used.

```html
<form id="tp-form-demo">
  <wa-time-input name="meeting_time" label="Meeting time" required value="14:30"></wa-time-input>
  <br />
  <wa-button type="submit" appearance="filled" variant="neutral">Submit</wa-button>
</form>
<pre id="tp-form-demo-output"></pre>
<style>
  #tp-form-demo-output {
    margin-block-start: 1rem;
    margin-block-end: 0;
    padding: 0.75rem;
    background: var(--wa-color-surface-lowered);
    border-radius: var(--wa-border-radius-m);
    font-size: 0.875em;
  }

  #tp-form-demo-output:empty {
    display: none;
  }
</style>

<script>
  const form = document.getElementById('tp-form-demo');
  const output = document.getElementById('tp-form-demo-output');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());
    const formatted = JSON.stringify(entries, null, 2);
    console.log('Submitted FormData:', entries);
    output.textContent = 'Submitted FormData:\n' + formatted;
  });
</script>
```

## Examples

Link to This Section

### Initial Value

Link to This Section

Set the `value` attribute to a time string to pre-populate the input.

```html
<wa-time-input label="Meeting time" value="14:30"></wa-time-input>
```

### Labels

Link to This Section

Use the `label` attribute to give the time input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html
<wa-time-input label="What time works for you?"></wa-time-input>
```

### Hint

Link to This Section

Add descriptive hint to a time input with the `hint` attribute. For hints that contain HTML, use the `hint` slot instead.

```html
<wa-time-input label="Wake up" hint="Set the time your alarm should go off."></wa-time-input>
```

### Start & End Decorations

Link to This Section

Use the `start` and `end` slots to add presentational elements like [`<wa-icon>`](https://webawesome.com/docs/components/icon) inside the input.

```html
<wa-time-input label="Start">
  <wa-icon name="hourglass-start" slot="start"></wa-icon>
</wa-time-input>
<br />
<wa-time-input label="End">
  <wa-icon name="hourglass-end" slot="end"></wa-icon>
</wa-time-input>
```

### Required + Clear Button

Link to This Section

Combine `required` with `with-clear` to enforce a value while still letting users wipe their selection in a single click.

```html
<form>
  <wa-time-input name="alarm" label="Alarm" required with-clear></wa-time-input>
  <br />
  <wa-button type="submit" appearance="filled" variant="neutral">Submit</wa-button>
</form>
```

### Min and Max

Link to This Section

Constrain the selectable range. The picker delegates reversed-range (overnight) semantics to the native `<input type="time">`, so `min="22:00" max="06:00"` represents an overnight range.

```html
<wa-time-input label="Office hours" min="09:00" max="17:00"></wa-time-input>
```

### Step

Link to This Section

The `step` attribute is in **seconds**, matching the HTML spec. The default is `60` (one minute). Set `step` below `60` to expose a seconds segment; set it to a multiple of `60` to populate the minute column at that stride.

```html
<wa-time-input label="Every 5 minutes" step="300"></wa-time-input>
<br />
<wa-time-input label="With seconds" step="1"></wa-time-input>
```

### 12-Hour vs 24-Hour

Link to This Section

By default, `hour-format="auto"` follows the resolved locale. Pass `hour-format="12"` or `hour-format="24"` to override.

```html
<wa-time-input label="12-hour" hour-format="12" value="09:00"></wa-time-input>
<br />
<wa-time-input label="24-hour" hour-format="24" value="09:00"></wa-time-input>
```

### Localized

Link to This Section

The segment order, separators, and AM/PM strings all derive from the page's locale. Set the `lang` attribute on the host (or an ancestor) to change locales.

```html
<wa-time-input lang="en-US" label="English (US)" value="14:30"></wa-time-input>
<br />
<wa-time-input lang="en-GB" label="English (UK)" value="14:30"></wa-time-input>
<br />
<wa-time-input lang="de-DE" label="German" value="14:30"></wa-time-input>
```

### "Now" Button

Link to This Section

Add a quick-pick "Now" button in the popup footer with `with-now`.

```html
<wa-time-input label="When?" with-now></wa-time-input>
```

### Sizes

Link to This Section

Use the `size` attribute to match the time input to surrounding form controls.

```html
<wa-time-input size="xs" label="Extra small"></wa-time-input>
<br />
<wa-time-input size="s" label="Small"></wa-time-input>
<br />
<wa-time-input size="m" label="Medium"></wa-time-input>
<br />
<wa-time-input size="l" label="Large"></wa-time-input>
<br />
<wa-time-input size="xl" label="Extra large"></wa-time-input>
```

### Filled Appearance

Link to This Section

Use the `appearance` attribute to switch between the default outlined input, a filled background, or a filled input with an outlined border.

```html
<wa-time-input appearance="filled" label="Filled"></wa-time-input>
<br />
<wa-time-input appearance="filled-outlined" label="Filled outlined"></wa-time-input>
```

### Pill

Link to This Section

Use the `pill` attribute to give the input fully rounded edges.

```html
<wa-time-input pill label="Pill"></wa-time-input>
```

### Disabled

Link to This Section

Use the `disabled` attribute to disable the time input entirely. Disabled time inputs don't accept input, are skipped during tabbing, and don't submit a value with the form.

```html
<wa-time-input label="Disabled" value="09:00" disabled></wa-time-input>
```

### Read-only

Link to This Section

Use the `readonly` attribute to make the time input non-editable while still allowing it to be focused and to submit its value with the form. The popup still opens for browsing.

```html
<wa-time-input label="Read-only" value="09:00" readonly></wa-time-input>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `label` — The time picker's label. Alternatively, use the `label` attribute.
- `hint` — Text that describes how to use the time picker. Alternatively, use the `hint` attribute.
- `start` — An element placed at the start of the input.
- `end` — An element placed at the end of the input.
- `clear-icon` — An icon to use in lieu of the default clear icon.
- `expand-icon` — The icon to show on the popup toggle button. Defaults to a clock icon.
- `footer` — Content shown below the column picker in the popup. Replaces the default Now button when present.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `name` |  | `string \| null` | `''` | The time picker's name, submitted as a name/value pair with form data. |
| `value` | `defaultValue` | `string` |  | The default value of the form control. Used for form reset. |
| `disabled` |  | `boolean` | `false` | Disables the time picker. |
| `required` |  | `boolean` | `false` | Makes the time picker required for form submission. |
| `readonly` |  | `boolean` | `false` | Makes the input non-editable. The popup still opens for browsing. |
| `size` |  | `WaTimeInputSize \| 'small' \| 'medium' \| 'large'` | `'m'` | The time picker's size. |
| `appearance` |  | `'filled' \| 'outlined' \| 'filled-outlined'` | `'outlined'` | The time picker's visual appearance. |
| `pill` |  | `boolean` | `false` | Draws a pill-style time picker with rounded edges. |
| `label` |  | `string` | `''` | The time picker's label. If you need to display HTML, use the `label` slot instead. |
| `hint` |  | `string` | `''` | The time picker's hint. If you need to display HTML, use the `hint` slot instead. |
| `autocomplete` |  | `string` | `''` | Forwarded to the hidden form input to enable browser autofill (`on`/`off`/custom tokens). |
| `with-clear` | `withClear` | `boolean` | `false` | Shows a clear button when the time picker has a value. |
| `with-now` | `withNow` | `boolean` | `false` | Renders a "Now" button in the popup footer. |
| `with-label` | `withLabel` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `label` element. |
| `with-hint` | `withHint` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `hint` element. |
| `min` |  | `string` | `''` | The earliest selectable time in wire format. May be later than `max` to represent an overnight range. The picker delegates reversed-range semantics to the mirrored native `<input type="time">`. |
| `max` |  | `string` | `''` | The latest selectable time in wire format. |
| `step` |  | `number \| 'any'` | `60` | The granularity, in seconds, matching HTML `<input type="time">`. Default `60` hides the seconds segment. Values below 60 reveal the seconds segment. `'any'` disables `stepMismatch` enforcement. |
| `hour-format` | `hourFormat` | `WaTimeInputHourFormat` | `'auto'` | Whether the UI uses a 12-hour or 24-hour clock. `auto` follows the resolved locale. |
| `open` |  | `boolean` | `false` | Whether the popup is open. |
| `placement` |  | `WaTimeInputPlacement` | `'bottom-start'` | Preferred popup placement. |
| `distance` |  | `number` | `0` | Distance in pixels between the popup and the input. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `focus` | Sets focus on the first empty (else first) segment. | `options: FocusOptions` |
| `blur` | Removes focus from the time picker. |  |
| `show` | Opens the popup. |  |
| `hide` | Closes the popup. |  |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null` |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `input` | Emitted as the user types into a segment or interacts with the popup columns. |
| `change` | Emitted when the committed value changes. |
| `focus` | Emitted when the control receives focus. |
| `blur` | Emitted when the control loses focus. |
| `wa-clear` | Emitted when the clear button is activated. |
| `wa-show` | Emitted when the popup is about to open. Cancelable. |
| `wa-after-show` | Emitted after the popup opens and animations complete. |
| `wa-hide` | Emitted when the popup is about to close. Cancelable. |
| `wa-after-hide` | Emitted after the popup closes and animations complete. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Custom States

| State | Description |
| --- | --- |
| `blank` | The time picker has no committed value. |
| `open` | The popup is open. |
| `disabled` | The time picker is disabled. |

## CSS Parts

| Part | Description |
| --- | --- |
| `form-control` | The form control that wraps the label, input, and hint. |
| `form-control-label` | The label's wrapper. |
| `form-control-input` | The input's wrapper. |
| `hint` | The hint's wrapper. |
| `base` | The component's base wrapper. |
| `input-wrapper` | The container around the start slot, segmented input, clear button, and expand button. |
| `start` | The container that wraps the `start` slot. |
| `end` | The container that wraps the `end` slot. |
| `input` | The segmented input group. |
| `segment` | Each editable segment (hour/minute/second/AM-PM spinbutton). Use `[part~="segment"]` to style all. |
| `segment-literal` | Inert literal text between segments (separators). |
| `clear-button` | The clear button. |
| `expand-button` | The popup toggle button. |
| `expand-icon` | The expand icon wrapper. |
| `popup` | The popup container. |
| `columns` | The row of column listboxes inside the popup. |
| `column` | Each column listbox. |
| `column-item` | Each option inside a column. |
| `column-item-selected` | The currently selected option inside a column. |
| `now-button` | The default "Now" button rendered in the popup footer when `with-now` is set. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--show-duration` | `var(--wa-transition-fast)` | The duration of the show animation. |
| `--hide-duration` | `var(--wa-transition-fast)` | The duration of the hide animation. |
| `--column-item-height` | `2.25em` | Height of each option inside a popup column. |
| `--column-width` | `3em` | Width of each popup column. |
