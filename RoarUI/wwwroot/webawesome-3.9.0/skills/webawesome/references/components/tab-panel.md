# Tab Panel

**Full documentation:** https://webawesome.com/docs/components/tab-panel


`<wa-tab-panel>`

Stable [Navigation](https://webawesome.com/docs/components/?category=navigation) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Tab panels hold the content shown for a single tab inside a tab group.

This component must be used as a child of [`<wa-tab-group>`](https://webawesome.com/docs/components/tab-group). Please see the [Tab Group docs](https://webawesome.com/docs/components/tab-group) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The tab panel's content.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `name` |  | `string` | `''` | The tab panel's name. |
| `active` |  | `boolean` | `false` | When true, the tab panel will be shown. |
| `role` |  | `string` | `'tabpanel'` |  |
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
| `--padding` |  | The tab panel's padding. |
