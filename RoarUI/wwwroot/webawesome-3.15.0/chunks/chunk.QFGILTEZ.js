/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  button_group_styles_default
} from "./chunk.QZ5TP6U5.js";
import {
  watch
} from "./chunk.PZAN6FPN.js";
import {
  WebAwesomeElement,
  e,
  n,
  r,
  t
} from "./chunk.MHOHBKM7.js";
import {
  x
} from "./chunk.BKE5EYM3.js";
import {
  __decorateClass
} from "./chunk.763SWQQU.js";

// src/components/button-group/button-group.ts
var WaButtonGroup = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.hasOutlined = false;
    this.label = "";
    this.orientation = "horizontal";
  }
  handleLabelChange() {
    if (this.internals) {
      this.internals.role = this.disableRole ? "presentation" : "group";
      this.internals.ariaLabel = this.disableRole ? null : this.label || null;
    }
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button?.classList.add("button-focus");
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button?.classList.remove("button-focus");
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button?.classList.add("button-hover");
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button?.classList.remove("button-hover");
  }
  render() {
    return x`
      <div
        part="base button-group"
        class="button-group"
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot></slot>
      </div>
    `;
  }
};
WaButtonGroup.css = [button_group_styles_default];
__decorateClass([
  e("slot")
], WaButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], WaButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  r()
], WaButtonGroup.prototype, "hasOutlined", 2);
__decorateClass([
  n()
], WaButtonGroup.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], WaButtonGroup.prototype, "orientation", 2);
__decorateClass([
  watch(["label", "disableRole"])
], WaButtonGroup.prototype, "handleLabelChange", 1);
WaButtonGroup = __decorateClass([
  t("wa-button-group")
], WaButtonGroup);
function findButton(el) {
  const selector = "wa-button, wa-radio-button";
  return el.closest(selector) ?? el.querySelector(selector);
}

export {
  WaButtonGroup
};
