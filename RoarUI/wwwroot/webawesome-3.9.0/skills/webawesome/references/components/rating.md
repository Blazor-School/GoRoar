# Rating

**Full documentation:** https://webawesome.com/docs/components/rating


`<wa-rating>`

Stable [Forms](https://webawesome.com/docs/components/?category=forms) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Ratings display a numeric score as a row of selectable symbols, typically stars. Use them to capture quick feedback or show an average rating for a product or piece of content.

```html
<wa-rating label="Rating"></wa-rating>
```

This component works with standard `<form>` elements. Please refer to the section on [form controls](https://webawesome.com/docs/form-controls) to learn more about form submission and client-side validation.

## Examples

Link to This Section

### Labels

Link to This Section

Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the `label` attribute.

```html
<wa-rating label="Rate this component"></wa-rating>
```

### Maximum Value

Link to This Section

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html
<wa-rating label="Rating" max="3"></wa-rating>
```

### Precision

Link to This Section

Use the `precision` attribute to let users select fractional ratings.

```html
<wa-rating label="Rating" precision="0.5" value="2.5"></wa-rating>
```

### Sizing

Link to This Section

Use the `size` attribute to adjust the size of the rating.

```html
<wa-rating label="Rating" size="xs"></wa-rating><br />
<wa-rating label="Rating" size="s"></wa-rating><br />
<wa-rating label="Rating" size="m"></wa-rating><br />
<wa-rating label="Rating" size="l"></wa-rating><br />
<wa-rating label="Rating" size="xl"></wa-rating>
```

For more granular sizing, you can use the `font-size` property.

```html
<wa-rating label="Rating" style="font-size: 2rem;"></wa-rating>
```

### Readonly

Link to This Section

Use the `readonly` attribute to display a rating that users can't change.

```html
<wa-rating label="Rating" readonly value="3"></wa-rating>
```

### Disabled

Link to This Section

Use the `disabled` attribute to disable the rating.

```html
<wa-rating label="Rating" disabled value="3"></wa-rating>
```

### Detecting Hover

Link to This Section

Use the `wa-hover` event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.

The event has a payload with `phase` and `value` properties. The `phase` property tells when hovering starts, moves to a new value, and ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.

```html
<div class="detect-hover">
  <wa-rating label="Rating"></wa-rating>
  <span></span>
</div>

<script>
  const rating = document.querySelector('.detect-hover > wa-rating');
  const span = rating.nextElementSibling;
  const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];

  rating.addEventListener('wa-hover', event => {
    span.textContent = terms[event.detail.value];

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      span.textContent = '';
    }
  });
</script>

<style>
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--wa-border-radius-m);
    background: var(--wa-color-neutral-fill-loud);
    color: var(--wa-color-neutral-on-loud);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
</style>
```

### Custom Icons

Link to This Section

You can provide custom icons by passing a function to the `getSymbol` property.

```html
<wa-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></wa-rating>

<script type="module">
  const rating = document.querySelector('.rating-hearts');

  await customElements.whenDefined('wa-rating');
  await rating.updateComplete;

  rating.getSymbol = () => '<wa-icon name="heart" variant="solid"></wa-icon>';
</script>
```

### Value-based Icons

Link to This Section

You can also use the `getSymbol` property to render different icons based on value and/or whether the icon is currently selected.

```html
<wa-rating label="Rating" class="rating-emojis"></wa-rating>

<script type="module">
  const rating = document.querySelector('.rating-emojis');

  await customElements.whenDefined('wa-rating');
  await rating.updateComplete;

  rating.getSymbol = (value, isSelected) => {
    const icons = ['face-angry', 'face-frown', 'face-meh', 'face-smile', 'face-laugh'];
    return `<wa-icon name="${icons[value - 1]}"></wa-icon>`;
  };
</script>
```

### Required

Link to This Section

Use the `required` attribute to make the rating mandatory. The form will not submit if the user hasn't selected a value.

```html
<form class="rating-required">
  <wa-rating label="Rating" required></wa-rating>
  <br /><br />
  <wa-button appearance="filled" type="submit">Submit</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.rating-required');

  await Promise.all([customElements.whenDefined('wa-button'), customElements.whenDefined('wa-rating')]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

### Custom Validity

Link to This Section

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html
<form class="rating-custom-validity">
  <wa-rating label="Rating"></wa-rating>
  <br /><br />
  <wa-button appearance="filled" type="submit">Submit</wa-button>
</form>

<script type="module">
  const form = document.querySelector('.rating-custom-validity');
  const rating = form.querySelector('wa-rating');
  const errorMessage = 'Please rate at least 3 stars!';

  customElements.whenDefined('wa-rating').then(async () => {
    await rating.updateComplete;
    rating.setCustomValidity(errorMessage);
  });

  rating.addEventListener('change', () => {
    rating.setCustomValidity(rating.value >= 3 ? '' : errorMessage);
  });

  await Promise.all([customElements.whenDefined('wa-button'), customElements.whenDefined('wa-rating')]).then(() => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert('All fields are valid!');
    });
  });
</script>
```

### Form Submission

Link to This Section

Ratings can be used in forms just like native form controls. The rating's `name` and `value` will be included in the form data when submitted.

```html
<form class="rating-form-submission" action="about:blank" method="get" target="_blank">
  <label style="display: block; margin-bottom: 0.5rem;">How would you rate your experience?</label>
  <wa-rating name="rating" label="Rating" required></wa-rating>
  <br /><br />
  <wa-button type="submit">Submit</wa-button>
  <wa-button appearance="filled" type="reset" variant="neutral">Reset</wa-button>
</form>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `role` |  | `string` | `'slider'` |  |
| `name` |  | `string \| null` | `null` | The name of the rating, submitted as a name/value pair with form data. |
| `label` |  | `string` | `''` | A label that describes the rating to assistive devices. |
| `value` |  | `number` | `0` | The current rating. |
| `default-value` | `defaultValue` | `number` | `0` | The default value of the form control. Used to reset the rating to its initial value. |
| `max` |  | `number` | `5` | The highest rating to show. |
| `precision` |  | `number` | `1` | The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this attribute to `0.5`. |
| `readonly` |  | `boolean` | `false` | Makes the rating readonly. |
| `disabled` |  | `boolean` | `false` | Disables the rating. |
| `required` |  | `boolean` | `false` | Makes the rating a required field. |
| `getSymbol` |  | `(value: number, isSelected: boolean) => string` |  | A function that customizes the symbol to be rendered. The first and only argument is the rating's current value. The function should return a string containing trusted HTML of the symbol to render at the specified value. Works well with `<wa-icon>` elements. |
| `size` |  | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'small' \| 'medium' \| 'large'` | `'m'` | The component's size. |
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
| `change` | Emitted when the rating's value changes. |
| `wa-hover` | Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value. |
| `wa-invalid` | Emitted when the form control has been checked for validity and its constraints aren't satisfied. |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--symbol-color` |  | The inactive color for symbols. |
| `--symbol-color-active` |  | The active color for symbols. |
| `--symbol-spacing` |  | The spacing to use around symbols. |
