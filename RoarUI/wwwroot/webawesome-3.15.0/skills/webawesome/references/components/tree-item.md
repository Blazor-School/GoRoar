# Tree Item

`<wa-tree-item>`

Stable [Navigation](https://webawesome.com/docs/components/?category=navigation) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Tree items represent a single hierarchical node inside a tree, and can contain nested items that expand and collapse.

This component must be used as a child of [`<wa-tree>`](https://webawesome.com/docs/components/tree). Please see the [Tree docs](https://webawesome.com/docs/components/tree) to see examples of this component in action.

## API

### Importing

If you're using the autoloader or a hosted project, components load on demand — no manual import needed. To cherry-pick a component manually, use one of the following snippets.

\*\*CDN\*\*

Import this component directly from the CDN:

```js
import 'https://ka-f.webawesome.com/webawesome@3.15.0/components/tree-item/tree-item.js';
```

\*\*npm\*\*

After installing Web Awesome via npm, import this component:

```js
import '@awesome.me/webawesome/dist/components/tree-item/tree-item.js';
```

\*\*Self-Hosted\*\*

If you're self-hosting Web Awesome, import this component from your server:

```js
import './webawesome/dist/components/tree-item/tree-item.js';
```

\*\*React\*\*

To import this component for React 18 or below, use the following code:

```js
import WaTreeItem from '@awesome.me/webawesome/dist/react/tree-item/index.js';
```

### Slots

Valid slot names for this component (use exactly these — any other `slot` value is
silently ignored and the element falls back to the default slot):

- `(default)` — The default slot.
- `expand-icon` — The icon to show when the tree item is expanded.
- `collapse-icon` — The icon to show when the tree item is collapsed.

### Attributes & Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `expanded` | `expanded` | Expands the tree item. | `boolean` | `false` |
| `selected` | `selected` | Draws the tree item in a selected state. | `boolean` | `false` |
| `disabled` | `disabled` | Disables the tree item. | `boolean` | `false` |
| `lazy` | `lazy` | Enables lazy loading behavior. | `boolean` | `false` |

### Methods

| Name | Description | Arguments |
| --- | --- | --- |
| `getChildrenItems()` | Gets all the nested tree items in this node. | `{ includeDisabled = true }: { includeDisabled?: boolean }` |

### Events

| Name | Description |
| --- | --- |
| `wa-expand` | Emitted when the tree item expands. |
| `wa-after-expand` | Emitted after the tree item expands and all animations are complete. |
| `wa-collapse` | Emitted when the tree item collapses. |
| `wa-after-collapse` | Emitted after the tree item collapses and all animations are complete. |
| `wa-lazy-change` | Emitted when the tree item's lazy state changes. |
| `wa-lazy-load` | Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree. |

### CSS Custom Properties

| Name | Description | Default |
| --- | --- | --- |
| `--show-duration` | The animation duration when expanding tree items. | `var(--wa-transition-normal)` |
| `--hide-duration` | The animation duration when collapsing tree items. | `var(--wa-transition-normal)` |

### Custom States

| Name | Description | CSS selector |
| --- | --- | --- |
| `disabled` | Applied when the tree item is disabled. | `:state(disabled)` |
| `expanded` | Applied when the tree item is expanded. | `:state(expanded)` |
| `indeterminate` | Applied when the selection is indeterminate. | `:state(indeterminate)` |
| `selected` | Applied when the tree item is selected. | `:state(selected)` |

### CSS Parts

| Name | Description | CSS selector |
| --- | --- | --- |
| `tree-item` | The component's outer wrapper. | `::part(tree-item)` |
| `item` | The tree item's container. This element wraps everything except slotted tree item children. | `::part(item)` |
| `indentation` | The tree item's indentation container. | `::part(indentation)` |
| `expand-button` | The container that wraps the tree item's expand button and spinner. | `::part(expand-button)` |
| `spinner` | The spinner that shows when a lazy tree item is in the loading state. | `::part(spinner)` |
| `spinner__spinner` | The spinner's exported `spinner` part. | `::part(spinner__spinner)` |
| `label` | The tree item's label. | `::part(label)` |
| `children` | The container that wraps the tree item's nested children. | `::part(children)` |
| `checkbox` | The checkbox that shows when using multiselect. | `::part(checkbox)` |
| `checkbox__checkbox` | The checkbox's exported `checkbox` part. | `::part(checkbox__checkbox)` |
| `checkbox__control` | The checkbox's exported `control` part. | `::part(checkbox__control)` |
| `checkbox__checked-icon` | The checkbox's exported `checked-icon` part. | `::part(checkbox__checked-icon)` |
| `checkbox__indeterminate-icon` | The checkbox's exported `indeterminate-icon` part. | `::part(checkbox__indeterminate-icon)` |
| `checkbox__label` | The checkbox's exported `label` part. | `::part(checkbox__label)` |
| `base` | Deprecated. Use the `tree-item` part instead. | `::part(base)` |
| `spinner__base` | Deprecated. Use the `spinner__spinner` part instead. | `::part(spinner__base)` |
| `checkbox__base` | Deprecated. Use the `checkbox__checkbox` part instead. | `::part(checkbox__base)` |

### Dependencies

This component automatically imports the following elements. Sub-dependencies, if any exist, will also be included in this list.

-   [`<wa-checkbox>`](https://webawesome.com/docs/components/checkbox)
-   [`<wa-icon>`](https://webawesome.com/docs/components/icon)
-   [`<wa-spinner>`](https://webawesome.com/docs/components/spinner)