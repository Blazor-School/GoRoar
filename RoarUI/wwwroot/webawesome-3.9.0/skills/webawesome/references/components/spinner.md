# Spinner

**Full documentation:** https://webawesome.com/docs/components/spinner


`<wa-spinner>`

Stable [Feedback](https://webawesome.com/docs/components/?category=feedback) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Spinners indicate that an operation is in progress when the duration is unknown. Use them for loading states where a determinate progress bar isn't practical.

```html
<wa-spinner></wa-spinner>
```

## Examples

Link to This Section

### Size

Link to This Section

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html
<wa-spinner></wa-spinner>
<wa-spinner style="font-size: 2rem;"></wa-spinner>
<wa-spinner style="font-size: 3rem;"></wa-spinner>
```

### Track Width

Link to This Section

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html
<wa-spinner style="font-size: 50px; --track-width: 10px;"></wa-spinner>
```

### Color

Link to This Section

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html
<wa-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></wa-spinner>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--track-width` |  | The width of the track. |
| `--track-color` |  | The color of the track. |
| `--indicator-color` |  | The color of the spinner's indicator. |
| `--speed` |  | The time it takes for the spinner to complete one animation cycle. |
