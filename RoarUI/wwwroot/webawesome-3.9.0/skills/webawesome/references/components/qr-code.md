# QR Code

**Full documentation:** https://webawesome.com/docs/components/qr-code


`<wa-qr-code>`

Stable [Media](https://webawesome.com/docs/components/?category=media) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

QR codes encode a URL or other short text into a scannable image, rendered client-side using the Canvas API. Use them to share links, contact info, or Wi-Fi credentials that visitors can scan with a phone.

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html
<div class="qr-overview">
  <wa-qr-code value="https://webawesome.com/" label="Scan this code to visit Web Awesome on the web!"></wa-qr-code>
  <br />

  <wa-input maxlength="255" with-clear label="Value">
    <wa-icon slot="start" name="link"></wa-icon>
  </wa-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('wa-qr-code');
  const input = container.querySelector('wa-input');

  customElements.whenDefined('wa-qr-code').then(() => {
    qrCode.updateComplete.then(() => {
      input.value = qrCode.value;
      input.addEventListener('input', () => (qrCode.value = input.value));
    });
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview wa-input {
    margin-top: 1rem;
  }
</style>
```

## Examples

Link to This Section

### Size

Link to This Section

Use the `size` attribute to change the size of the QR code.

```html
<wa-qr-code value="https://webawesome.com/" size="64"></wa-qr-code>
```

### Colors

Link to This Section

The QR code's fill color is determined by the current text color. To change it, set the CSS `color` property on the host element or an ancestor element.

The canvas is always transparent, so use the `background` or `background-color` CSS property on the host element to set a background color.

A _quiet zone_ is the blank space around a QR code that helps scanners detect it more reliably. Use the `padding` CSS property on the host element to add one.

```html
<wa-qr-code
  value="https://webawesome.com/"
  style="
    color: var(--wa-color-indigo-20);
    background-color: var(--wa-color-indigo-90);
    border-radius: var(--wa-border-radius-m);
    padding: 1rem;
  "
></wa-qr-code>
```

#### Corner Color

Link to This Section

You can change the color of the corners to be different from the main element with the `--corner-color` custom property.

```html
<wa-qr-code value="https://webawesome.com/" style="--corner-color: var(--wa-color-brand)"></wa-qr-code>
```

### Radius

Link to This Section

Create a rounded effect with the `radius` attribute.

```html
<wa-qr-code value="https://webawesome.com/" radius="0.5"></wa-qr-code>
```

### Error Correction

Link to This Section

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html
<div class="qr-error-correction">
  <wa-qr-code value="https://webawesome.com/" error-correction="L"></wa-qr-code>
  <wa-qr-code value="https://webawesome.com/" error-correction="M"></wa-qr-code>
  <wa-qr-code value="https://webawesome.com/" error-correction="Q"></wa-qr-code>
  <wa-qr-code value="https://webawesome.com/" error-correction="H"></wa-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

### Images

Link to This Section

Use the `image` attribute to add a logo or image to the center of the QR code. When using an image, the error correction level will automatically be set to `H` to ensure the code remains scannable.

```html
<wa-qr-code value="https://webawesome.com/" image="/assets/images/logos/wa-avatar4x.png"></wa-qr-code>
```

### Image Coverage

Link to This Section

Use the `image-coverage` attribute to control how much of the QR code the image is allowed to cover, from `0` to `1`. The default is `0.5`.

The higher the `image-coverage` value, the harder it will be for QR readers to scan. For example, `1.0` usually makes the QR code unreadable.

```html
<div class="qr-ec-cover">
  <wa-qr-code
    value="https://fontawesome.com/"
    image="/assets/images/logos/fa-avatar4x.png"
    image-coverage="0.3"
  ></wa-qr-code>
  <wa-qr-code
    value="https://webawesome.com/"
    image="/assets/images/logos/wa-avatar4x.png"
    image-coverage="0.6"
  ></wa-qr-code>
  <wa-qr-code
    value="https://build.awesome.me/"
    image="/assets/images/logos/ba-avatar4x.png"
    image-coverage="0.9"
  ></wa-qr-code>
</div>

<style>
  .qr-ec-cover {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
</style>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `value` |  | `string` | `''` | The QR code's value. |
| `label` |  | `string` | `''` | The label for assistive devices to announce. If unspecified, the value will be used instead. |
| `size` |  | `number` | `128` | The size of the QR code, in pixels. |
| `fill` |  | `string` | `''` | The fill color. This can be any valid CSS color, but not a CSS custom property. |
| `background` |  | `string` | `''` | The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property. |
| `radius` |  | `number` | `0` | The edge radius of each module. Must be between 0 and 0.5. |
| `error-correction` | `errorCorrection` | `'L' \| 'M' \| 'Q' \| 'H'` | `'H'` | The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html) |
| `image` |  | `string \| null` | `null` |  |
| `image-background` | `imageBackground` | `string \| null` | `null` |  |
| `image-coverage` | `imageCoverage` | `number \| null` | `null` |  |
| `image-padding` | `imagePadding` | `number \| null` | `null` |  |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `base` | The component's base wrapper. |
