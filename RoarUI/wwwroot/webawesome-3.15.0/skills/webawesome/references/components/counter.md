# Counter

`<wa-counter>`

Experimental [Helpers](https://webawesome.com/docs/components/?category=helpers) [Since 3.15](https://webawesome.com/docs/resources/changelog#wa_3150)

Counters count down to a date or up from one, ticking through years, months, days, and smaller units. Use them for launch countdowns, sale timers, and showing how long something has been running.

```html
<!-- 53 hours -->
<wa-counter duration="190800000" label="Time until launch" style="font-size: var(--wa-font-size-2xl);"></wa-counter>
```

**Always use ISO 8601 date strings.**  
Ambiguous formats like `03/04/2020` can be read as March 4 or April 3 depending on the user's browser and locale. A valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) parses the same for every client.

## API

### Importing

If you're using the autoloader or a hosted project, components load on demand — no manual import needed. To cherry-pick a component manually, use one of the following snippets.

\*\*CDN\*\*

Import this component directly from the CDN:

```js
import 'https://ka-f.webawesome.com/webawesome@3.15.0/components/counter/counter.js';
```

\*\*npm\*\*

After installing Web Awesome via npm, import this component:

```js
import '@awesome.me/webawesome/dist/components/counter/counter.js';
```

\*\*Self-Hosted\*\*

If you're self-hosting Web Awesome, import this component from your server:

```js
import './webawesome/dist/components/counter/counter.js';
```

\*\*React\*\*

To import this component for React 18 or below, use the following code:

```js
import WaCounter from '@awesome.me/webawesome/dist/react/counter/index.js';
```

### Slots

Valid slot names for this component (use exactly these — any other `slot` value is
silently ignored and the element falls back to the default slot):

- `years` — A custom label for years.
- `months` — A custom label for months.
- `days` — A custom label for days.
- `hours` — A custom label for hours.
- `minutes` — A custom label for minutes.
- `seconds` — A custom label for seconds.
- `finished` — Content to show in place of the units when a countdown is at zero, including one whose date had already passed.

### Attributes & Properties

| Property | Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| `date` | `date` | The date to count down to, or up from. When passing a string, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). When omitted, the counter counts down from `duration`, or up from the moment it starts when `direction` is `up`. | `Date \| string` | — |
| `duration` | `duration` | The number of milliseconds to count down from, starting when the counter is added to the page. Changing it starts the countdown over. Ignored when `date` is set or `direction` is `up`. | `number` | — |
| `direction` | `direction` | The direction to count. Use `down` to count down to the date and `up` to count up from it. | `'down' \| 'up'` | `'down'` |
| `label` | `label` | A label that describes the counter to assistive devices. | `string` | `''` |
| `largestUnit` | `largest-unit` | The largest unit to show. Time beyond it rolls up into it, so two days show as 48 hours when this is `hours`. Units at zero ahead of the first non-zero unit are hidden unless `without-labels` is set. Falls back to the default range when either unit is invalid or the smallest unit is larger than the largest. | `CounterUnit` | `'days'` |
| `smallestUnit` | `smallest-unit` | The smallest unit to show. Time below it is dropped. Falls back to the default range when either unit is invalid or the smallest unit is larger than the largest. | `CounterUnit` | `'seconds'` |
| `format` | `format` | The formatting style of the unit labels. | `'long' \| 'short' \| 'narrow'` | `'long'` |
| `withoutLabels` | `without-labels` | Hides the unit labels. | `boolean` | `false` |
| `delimiter` | `delimiter` | Text to show between units, such as `:`. | `string` | `''` |
| `paused` | `paused` | Pauses the counter. When it's removed, counting continues from the time shown. | `boolean` | `false` |
| `valueFormatter` | — | A custom formatting function to apply to each unit's value. It receives the value and its unit. Screen readers still read the unformatted value. Must be set with JavaScript. Property only. | `(value: number, unit: CounterUnit) => string` | — |

### Events

| Name | Description |
| --- | --- |
| `wa-finish` | Emitted when a running countdown reaches zero. Not emitted when the date had already passed. |

### Custom States

