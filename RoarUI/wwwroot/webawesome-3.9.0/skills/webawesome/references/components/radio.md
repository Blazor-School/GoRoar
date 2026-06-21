# Radio

**Full documentation:** https://webawesome.com/docs/components/radio


`<wa-radio>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Radios represent a single option within a mutually exclusive set. Use them inside a radio group when users must pick exactly one choice from a small list.

This component must be used as a child of [`<wa-radio-group>`](https://webawesome.com/docs/components/radio-group). Please see the [Radio Group docs](https://webawesome.com/docs/components/radio-group) to see examples of this component in action.

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The radio's label.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `string` |  | The radio's value. When selected, the radio group will receive this value. |
| `appearance` |  | `'default' \| 'button'` | `'default'` | The radio's visual appearance. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` |  | The radio's size. When used inside a radio group, the size will be determined by the radio group's size, which will override this attribute. |
| `disabled` |  | `boolean` | `false` | Disables the radio. |
| `name` |  | `string \| null` | `null` | The name of the input, submitted as a name/value pair with form data. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `blur` | Emitted when the control loses focus. |
| `focus` | Emitted when the control gains focus. |

## Custom States

| State | Description |
| --- | --- |
| `checked` | Applied when the control is checked. |
| `disabled` | Applied when the control is disabled. |

## CSS Parts

| Part | Description |
| --- | --- |
| `control` | The circular container that wraps the radio's checked state. |
| `checked-icon` | The checked icon. |
| `label` | The container that wraps the radio's label. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--checked-icon-color` |  | The color of the checked icon. |
| `--checked-icon-scale` |  | The size of the checked icon relative to the radio. |
