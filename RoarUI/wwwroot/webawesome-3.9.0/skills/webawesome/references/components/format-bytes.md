# Format Bytes

**Full documentation:** https://webawesome.com/docs/components/format-bytes


`<wa-format-bytes>`

Stable [Helpers](https://webawesome.com/docs/components/?category=helpers) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Formats a number of bytes as a human-readable string with the appropriate unit, such as kB, MB, or GB. Supports both byte and bit units with configurable locale.

```html
<div class="format-bytes-overview">
  The file is <wa-format-bytes value="1000"></wa-format-bytes> in size. <br /><br />
  <wa-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></wa-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('wa-format-bytes');
  const input = container.querySelector('wa-input');

  input.addEventListener('input', () => (formatter.value = input.value || 0));
</script>
```

## Examples

Link to This Section

### Formatting Bytes

Link to This Section

Set the `value` attribute to a number to get the value in bytes.

```html
<wa-format-bytes value="12"></wa-format-bytes><br />
<wa-format-bytes value="1200"></wa-format-bytes><br />
<wa-format-bytes value="1200000"></wa-format-bytes><br />
<wa-format-bytes value="1200000000"></wa-format-bytes>
```

### Formatting Bits

Link to This Section

To get the value in bits, set the `unit` attribute to `bit`.

```html
<wa-format-bytes value="12" unit="bit"></wa-format-bytes><br />
<wa-format-bytes value="1200" unit="bit"></wa-format-bytes><br />
<wa-format-bytes value="1200000" unit="bit"></wa-format-bytes><br />
<wa-format-bytes value="1200000000" unit="bit"></wa-format-bytes>
```

### Localization

Link to This Section

Use the `lang` attribute to set the number formatting locale.

```html
<wa-format-bytes value="12" lang="de"></wa-format-bytes><br />
<wa-format-bytes value="1200" lang="de"></wa-format-bytes><br />
<wa-format-bytes value="1200000" lang="de"></wa-format-bytes><br />
<wa-format-bytes value="1200000000" lang="de"></wa-format-bytes>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `number` | `0` | The number to format in bytes. |
| `unit` |  | `'byte' \| 'bit'` | `'byte'` | The type of unit to display. |
| `display` |  | `'long' \| 'short' \| 'narrow'` | `'short'` | Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |
