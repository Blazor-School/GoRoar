# Progress Ring

**Full documentation:** https://webawesome.com/docs/components/progress-ring


`<wa-progress-ring>`

Stable [Feedback](https://webawesome.com/docs/components/?category=feedback) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Progress rings show how far along a determinate operation is using a circular indicator. Use them as a compact alternative to progress bars when horizontal space is limited.

```html
<wa-progress-ring value="25"></wa-progress-ring>
```

## Examples

Link to This Section

### Size

Link to This Section

Use the `--size` custom property to set the diameter of the progress ring.

```html
<wa-progress-ring value="50" style="--size: 200px;"></wa-progress-ring>
```

### Track and Indicator Width

Link to This Section

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html
<wa-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></wa-progress-ring>
```

### Colors

Link to This Section

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html
<wa-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
>
</wa-progress-ring>
```

### Labels

Link to This Section

Use the default slot to show a label inside the progress ring.

```html
<wa-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</wa-progress-ring>

<br />

<wa-button appearance="filled" circle><wa-icon name="minus" variant="solid" label="Decrease"></wa-icon></wa-button>
<wa-button appearance="filled" circle><wa-icon name="plus" variant="solid" label="Increase"></wa-icon></wa-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — A label to show inside the ring.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `number` | `0` | The current progress as a percentage, 0 to 100. |
| `label` |  | `string` | `''` | A custom label for assistive devices. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `label` | The progress ring label. |
| `track` | The progress ring's track. |
| `indicator` | The progress ring's indicator. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--size` |  | The diameter of the progress ring (cannot be a percentage). |
| `--track-width` |  | The width of the track. |
| `--track-color` |  | The color of the track. |
| `--indicator-width` |  | The width of the indicator. Defaults to the track width. |
| `--indicator-color` |  | The color of the indicator. |
| `--indicator-transition-duration` |  | The duration of the indicator's transition when the value changes. |
