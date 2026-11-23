/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  lightbox_item_styles_default
} from "./chunk.XY33IZM3.js";
import {
  o
} from "./chunk.3MSWQ3RG.js";
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

// src/components/lightbox-item/lightbox-item.ts
var WaLightboxItem = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasOnlyDecorativeImage = false;
    this.type = "image";
    this.src = "";
    this.srcset = "";
    this.sizes = "";
    this.alt = "";
    this.caption = "";
    this.thumbnail = "";
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.handleSlotChange();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    this.closest("wa-lightbox")?.requestUpdate?.();
  }
  /** @internal The slotted thumbnail image, if there is one. */
  get thumbnailElement() {
    return this.querySelector("img");
  }
  /** @internal The URL of the item's thumbnail, from the slotted image or the `thumbnail` attribute. */
  get thumbnailSrc() {
    const image = this.thumbnailElement;
    return image?.currentSrc || image?.src || this.thumbnail;
  }
  /** @internal A template holding custom content to show in the lightbox in place of an image or video. */
  get contentTemplate() {
    return this.querySelector(":scope > template");
  }
  /** @internal The alt text to use in the lightbox. */
  get resolvedAlt() {
    return this.alt || this.thumbnailElement?.alt || "";
  }
  /** Sets focus on the item's trigger. */
  focus(options) {
    this.trigger?.focus(options);
  }
  handleSlotChange() {
    const hasContent = this.defaultSlot.assignedNodes({ flatten: true }).some(
      (node) => node.nodeType === Node.ELEMENT_NODE ? node.localName !== "template" : Boolean(node.textContent?.trim())
    );
    this.customStates.set("empty", !hasContent);
    this.hasOnlyDecorativeImage = this.thumbnailElement?.alt === "" && !this.textContent?.trim();
  }
  /** Without a URL the trigger isn't a real link, so it needs the keyboard behavior of a button. */
  handleKeyDown(event) {
    if (!this.src && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      this.trigger.click();
    }
  }
  render() {
    const label = this.hasOnlyDecorativeImage && this.alt ? this.alt : void 0;
    return x`
      <a
        part="trigger"
        class="trigger"
        href=${o(this.src || void 0)}
        role=${o(this.src ? void 0 : "button")}
        tabindex=${o(this.src ? void 0 : "0")}
        aria-haspopup="dialog"
        aria-label=${o(label)}
        @keydown=${this.handleKeyDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span part="play-button" class="play-button" ?hidden=${this.type !== "video"}>
          <slot name="play-icon"><wa-icon library="system" name="play"></wa-icon></slot>
        </span>
      </a>
    `;
  }
};
WaLightboxItem.css = lightbox_item_styles_default;
__decorateClass([
  e(".trigger")
], WaLightboxItem.prototype, "trigger", 2);
__decorateClass([
  e("slot")
], WaLightboxItem.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], WaLightboxItem.prototype, "hasOnlyDecorativeImage", 2);
__decorateClass([
  n({ reflect: true })
], WaLightboxItem.prototype, "type", 2);
__decorateClass([
  n()
], WaLightboxItem.prototype, "src", 2);
__decorateClass([
  n()
], WaLightboxItem.prototype, "srcset", 2);
__decorateClass([
  n()
], WaLightboxItem.prototype, "sizes", 2);
__decorateClass([
  n()
], WaLightboxItem.prototype, "alt", 2);
__decorateClass([
  n()
], WaLightboxItem.prototype, "caption", 2);
__decorateClass([
  n()
], WaLightboxItem.prototype, "thumbnail", 2);
__decorateClass([
  n({ type: Number })
], WaLightboxItem.prototype, "width", 2);
__decorateClass([
  n({ type: Number })
], WaLightboxItem.prototype, "height", 2);
WaLightboxItem = __decorateClass([
  t("wa-lightbox-item")
], WaLightboxItem);

export {
  WaLightboxItem
};
