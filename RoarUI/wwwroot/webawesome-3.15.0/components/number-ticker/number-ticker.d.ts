import WebAwesomeElement from '../../internal/webawesome-element.js';
/**
 * @summary Number tickers count up or down to a value when they scroll into view and format it with the
 *  Intl.NumberFormat API. Use them for dashboard stats, landing page metrics, and running totals.
 * @documentation https://webawesome.com/docs/components/number-ticker
 * @status experimental
 * @since 3.15
 *
 * @event wa-finish - Emitted when the ticker finishes counting.
 *
 * @cssstate counting - Applied while the number is counting.
 *
 * @ssr - `<wa-number-ticker>` renders its start value during SSR, but won't start counting until it hydrates on the
 *  client and scrolls into view.
 */
export default class WaNumberTicker extends WebAwesomeElement {
    static css: import("lit").CSSResult[];
    private readonly localize;
    private observer?;
    private isIntersecting;
    private isPending;
    private animation?;
    private frame;
    /** Set once the ticker settles on a counted value. Later changes are announced. */
    private hasCounted;
    /** The number currently shown. Null until counting begins, so the start value shows instead. */
    private displayValue;
    /**
     * The number to count to. Once the ticker has started, changing it counts from the number currently displayed to the
     * new value.
     */
    value: number;
    /** The number to count from on the first run and when `restart()` is called. */
    startValue: number;
    /**
     * The longest a count can take, in milliseconds. A count ends early once the number shown stops changing. Set to `0`
     * to skip the animation.
     */
    duration: number;
    /** The number of milliseconds to wait before counting from the start value. Later value changes aren't delayed. */
    delay: number;
    /**
     * The easing function to use for counting. Accepts any CSS easing function, such as `linear`, `ease-in-out`,
     * `cubic-bezier()`, `steps()`, or `linear()`. Invalid values fall back to the default.
     */
    easing: string;
    /** Starts counting right away instead of waiting until the ticker scrolls into view. */
    eager: boolean;
    /** The formatting style to use. */
    type: 'currency' | 'decimal' | 'percent';
    /** Turns off grouping separators. */
    withoutGrouping: boolean;
    /** The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting. */
    currency: string;
    /** How to display the currency. */
    currencyDisplay: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    /** The minimum number of integer digits to use. Possible values are 1-21. */
    minimumIntegerDigits: number;
    /**
     * The minimum number of fraction digits to use. Possible values are 0-100. If only one fraction digit option is set,
     * it's used for both.
     */
    minimumFractionDigits: number;
    /**
     * The maximum number of fraction digits to use. Possible values are 0-100. If only one fraction digit option is set,
     * it's used for both.
     */
    maximumFractionDigits: number;
    /** The minimum number of significant digits to use. Possible values are 1-21. */
    minimumSignificantDigits: number;
    /** The maximum number of significant digits to use. Possible values are 1-21. */
    maximumSignificantDigits: number;
    /**
     * A custom formatting function to apply to the number. When set, the formatting properties are ignored. Must be set
     * with JavaScript. Property only.
     */
    valueFormatter: (value: number) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleValueChange(): void;
    handleEagerChange(): void;
    /** Plays the ticker again from `startValue` to `value`. */
    restart(): void;
    private requestRun;
    private start;
    private finish;
    /**
     * Returns how far into a count the shown text stops changing. Walks backward from the end because an easing that
     * overshoots reaches the final text early, leaves it, and comes back.
     */
    private findSettleTime;
    private stop;
    private format;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-number-ticker': WaNumberTicker;
    }
}
