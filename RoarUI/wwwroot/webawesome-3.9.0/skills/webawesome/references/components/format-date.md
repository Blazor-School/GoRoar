# Format Date

**Full documentation:** https://webawesome.com/docs/components/format-date


`<wa-format-date>`

Stable [Helpers](https://webawesome.com/docs/components/?category=helpers) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Formats a date or time for display using the specified locale and options. Powered by the Intl.DateTimeFormat API for consistent, localized output.

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html
<!-- Web Awesome 2 release date 🎉 -->
<wa-format-date date="2020-07-15T09:17:00-04:00"></wa-format-date>
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

Link to This Section

### Date & Time Formatting

Link to This Section

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html
<!-- Human-readable date -->
<wa-format-date month="long" day="numeric" year="numeric"></wa-format-date><br />

<!-- Time -->
<wa-format-date hour="numeric" minute="numeric"></wa-format-date><br />

<!-- Weekday -->
<wa-format-date weekday="long"></wa-format-date><br />

<!-- Month -->
<wa-format-date month="long"></wa-format-date><br />

<!-- Year -->
<wa-format-date year="numeric"></wa-format-date><br />

<!-- No formatting options -->
<wa-format-date></wa-format-date>
```

### Hour Formatting

Link to This Section

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html
<wa-format-date hour="numeric" minute="numeric" hour-format="12"></wa-format-date><br />
<wa-format-date hour="numeric" minute="numeric" hour-format="24"></wa-format-date>
```

### Localization

Link to This Section

Use the `lang` attribute to set the date/time formatting locale.

```html
English: <wa-format-date lang="en"></wa-format-date><br />
French: <wa-format-date lang="fr"></wa-format-date><br />
Russian: <wa-format-date lang="ru"></wa-format-date>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `date` |  | `Date \| string` | `new Date()` | The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). |
| `weekday` |  | `'narrow' \| 'short' \| 'long'` |  | The format for displaying the weekday. |
| `era` |  | `'narrow' \| 'short' \| 'long'` |  | The format for displaying the era. |
| `year` |  | `'numeric' \| '2-digit'` |  | The format for displaying the year. |
| `month` |  | `'numeric' \| '2-digit' \| 'narrow' \| 'short' \| 'long'` |  | The format for displaying the month. |
| `day` |  | `'numeric' \| '2-digit'` |  | The format for displaying the day. |
| `hour` |  | `'numeric' \| '2-digit'` |  | The format for displaying the hour. |
| `minute` |  | `'numeric' \| '2-digit'` |  | The format for displaying the minute. |
| `second` |  | `'numeric' \| '2-digit'` |  | The format for displaying the second. |
| `time-zone-name` | `timeZoneName` | `'short' \| 'long'` |  | The format for displaying the time. |
| `time-zone` | `timeZone` | `string` |  | The time zone to express the time in. |
| `hour-format` | `hourFormat` | `'auto' \| '12' \| '24'` | `'auto'` | The format for displaying the hour. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |
