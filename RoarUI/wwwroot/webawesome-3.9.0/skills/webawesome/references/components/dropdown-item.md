# Dropdown Item

**Full documentation:** https://webawesome.com/docs/components/dropdown-item


`<wa-dropdown-item>`

Stable [Actions](https://webawesome.com/docs/components/?category=actions) [Since 3.0](https://webawesome.com/docs/resources/changelog#wa_300)

Dropdown items represent selectable entries within a dropdown menu, including standard actions, checkable items, and submenu triggers.

This component must be used as a child of [`<wa-dropdown>`](https://webawesome.com/docs/components/dropdown). Please see the [Dropdown docs](https://webawesome.com/docs/components/dropdown) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The dropdown item's label.
- `icon` — An optional icon to display before the label.
- `details` — Additional content or details to display after the label.
- `submenu` — Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `variant` |  | `'danger' \| 'default'` | `'default'` | The type of menu item to render. |
| `value` |  | `string` |  | An optional value for the menu item. This is useful for determining which item was selected when listening to the dropdown's `wa-select` event. |
| `type` |  | `'normal' \| 'checkbox'` | `'normal'` | Set to `checkbox` to make the item a checkbox. |
| `checked` |  | `boolean` | `false` | Set to true to check the dropdown item. Only valid when `type` is `checkbox`. |
| `disabled` |  | `boolean` | `false` | Disables the dropdown item. |
| `submenuOpen` |  | `boolean` | `false` | Whether the submenu is currently open. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `openSubmenu` | Opens the submenu. |  |
| `closeSubmenu` | Closes the submenu. |  |

## Events

| Event | Description |
| --- | --- |
| `blur` | Emitted when the dropdown item loses focus. |
| `focus` | Emitted when the dropdown item gains focus. |

## CSS Parts

| Part | Description |
| --- | --- |
| `checkmark` | The checkmark icon (a `<wa-icon>` element) when the item is a checkbox. |
| `icon` | The container for the icon slot. |
| `label` | The container for the label slot. |
| `details` | The container for the details slot. |
| `submenu-icon` | The submenu indicator icon (a `<wa-icon>` element). |
| `submenu` | The submenu container. |
