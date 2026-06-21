# Details

**Full documentation:** https://webawesome.com/docs/components/details


`<wa-details>`

Stable [Layout](https://webawesome.com/docs/components/?category=layout) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Details display a brief summary and expand to reveal additional content. Use them to progressively disclose information, group related FAQs, or hide advanced options.

```html
<wa-details summary="Toggle Me">
  Click the summary to expand and collapse the details component. You can put any content in here that you want to
  reveal on demand!
</wa-details>
```

## Examples

Link to This Section

### Expanded Initially

Link to This Section

Use the `open` attribute to expand the details initially.

```html
<wa-details summary="Toggle Me" open>
  This details component is expanded by default. Users can click the summary to collapse it if they want to hide the
  content.
</wa-details>
```

### Disabled

Link to This Section

Use the `disabled` attribute to prevent the details from expanding.

```html
<wa-details summary="Disabled" disabled>
  This content can't be seen because the details component is disabled. Try removing the disabled attribute to reveal
  what's inside!
</wa-details>
```

### Customizing the Summary Icon

Link to This Section

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `icon` part as shown below.

```html
<wa-details summary="Toggle Me" class="custom-icons">
  <wa-icon name="square-plus" slot="expand-icon" variant="regular"></wa-icon>
  <wa-icon name="square-minus" slot="collapse-icon" variant="regular"></wa-icon>

  This example uses custom plus and minus icons for expanding and collapsing. You can use any icon you want to match the
  look and feel of your app.
</wa-details>

<style>
  /* Disable the expand/collapse animation */
  wa-details.custom-icons::part(icon) {
    rotate: none;
  }
</style>
```

### Icon Position

Link to This Section

The default position for the expand and collapse icons is at the end of the summary. Set the `icon-placement` attribute to `start` to place the icon at the start of the summary.

```html
<div class="wa-stack">
  <wa-details summary="Start" icon-placement="start">
    The expand/collapse icon is at the start of the summary. This is a common pattern that feels familiar to users who
    are used to tree views and file explorers.
  </wa-details>
  <wa-details summary="End" icon-placement="end">
    The expand/collapse icon is at the end of the summary. This is the default placement and works great for most use
    cases.
  </wa-details>
</div>
```

### HTML in Summary

Link to This Section

To use HTML in the summary, use the `summary` slot. Links and other interactive elements will still retain their behavior:

```html
<wa-details>
  <span slot="summary">
    Some text
    <a href="https://webawesome.com" target="_blank">a link</a>
    more text
  </span>

  You can use the summary slot to put HTML in the summary, including links and other interactive elements. Pretty neat,
  right?
</wa-details>
```

### Right-to-Left Languages

Link to This Section

The details component, including its `icon-placement`, automatically adapts to right-to-left languages:

```html
<div class="wa-stack">
  <wa-details summary="تبديلني" lang="ar" dir="rtl">
    استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
  </wa-details>
  <wa-details summary="تبديلني" lang="ar" dir="rtl" icon-placement="start">
    استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
  </wa-details>
</div>
```

### Appearance

Link to This Section

Use the `appearance` attribute to change the element’s visual appearance.

```html
<div class="wa-stack">
  <wa-details summary="Outlined (default)">
    This is the default outlined appearance. It has a subtle border that helps it stand out without being too flashy.
  </wa-details>
  <wa-details summary="Filled-outlined" appearance="filled-outlined">
    The filled-outlined appearance combines a filled header with an outlined body. It gives the summary a bit more
    visual weight while keeping the content area clean.
  </wa-details>
  <wa-details summary="Filled" appearance="filled">
    The filled appearance adds a background color to the entire component. Use this when you want the details to really
    pop on the page.
  </wa-details>
  <wa-details summary="Plain" appearance="plain">
    No bells and whistles on this one. The plain appearance strips away borders and backgrounds for a minimalist look.
  </wa-details>
</div>
```

### Grouping Details

Link to This Section

Use the `name` attribute to create accordion-like behavior where only one details element with the same name can be open at a time. This matches the behavior of native `<details>` elements.

```html
<div class="wa-stack">
  <wa-details name="group-1" summary="Section 1" open>
    This is the first section of the accordion. When you open another section, this one will close automatically. Give
    it a try!
  </wa-details>

  <wa-details name="group-1" summary="Section 2">
    This is the second section. Notice how the first section closed when you opened this one? That's the accordion
    behavior in action, powered by the shared name attribute.
  </wa-details>

  <wa-details name="group-1" summary="Section 3">
    And here's the third section. You can have as many sections as you need — just make sure they all share the same
    name and only one will be open at a time.
  </wa-details>
</div>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The details' main content.
- `summary` — The details' summary. Alternatively, you can use the `summary` attribute.
- `expand-icon` — Optional expand icon to use instead of the default. Works best with `<wa-icon>`.
- `collapse-icon` — Optional collapse icon to use instead of the default. Works best with `<wa-icon>`.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `open` |  | `boolean` | `false` | Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you can use the `show()` and `hide()` methods and this attribute will reflect the details' open state. |
| `summary` |  | `string` |  | The summary to show in the header. If you need to display HTML, use the `summary` slot instead. |
| `name` |  | `string` |  | Groups related details elements. When one opens, others with the same name will close. |
| `disabled` |  | `boolean` | `false` | Disables the details so it can't be toggled. |
| `appearance` |  | `'filled' \| 'outlined' \| 'filled-outlined' \| 'plain'` | `'outlined'` | The element's visual appearance. |
| `icon-placement` | `iconPlacement` | `'start' \| 'end'` | `'end'` | The location of the expand/collapse icon. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `show` | Shows the details. |  |
| `hide` | Hides the details |  |

## Events

| Event | Description |
| --- | --- |
| `wa-show` | Emitted when the details opens. |
| `wa-after-show` | Emitted after the details opens and all animations are complete. |
| `wa-hide` | Emitted when the details closes. |
| `wa-after-hide` | Emitted after the details closes and all animations are complete. |

## Custom States

| State | Description |
| --- | --- |
| `animating` | Applied when the details is animating expand/collapse. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The inner `<details>` element used to render the component. Styles you apply to the component are automatically applied to this part, so you usually don't need to deal with it unless you need to set the `display` property. |
| `header` | The header that wraps both the summary and the expand/collapse icon. |
| `summary` | The container that wraps the summary. |
| `icon` | The container that wraps the expand/collapse icons. |
| `content` | The details content. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--spacing` |  | The amount of space around and between the details' content. Expects a single value. |
| `--show-duration` | `var(--wa-transition-normal)` | The show duration to use when applying built-in animation classes. |
| `--hide-duration` | `var(--wa-transition-normal)` | The hide duration to use when applying built-in animation classes. |
