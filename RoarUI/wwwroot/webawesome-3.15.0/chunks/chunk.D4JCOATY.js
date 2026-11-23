/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  WaItemChangeEvent
} from "./chunk.4O27FIZT.js";
import {
  lightbox_styles_default
} from "./chunk.GF2Z752C.js";
import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.DITA2S5A.js";
import {
  parseSpaceDelimitedTokens
} from "./chunk.RMZ7BVDM.js";
import {
  WaShowEvent
} from "./chunk.4ZAKP7NY.js";
import {
  WaHideEvent
} from "./chunk.MQODJ75V.js";
import {
  WaAfterHideEvent
} from "./chunk.3NKIHICW.js";
import {
  WaAfterShowEvent
} from "./chunk.PX3HMKF7.js";
import {
  visually_hidden_styles_default
} from "./chunk.GDF3PG2B.js";
import {
  isTopDismissible,
  registerDismissible,
  unregisterDismissible
} from "./chunk.3H2FQERJ.js";
import {
  clamp
} from "./chunk.O6IZ4I7T.js";
import {
  o as o3
} from "./chunk.3MSWQ3RG.js";
import {
  o as o2
} from "./chunk.BQNDCXAL.js";
import {
  animate,
  parseDuration,
  prefersReducedMotion
} from "./chunk.JATN5J6W.js";
import {
  e as e2
} from "./chunk.KWDPKKFO.js";
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
  LocalizeController
} from "./chunk.6TJ3RFTS.js";
import {
  o
} from "./chunk.E4Q7ZNYW.js";
import {
  E,
  x
} from "./chunk.BKE5EYM3.js";
import {
  __decorateClass
} from "./chunk.763SWQQU.js";

