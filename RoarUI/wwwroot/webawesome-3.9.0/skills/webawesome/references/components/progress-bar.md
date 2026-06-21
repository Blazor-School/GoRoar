# Progress Bar

**Full documentation:** https://webawesome.com/docs/components/progress-bar


`<wa-progress-bar>`

Stable [Feedback](https://webawesome.com/docs/components/?category=feedback) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Progress bars show how far along an ongoing operation is as a horizontal fill. Use them for file uploads, multi-step flows, or any task with measurable progress.

```html
<wa-progress-bar value="40"></wa-progress-bar>
```

## Examples

Link to This Section

### Labels

Link to This Section

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html
<wa-progress-bar value="50" label="Upload progress"></wa-progress-bar>
```

### Custom Height

Link to This Section

Use the `--track-height` custom property to set the progress bar's height.

```html
<wa-progress-bar value="50" style="--track-height: 6px;"></wa-progress-bar>
```

### Showing Values

Link to This Section

Use the default slot to show a value.

```html
<div class="wa-stack">
  <wa-progress-bar value="50" id="progress-bar-demo">50%</wa-progress-bar>

  <div>
    <wa-button pill appearance="filled">
      <wa-icon name="minus" label="Decrease"></wa-icon>
    </wa-button>
    <wa-button pill appearance="filled">
      <wa-icon name="plus" label="Increase"></wa-icon>
    </wa-button>
  </div>
</div>

<script>
  const progressBar = document.querySelector('#progress-bar-demo');
  const subtractButton = document.querySelector('wa-button:has(wa-icon[name="minus"])');
  const addButton = document.querySelector('wa-button:has(wa-icon[name="plus"])');

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

### Indeterminate

Link to This Section

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html
<wa-progress-bar indeterminate></wa-progress-bar>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — A label to show inside the progress indicator.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `number` | `0` | The current progress as a percentage, 0 to 100. |
| `indeterminate` |  | `boolean` | `false` | When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. |
| `label` |  | `string` | `''` | A custom label for assistive devices. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `indicator` | The progress bar's indicator. |
| `label` | The progress bar's label. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--track-height` | `1rem` | The color of the track. |
| `--track-color` | `var(--wa-color-neutral-fill-normal)` | The color of the track. |
| `--indicator-color` | `var(--wa-color-brand-fill-loud)` | The color of the indicator. |
