/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */

// src/events/item-change.ts
var WaItemChangeEvent = class extends Event {
  constructor(detail) {
    super("wa-item-change", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  WaItemChangeEvent
};