// src/components/lightbox/lightbox.ts
var MORPH_EASING = "cubic-bezier(0.2, 0, 0, 1)";
var DRAG_SLOP = 10;
var DOUBLE_TAP_DELAY = 300;
var DOUBLE_TAP_ZOOM = 2.5;
var PULL_DISTANCE = 120;
var KEYBOARD_PAN = 50;
var nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));
var WaLightbox = class extends WebAwesomeElement {
  constructor() {
    super();
    this.localize = new LocalizeController(this);
    this.originalTrigger = null;
    this.announcer = null;
    this.announceFrame = 0;
    this.isClosing = false;
    this.morphId = 0;
    this.morphAnimations = [];
    this.isReady = false;
    // open and safe to measure
    this.hasRunSync = false;
    this.hasSyncedItems = false;
    this.lastItem = null;
    this.lastIndex = -1;
    // Scroll tracking
    this.pitch = 0;
    // distance between slides, measured lazily
    this.stageWidth = 0;
    // the scroll container's width when the current slide was last pinned
    this.scrollFrame = 0;
    this.indexFromScroll = false;
    this.isJump = false;
    // the next index change cuts to its slide, even when it's adjacent
    this.requestedDirection = 0;
    // a wrap still reads as forward or back
    this.departing = null;
    // the image a cut is fading out from
    this.isProgrammaticScroll = false;
    this.scrollOrigin = 0;
    // where the last programmatic scroll started
    this.visibleFrom = 0;
    // the range of slides that are at least partly on screen
    this.visibleTo = 0;
    // What's known about each item's media once it loads
    this.naturalSizes = /* @__PURE__ */ new WeakMap();
    this.failedItems = /* @__PURE__ */ new WeakSet();
    this.loadedItems = /* @__PURE__ */ new WeakSet();
    // Custom content. Each item's template is copied into a light DOM child of the lightbox so it keeps the page's
    // styles, then slotted into its slide.
    this.contentContainers = /* @__PURE__ */ new Map();
    this.contentSlots = /* @__PURE__ */ new WeakMap();
    this.contentCount = 0;
    // Zoom, pan, and pull state. These stay out of Lit's reactivity so gestures never cause a render.
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.activeMedia = null;
    this.fitRect = null;
    // the active media's box at rest
    this.stageRect = null;
    this.transformFrame = 0;
    this.overlapFrame = 0;
    this.gesture = null;
    this.pointer = null;
    this.pinch = { distance: 0, scale: 1, x: 0, y: 0 };
    this.gestureScale = 1;
    this.didDrag = false;
    this.downOnMedia = false;
    this.lastTap = { time: 0, x: 0, y: 0 };
    this.tapTimeout = 0;
    this.itemList = [];
    this.hasOpened = false;
    this.isZoomed = false;
    this.open = false;
    this.index = 0;
    this.label = "";
    this.loop = false;
    this.withThumbnails = false;
    this.withoutNavigation = false;
    this.withoutCounter = false;
    this.withoutZoom = false;
    this.handleWheel = (event) => {
      this.isProgrammaticScroll = false;
      if (!this.canZoom) return;
      const unit = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : 1;
      if (event.ctrlKey) {
        event.preventDefault();
        if (this.measure()) {
          const scale = clamp(this.scale * Math.exp(-event.deltaY * unit * 0.01), 1, this.maxZoom);
          this.zoomAt(event.clientX, event.clientY, scale);
        }
      } else if (this.isZoomed) {
        event.preventDefault();
        this.panBy(-event.deltaX * unit, -event.deltaY * unit);
      }
    };
    this.handleTouchStart = (event) => {
      if (event.touches.length !== 2 || this.gesture === "pull") return;
      if (!this.canZoom || this.isClosing || !this.measure()) return;
      if (event.cancelable) event.preventDefault();
      this.gesture = "pinch";
      this.didDrag = true;
      this.dialog.classList.remove("pulling");
      this.pinch = { ...this.getPinch(event), scale: this.scale };
    };
    this.handleTouchMove = (event) => {
      if (this.gesture === "pull") {
        if (event.cancelable) event.preventDefault();
        return;
      }
      if (this.gesture !== "pinch" || event.touches.length < 2) return;
      if (event.cancelable) event.preventDefault();
      const { distance, x: x2, y } = this.getPinch(event);
      const scale = clamp(this.pinch.scale * distance / this.pinch.distance, 0.75, this.maxZoom);
      const ratio = scale / this.scale;
      const fit = this.fitRect;
      const centerX = fit.left + fit.width / 2 + this.x;
      const centerY = fit.top + fit.height / 2 + this.y;
      this.setTransform(
        scale,
        this.x - (this.pinch.x - centerX) * (ratio - 1) + (x2 - this.pinch.x),
        this.y - (this.pinch.y - centerY) * (ratio - 1) + (y - this.pinch.y),
        { free: scale < 1 }
      );
      this.pinch.x = x2;
      this.pinch.y = y;
    };
    this.handleTouchEnd = (event) => {
      if (this.gesture === "pinch" && event.touches.length < 2) {
        this.gesture = null;
        this.pointer = null;
        this.settle();
      }
    };
    // Safari reports trackpad pinches with its own gesture events. On iOS they fire alongside touches, which the
    // touch handlers above already cover.
    this.handleGestureStart = (event) => {
      if (this.gesture === "pinch" || !this.canZoom || !this.measure()) return;
      event.preventDefault();
      this.gestureScale = this.scale;
    };
    this.handleGestureChange = (event) => {
      if (this.gesture === "pinch" || !this.canZoom || !this.fitRect) return;
      event.preventDefault();
      const { scale, clientX, clientY } = event;
      this.zoomAt(clientX, clientY, clamp(this.gestureScale * scale, 1, this.maxZoom));
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.open && isTopDismissible(this)) {
        event.preventDefault();
        event.stopPropagation();
        this.requestClose(this.dialog);
      }
    };
    this.handleHostClick = (event) => {
      const target = event.target;
      const closeButton = target.closest?.('[data-lightbox="close"]');
      if (closeButton && this.open) {
        this.requestClose(closeButton);
        return;
      }
      const item = target.closest?.("wa-lightbox-item");
      const index = item ? this.itemList.indexOf(item) : -1;
      const isPlainClick = event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
      if (index > -1 && isPlainClick && !event.defaultPrevented) {
        event.preventDefault();
        this.index = index;
        this.open = true;
      }
    };
    if (!o) {
      this.addEventListener("click", this.handleHostClick);
    }
  }
  /** The lightbox's items, in document order. */
  get items() {
    return [...this.itemList];
  }
  /** The current item. Useful for download and share buttons in the `actions` slot. */
  get currentItem() {
    return this.itemList[this.currentIndex];
  }
  /** The index, kept within the range of available items. */
  get currentIndex() {
    return clamp(Math.round(this.index) || 0, 0, Math.max(0, this.itemList.length - 1));
  }
  get currentMedia() {
    return this.shadowRoot?.querySelector(`.slide[data-index="${this.currentIndex}"] .media`) ?? null;
  }
  get canZoom() {
    const item = this.currentItem;
    return !this.withoutZoom && Boolean(item) && item.type !== "video" && !item.contentTemplate && !this.failedItems.has(item);
  }
  /** The most the current image can be zoomed: its natural size, but never less than 2x. */
  get maxZoom() {
    const item = this.currentItem;
    const naturalWidth = item ? item.width || this.naturalSizes.get(item)?.width || 0 : 0;
    return Math.max(2, naturalWidth && this.fitRect ? naturalWidth / this.fitRect.width : 3);
  }
  connectedCallback() {
    super.connectedCallback();
    if (o) return;
    this.updateComplete.then(() => {
      if (!this.isConnected) return;
      this.mutationObserver?.disconnect();
      this.syncItems();
      this.mutationObserver = new MutationObserver((mutations) => {
        const isOurs = (target) => target !== this.announcer && target.closest?.("wa-lightbox") === this && !target.closest?.("[data-lightbox-content]");
        if (mutations.some((mutation) => isOurs(mutation.target))) {
          this.syncItems();
        }
      });
      this.mutationObserver.observe(this, { childList: true, subtree: true });
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    cancelAnimationFrame(this.announceFrame);
    unlockBodyScrolling(this);
    this.removeOpenListeners();
    if (this.dialog?.open) {
      this.dialog.close();
      this.open = false;
      this.isReady = false;
      this.isClosing = false;
      this.customStates.set("open", false);
      this.resetMorph();
      this.syncActiveItem();
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.slides.addEventListener("wheel", this.handleWheel, { passive: false });
    this.slides.addEventListener("touchstart", this.handleTouchStart, { passive: false });
    this.slides.addEventListener("touchmove", this.handleTouchMove, { passive: false });
    this.slides.addEventListener("touchend", this.handleTouchEnd);
    this.slides.addEventListener("touchcancel", this.handleTouchEnd);
    this.slides.addEventListener("gesturestart", this.handleGestureStart, { passive: false });
    this.slides.addEventListener("gesturechange", this.handleGestureChange, { passive: false });
    new ResizeObserver(() => this.handleResize()).observe(this.slides);
    if (this.open) {
      this.addOpenListeners();
      lockBodyScrolling(this);
      this.dialog.showModal();
      this.customStates.set("open", true);
      this.updateComplete.then(async () => {
        await nextFrame();
        this.isReady = true;
        this.scrollToIndex(this.currentIndex);
        this.syncActiveItem();
        this.announce();
        this.scrollThumbnailIntoView();
      });
    }
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (this.open) {
      this.hasOpened = true;
    }
    if (changedProperties.has("index") && this.hasUpdated) {
      const isAdjacent = Math.abs(this.currentIndex - this.lastIndex) === 1;
      const isCut = this.isReady && !this.indexFromScroll && (this.isJump || !isAdjacent) && !prefersReducedMotion();
      this.departing = isCut ? this.getDepartingImage() : null;
    }
    const hasNewItems = changedProperties.has("index") || changedProperties.has("itemList");
    if (this.hasUpdated && hasNewItems) {
      this.resetZoom();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    this.syncContent();
    const hasItemListChanged = changedProperties.has("itemList");
    if (!changedProperties.has("index") && !hasItemListChanged) return;
    const index = this.currentIndex;
    const item = this.currentItem ?? null;
    const isOpen = this.dialog.open && this.isReady;
    const hasMoved = index !== this.lastIndex || item !== this.lastItem;
    if (isOpen && hasMoved && !this.indexFromScroll) {
      if (!this.ghost.hidden) {
        this.morphAnimations.forEach((animation) => animation.finish());
      }
      const isAdjacent = item !== this.lastItem && Math.abs(index - this.lastIndex) === 1;
      const isSmooth = isAdjacent && !this.isJump && !prefersReducedMotion();
      this.scrollToIndex(index, isSmooth ? "smooth" : "instant");
      if (!isSmooth && item !== this.lastItem && !prefersReducedMotion()) {
        this.crossfade(this.requestedDirection || Math.sign(index - this.lastIndex) || 1);
      }
    }
    this.indexFromScroll = false;
    this.isJump = false;
    this.requestedDirection = 0;
    this.departing = null;
    if (item !== this.lastItem) {
      const previousItem = this.lastItem;
      const previousIndex = this.lastIndex;
      this.lastItem = item;
      this.lastIndex = index;
      this.pauseVideos(previousItem);
      this.syncActiveItem();
      if (this.hasSyncedItems && item) {
        this.dispatchEvent(new WaItemChangeEvent({ index, previousIndex, item, previousItem }));
      }
      if (isOpen && item) {
        this.updateOverlap();
        this.announce();
        this.scrollThumbnailIntoView();
        if (!item.customStates.has("empty")) {
          item.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      }
    } else {
      this.lastIndex = index;
    }
    if (hasItemListChanged && this.hasSyncedItems && this.dialog.open && this.itemList.length === 0) {
      this.requestClose(this.dialog);
    }
    if (hasItemListChanged && this.hasRunSync) {
      this.hasSyncedItems = true;
    }
  }
  //
  // Items
  //
  syncItems() {
    this.hasRunSync = true;
    const current = this.currentItem;
    const items = [...this.querySelectorAll("wa-lightbox-item")].filter(
      (item) => item.closest("wa-lightbox") === this && !item.closest("[data-lightbox-content]")
    );
    const hasChanged = items.length !== this.itemList.length || items.some((item, i) => item !== this.itemList[i]);
    if (!hasChanged) {
      this.requestUpdate();
      return;
    }
    this.itemList = items;
    const newIndex = current ? items.indexOf(current) : -1;
    if (newIndex > -1 && newIndex !== this.index) {
      this.index = newIndex;
    } else if (current && newIndex === -1) {
      this.index = this.currentIndex;
    }
  }
  syncActiveItem() {
    const current = this.currentItem;
    for (const item of this.itemList) {
      item.customStates.set("active", this.open && item === current);
    }
  }
  /** Stops anything that's playing. Embeds can't be paused from outside, so the item being left reloads its own. */
  pauseVideos(leaving) {
    this.shadowRoot?.querySelectorAll("video").forEach((video) => video.pause());
    for (const [item, container] of this.contentContainers) {
      for (const el of container.querySelectorAll("*")) {
        if (typeof el.pause === "function") {
          el.pause();
        } else if ("playing" in el) {
          el.playing = false;
        } else if (el instanceof HTMLIFrameElement && (leaving === void 0 || leaving === item)) {
          el.src = el.src;
        }
      }
    }
  }
  getContentSlot(item) {
    if (!this.contentSlots.has(item)) {
      this.contentSlots.set(item, `content-${++this.contentCount}`);
    }
    return this.contentSlots.get(item);
  }
  /** Copies custom content into place for the slides that are showing or about to, and clears out what's gone. */
  syncContent() {
    if (!this.hasOpened) return;
    const index = this.currentIndex;
    this.itemList.forEach((item, i) => {
      const template = item.contentTemplate;
      if (!template || Math.abs(i - index) > 1 || this.contentContainers.has(item)) return;
      const container = document.createElement("div");
      container.slot = this.getContentSlot(item);
      container.setAttribute("data-lightbox-content", "");
      container.append(template.content.cloneNode(true));
      this.append(container);
      this.contentContainers.set(item, container);
    });
    for (const [item, container] of this.contentContainers) {
      if (!this.itemList.includes(item) || !item.contentTemplate) {
        container.remove();
        this.contentContainers.delete(item);
      }
    }
  }
  //
  // Opening and closing
  //
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    registerDismissible(this);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    unregisterDismissible(this);
  }
  getDuration(property) {
    return prefersReducedMotion() ? 0 : parseDuration(getComputedStyle(this).getPropertyValue(property));
  }
  handleOpenChange() {
    if (this.open && !this.dialog.open) {
      this.show();
    } else if (!this.open && this.dialog.open) {
      this.open = true;
      this.requestClose(this.dialog);
    }
  }
  async show() {
    const showEvent = new WaShowEvent();
    this.dispatchEvent(showEvent);
    if (showEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    this.originalTrigger = document.activeElement;
    this.open = true;
    this.addOpenListeners();
    this.dialog.classList.add("preparing");
    lockBodyScrolling(this);
    this.dialog.showModal();
    this.customStates.set("open", true);
    this.syncActiveItem();
    await this.updateComplete;
    await nextFrame();
    if (!this.dialog.open || this.isClosing) return;
    this.isReady = true;
    this.pitch = 0;
    this.updateOverlap();
    this.scrollToIndex(this.currentIndex);
    this.dialog.focus({ preventScroll: true });
    this.announce();
    this.scrollThumbnailIntoView();
    const duration = this.getDuration("--show-duration");
    const item = this.currentItem;
    const media = this.currentMedia;
    const thumbnail = item ? this.getVisibleThumbnail(item) : null;
    const fadeIn = (el) => animate(el, [{ opacity: 0 }, { opacity: 1 }], { duration, easing: "ease" });
    if (item && media && thumbnail && duration > 0) {
      const finish = await this.morph("open", item, media, thumbnail, duration, () => {
        this.dialog.classList.remove("preparing");
        fadeIn(this.backdrop);
        fadeIn(this.chrome);
      });
      if (finish) {
        finish();
      } else if (!this.isClosing) {
        this.dialog.classList.remove("preparing");
        await fadeIn(this.dialog);
      }
    } else {
      this.dialog.classList.remove("preparing");
      await fadeIn(this.dialog);
    }
    if (this.isClosing || !this.dialog.open) return;
    this.dispatchEvent(new WaAfterShowEvent());
  }
  async requestClose(source) {
    if (this.isClosing) return;
    const hideEvent = new WaHideEvent({ source });
    this.dispatchEvent(hideEvent);
    if (hideEvent.defaultPrevented) {
      this.open = true;
      this.settle();
      return;
    }
    this.isClosing = true;
    this.isReady = false;
    this.morphId++;
    this.departingImage.hidden = true;
    this.removeOpenListeners();
    this.pauseVideos();
    const duration = this.dialog.classList.contains("preparing") ? 0 : this.getDuration("--hide-duration");
    const item = this.currentItem;
    const media = this.currentMedia;
    const thumbnail = item ? this.getVisibleThumbnail(item) : null;
    const options = { duration, easing: "ease", fill: "forwards" };
    let didMorph = false;
    if (item && media && thumbnail && duration > 0) {
      let fades = [];
      const finish = await this.morph("close", item, media, thumbnail, duration, () => {
        fades = [this.backdrop, this.chrome].map(
          (el) => animate(el, [{ opacity: getComputedStyle(el).opacity }, { opacity: 0 }], options)
        );
      });
      didMorph = Boolean(finish);
      await Promise.all(fades);
    }
    if (!didMorph) {
      await animate(this.dialog, [{ opacity: getComputedStyle(this.dialog).opacity }, { opacity: 0 }], options);
    }
    this.open = false;
    this.dialog.close();
    unlockBodyScrolling(this);
    this.customStates.set("open", false);
    this.resetMorph();
    for (const el of [this.dialog, this.backdrop, this.chrome]) {
      el.getAnimations().forEach((animation) => animation.cancel());
      el.style.opacity = "";
    }
    clearTimeout(this.tapTimeout);
    this.dialog.classList.remove("pulling", "panning", "preparing", "overlapping", "controls-hidden");
    this.resetZoom();
    this.syncActiveItem();
    this.isClosing = false;
    const focusTarget = item && !item.customStates.has("empty") ? item : this.originalTrigger;
    if (typeof focusTarget?.focus === "function") {
      focusTarget.focus({ preventScroll: true });
    }
    this.dispatchEvent(new WaAfterHideEvent());
  }
  //
  // Morph
  //
  /** Returns the item's thumbnail image if it's on screen, the only time it can be animated to or from. */
  getVisibleThumbnail(item) {
    const thumbnail = item.thumbnailElement;
    const rect = thumbnail?.getBoundingClientRect();
    const isVisible = rect && thumbnail.complete && thumbnail.naturalWidth > 0 && rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
    return isVisible ? thumbnail : null;
  }
  /**
   * Animates a copy of the image between the item's thumbnail and its slide. The copy lives outside the scroll
   * container, which would clip it. Resolves when the animation ends with a function that restores everything, or
   * with null if it couldn't run and the caller should fade instead.
   */
  async morph(direction, item, media, thumbnail, duration, onStart) {
    const id = ++this.morphId;
    const isInFlight = !this.ghost.hidden;
    const mediaRect = isInFlight ? this.ghostImage.getBoundingClientRect() : media.getBoundingClientRect();
    const flightClip = isInFlight ? getComputedStyle(this.ghost).clipPath : "none";
    const thumbnailRect = thumbnail.getBoundingClientRect();
    const thumbnailStyle = getComputedStyle(thumbnail);
    const radius = parseFloat(thumbnailStyle.borderTopLeftRadius) || 0;
    const mediaRadius = (parseFloat(getComputedStyle(media).borderTopLeftRadius) || 0) * (mediaRect.width / (media.offsetWidth || 1));
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const fullImage = media.querySelector("img");
    const src = fullImage?.classList.contains("ready") ? fullImage.currentSrc : item.thumbnailSrc;
    const ratio = mediaRect.width / mediaRect.height;
    const isWider = thumbnailRect.width / thumbnailRect.height > ratio;
    const fillsWidth = thumbnailStyle.objectFit === "contain" ? !isWider : isWider;
    const imageWidth = fillsWidth ? thumbnailRect.width : thumbnailRect.height * ratio;
    const imageHeight = imageWidth / ratio;
    const centerX = (rect) => rect.left + rect.width / 2;
    const centerY = (rect) => rect.top + rect.height / 2;
    const atThumbnail = `translate(${centerX(thumbnailRect) - centerX(mediaRect)}px, ${centerY(thumbnailRect) - centerY(mediaRect)}px) scale(${imageWidth / mediaRect.width})`;
    const atMedia = "translate(0px, 0px) scale(1)";
    const isCropped = radius > 0 || mediaRadius > 0 || Math.abs(imageWidth - thumbnailRect.width) > 1 || Math.abs(imageHeight - thumbnailRect.height) > 1;
    const inset = (rect, round) => `inset(${rect.top}px ${viewportWidth - rect.right}px ${viewportHeight - rect.bottom}px ${rect.left}px round ${round}px)`;
    const clipAtThumbnail = inset(thumbnailRect, radius);
    const clipAtMedia = flightClip !== "none" ? flightClip : inset(mediaRect, mediaRadius);
    this.morphAnimations.forEach((animation) => animation.cancel());
    const ghostImage = this.ghostImage;
    ghostImage.src = src;
    Object.assign(ghostImage.style, {
      left: `${mediaRect.left}px`,
      top: `${mediaRect.top}px`,
      width: `${mediaRect.width}px`,
      height: `${mediaRect.height}px`
    });
    if (!isInFlight) {
      await Promise.race([ghostImage.decode().catch(() => {
      }), new Promise((resolve) => setTimeout(resolve, 100))]);
      if (id !== this.morphId || !ghostImage.complete || !ghostImage.naturalWidth) return null;
    }
    this.ghost.hidden = false;
    media.classList.add("morphing");
    this.setMorphingItem(item);
    onStart?.();
    const isOpening = direction === "open";
    const options = { duration, easing: MORPH_EASING, fill: "both" };
    const animations = [
      ghostImage.animate(
        [{ transform: isOpening ? atThumbnail : atMedia }, { transform: isOpening ? atMedia : atThumbnail }],
        options
      )
    ];
    if (isCropped || flightClip !== "none") {
      animations.push(
        this.ghost.animate(
          [
            { clipPath: isOpening ? clipAtThumbnail : clipAtMedia },
            { clipPath: isOpening ? clipAtMedia : clipAtThumbnail }
          ],
          options
        )
      );
    }
    this.morphAnimations = animations;
    if (!isInFlight) {
      animations.forEach((animation) => animation.pause());
      await nextFrame();
      if (id !== this.morphId) {
        animations.forEach((animation) => animation.cancel());
        return () => {
        };
      }
      animations.forEach((animation) => animation.playState === "paused" && animation.play());
    }
    await Promise.allSettled(animations.map((animation) => animation.finished));
    return () => {
      if (id === this.morphId) this.resetMorph();
    };
  }
  /** Captures the image and position of the slide being left, including any zoom. */
  getDepartingImage() {
    const media = this.shadowRoot?.querySelector(`.slide[data-index="${this.lastIndex}"] .media`);
    const image = media?.querySelector("img");
    const src = image?.classList.contains("ready") ? image.currentSrc : this.lastItem?.thumbnailSrc;
    return media && src ? { src, rect: media.getBoundingClientRect() } : null;
  }
  /** Pushes the new slide in from the side it's coming from. Opaque early so the backdrop never shows through. */
  crossfade(direction) {
    const duration = this.getDuration("--wa-transition-slow");
    const shift = direction * (this.localize.dir() === "rtl" ? -1 : 1) * this.slides.clientWidth;
    const image = this.departingImage;
    image.getAnimations().forEach((animation) => animation.cancel());
    animate(
      this.slides,
      [
        { translate: `${shift * 0.05}px 0`, opacity: 0 },
        { opacity: 1, offset: 0.4 },
        { translate: "0 0", opacity: 1 }
      ],
      { duration, easing: MORPH_EASING }
    );
    if (!this.departing) return;
    const { src, rect } = this.departing;
    image.src = src;
    Object.assign(image.style, {
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`
    });
    image.hidden = false;
    animate(
      image,
      [
        { translate: "0 0", opacity: 1 },
        { translate: `${shift * -0.025}px 0`, opacity: 0 }
      ],
      { duration, easing: MORPH_EASING }
    ).then(() => {
      if (image.getAnimations().length === 0) image.hidden = true;
    });
  }
  /** Hides the animated copy and restores everything it was standing in for. */
  resetMorph() {
    this.morphAnimations.forEach((animation) => animation.cancel());
    this.morphAnimations = [];
    if (this.ghost) this.ghost.hidden = true;
    if (this.departingImage) this.departingImage.hidden = true;
    this.shadowRoot?.querySelectorAll(".media.morphing").forEach((media) => media.classList.remove("morphing"));
    this.setMorphingItem(null);
  }
  /** Hides one item's thumbnail on the page while its image is animating or being pulled in the lightbox. */
  setMorphingItem(morphingItem) {
    for (const item of this.itemList) {
      item.customStates.set("morphing", item === morphingItem);
    }
  }
  //
  // Scrolling
  //
  getPitch() {
    this.pitch || (this.pitch = this.slides.clientWidth + (parseFloat(getComputedStyle(this.slides).columnGap) || 0));
    return this.pitch;
  }
  /** The scroll position that centers a slide. Negative in RTL. */
  getScrollLeft(index) {
    return index * this.getPitch() * (this.localize.dir() === "rtl" ? -1 : 1);
  }
  scrollToIndex(index, behavior = "instant") {
    const left = this.getScrollLeft(index);
    this.scrollOrigin = this.slides.scrollLeft;
    this.isProgrammaticScroll = behavior === "smooth" && Math.abs(left - this.scrollOrigin) > 1;
    this.slides.scrollTo({ left, behavior });
  }
  handleScroll() {
    const position = Math.abs(this.slides.scrollLeft) / this.getPitch();
    this.visibleFrom = Math.floor(position);
    this.visibleTo = Math.ceil(position);
    if (this.isZoomed) {
      const left = this.getScrollLeft(this.currentIndex);
      if (Math.abs(this.slides.scrollLeft - left) > 0.5) {
        this.slides.scrollTo({ left, behavior: "instant" });
      }
      return;
    }
    if (this.scrollFrame || this.isProgrammaticScroll) return;
    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = 0;
      if (!this.dialog.open || this.isProgrammaticScroll || this.itemList.length === 0) return;
      if (this.slides.clientWidth !== this.stageWidth) return;
      const index = clamp(Math.round(Math.abs(this.slides.scrollLeft) / this.getPitch()), 0, this.itemList.length - 1);
      if (index !== this.currentIndex) {
        this.indexFromScroll = true;
        this.index = index;
      }
    });
  }
  handleScrollEnd() {
    if (this.isProgrammaticScroll && Math.abs(this.slides.scrollLeft - this.scrollOrigin) < 2) return;
    this.isProgrammaticScroll = false;
    this.handleScroll();
    this.requestUpdate();
  }
  handleResize() {
    this.updateOverlap();
    this.stageWidth = this.slides.clientWidth;
    this.pitch = 0;
    this.resetZoom();
    if (this.dialog.open) {
      this.scrollToIndex(this.currentIndex);
    }
  }
  scrollThumbnailIntoView() {
    const strip = this.thumbnails;
    const tab = strip?.querySelector('[aria-selected="true"]');
    if (!tab) return;
    strip.scrollTo({
      left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2,
      behavior: prefersReducedMotion() ? "instant" : "smooth"
    });
  }
  //
  // Zoom and pan
  //
  /**
   * Notes whether the current media is wide enough at rest to sit under the previous and next buttons, so they can
   * show a backing only when they need one. Uses layout widths, which don't change while a slide is scrolling.
   */
  updateOverlap() {
    cancelAnimationFrame(this.overlapFrame);
    this.overlapFrame = requestAnimationFrame(() => {
      const media = this.currentMedia;
      const button = this.shadowRoot?.querySelector(".navigation:not([hidden])");
      if (!media || !button || !this.dialog.open) return;
      const sideSpace = (this.slides.clientWidth - media.offsetWidth) / 2;
      const buttonSpace = button.offsetWidth + parseFloat(getComputedStyle(button).marginInlineStart) * 2;
      this.dialog.classList.toggle("overlapping", sideSpace < buttonSpace);
    });
  }
  /** Measures the current media at rest. Zooming and panning are relative to this box. */
  measure() {
    const media = this.currentMedia;
    if (!media) return false;
    if (this.activeMedia !== media || !this.fitRect) {
      this.scrollToIndex(this.currentIndex);
      this.activeMedia = media;
      this.fitRect = media.getBoundingClientRect();
      this.stageRect = this.slides.getBoundingClientRect();
    }
    return true;
  }
  setTransform(scale, x2, y, options = {}) {
    const media = this.activeMedia;
    const fit = this.fitRect;
    const stage = this.stageRect;
    if (!media || !fit || !stage) return;
    if (!options.free) {
      const width = fit.width * scale;
      const height = fit.height * scale;
      const centerX = fit.left + fit.width / 2;
      const centerY = fit.top + fit.height / 2;
      x2 = width <= stage.width ? 0 : clamp(x2, stage.right - centerX - width / 2, stage.left - centerX + width / 2);
      y = height <= stage.height ? 0 : clamp(y, stage.bottom - centerY - height / 2, stage.top - centerY + height / 2);
    }
    const wasZoomed = this.scale > 1;
    this.scale = scale;
    this.x = x2;
    this.y = y;
    media.classList.toggle("settling", Boolean(options.animate));
    cancelAnimationFrame(this.transformFrame);
    this.transformFrame = requestAnimationFrame(() => {
      media.style.transform = scale === 1 && x2 === 0 && y === 0 ? "" : `translate3d(${x2}px, ${y}px, 0) scale(${scale})`;
    });
    this.isZoomed = scale > 1;
    this.customStates.set("zoomed", this.isZoomed);
    if (this.isZoomed && !wasZoomed) {
      const item = this.currentItem;
      const image = media.querySelector("img");
      if (image && item?.srcset && !item.sizes) {
        image.sizes = `${Math.ceil(fit.width * this.maxZoom)}px`;
      }
    }
  }
  /** Zooms to a scale while keeping the point under the given viewport coordinates in place. */
  zoomAt(clientX, clientY, scale, animate2 = false) {
    if (!this.canZoom || !this.measure()) return;
    const fit = this.fitRect;
    const ratio = scale / this.scale;
    const centerX = fit.left + fit.width / 2 + this.x;
    const centerY = fit.top + fit.height / 2 + this.y;
    this.setTransform(scale, this.x - (clientX - centerX) * (ratio - 1), this.y - (clientY - centerY) * (ratio - 1), {
      animate: animate2
    });
  }
  zoomAtCenter(scale) {
    if (!this.canZoom || !this.measure()) return;
    const stage = this.stageRect;
    this.zoomAt(
      stage.left + stage.width / 2,
      stage.top + stage.height / 2,
      clamp(scale, 1, this.maxZoom),
      !prefersReducedMotion()
    );
  }
  panBy(x2, y, animate2 = false) {
    this.setTransform(this.scale, this.x + x2, this.y + y, { animate: animate2 });
  }
  /** Eases the media back within its limits after a gesture. */
  settle() {
    this.backdrop.style.opacity = "";
    this.chrome.style.opacity = "";
    this.setMorphingItem(null);
    if (this.activeMedia && this.fitRect) {
      this.setTransform(clamp(this.scale, 1, this.maxZoom), this.x, this.y, { animate: !prefersReducedMotion() });
    }
  }
  resetZoom() {
    cancelAnimationFrame(this.transformFrame);
    if (this.activeMedia) {
      this.activeMedia.classList.remove("settling");
      this.activeMedia.style.transform = "";
    }
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.activeMedia = null;
    this.fitRect = null;
    this.gesture = null;
    this.isZoomed = false;
    this.customStates.set("zoomed", false);
  }
  //
  // Pointer, touch, and wheel gestures
  //
  handlePointerDown(event) {
    this.isProgrammaticScroll = false;
    if (!event.isPrimary || event.button !== 0) return;
    this.didDrag = false;
    this.downOnMedia = event.composedPath().some((node) => node instanceof Element && node.classList.contains("media"));
    this.pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: event.timeStamp,
      velocityY: 0
    };
    if (this.isZoomed && this.gesture !== "pinch") {
      this.gesture = "pan";
      this.slides.setPointerCapture(event.pointerId);
    }
  }
  handlePointerMove(event) {
    const pointer = this.pointer;
    if (!pointer || event.pointerId !== pointer.id || this.gesture === "pinch") return;
    const deltaX = event.clientX - pointer.startX;
    const deltaY = event.clientY - pointer.startY;
    if (Math.hypot(deltaX, deltaY) > DRAG_SLOP) {
      this.didDrag = true;
    }
    if (this.gesture === "pan") {
      this.dialog.classList.toggle("panning", this.didDrag);
      this.panBy(event.clientX - pointer.lastX, event.clientY - pointer.lastY);
    } else if (this.gesture === "pull") {
      this.pull(deltaX, deltaY);
    } else if (event.pointerType !== "mouse" && !this.isZoomed && !this.isClosing && Math.abs(deltaY) > DRAG_SLOP && Math.abs(deltaY) > Math.abs(deltaX) * 1.5 && this.measure()) {
      this.gesture = "pull";
      this.dialog.classList.add("pulling");
      this.slides.setPointerCapture(event.pointerId);
      pointer.startX = event.clientX;
      pointer.startY = event.clientY;
      const item = this.currentItem;
      if (item && this.getVisibleThumbnail(item)) {
        this.setMorphingItem(item);
      }
    }
    const elapsed = event.timeStamp - pointer.lastTime;
    if (elapsed > 0) {
      pointer.velocityY = 0.7 * ((event.clientY - pointer.lastY) / elapsed) + 0.3 * pointer.velocityY;
    }
    pointer.lastX = event.clientX;
    pointer.lastY = event.clientY;
    pointer.lastTime = event.timeStamp;
  }
  handlePointerUp(event) {
    const pointer = this.pointer;
    if (!pointer || event.pointerId !== pointer.id) return;
    const gesture = this.gesture;
    this.pointer = null;
    this.dialog.classList.remove("panning");
    if (gesture === "pinch") return;
    this.gesture = null;
    if (gesture === "pull") {
      const offset = event.clientY - pointer.startY;
      const distance = Math.abs(offset);
      const velocity = pointer.velocityY * Math.sign(offset);
      this.dialog.classList.remove("pulling");
      if (distance > PULL_DISTANCE || distance > PULL_DISTANCE / 4 && velocity > 0.4) {
        this.requestClose(this.dialog);
      } else {
        this.settle();
      }
      return;
    }
    if (this.didDrag || !this.downOnMedia) return;
    const isDoubleTap = event.timeStamp - this.lastTap.time < DOUBLE_TAP_DELAY && Math.hypot(event.clientX - this.lastTap.x, event.clientY - this.lastTap.y) < 30;
    if (event.pointerType === "mouse" || isDoubleTap) {
      this.lastTap.time = 0;
      clearTimeout(this.tapTimeout);
      if (this.canZoom && this.measure()) {
        const scale = this.scale > 1 ? 1 : Math.min(this.maxZoom, DOUBLE_TAP_ZOOM);
        this.zoomAt(event.clientX, event.clientY, scale, !prefersReducedMotion());
      }
    } else {
      this.lastTap = { time: event.timeStamp, x: event.clientX, y: event.clientY };
      const item = this.currentItem;
      if (item && item.type !== "video" && !item.contentTemplate) {
        clearTimeout(this.tapTimeout);
        this.tapTimeout = window.setTimeout(
          () => this.dialog.classList.toggle("controls-hidden"),
          this.canZoom ? DOUBLE_TAP_DELAY : 0
        );
      }
    }
  }
  /** The browser took over the gesture (e.g. to scroll between slides), so abandon the current one. */
  handlePointerCancel(event) {
    if (event.pointerId !== this.pointer?.id) return;
    this.pointer = null;
    this.dialog.classList.remove("panning");
    if (this.gesture === "pinch") return;
    if (this.gesture === "pull") {
      this.dialog.classList.remove("pulling");
      this.settle();
    }
    this.gesture = null;
  }
  /** Moves and shrinks the media with the finger while the backdrop and controls fade out. */
  pull(x2, y) {
    const progress = clamp(Math.abs(y) / (PULL_DISTANCE * 2.5), 0, 1);
    this.setTransform(1 - progress * 0.25, x2, y, { free: true });
    this.backdrop.style.opacity = String(1 - progress * 0.7);
    this.chrome.style.opacity = String(1 - Math.min(1, progress * 3));
  }
  /** The zoom button toggles between fitting the image and a comfortable zoom. */
  handleZoomClick() {
    this.zoomAtCenter(this.isZoomed ? 1 : DOUBLE_TAP_ZOOM);
  }
  /** Picking a thumbnail always cuts to its slide, so every thumbnail behaves the same however far away it is. */
  handleThumbnailClick(index) {
    this.isJump = true;
    this.index = index;
  }
  handleSlidesClick() {
    if (!this.isReady || !this.ghost.hidden || this.dialog.classList.contains("preparing")) return;
    if (!this.didDrag && !this.downOnMedia) {
      this.requestClose(this.dialog);
    }
  }
  getPinch(event) {
    const [a, b] = [event.touches[0], event.touches[1]];
    return {
      distance: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
      x: (a.clientX + b.clientX) / 2,
      y: (a.clientY + b.clientY) / 2
    };
  }
  //
  // Keyboard and clicks
  //
  handleDialogCancel(event) {
    event.preventDefault();
    if (event.target === this.dialog && isTopDismissible(this)) {
      this.requestClose(this.dialog);
    }
  }
  handleKeyDown(event) {
    this.dialog.classList.remove("controls-hidden");
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const usesKeys = event.composedPath().some(
      (node) => node instanceof HTMLElement && (node.isContentEditable || node.hasAttribute("data-lightbox-content") || ["input", "textarea", "select", "video"].includes(node.localName))
    );
    if (usesKeys) return;
    const isRTL = this.localize.dir() === "rtl";
    const wasInThumbnails = Boolean(this.shadowRoot?.activeElement?.closest(".thumbnails"));
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight": {
        const isLeft = event.key === "ArrowLeft";
        if (this.isZoomed) {
          this.panBy(isLeft ? KEYBOARD_PAN : -KEYBOARD_PAN, 0, !prefersReducedMotion());
        } else if (isLeft === isRTL) {
          this.next();
        } else {
          this.previous();
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!this.isZoomed) return;
        this.panBy(0, event.key === "ArrowUp" ? KEYBOARD_PAN : -KEYBOARD_PAN, !prefersReducedMotion());
        break;
      case "Home":
        this.index = 0;
        break;
      case "End":
        this.index = this.itemList.length - 1;
        break;
      case "+":
      case "=":
        this.zoomIn();
        break;
      case "-":
      case "_":
        this.zoomOut();
        break;
      case "0":
        this.zoomAtCenter(1);
        break;
      default:
        return;
    }
    event.preventDefault();
    if (wasInThumbnails) {
      this.updateComplete.then(() => {
        this.thumbnails.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
      });
    }
  }
  //
  // Announcements
  //
  /**
   * Tells screen readers which item is showing. The region is a light DOM child slotted into the dialog because a
   * modal dialog makes the shared announcer on the body inert, and some screen readers ignore shadow DOM live regions.
   */
  announce() {
    const item = this.currentItem;
    if (!item) return;
    if (!this.announcer) {
      this.announcer = document.createElement("div");
      this.announcer.slot = "announcer";
      this.announcer.setAttribute("aria-live", "polite");
      this.append(this.announcer);
    }
    const count = this.itemList.length;
    const position = count > 1 ? this.localize.term("compactPageXOfY", this.currentIndex + 1, count) : "";
    const parts = [position, item.resolvedAlt, item.caption].filter(Boolean);
    const message = [...new Set(parts)].join(", ");
    const announcer = this.announcer;
    announcer.textContent = "";
    cancelAnimationFrame(this.announceFrame);
    this.announceFrame = requestAnimationFrame(() => {
      this.announceFrame = requestAnimationFrame(() => {
        announcer.textContent = message;
      });
    });
  }
  //
  // Public methods
  //
  /** Shows the next item. */
  next() {
    const lastIndex = this.itemList.length - 1;
    if (this.currentIndex < lastIndex) {
      this.index = this.currentIndex + 1;
    } else if (this.loop && lastIndex > 0) {
      this.requestedDirection = 1;
      this.index = 0;
    }
  }
  /** Shows the previous item. */
  previous() {
    const lastIndex = this.itemList.length - 1;
    if (this.currentIndex > 0) {
      this.index = this.currentIndex - 1;
    } else if (this.loop && lastIndex > 0) {
      this.requestedDirection = -1;
      this.index = lastIndex;
    }
  }
  /** Zooms in on the current image. */
  zoomIn() {
    this.zoomAtCenter(this.scale * 2);
  }
  /** Zooms out of the current image. */
  zoomOut() {
    this.zoomAtCenter(this.scale / 2);
  }
  //
  // Rendering
  //
  async handleImageLoad(item, image) {
    await image.decode().catch(() => {
    });
    if (this.loadedItems.has(item)) {
      image.classList.add("instant");
    }
    this.loadedItems.add(item);
    image.classList.add("ready");
    this.handleMediaLoad(item, image.naturalWidth, image.naturalHeight);
  }
  handleMediaLoad(item, width, height) {
    const known = this.naturalSizes.get(item);
    const hadError = this.failedItems.delete(item);
    this.naturalSizes.set(item, { width, height });
    if (hadError || known?.width !== width || known?.height !== height) {
      if (this.scale === 1) {
        this.fitRect = null;
      }
      this.requestUpdate();
      this.updateComplete.then(() => this.updateOverlap());
    }
  }
  handleMediaError(item) {
    this.failedItems.add(item);
    this.requestUpdate();
  }
  renderSlide(item, index, currentIndex, count) {
    const isNearby = Math.abs(index - currentIndex) <= 1 || index >= this.visibleFrom && index <= this.visibleTo;
    const label = this.localize.term("compactPageXOfY", index + 1, count);
    return x`
      <div
        part="slide"
        id="slide-${index}"
        class="slide"
        data-index=${index}
        role="group"
        aria-label=${label}
        ?inert=${index !== currentIndex}
      >
        ${isNearby ? this.renderMedia(item, index, currentIndex) : ""}
      </div>
    `;
  }
  renderMedia(item, index, currentIndex) {
    const hasContent = Boolean(item.contentTemplate);
    const natural = this.naturalSizes.get(item);
    const thumbnail = item.thumbnailElement;
    const width = item.width || natural?.width || 0;
    const height = item.height || natural?.height || 0;
    const ratio = width && height ? width / height : thumbnail?.naturalWidth && thumbnail.naturalHeight ? thumbnail.naturalWidth / thumbnail.naturalHeight : item.type === "video" || hasContent ? 16 / 9 : 1.5;
    const hasError = this.failedItems.has(item);
    const placeholder = item.thumbnailSrc;
    const alt = item.resolvedAlt;
    return x`
      <div class="frame">
        <div
          class="media"
          style=${o2({ "--ratio": String(ratio), "--natural-width": width ? `${width}px` : "100cqw" })}
        >
          ${hasContent ? x`<slot name=${this.getContentSlot(item)}></slot>` : item.type === "video" ? x`
                  <video
                    part="video"
                    src=${o3(item.src || void 0)}
                    poster=${o3(placeholder || void 0)}
                    aria-label=${o3(alt || void 0)}
                    controls
                    playsinline
                    preload="metadata"
                    @loadedmetadata=${(event) => {
      const video = event.target;
      this.handleMediaLoad(item, video.videoWidth, video.videoHeight);
    }}
                    @error=${() => this.handleMediaError(item)}
                  ></video>
                ` : x`
                  <img
                    part="image"
                    src=${o3(item.src || void 0)}
                    srcset=${o3(item.srcset || void 0)}
                    sizes=${o3(item.sizes || (item.srcset ? "100vw" : void 0))}
                    alt=${alt}
                    decoding="async"
                    draggable="false"
                    fetchpriority=${index === currentIndex ? "high" : "low"}
                    @load=${(event) => this.handleImageLoad(item, event.target)}
                    @error=${() => this.handleMediaError(item)}
                  />
                  ${placeholder ? x`
                        <div
                          class="placeholder"
                          style=${o2({ backgroundImage: `url("${placeholder.replace(/"/g, "%22")}")` })}
                        ></div>
                      ` : ""}
                `}
          ${hasError ? x`
                <div class="error-message">
                  <wa-icon library="system" name="image"></wa-icon>
                  ${this.localize.term("mediaLoadError")}
                </div>
              ` : ""}
        </div>
      </div>
    `;
  }
  render() {
    const items = this.itemList;
    const count = items.length;
    const index = this.currentIndex;
    const item = items[index];
    const isRTL = o ? this.dir === "rtl" : this.localize.dir() === "rtl";
    const hasMany = count > 1;
    const hasThumbnails = this.withThumbnails && hasMany;
    const canZoom = this.canZoom;
    return x`
      <slot></slot>

      <dialog
        part="dialog"
        class=${e2({
      dialog: true,
      zoomed: this.isZoomed,
      "has-captions": items.some((i) => i.caption),
      "has-thumbnails": hasThumbnails
    })}
        aria-label=${this.label || this.localize.term("lightbox")}
        tabindex="-1"
        @cancel=${this.handleDialogCancel}
        @keydown=${this.handleKeyDown}
      >
        <div part="backdrop" class="backdrop"></div>

        <div
          part="scroll-container"
          class="slides"
          tabindex="-1"
          @scroll=${this.handleScroll}
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleSlidesClick}
          @pointerdown=${this.handlePointerDown}
          @pointermove=${this.handlePointerMove}
          @pointerup=${this.handlePointerUp}
          @pointercancel=${this.handlePointerCancel}
          @dragstart=${(event) => event.preventDefault()}
        >
          ${this.hasOpened ? items.map((slideItem, i) => this.renderSlide(slideItem, i, index, count)) : ""}
        </div>

        <img class="departing" alt="" draggable="false" hidden />
        <div class="ghost" hidden><img alt="" draggable="false" /></div>

        <div class="chrome">
          <div part="toolbar" class="toolbar">
            <span part="counter" class="counter" ?hidden=${!hasMany || this.withoutCounter}>
              ${this.localize.term("compactPageXOfY", index + 1, count)}
            </span>
            <span class="spacer"></span>
            <slot name="actions"></slot>
            <button
              part="zoom-button"
              class="control zoom"
              type="button"
              ?hidden=${!canZoom}
              aria-label=${this.localize.term(this.isZoomed ? "zoomOut" : "zoomIn")}
              @click=${this.handleZoomClick}
            >
              <slot name="zoom-in-icon" ?hidden=${this.isZoomed}>
                <wa-icon library="system" name="magnifying-glass-plus"></wa-icon>
              </slot>
              <slot name="zoom-out-icon" ?hidden=${!this.isZoomed}>
                <wa-icon library="system" name="magnifying-glass-minus"></wa-icon>
              </slot>
            </button>
            <button
              part="close-button"
              class="control"
              type="button"
              aria-label=${this.localize.term("close")}
              @click=${(event) => this.requestClose(event.currentTarget)}
            >
              <slot name="close-icon"><wa-icon library="system" name="xmark"></wa-icon></slot>
            </button>
          </div>

          <button
            part="navigation-button navigation-button-previous"
            class="control navigation previous"
            type="button"
            ?hidden=${!hasMany || this.withoutNavigation}
            aria-label=${this.localize.term("previousSlide")}
            aria-disabled=${!this.loop && index === 0 ? "true" : "false"}
            @click=${this.previous}
          >
            <slot name="previous-icon">
              <wa-icon library="system" name=${isRTL ? "chevron-right" : "chevron-left"}></wa-icon>
            </slot>
          </button>

          <button
            part="navigation-button navigation-button-next"
            class="control navigation next"
            type="button"
            ?hidden=${!hasMany || this.withoutNavigation}
            aria-label=${this.localize.term("nextSlide")}
            aria-disabled=${!this.loop && index === count - 1 ? "true" : "false"}
            @click=${this.next}
          >
            <slot name="next-icon">
              <wa-icon library="system" name=${isRTL ? "chevron-left" : "chevron-right"}></wa-icon>
            </slot>
          </button>

          <div class="footer">
            <div part="caption" class="caption" ?hidden=${!item?.caption}>${item?.caption || E}</div>

            <div part="thumbnails" class="thumbnails" role="tablist" ?hidden=${!hasThumbnails}>
              ${hasThumbnails ? items.map((thumbnailItem, i) => {
      const isActive = i === index;
      const src = thumbnailItem.thumbnailSrc;
      return x`
                      <button
                        part="thumbnail ${isActive ? "thumbnail-active" : ""}"
                        class="thumbnail"
                        type="button"
                        role="tab"
                        aria-selected=${isActive ? "true" : "false"}
                        aria-controls="slide-${i}"
                        aria-label=${this.localize.term("goToSlide", i + 1, count)}
                        tabindex=${isActive ? "0" : "-1"}
                        @click=${() => this.handleThumbnailClick(i)}
                      >
                        ${src ? x`<img src=${src} alt="" draggable="false" loading="lazy" />` : ""}
                      </button>
                    `;
    }) : ""}
            </div>
          </div>
        </div>

        <div class="wa-visually-hidden"><slot name="announcer"></slot></div>
      </dialog>
    `;
  }
};
WaLightbox.css = [visually_hidden_styles_default, lightbox_styles_default];
__decorateClass([
  e(".dialog")
], WaLightbox.prototype, "dialog", 2);
__decorateClass([
  e(".backdrop")
], WaLightbox.prototype, "backdrop", 2);
__decorateClass([
  e(".slides")
], WaLightbox.prototype, "slides", 2);
__decorateClass([
  e(".chrome")
], WaLightbox.prototype, "chrome", 2);
__decorateClass([
  e(".ghost")
], WaLightbox.prototype, "ghost", 2);
__decorateClass([
  e(".ghost img")
], WaLightbox.prototype, "ghostImage", 2);
__decorateClass([
  e(".departing")
], WaLightbox.prototype, "departingImage", 2);
__decorateClass([
  e(".thumbnails")
], WaLightbox.prototype, "thumbnails", 2);
__decorateClass([
  r()
], WaLightbox.prototype, "itemList", 2);
__decorateClass([
  r()
], WaLightbox.prototype, "hasOpened", 2);
__decorateClass([
  r()
], WaLightbox.prototype, "isZoomed", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaLightbox.prototype, "open", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], WaLightbox.prototype, "index", 2);
__decorateClass([
  n({ reflect: true })
], WaLightbox.prototype, "label", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaLightbox.prototype, "loop", 2);
__decorateClass([
  n({ attribute: "with-thumbnails", type: Boolean, reflect: true })
], WaLightbox.prototype, "withThumbnails", 2);
__decorateClass([
  n({ attribute: "without-navigation", type: Boolean, reflect: true })
], WaLightbox.prototype, "withoutNavigation", 2);
__decorateClass([
  n({ attribute: "without-counter", type: Boolean, reflect: true })
], WaLightbox.prototype, "withoutCounter", 2);
__decorateClass([
  n({ attribute: "without-zoom", type: Boolean, reflect: true })
], WaLightbox.prototype, "withoutZoom", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], WaLightbox.prototype, "handleOpenChange", 1);
WaLightbox = __decorateClass([
  t("wa-lightbox")
], WaLightbox);
if (!o) {
  document.addEventListener("click", (event) => {
    const invoker = event.target.closest?.("[data-lightbox]");
    if (!(invoker instanceof Element)) return;
    const [command, id, itemId] = parseSpaceDelimitedTokens(invoker.getAttribute("data-lightbox") || "");
    if (command !== "open" || !id?.length) return;
    const root = invoker.getRootNode();
    const lightbox = root.getElementById(id);
    if (lightbox?.localName !== "wa-lightbox") {
      console.warn(`A lightbox with an ID of "${id}" could not be found in this document.`);
      return;
    }
    let index = 0;
    if (itemId) {
      index = lightbox.items.findIndex((item) => item.id === itemId);
      if (index === -1) {
        console.warn(`A lightbox item with an ID of "${itemId}" could not be found in this lightbox.`, lightbox);
        index = 0;
      }
    }
    lightbox.index = index;
    lightbox.open = true;
  });
}

export {
  WaLightbox
};
