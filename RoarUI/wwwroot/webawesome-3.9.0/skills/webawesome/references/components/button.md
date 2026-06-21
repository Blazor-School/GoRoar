# Button

**Full documentation:** https://webawesome.com/docs/components/button


`<wa-button>`

Stable [Actions](https://webawesome.com/docs/components/?category=actions) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Buttons represent actions the user can take, such as submitting a form, opening a dialog, or navigating to another page.

```html
<wa-button>Button</wa-button>
```

## Examples

Link to This Section

### Variants

Link to This Section

Use the `variant` attribute to set the button's [semantic variant](https://webawesome.com/docs/theming-overview#variants).

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button variant="neutral">Neutral</wa-button>
  <wa-button variant="brand">Brand</wa-button>
  <wa-button variant="success">Success</wa-button>
  <wa-button variant="warning">Warning</wa-button>
  <wa-button variant="danger">Danger</wa-button>
</div>
```

### Appearance

Link to This Section

Use the `appearance` attribute to change the button's visual appearance.

```html
<div class="wa-stack">
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="neutral">Accent</wa-button>
    <wa-button appearance="filled-outlined" variant="neutral">Filled-Outlined</wa-button>
    <wa-button appearance="filled" variant="neutral">Filled</wa-button>
    <wa-button appearance="outlined" variant="neutral">Outlined</wa-button>
    <wa-button appearance="plain" variant="neutral">Plain</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="brand">Accent</wa-button>
    <wa-button appearance="filled-outlined" variant="brand">Filled-Outlined</wa-button>
    <wa-button appearance="filled" variant="brand">Filled</wa-button>
    <wa-button appearance="outlined" variant="brand">Outlined</wa-button>
    <wa-button appearance="plain" variant="brand">Plain</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="success">Accent</wa-button>
    <wa-button appearance="filled-outlined" variant="success">Filled-Outlined</wa-button>
    <wa-button appearance="filled" variant="success">Filled</wa-button>
    <wa-button appearance="outlined" variant="success">Outlined</wa-button>
    <wa-button appearance="plain" variant="success">Plain</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="warning">Accent</wa-button>
    <wa-button appearance="filled-outlined" variant="warning">Filled-Outlined</wa-button>
    <wa-button appearance="filled" variant="warning">Filled</wa-button>
    <wa-button appearance="outlined" variant="warning">Outlined</wa-button>
    <wa-button appearance="plain" variant="warning">Plain</wa-button>
  </div>
  <div class="wa-cluster wa-gap-2xs">
    <wa-button appearance="accent" variant="danger">Accent</wa-button>
    <wa-button appearance="filled-outlined" variant="danger">Filled-Outlined</wa-button>
    <wa-button appearance="filled" variant="danger">Filled</wa-button>
    <wa-button appearance="outlined" variant="danger">Outlined</wa-button>
    <wa-button appearance="plain" variant="danger">Plain</wa-button>
  </div>
</div>
```

### Sizes

Link to This Section

Use the `size` attribute to change a button's size.

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button size="xs">Extra Small</wa-button>
  <wa-button size="s">Small</wa-button>
  <wa-button size="m">Medium</wa-button>
  <wa-button size="l">Large</wa-button>
  <wa-button size="xl">Extra Large</wa-button>
</div>
```

### Pill Buttons

Link to This Section

Use the `pill` attribute to give buttons rounded edges.

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button size="xs" pill>Extra Small</wa-button>
  <wa-button size="s" pill>Small</wa-button>
  <wa-button size="m" pill>Medium</wa-button>
  <wa-button size="l" pill>Large</wa-button>
  <wa-button size="xl" pill>Extra Large</wa-button>
</div>
```

### Link Buttons

Link to This Section

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. CMD/CTRL/SHIFT + CLICK) and exposes the `rel`, `target`, and `download` attributes.

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button href="https://example.com/">Link</wa-button>
  <wa-button href="https://example.com/" target="_blank">New Window</wa-button>
  <wa-button href="/assets/images/logo.svg" download="shoelace.svg">Download</wa-button>
</div>
```

### Icon Buttons

Link to This Section

When only an [icon](https://webawesome.com/docs/components/icon) is slotted into the `label` slot, the button becomes an icon button. In this case, it's important to give the icon a label for users with assistive devices. Icon buttons can use any appearance or variant.

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button variant="neutral" appearance="accent"><wa-icon name="house" label="Home"></wa-icon></wa-button>
  <wa-button variant="neutral" appearance="outlined"><wa-icon name="house" label="Home"></wa-icon></wa-button>
  <wa-button variant="neutral" appearance="filled"><wa-icon name="house" label="Home"></wa-icon></wa-button>
  <wa-button variant="neutral" appearance="plain"><wa-icon name="house" label="Home"></wa-icon></wa-button>
</div>
```

### Setting a Custom Width

Link to This Section

As expected, buttons can be given a custom width by setting the `width` CSS property. This is useful for making buttons span the full width of their container on smaller screens.

```html
<div class="wa-stack">
  <wa-button size="xs" style="width: 100%;">Extra Small</wa-button>
  <wa-button size="s" style="width: 100%;">Small</wa-button>
  <wa-button size="m" style="width: 100%;">Medium</wa-button>
  <wa-button size="l" style="width: 100%;">Large</wa-button>
  <wa-button size="xl" style="width: 100%;">Extra Large</wa-button>
</div>
```

### Start & End Decorations

Link to This Section

Use the `start` and `end` slots to add presentational elements like [`<wa-icon>`](https://webawesome.com/docs/components/icon) next to the button label.

```html
<div class="wa-stack">
  <div class="wa-cluster wa-gap-2xs">
    <wa-button size="s">
      <wa-icon slot="start" name="gear"></wa-icon>
      Settings
    </wa-button>

    <wa-button size="s">
      <wa-icon slot="end" name="undo"></wa-icon>
      Refresh
    </wa-button>

    <wa-button size="s">
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      Open
    </wa-button>
  </div>

  <div class="wa-cluster wa-gap-2xs">
    <wa-button>
      <wa-icon slot="start" name="gear"></wa-icon>
      Settings
    </wa-button>

    <wa-button>
      <wa-icon slot="end" name="undo"></wa-icon>
      Refresh
    </wa-button>

    <wa-button>
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      Open
    </wa-button>
  </div>

  <div class="wa-cluster wa-gap-2xs">
    <wa-button size="l">
      <wa-icon slot="start" name="gear"></wa-icon>
      Settings
    </wa-button>

    <wa-button size="l">
      <wa-icon slot="end" name="undo"></wa-icon>
      Refresh
    </wa-button>

    <wa-button size="l">
      <wa-icon slot="start" name="link"></wa-icon>
      <wa-icon slot="end" name="arrow-up-right-from-square"></wa-icon>
      Open
    </wa-button>
  </div>
</div>
```

### Caret

Link to This Section

Use the `with-caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button size="xs" with-caret>Extra Small</wa-button>
  <wa-button size="s" with-caret>Small</wa-button>
  <wa-button size="m" with-caret>Medium</wa-button>
  <wa-button size="l" with-caret>Large</wa-button>
  <wa-button size="xl" with-caret>Extra Large</wa-button>
</div>
```

### Loading

Link to This Section

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

```html
<div class="wa-cluster wa-gap-2xs">
  <wa-button variant="brand" loading>Brand</wa-button>
  <wa-button variant="success" loading>Success</wa-button>
  <wa-button variant="neutral" loading>Neutral</wa-button>
  <wa-button variant="warning" loading>Warning</wa-button>
  <wa-button variant="danger" loading>Danger</wa-button>
</div>
```

### Disabled

Link to This Section

Use the `disabled` attribute to disable a button.

```html
<wa-button variant="brand" disabled>Brand</wa-button>
<wa-button variant="success" disabled>Success</wa-button>
<wa-button variant="neutral" disabled>Neutral</wa-button>
<wa-button variant="warning" disabled>Warning</wa-button>
<wa-button variant="danger" disabled>Danger</wa-button>

<br /><br />

<wa-button href="https://example.com/" disabled>Link</wa-button>
<wa-button href="https://example.com/" target="_blank" disabled>New Window</wa-button>
<wa-button href="/assets/images/logo.svg" download="shoelace.svg" disabled>Download</wa-button>
```

### Styling Buttons

Link to This Section

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `wa-button[variant="brand"]`).

```html
<wa-button class="pink">Pink Button</wa-button>

<style>
  wa-button.pink::part(base) {
    border-radius: 6px;
    border: solid 2px;
    background: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: all var(--wa-transition-slow) var(--wa-transition-easing);
  }

  wa-button.pink::part(base):hover {
    transform: scale(1.05);
  }

  wa-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: translateY(1px);
  }

  wa-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The button's label.
- `start` — An element, such as `<wa-icon>`, placed before the label.
- `end` — An element, such as `<wa-icon>`, placed after the label.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `title` |  | `string` | `''` |  |
| `variant` |  | `'neutral' \| 'brand' \| 'success' \| 'warning' \| 'danger'` | `'neutral'` | The button's theme variant. Defaults to `neutral` if not within another element with a variant. |
| `appearance` |  | `'accent' \| 'filled' \| 'outlined' \| 'filled-outlined' \| 'plain'` | `'accent'` | The button's visual appearance. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | The button's size. |
| `with-caret` | `withCaret` | `boolean` | `false` | Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. |
| `with-start` | `withStart` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `start` element so the server-rendered markup includes the start slot before the component hydrates on the client. |
| `with-end` | `withEnd` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in an `end` element so the server-rendered markup includes the end slot before the component hydrates on the client. |
| `disabled` |  | `boolean` | `false` | Disables the button. |
| `loading` |  | `boolean` | `false` | Draws the button in a loading state. |
| `pill` |  | `boolean` | `false` | Draws a pill-style button with rounded edges. |
| `type` |  | `'button' \| 'submit' \| 'reset'` | `'button'` | The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. |
| `name` |  | `string \| null` | `null` | The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter. This attribute is ignored when `href` is present. |
| `value` |  | `string` |  | The value of the button, submitted as a pair with the button's name as part of the form data, but only when this button is the submitter. This attribute is ignored when `href` is present. |
| `href` |  | `string` |  | When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. |
| `target` |  | `'_blank' \| '_parent' \| '_self' \| '_top'` |  | Tells the browser where to open the link. Only used when `href` is present. |
| `rel` |  | `string \| undefined` |  | When using `href`, this attribute will map to the underlying link's `rel` attribute. |
| `download` |  | `string \| undefined` |  | Tells the browser to download the linked file as this filename. Only used when `href` is present. |
| `formaction` | `formAction` | `string` |  | Used to override the form owner's `action` attribute. |
| `formenctype` | `formEnctype` | `'application/x-www-form-urlencoded' \| 'multipart/form-data' \| 'text/plain'` |  | Used to override the form owner's `enctype` attribute. |
| `formmethod` | `formMethod` | `'post' \| 'get'` |  | Used to override the form owner's `method` attribute. |
| `formnovalidate` | `formNoValidate` | `boolean` |  | Used to override the form owner's `novalidate` attribute. |
| `formtarget` | `formTarget` | `'_self' \| '_blank' \| '_parent' \| '_top' \| string` |  | Used to override the form owner's `target` attribute. |
| `custom-error` | `customError` | `string \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `click` | Simulates a click on the button. |  |
| `focus` | Sets focus on the button. | `options: FocusOptions` |
| `blur` | Removes focus from the button. |  |
| `setCustomValidity` | Do not use this when creating a "Validator". This is intended for end users of components. We track manually defined custom errors so we don't clear them on accident in our validators. | `message: string` |
| `formStateRestoreCallback` | Called when the browser is trying to restore element’s state to state in which case reason is "restore", or when the browser is trying to fulfill autofill on behalf of user in which case reason is "autocomplete". In the case of "restore", state is a string, File, or FormData object previously set as the second argument to setFormValue. | `state: string \| File \| FormData \| null, reason: 'autocomplete' \| 'restore'` |
| `resetValidity` | Reset validity is a way of removing manual custom errors and native validation. |  |

## Events

| Event | Description |
| --- | --- |
| `blur` | Emitted when the button loses focus. |
| `focus` | Emitted when the button gains focus. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## Custom States

| State | Description |
| --- | --- |
| `disabled` | Applied when the button is disabled. |
| `icon-button` | Applied when the button contains only a `<wa-icon>` with no other content. |
| `link` | Applied when the button is rendered as a link (i.e. `href` is set). |
| `loading` | Applied when the button is in the loading state. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
| `start` | The container that wraps the `start` slot. |
| `label` | The button's label. |
| `end` | The container that wraps the `end` slot. |
| `caret` | The button's caret icon, a `<wa-icon>` element. |
| `spinner` | The spinner that shows when the button is in the loading state. |
