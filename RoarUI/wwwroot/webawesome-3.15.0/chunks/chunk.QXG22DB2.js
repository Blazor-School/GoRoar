/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  o,
  require_react
} from "./chunk.33O37SVT.js";
import {
  WaLightbox
} from "./chunk.D4JCOATY.js";
import {
  __toESM
} from "./chunk.763SWQQU.js";

// src/react/lightbox/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-lightbox";
var reactWrapper = o({
  tagName,
  elementClass: WaLightbox,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide",
    onWaItemChange: "wa-item-change"
  },
  displayName: "WaLightbox"
});
var lightbox_default = reactWrapper;

export {
  lightbox_default
};