| Name | Description | CSS selector |
| --- | --- | --- |
| `finished` | Applied when a countdown is at zero, including one whose date had already passed. | `:state(finished)` |

### CSS Parts

| Name | Description | CSS selector |
| --- | --- | --- |
| `unit` | The container that wraps each unit's value and label. | `::part(unit)` |
| `value` | Each unit's value. | `::part(value)` |
| `label` | Each unit's label. | `::part(label)` |
| `delimiter` | The text shown between units. | `::part(delimiter)` |

### SSR

Learn more about [Server-Side Rendering (SSR)](https://webawesome.com/docs/ssr).

`<wa-counter>` renders zeros during SSR and doesn't start counting until it hydrates on the client, because the server can't know the user's clock.

## Examples

### Date

Set the `date` attribute to an ISO 8601 string to count down to that moment. An invalid date shows zeros.

```html
<wa-counter date="2040-01-01T00:00:00Z" largest-unit="years" label="Time until 2040"></wa-counter>
```

To count down to a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, set the `date` property with JavaScript instead.

### Duration

Set the `duration` attribute to a number of milliseconds to count down from the moment the counter is added to the page. Use it for a countdown that isn't tied to a moment in time, such as a quiz timer or a session that's about to expire.

```html
<!-- 25 minutes -->
<wa-counter duration="1500000" largest-unit="minutes" label="Time left in this quiz"></wa-counter>
```

Changing the duration starts the countdown over. The `date` attribute takes precedence when both are set, and the duration is ignored when counting up.

### Label

Use the `label` attribute to name the counter for assistive devices. The label isn't displayed.

Screen readers read the time as a phrase, such as "2 days 3 hours 5 minutes 9 seconds", instead of the separate digits and labels.

### Units

Use the `largest-unit` and `smallest-unit` attributes to choose which units the counter shows, from `years` to `seconds`. The defaults are `days` and `seconds`.

```html
<!-- 53 hours -->
<div class="wa-stack">
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Largest unit is hours</span>
    <wa-counter duration="190800000" largest-unit="hours" label="Time until the conference"></wa-counter>
  </div>
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Smallest unit is hours</span>
    <wa-counter duration="190800000" smallest-unit="hours" label="Time until the conference"></wa-counter>
  </div>
</div>
```

Time beyond the largest unit rolls up into it, so two days show as 48 hours when the largest unit is `hours`. Months and years follow the calendar instead of a fixed number of days.

Units at zero ahead of the first non-zero unit are hidden, so a countdown with less than a day left starts at hours. [Clock-style](#clock-style) counters keep every unit so the digits hold their place.

### Counting Up

Set the `direction` attribute to `up` to count up from a past date. A future date shows zeros until it passes.

```html
<!-- Web Awesome 3 release date 🎉 -->
<wa-counter direction="up" date="2025-12-02T00:00:00-05:00" label="Time since Web Awesome 3 launched"></wa-counter>
```

Leave out the `date` attribute to count up from when the counter is added to the page.

```html
<wa-counter direction="up" largest-unit="hours" label="Time on this page"></wa-counter>
```

### Format

Set the `format` attribute to `short` or `narrow` for shorter unit labels, such as "hr" or "h". The default is `long`. Avoid `narrow` when the counter shows months, since some locales, such as English, label months and minutes both "m".

```html
<!-- 29 hours -->
<div class="wa-stack">
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Long</span>
    <wa-counter duration="104400000" format="long" label="Time until the auction closes"></wa-counter>
  </div>
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Short</span>
    <wa-counter duration="104400000" format="short" label="Time until the auction closes"></wa-counter>
  </div>
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Narrow</span>
    <wa-counter duration="104400000" format="narrow" label="Time until the auction closes"></wa-counter>
  </div>
</div>
```

### Unit Labels

Use the `years`, `months`, `days`, `hours`, `minutes`, and `seconds` slots to replace a unit's label. Slotted labels don't change with the value, and screen readers still read the built-in unit names.

```html
<!-- 95 minutes -->
<wa-counter duration="5700000" label="Time until the pizza arrives" largest-unit="hours">
  <span slot="hours">Hrs</span>
  <span slot="minutes">Mins</span>
  <span slot="seconds">Secs</span>
</wa-counter>
```

### Clock Style

Use the `delimiter` attribute to show text between units, such as `:`. Add the `without-labels` attribute to hide the unit labels for a clock-style display.

```html
<!-- 2 hours and 15 minutes -->
<wa-counter
  duration="8100000"
  delimiter=":"
  without-labels
  largest-unit="hours"
  label="Time until the next train"
  style="font-size: var(--wa-font-size-2xl);"
></wa-counter>
```

### Size

Counters are sized relative to the current font size. Set `font-size` on the counter or an ancestor to change its size. A counter stays on one line, so give a large one a size that scales with the viewport to fit small screens.

```html
<!-- 20 hours -->
<wa-counter
  duration="72000000"
  label="Time until the show starts"
  style="font-size: min(8vw, var(--wa-font-size-4xl));"
></wa-counter>
```

### Localization

Use the `lang` attribute to set the counter's locale. Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html
<!-- 53 hours -->
<div class="wa-stack">
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">English</span>
    <wa-counter duration="190800000" lang="en" label="Time until launch"></wa-counter>
  </div>
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">German</span>
    <wa-counter duration="190800000" lang="de" label="Zeit bis zum Start"></wa-counter>
  </div>
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Japanese</span>
    <wa-counter duration="190800000" lang="ja" label="発売までの時間"></wa-counter>
  </div>
  <div class="wa-stack wa-gap-2xs">
    <span class="wa-caption-s">Chinese</span>
    <wa-counter duration="190800000" lang="zh-CN" label="距离发布还有"></wa-counter>
  </div>
</div>
```

### Customizing

Counters inherit the surrounding font and color, and their digits use tabular figures so the width holds steady as they tick. Every unit is as wide as the widest label, which spaces the digits evenly. Style a counter with regular CSS, and reach inside it with the `unit`, `value`, `label`, and `delimiter` parts.

```html
<!-- 53 hours -->
<wa-counter id="counter-tiles" duration="190800000" format="short" label="Time until the sale ends"></wa-counter>

<style>
  #counter-tiles::part(unit) {
    min-inline-size: 4em;
    padding: var(--wa-space-s);
    border-radius: var(--wa-border-radius-m);
    background: var(--wa-color-neutral-fill-quiet);
  }

  #counter-tiles::part(value) {
    font-size: var(--wa-font-size-2xl);
    font-weight: var(--wa-font-weight-bold);
  }

  #counter-tiles::part(label) {
    color: var(--wa-color-text-quiet);
    text-transform: uppercase;
  }
