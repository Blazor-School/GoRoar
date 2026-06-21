# Option

**Full documentation:** https://webawesome.com/docs/components/option


`<wa-option>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Options represent the individual choices inside a select or similar form control. Each option holds a value and the label shown to the user.

This component must be used as a child of [`<wa-select>`](https://webawesome.com/docs/components/select). Please see the [Select docs](https://webawesome.com/docs/components/select) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The option's label.
- `start` — An element, such as `<wa-icon>`, placed before the label.
- `end` — An element, such as `<wa-icon>`, placed after the label.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `string` | `''` | The option's value. When selected, the containing form control will receive this value. The value must be unique from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing multiple values. |
| `disabled` |  | `boolean` | `false` | Draws the option in a disabled state, preventing selection. |
| `selected` | `defaultSelected` | `boolean` | `false` | Selects an option initially. |
| `label` |  | `string` |  | The option’s plain text label. Usually automatically generated, but can be useful to provide manually for cases involving complex content. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Custom States

| State | Description |
| --- | --- |
| `current` | The user has keyed into the option, but hasn't selected it yet (shows a highlight) |
| `selected` | The option is selected and has aria-selected="true" |
| `disabled` | Applied when the option is disabled |
| `hover` | Like `:hover` but works while dragging in Safari |

## CSS Parts

| Part | Description |
| --- | --- |
| `checked-icon` | The checked icon, a `<wa-icon>` element. |
| `label` | The option's label. |
| `start` | The container that wraps the `start` slot. |
| `end` | The container that wraps the `end` slot. |
