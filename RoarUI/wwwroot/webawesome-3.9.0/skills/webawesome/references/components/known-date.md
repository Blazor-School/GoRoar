# Known Date

**Full documentation:** https://webawesome.com/docs/components/known-date


`<wa-known-date>`

Experimental [Forms](https://webawesome.com/docs/components/?category=forms) [Since 3.8](https://webawesome.com/docs/resources/changelog#wa_380)

Known dates let users enter dates they already know — birthdays, expirations, document dates — through three separate day, month, and year fields shown in the locale's natural order.

Known Date collects a date the user already knows — a birthday, a passport issue date, an expiration — through three separate fields for day, month, and year. It follows the [UK Government Design System date input pattern](https://design-system.service.gov.uk/components/date-input/): a labeled `<fieldset>` wraps three plain `<input>` elements, the user types each part themselves, and the host submits a single canonical ISO date.

```html
<wa-known-date label="When was your passport issued?"></wa-known-date>
```

For dates the user needs help finding (scheduling, ranges, browsing), use [`<wa-date-input>`](https://webawesome.com/docs/components/date-input) instead. Known Date is intentionally simple: no popup calendar, no auto-advance between fields, and no clever parsing.

## Form Submission

Link to This Section

The hidden form value is canonical ISO 8601 (`YYYY-MM-DD`), regardless of the locale used to render the fields:

-   A complete, real calendar date is submitted as `YYYY-MM-DD`.
-   A partial entry (one or two fields filled) submits no value — the form data omits the entry entirely.
-   An invalid combination such as 30 February submits no value.

```html
<form id="kd-form-demo">
  <wa-known-date name="dob" label="Date of birth" required value="2007-03-27"></wa-known-date>
  <br />
  <wa-button type="submit" appearance="filled" variant="neutral">Submit</wa-button>
</form>

<pre id="kd-form-demo-output"></pre>

<style>
  #kd-form-demo-output {
    margin-block-start: 1rem;
    margin-block-end: 0;
    padding: 0.75rem;
    background: var(--wa-color-surface-lowered);
    border-radius: var(--wa-border-radius-m);
    font-size: 0.875em;
  }

  #kd-form-demo-output:empty {
    display: none;
  }
</style>

<script>
  const form = document.getElementById('kd-form-demo');
  const output = document.getElementById('kd-form-demo-output');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const entries = Object.fromEntries(data.entries());
    const formatted = JSON.stringify(entries, null, 2);
    output.textContent = 'Submitted FormData:\n' + formatted;
  });
</script>
```

## Examples

Link to This Section

### Initial Value

Link to This Section

Set the `value` attribute to an ISO date to pre-fill the three fields.

```html
<wa-known-date label="Date of birth" value="1990-04-15"></wa-known-date>
```

### Hint

Link to This Section

Use the `hint` attribute (or slot) to show an example value. The hint is associated with each field via `aria-describedby`, so screen readers announce it when any field receives focus.

```html
<wa-known-date label="When was your passport issued?" hint="For example, 27 3 2007"></wa-known-date>
```

### Locale-Aware Field Order

Link to This Section

The three fields render in the natural order for the inherited `lang` (or the explicit `locale` attribute). The labels stay the same; only the position changes.

```html
<wa-known-date label="UK order" lang="en-GB"></wa-known-date>
<br />
<wa-known-date label="US order" lang="en-US"></wa-known-date>
<br />
<wa-known-date label="Japanese order" lang="ja-JP"></wa-known-date>
```

### Min and Max

Link to This Section

Constrain the accepted range with `min` and `max`. Values outside the range are reported as invalid.

```html
<wa-known-date label="Birthday" min="1900-01-01" max="2099-12-31"></wa-known-date>
```

### Required

Link to This Section

Set `required` to make the date input required for form submission. Submitting a form with an empty or partially filled date input triggers the standard browser validation flow and a localized error message appears inside the fieldset.

```html
<form>
  <wa-known-date label="Date of birth" required></wa-known-date>
  <br />
  <wa-button type="submit" appearance="filled" variant="neutral">Submit</wa-button>
</form>
```

### Disabled and Readonly

Link to This Section

```html
<wa-known-date label="Disabled" value="2007-03-27" disabled></wa-known-date>
<br />
<wa-known-date label="Readonly" value="2007-03-27" readonly></wa-known-date>
```

### Autocomplete

Link to This Section

Set `autocomplete="bday"` to enable browser autofill for birthdays. The host expands the family into per-field tokens (`bday-day`, `bday-month`, `bday-year`).

```html
<wa-known-date label="Date of birth" autocomplete="bday"></wa-known-date>
```

### Sizes

Link to This Section

```html
<wa-known-date label="Extra small" size="xs"></wa-known-date>
<br />
<wa-known-date label="Small" size="s"></wa-known-date>
<br />
<wa-known-date label="Medium (default)" size="m"></wa-known-date>
<br />
<wa-known-date label="Large" size="l"></wa-known-date>
<br />
<wa-known-date label="Extra large" size="xl"></wa-known-date>
```

### Appearances

Link to This Section

```html
<wa-known-date label="Outlined (default)" appearance="outlined"></wa-known-date>
<br />
<wa-known-date label="Filled" appearance="filled"></wa-known-date>
<br />
<wa-known-date label="Filled outlined" appearance="filled-outlined"></wa-known-date>
```

### Pill

Link to This Section

Use the `pill` attribute to give each field rounded edges.

```html
<wa-known-date label="Pill" pill></wa-known-date>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `label` — The known date's group label. Alternatively, use the `label` attribute.
- `hint` — Text that describes how to use the known date. Alternatively, use the `hint` attribute.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `name` |  | `string \| null` | `''` | The name submitted with form data. |
| `value` | `defaultValue` | `string` |  | The default value used for form reset. |
| `disabled` |  | `boolean` | `false` | Disables the known date. |
| `required` |  | `boolean` | `false` | Makes the known date required for form submission. |
| `readonly` |  | `boolean` | `false` | Makes the fields non-editable. |
| `size` |  | `WaKnownDateSize \| 'small' \| 'medium' \| 'large'` | `'m'` | The known date's size. |
| `appearance` |  | `WaKnownDateAppearance` | `'outlined'` | The known date's visual appearance. |
| `pill` |  | `boolean` | `false` | Draws pill-style fields with rounded edges. |
| `label` |  | `string` | `''` | The known date's label. If you need to display HTML, use the `label` slot instead. |
| `hint` |  | `string` | `''` | The known date's hint. If you need to display HTML, use the `hint` slot instead. |
| `autocomplete` |  | `string` | `''` | Browser autofill family. When set to `bday`, the three fields receive `bday-day`, `bday-month`, and `bday-year` respectively. The field-agnostic directives `off` and `on` are applied to all three fields. Any other value is forwarded only to the year field. |
| `min` |  | `string` | `''` | Earliest selectable date as `YYYY-MM-DD`. |
| `max` |  | `string` | `''` | Latest selectable date as `YYYY-MM-DD`. |
| `locale` |  | `string` | `''` | BCP-47 locale override. When empty, the inherited `lang` attribute is used. |
| `with-label` | `withLabel` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `label` element. |
| `with-hint` | `withHint` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `hint` element. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `focus` | Focuses the first empty field, or the first field when all are filled. | `options: FocusOptions` |
| `blur` | Removes focus from the known date. |  |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null` |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `input` | Emitted as the user types in any field. |
| `change` | Emitted when the committed value transitions to a new ISO date. |
| `blur` | Emitted when the control loses focus. |
| `focus` | Emitted when the control gains focus. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Custom States

| State | Description |
| --- | --- |
| `blank` | The known date has no committed value. |
| `disabled` | The known date is disabled. |

## CSS Parts

| Part | Description |
| --- | --- |
| `form-control` | The form control's outer wrapper. |
| `form-control-label` | The wrapper inside the legend that styles the visible label text. |
| `form-control-input` | Alias on the fields row matching other form controls. |
| `hint` | The hint's wrapper. |
| `label` | Alias on the legend's inner label wrapper. |
| `base` | The component's outer wrapper (alias of the fields row). |
| `fieldset` | The `<fieldset>` element grouping the three fields (or a `role="group"` div). |
| `legend` | The `<legend>` element (when a label is present). |
| `fields` | The flex row holding the three field blocks. |
| `field` | Each field block (label + input). |
| `field-day` | Added to the day field block. |
| `field-month` | Added to the month field block. |
| `field-year` | Added to the year field block. |
| `field-label` | The text label above each field's input. |
| `field-input` | The native `<input>` inside a field. |
| `error` | The inline error message region. This is an intentional difference from `<wa-date-input>` and `<wa-time-input>`, which rely on the browser's native validation popup. Because this control is composed of three separate fields, an inline `role="alert"` region gives a single, predictable place to surface the validation message rather than anchoring a native popup on one of the three fields. |
