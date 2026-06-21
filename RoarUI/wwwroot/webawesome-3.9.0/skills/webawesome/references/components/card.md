# Card

**Full documentation:** https://webawesome.com/docs/components/card


`<wa-card>`

Stable [Layout](https://webawesome.com/docs/components/?category=layout) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Cards group related content and actions inside a bordered container. Use them to present products, articles, user profiles, or any self-contained unit of information.

```html
<wa-card class="card-overview">
  <img
    slot="media"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small class="wa-caption-s">6 weeks old</small>

  <wa-button slot="footer" variant="brand" pill>More Info</wa-button>
  <wa-rating slot="footer-actions" label="Rating"></wa-rating>
</wa-card>

<style>
  .card-overview {
    width: 300px;
  }
</style>
```

## Examples

Link to This Section

### Basic Card

Link to This Section

Basic cards aren't very exciting, but they can display any content you want them to.

```html
<wa-card class="card-basic">
  This is just a basic card. No media, no header, and no footer. Just your content.
</wa-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

### Card with Header

Link to This Section

Headers can be used to display titles and more. If using SSR, you need to also use the `with-header` attribute to add a header to the card (if not, it is added automatically).

```html
<wa-card class="card-header">
  <h3 slot="header">Header Title</h3>
  This card has a header. You can put all sorts of things in it!
  <wa-button appearance="plain" slot="header-actions">
    <wa-icon name="gear" variant="solid" label="Settings"></wa-icon>
  </wa-button>
</wa-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header h3 {
    margin: 0;
  }
</style>
```

### Card with Footer

Link to This Section

Footers can be used to display actions, summaries, or other relevant content. If using SSR, you need to also use the `with-footer` attribute to add a footer to the card (if not, it is added automatically).

```html
<wa-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <wa-rating slot="footer"></wa-rating>

  <wa-button slot="footer-actions" variant="brand">Preview</wa-button>
</wa-card>

<style>
  .card-footer {
    max-width: 300px;
  }
</style>
```

### Media

Link to This Section

Card media is displayed atop the card and will stretch to fit. If using SSR, you need to also use the `with-media` attribute to add a media section to the card (if not, it is added automatically).

```html
<div class="wa-grid">
  <wa-card class="card-media">
    <div slot="media" class="wa-frame:landscape">
      <img
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
    </div>
    This card has an image of a kitten walking along a pallet.
  </wa-card>
  <wa-card class="card-media">
    <video slot="media" controls>
      <source src="https://uploads.webawesome.com/dog-with-glasses.mp4" />
      <p>Your browser doesn't support HTML video</p>
    </video>
    This card has a video of a dog wearing shades.
  </wa-card>
</div>

<style>
  .card-media {
    max-width: 300px;
  }
</style>
```

### Appearance

Link to This Section

Use the `appearance` attribute to change the card's visual appearance.

```html
<div class="wa-grid">
  <wa-card>
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />
    Outlined (default)
  </wa-card>
  <wa-card appearance="filled-outlined">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />
    Filled-outlined
  </wa-card><wa-card appearance="plain">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />
    Plain
  </wa-card><wa-card appearance="filled">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />
    Filled
  </wa-card><wa-card appearance="accent">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />
    Accent
  </wa-card>
</div>
```

### Orientation

Link to This Section

Set the `orientation` attribute to `horizontal` to create a card with a horizontal, side-by-side layout. Make sure to set a width or maximum width for the media slot. Horizontal cards do not currently contain the header and footer slots.

The `actions` slot is only available for the horizontal orientation

```html
<div class="wa-grid">
  <wa-card orientation="horizontal" class="horizontal-card">
    <img
      slot="media"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />
    This card has a horizontal orientation with media, body, and actions arranged side-by-side.
    <wa-button slot="actions" variant="neutral" appearance="plain"
      ><wa-icon name="ellipsis" label="actions"></wa-icon
    ></wa-button>
  </wa-card>
</div>

<style>
  .horizontal-card {
    img[slot='media'] {
      max-width: 300px;
    }
  }
</style>
```

## Slots

Valid slot names for this component (use exactly these — any other `slot` value
is silently ignored and the element falls back to the default slot):

- `(default)` — The card's main content.
- `header` — An optional header for the card.
- `footer` — An optional footer for the card.
- `media` — An optional media section to render at the start of the card.
- `actions` — An optional actions section to render at the end for the horizontal card.
- `header-actions` — An optional actions section to render in the header of the vertical card.
- `footer-actions` — An optional actions section to render in the footer of the vertical card.

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `appearance` |  | `'accent' \| 'filled' \| 'outlined' \| 'filled-outlined' \| 'plain'` | `'outlined'` | The card's visual appearance. |
| `with-header` | `withHeader` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `header` element so the server-rendered markup includes the header before the component hydrates on the client. |
| `with-media` | `withMedia` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `media` element so the server-rendered markup includes the media before the component hydrates on the client. |
| `with-footer` | `withFooter` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `footer` element so the server-rendered markup includes the footer before the component hydrates on the client. |
| `with-header-actions` | `withHeaderActions` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `header-actions` element so the server-rendered markup includes the media before the component hydrates on the client. |
| `with-footer-actions` | `withFooterActions` | `boolean` | `false` | Only required for SSR. Set to `true` if you're slotting in a `footer-actions` element so the server-rendered markup includes the media before the component hydrates on the client. |
| `orientation` |  | `'horizontal' \| 'vertical'` | `'vertical'` | Renders the card's orientation * |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## CSS Parts

| Part | Description |
| --- | --- |
| `media` | The container that wraps the card's media. |
| `header` | The container that wraps the card's header. |
| `body` | The container that wraps the card's main content. |
| `footer` | The container that wraps the card's footer. |

## CSS Custom Properties

| Property | Default | Description |
| --- | --- | --- |
| `--spacing` | `var(--wa-space-l)` | The amount of space around and between sections of the card. Expects a single value. |
