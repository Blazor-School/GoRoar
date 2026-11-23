export type CounterUnit = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds';
/** Every unit, largest to smallest. */
export declare const counterUnits: CounterUnit[];
/** The fixed-length units in milliseconds. Months and years vary, so they have no fixed length. */
export declare const unitLengths: Partial<Record<CounterUnit, number>> & Record<'days' | 'hours' | 'minutes' | 'seconds', number>;
/**
 * Splits the time between two dates into units from `largest` to `smallest`. Time beyond the largest unit rolls up into
 * it and time below the smallest unit is truncated. An end date before the start date is treated as equal.
 *
 * Years and months follow the local calendar, so a month from Jan 31 is Feb 28 (or 29) and "3 months until" a local date
 * matches what a wall calendar says. Days and smaller units are exact elapsed time measured from the last whole month,
 * so a day is always 24 real hours. Across a DST change the hours show the real time left (a span with a spring-forward
 * night is one hour shorter) and no value can go negative.
 *
 * Months step from the date that stays put: forward from `from` by default, or back from `to` when `isCountdown` is
 * true. Stepping from the moving date makes the days grow back at month ends, since Jan 28 to 31 all land on Feb 28.
 * A countdown whose smallest unit is months or years also rounds up, so it only reaches zero at the end date.
 */
export declare function getDuration(from: Date, to: Date, largest: CounterUnit, smallest: CounterUnit, isCountdown?: boolean): Partial<Record<CounterUnit, number>>;
