/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.763SWQQU.js";

// src/events/cell-click.ts
var WaCellClickEvent = class extends Event {
  constructor(detail) {
    super("wa-cell-click", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};
export {
  WaCellClickEvent
};
