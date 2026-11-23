import Component from '../../components/counter/counter.js';
import { type EventName } from '@lit/react';
import type { WaFinishEvent } from '../../events/events.js';
export type { WaFinishEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onWaFinish: EventName<WaFinishEvent>;
}>;
export default reactWrapper;
