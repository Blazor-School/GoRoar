# Divider

**Full documentation:** https://webawesome.com/docs/components/divider


`<wa-divider>`

Stable [Layout](https://webawesome.com/docs/components/?category=layout) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Dividers visually separate or group adjacent elements with a horizontal or vertical line. Use them to establish rhythm and hierarchy within menus, toolbars, and layouts.

```html
<wa-divider></wa-divider>
```

## Examples

Link to This Section

### Width

Link to This Section

Use the `--width` custom property to change the width of the divider.

```html
<wa-divider style="--width: 4px;"></wa-divider>
```

### Color

Link to This Section

Use the `--color` custom property to change the color of the divider.

```html
<wa-divider style="--color: tomato;"></wa-divider>
```

### Spacing

Link to This Section

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html
<div class="wa-text-center">
  Above
  <wa-divider style="--spacing: 2rem;"></wa-divider>
  Below
</div>
```

### Orientation

Link to This Section

The default orientation for dividers is `horizontal`. Set `orientation` attribute to `vertical` to draw a vertical divider. The divider will span the full height of its [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) or [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid) container.

```html
<div style="display: flex; align-items: center;">
  First
  <wa-divider orientation="vertical"></wa-divider>
  Middle
  <wa-divider orientation="vertical"></wa-divider>
  Last
</div>
```

If your container isn't Flexbox or CSS Grid, you may need to set an explicit height for the divider.

### Dropdown Dividers

Link to This Section

Use dividers in [dropdowns](https://webawesome.com/docs/components/dropdown) to visually group dropdown items.

```html
<wa-dropdown style="max-width: 200px;">
  <wa-button appearance="filled" slot="trigger" with-caret>Menu</wa-button>
  <wa-dropdown-item value="1">Option 1</wa-dropdown-item>
  <wa-dropdown-item value="2">Option 2</wa-dropdown-item>
  <wa-dropdown-item value="3">Option 3</wa-dropdown-item>
  <wa-divider></wa-divider>
  <wa-dropdown-item value="4">Option 4</wa-dropdown-item>
  <wa-dropdown-item value="5">Option 5</wa-dropdown-item>
  <wa-dropdown-item value="6">Option 6</wa-dropdown-item>
</wa-dropdown>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `orientation` |  | `'horizontal' \| 'vertical'` | `'horizontal'` | Sets the divider's orientation. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--color` |  | The color of the divider. |
| `--width` |  | The width of the divider. |
| `--spacing` |  | The spacing of the divider. |
