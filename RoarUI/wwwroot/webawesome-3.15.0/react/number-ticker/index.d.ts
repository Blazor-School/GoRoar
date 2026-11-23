import Component from '../../components/number-ticker/number-ticker.js';
import { type EventName } from '@lit/react';
import type { WaFinishEvent } from '../../events/events.js';
export type { WaFinishEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onWaFinish: EventName<WaFinishEvent>;
}>;
export default reactWrapper;
