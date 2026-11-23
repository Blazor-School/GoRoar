/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  i
} from "./chunk.E4Q7ZNYW.js";

// src/components/number-ticker/number-ticker.styles.ts
var number_ticker_styles_default = i`
  @layer wa-component {
    :host {
      display: inline-block;
      position: relative;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    /* Only the final value copies while counting. */
    [aria-hidden='true'] {
      user-select: none;
      -webkit-user-select: none;
    }
  }
`;

export {
  number_ticker_styles_default
};
