# Tree Item

**Full documentation:** https://webawesome.com/docs/components/tree-item


`<wa-tree-item>`

Stable [Navigation](https://webawesome.com/docs/components/?category=navigation) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Tree items represent a single hierarchical node inside a tree, and can contain nested items that expand and collapse.

This component must be used as a child of [`<wa-tree>`](https://webawesome.com/docs/components/tree). Please see the [Tree docs](https://webawesome.com/docs/components/tree) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The default slot.
- `expand-icon` — The icon to show when the tree item is expanded.
- `collapse-icon` — The icon to show when the tree item is collapsed.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `expanded` |  | `boolean` | `false` | Expands the tree item. |
| `selected` |  | `boolean` | `false` | Draws the tree item in a selected state. |
| `disabled` |  | `boolean` | `false` | Disables the tree item. |
| `lazy` |  | `boolean` | `false` | Enables lazy loading behavior. |
| `tabindex` | `tabIndex` | `number` | `-1` |  |
| `role` |  | `string` | `'treeitem'` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `getChildrenItems` | Gets all the nested tree items in this node. | `{ includeDisabled = true }: { includeDisabled?: boolean }` |

## Events

| Event | Description |
| --- | --- |
| `wa-expand` | Emitted when the tree item expands. |
| `wa-after-expand` | Emitted after the tree item expands and all animations are complete. |
| `wa-collapse` | Emitted when the tree item collapses. |
| `wa-after-collapse` | Emitted after the tree item collapses and all animations are complete. |
| `wa-lazy-change` | Emitted when the tree item's lazy state changes. |
| `wa-lazy-load` | Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. |

## Custom States

| State | Description |
| --- | --- |
| `disabled` | Applied when the tree item is disabled. |
| `expanded` | Applied when the tree item is expanded. |
| `indeterminate` | Applied when the selection is indeterminate. |
| `selected` | Applied when the tree item is selected. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `item` | The tree item's container. This element wraps everything except slotted tree item children. |
| `indentation` | The tree item's indentation container. |
| `expand-button` | The container that wraps the tree item's expand button and spinner. |
| `spinner` | The spinner that shows when a lazy tree item is in the loading state. |
| `spinner__base` | The spinner's base part. |
| `label` | The tree item's label. |
| `children` | The container that wraps the tree item's nested children. |
| `checkbox` | The checkbox that shows when using multiselect. |
| `checkbox__base` | The checkbox's exported `base` part. |
| `checkbox__control` | The checkbox's exported `control` part. |
| `checkbox__checked-icon` | The checkbox's exported `checked-icon` part. |
| `checkbox__indeterminate-icon` | The checkbox's exported `indeterminate-icon` part. |
| `checkbox__label` | The checkbox's exported `label` part. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--show-duration` | `var(--wa-transition-normal)` | The animation duration when expanding tree items. |
| `--hide-duration` | `var(--wa-transition-normal)` | The animation duration when collapsing tree items. |
