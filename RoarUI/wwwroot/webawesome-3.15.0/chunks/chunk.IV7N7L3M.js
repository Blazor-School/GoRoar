/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  o,
  require_react
} from "./chunk.33O37SVT.js";
import {
  WaTooltip
} from "./chunk.AIEZ5JNI.js";
import {
  __toESM
} from "./chunk.763SWQQU.js";

// src/react/tooltip/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-tooltip";
var reactWrapper = o({
  tagName,
  elementClass: WaTooltip,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaTooltip"
});
var tooltip_default = reactWrapper;

export {
  tooltip_default
};
