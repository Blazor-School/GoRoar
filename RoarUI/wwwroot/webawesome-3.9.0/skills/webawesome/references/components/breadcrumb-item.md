# Breadcrumb Item

**Full documentation:** https://webawesome.com/docs/components/breadcrumb-item


`<wa-breadcrumb-item>`

Stable [Navigation](https://webawesome.com/docs/components/?category=navigation) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Breadcrumb items represent individual links inside a breadcrumb, typically one per level of the site hierarchy.

This component must be used as a child of [`<wa-breadcrumb>`](https://webawesome.com/docs/components/breadcrumb). Please see the [Breadcrumb docs](https://webawesome.com/docs/components/breadcrumb) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The breadcrumb item's label.
- `start` — An element, such as `<wa-icon>`, placed before the label.
- `end` — An element, such as `<wa-icon>`, placed after the label.
- `separator` — The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<wa-breadcrumb>` instead.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `href` |  | `string \| undefined` |  | Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered internally. When unset, a button will be rendered instead. |
| `target` |  | `'_blank' \| '_parent' \| '_self' \| '_top' \| undefined` |  | Tells the browser where to open the link. Only used when `href` is set. |
| `rel` |  | `string` | `'noreferrer noopener'` | The `rel` attribute to use on the link. Only used when `href` is set. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `label` | The breadcrumb item's label. |
| `start` | The container that wraps the `start` slot. |
| `end` | The container that wraps the `end` slot. |
| `separator` | The container that wraps the separator. |
