# Tab

**Full documentation:** https://webawesome.com/docs/components/tab


`<wa-tab>`

Stable [Navigation](https://webawesome.com/docs/components/?category=navigation) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Tabs label and activate an individual panel inside a tab group.

This component must be used as a child of [`<wa-tab-group>`](https://webawesome.com/docs/components/tab-group). Please see the [Tab Group docs](https://webawesome.com/docs/components/tab-group) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The tab's label.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `panel` |  | `string` | `''` | The name of the tab panel this tab is associated with. The panel must be located in the same tab group. |
| `disabled` |  | `boolean` | `false` | Disables the tab and prevents selection. |
| `role` |  | `string` | `'tab'` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
