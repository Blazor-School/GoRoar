/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.763SWQQU.js";

// src/events/filter-change.ts
var WaFilterChangeEvent = class extends Event {
  constructor(detail) {
    super("wa-filter-change", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};
export {
  WaFilterChangeEvent
};
