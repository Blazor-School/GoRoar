/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  o,
  require_react
} from "./chunk.33O37SVT.js";
import {
  WaDetails
} from "./chunk.5SR5GUB6.js";
import {
  __toESM
} from "./chunk.763SWQQU.js";

// src/react/details/index.ts
var React = __toESM(require_react(), 1);
var tagName = "wa-details";
var reactWrapper = o({
  tagName,
  elementClass: WaDetails,
  react: React,
  events: {
    onWaShow: "wa-show",
    onWaAfterShow: "wa-after-show",
    onWaHide: "wa-hide",
    onWaAfterHide: "wa-after-hide"
  },
  displayName: "WaDetails"
});
var details_default = reactWrapper;

export {
  details_default
};
