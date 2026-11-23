import type { PropertyValues } from 'lit';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CounterUnit } from './duration.js';
export type { CounterUnit };
/**
 * @summary Counters count down to a date or up from one, ticking through years, months, days, and smaller units. Use
 *  them for launch countdowns, sale timers, and showing how long something has been running.
 * @documentation https://webawesome.com/docs/components/counter
 * @status experimental
 * @since 3.15
 *
 * @slot years - A custom label for years.
 * @slot months - A custom label for months.
 * @slot days - A custom label for days.
 * @slot hours - A custom label for hours.
 * @slot minutes - A custom label for minutes.
 * @slot seconds - A custom label for seconds.
 * @slot finished - Content to show in place of the units when a countdown is at zero, including one whose date had
 *  already passed.
 *
 * @event wa-finish - Emitted when a running countdown reaches zero. Not emitted when the date had already passed.
 *
 * @csspart unit - The container that wraps each unit's value and label.
 * @csspart value - Each unit's value.
 * @csspart label - Each unit's label.
 * @csspart delimiter - The text shown between units.
 *
 * @cssstate finished - Applied when a countdown is at zero, including one whose date had already passed.
 *
 * @ssr - `<wa-counter>` renders zeros during SSR and doesn't start counting until it hydrates on the client, because the
 *  server can't know the user's clock.
 */
export default class WaCounter extends WebAwesomeElement {
    static css: import("lit").CSSResult[];
    private readonly hasSlotController;
    private readonly localize;
    private isCountingDown;
    private isFinished;
    private pausedAt;
    private shift;
    private startedAt;
    private timeout;
    private values;
    /**
     * The date to count down to, or up from. When passing a string, it's strongly recommended to use the ISO 8601 format
     * to ensure timezones are handled correctly. To convert a date to this format in JavaScript, use
     * [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
     * When omitted, the counter counts down from `duration`, or up from the moment it starts when `direction` is `up`.
     */
    date: Date | string;
    /**
     * The number of milliseconds to count down from, starting when the counter is added to the page. Changing it starts
     * the countdown over. Ignored when `date` is set or `direction` is `up`.
     */
    duration: number;
    /** The direction to count. Use `down` to count down to the date and `up` to count up from it. */
    direction: 'down' | 'up';
    /** A label that describes the counter to assistive devices. */
    label: string;
    /**
     * The largest unit to show. Time beyond it rolls up into it, so two days show as 48 hours when this is `hours`. Units
     * at zero ahead of the first non-zero unit are hidden unless `without-labels` is set. Falls back to the default range
     * when either unit is invalid or the smallest unit is larger than the largest.
     */
    largestUnit: CounterUnit;
    /**
     * The smallest unit to show. Time below it is dropped. Falls back to the default range when either unit is invalid or
     * the smallest unit is larger than the largest.
     */
    smallestUnit: CounterUnit;
    /** The formatting style of the unit labels. */
    format: 'long' | 'short' | 'narrow';
    /** Hides the unit labels. */
    withoutLabels: boolean;
    /** Text to show between units, such as `:`. */
    delimiter: string;
    /** Pauses the counter. When it's removed, counting continues from the time shown. */
    paused: boolean;
    /**
     * A custom formatting function to apply to each unit's value. It receives the value and its unit. Screen readers still
     * read the unformatted value. Must be set with JavaScript. Property only.
     */
    valueFormatter: (value: number, unit: CounterUnit) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    /** Returns the units to show, largest to smallest. */
    private getUnits;
    /** Computes the values from the clock, re-renders when one changes, and schedules the next tick. */
    private tick;
    private formatValue;
    /** Returns the localized label for a unit, pluralized for its value. */
    private getLabel;
    handleLabelChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-counter': WaCounter;
    }
}
