import type { Validator } from '../../../internal/webawesome-form-associated-element.js';
/**
 * Reports validity for the three-field model:
 *  - Partially filled (some but not all fields): `valueMissing` with a clearer message.
 *  - Fully filled but not a real calendar date (e.g. day 32, month 13, Feb 30): `badInput`, since the entry
 *    can't compose to a canonical value.
 * The empty + required case is left to the mirror validator so we inherit the browser-localized native
 * "Please fill out this field" message.
 */
export declare const PartialDateValidator: () => Validator;
