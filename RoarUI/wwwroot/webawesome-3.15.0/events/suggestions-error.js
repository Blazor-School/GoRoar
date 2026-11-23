/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.763SWQQU.js";

// src/events/suggestions-error.ts
var WaSuggestionsErrorEvent = class extends Event {
  constructor(detail) {
    super("wa-suggestions-error", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};
export {
  WaSuggestionsErrorEvent
};