</style>
```

A counter on a colored surface follows the text color there.

```html
<!-- 53 hours -->
<wa-callout variant="brand" appearance="accent">
  <wa-icon slot="icon" name="clock"></wa-icon>
  <div class="wa-split">
    <strong>Launch day is almost here</strong>
    <wa-counter duration="190800000" label="Time until launch"></wa-counter>
  </div>
</wa-callout>
```

### Inline

To set a counter inside a sentence, use the `unit` part to lay each value and label out in a row, and the `label` part to match the label's size to the text. The `narrow` format keeps it short.

```html
<!-- 53 hours -->
<p id="counter-inline">
  The sale ends in
  <wa-counter duration="190800000" format="narrow" label="Time until the sale ends"></wa-counter>, so order soon.
</p>

<style>
  #counter-inline wa-counter {
    gap: 0.35em;
  }

  #counter-inline wa-counter::part(unit) {
    flex-direction: row;
    align-items: baseline;
  }

  #counter-inline wa-counter::part(label) {
    font-size: inherit;
  }
</style>
```

### Sale Banner

Combine a counter with a card and a call to action to show how long an offer lasts.

```html
<!-- 4 days -->
<wa-card id="counter-sale">
  <div class="wa-stack wa-align-items-center">
    <wa-badge variant="brand" pill>Spring Sale</wa-badge>
    <div class="wa-heading-xl">40% Off Every Plan</div>
    <p class="wa-color-text-quiet">
      Lock in the discount for your first year. The price goes back up when the clock runs out.
    </p>
    <wa-counter duration="345600000" label="Time until the sale ends"></wa-counter>
    <wa-button variant="brand">Claim Your Discount</wa-button>
  </div>
</wa-card>

<style>
  #counter-sale {
    text-align: center;
  }

  #counter-sale wa-counter::part(unit) {
    min-inline-size: 4em;
    padding: var(--wa-space-s);
    border-radius: var(--wa-border-radius-m);
    background: var(--wa-color-brand-fill-quiet);
    color: var(--wa-color-brand-on-quiet);
  }

  #counter-sale wa-counter::part(value) {
    font-size: var(--wa-font-size-2xl);
    font-weight: var(--wa-font-weight-bold);
  }
</style>
```

### Formatting the Value

Use the `valueFormatter` property to customize how each unit's number is displayed. Set it to a function that accepts the number and its unit and returns a formatted string. By default, numbers are localized and padded to two digits, such as `05`. Screen readers always read the unformatted number.

```html
<!-- 53 hours -->
<wa-counter id="counter-formatter" duration="190800000" label="Time until the next episode"></wa-counter>

<script>
  const counter = document.getElementById('counter-formatter');

  // Show days without padding
  counter.valueFormatter = (value, unit) => (unit === 'days' ? String(value) : String(value).padStart(2, '0'));
</script>
```

### Pausing

Use the `paused` attribute to pause the counter. Removing it continues from the time shown, so a countdown that was paused ends later than its date.

```html
<!-- 25 minutes -->
<div id="counter-pausing">
  <wa-counter duration="1500000" largest-unit="minutes" label="Time left in this focus session"></wa-counter>

  <wa-divider></wa-divider>

  <wa-switch>Pause</wa-switch>
</div>

<script>
  const container = document.getElementById('counter-pausing');
  const counter = container.querySelector('wa-counter');
  const toggle = container.querySelector('wa-switch');

  toggle.addEventListener('change', () => (counter.paused = toggle.checked));
</script>
```

**Give people a way to pause a counter that isn't essential.**  
A counter keeps changing. When it's decoration instead of a real deadline, the movement can distract. Add a visible pause control.

### Finished Content

Use the `finished` slot to show something else in place of the units when a countdown reaches zero. The slotted content is also shown when the date had already passed. Without it, the counter stays at zero.

```html
<div id="counter-finished">
  <wa-counter largest-unit="seconds" label="Time until the sale ends">
    <strong slot="finished">The sale has ended.</strong>
  </wa-counter>

  <wa-divider></wa-divider>

  <wa-button>Run Again</wa-button>
</div>

<script>
  const container = document.getElementById('counter-finished');
  const counter = container.querySelector('wa-counter');

  function start() {
    counter.date = new Date(Date.now() + 10 * 1000);
  }

  container.querySelector('wa-button').addEventListener('click', start);
  start();
</script>
```

### Reacting to Completion

The counter emits the `wa-finish` event when a countdown reaches zero. It isn't emitted when the date had already passed, and a count up never finishes.

Use the `finished` custom state to style a countdown at zero. Unlike the event, the state also applies when the date had already passed.

Screen readers don't announce a counter as it changes, and that includes the finish. To announce it, update an element with `role="status"` when the event fires.

```html
<div id="counter-finish">
  <div class="wa-cluster">
    <wa-counter largest-unit="seconds" label="Time until liftoff"></wa-counter>
    <span role="status"></span>
  </div>

  <wa-divider></wa-divider>

  <wa-button>Run Again</wa-button>
</div>

<style>
  #counter-finish wa-counter:state(finished) {
    color: var(--wa-color-success-on-quiet);
    font-weight: var(--wa-font-weight-bold);
  }
</style>

<script>
  const container = document.getElementById('counter-finish');
  const counter = container.querySelector('wa-counter');
  const message = container.querySelector('[role="status"]');

  function start() {
    counter.date = new Date(Date.now() + 10 * 1000);
    message.textContent = '';
  }

  counter.addEventListener('wa-finish', () => (message.textContent = 'We have liftoff.'));
  container.querySelector('wa-button').addEventListener('click', start);
  start();
</script>
```
