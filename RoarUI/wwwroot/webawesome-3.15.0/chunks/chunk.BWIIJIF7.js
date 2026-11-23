/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  number_ticker_styles_default
} from "./chunk.GFA5DYI4.js";
import {
  announce
} from "./chunk.YQNBAO2Z.js";
import {
  visually_hidden_styles_default
} from "./chunk.GDF3PG2B.js";
import {
  WaFinishEvent
} from "./chunk.IIHGIRPB.js";
import {
  prefersReducedMotion
} from "./chunk.JATN5J6W.js";
import {
  watch
} from "./chunk.PZAN6FPN.js";
import {
  WebAwesomeElement,
  n,
  r,
  t
} from "./chunk.MHOHBKM7.js";
import {
  LocalizeController
} from "./chunk.6TJ3RFTS.js";
import {
  x
} from "./chunk.BKE5EYM3.js";
import {
  __decorateClass
} from "./chunk.763SWQQU.js";

// src/components/number-ticker/number-ticker.ts
var DEFAULT_EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
function decimalPlaces(n2) {
  const text = Number(Number(n2).toPrecision(15)).toLocaleString("en", {
    maximumFractionDigits: 20,
    useGrouping: false
  });
  return text.split(".")[1]?.length ?? 0;
}
var WaNumberTicker = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.isIntersecting = false;
    this.isPending = true;
    this.frame = 0;
    /** Set once the ticker settles on a counted value. Later changes are announced. */
    this.hasCounted = false;
    this.displayValue = null;
    this.value = 0;
    this.startValue = 0;
    this.duration = 2e3;
    this.delay = 0;
    this.easing = DEFAULT_EASING;
    this.eager = false;
    this.type = "decimal";
    this.withoutGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        this.isIntersecting = entry.intersectionRatio >= 0.5;
        if (this.isIntersecting && this.isPending) this.start();
      },
      { threshold: 0.5 }
    );
    this.observer.observe(this);
    if (this.eager && this.isPending && this.hasUpdated) this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer?.disconnect();
    this.isIntersecting = false;
    if (this.animation) this.isPending = true;
    this.stop();
  }
  handleValueChange() {
    this.requestRun();
  }
  handleEagerChange() {
    if (this.eager && this.isPending) this.start();
  }
  /** Plays the ticker again from `startValue` to `value`. */
  restart() {
    this.stop();
    this.hasCounted = false;
    this.displayValue = null;
    this.requestRun();
  }
  requestRun() {
    this.isPending = true;
    if (this.eager || this.isIntersecting || this.animation) this.start();
  }
  start() {
    const from = this.displayValue ?? this.startValue;
    const to = this.value;
    const delay = this.displayValue === null && Number.isFinite(this.delay) ? this.delay : 0;
    this.stop();
    this.isPending = false;
    if (prefersReducedMotion() || !(this.duration > 0) || from === to) {
      this.finish();
      return;
    }
    const options = { duration: this.duration, delay, fill: "both" };
    let animation;
    let easing = this.easing;
    try {
      animation = this.animate(null, { ...options, easing });
    } catch {
      easing = DEFAULT_EASING;
      animation = this.animate(null, { ...options, easing });
    }
    this.animation = animation;
    const settleTime = this.findSettleTime(from, to, easing);
    const tick = () => {
      const time = Number(animation.currentTime);
      if (time >= delay + settleTime || animation.playState === "finished" || animation.playState === "idle") {
        this.finish();
        return;
      }
      if (time >= delay) {
        this.customStates.set("counting", true);
        const progress = animation.effect?.getComputedTiming().progress ?? 0;
        this.displayValue = from + (to - from) * progress;
      }
      this.frame = requestAnimationFrame(tick);
    };
    tick();
  }
  async finish() {
    this.stop();
    this.displayValue = this.value;
    await this.updateComplete;
    if (this.animation || this.isPending) return;
    if (this.hasCounted) announce(this.format(this.value));
    if (this.value !== this.startValue) this.hasCounted = true;
    this.dispatchEvent(new WaFinishEvent());
  }
  /**
   * Returns how far into a count the shown text stops changing. Walks backward from the end because an easing that
   * overshoots reaches the final text early, leaves it, and comes back.
   */
  findSettleTime(from, to, easing) {
    const duration = this.duration;
    if (!Number.isFinite(duration)) return duration;
    const effect = new KeyframeEffect(null, null, { duration, easing, fill: "both" });
    const sampler = new Animation(effect, null);
    const finalText = this.format(to);
    const sampleCount = 60;
    for (let sample = sampleCount - 1; sample >= 0; sample--) {
      sampler.currentTime = duration * sample / sampleCount;
      const progress = effect.getComputedTiming().progress ?? 0;
      if (this.format(from + (to - from) * progress) !== finalText) {
        return duration * (sample + 1) / sampleCount;
      }
    }
    return 0;
  }
  stop() {
    cancelAnimationFrame(this.frame);
    this.customStates.set("counting", false);
    this.animation?.cancel();
    this.animation = void 0;
  }
  format(n2) {
    if (isNaN(n2)) return "";
    try {
      if (typeof this.valueFormatter === "function") return this.valueFormatter(n2);
      const hasDigitOptions = [
        this.minimumFractionDigits,
        this.maximumFractionDigits,
        this.minimumSignificantDigits,
        this.maximumSignificantDigits
      ].some((digits) => digits != null);
      const decimals = this.type === "decimal" && !hasDigitOptions ? Math.max(decimalPlaces(this.startValue), decimalPlaces(this.value)) : void 0;
      const options = {
        style: this.type,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: !this.withoutGrouping,
        minimumIntegerDigits: this.minimumIntegerDigits,
        // When only one fraction digit option is set, use it for both so the width stays steady.
        minimumFractionDigits: decimals ?? this.minimumFractionDigits ?? this.maximumFractionDigits,
        maximumFractionDigits: decimals ?? this.maximumFractionDigits ?? this.minimumFractionDigits,
        minimumSignificantDigits: this.minimumSignificantDigits,
        maximumSignificantDigits: this.maximumSignificantDigits
      };
      const text = this.localize.number(n2, options);
      return n2 < 0 && text === this.localize.number(-0, options) ? this.localize.number(0, options) : text;
    } catch {
      return "";
    }
  }
  render() {
    const shown = this.format(this.displayValue ?? this.startValue);
    const final = this.format(this.value);
    if (shown === final) return x`<span>${final}</span>`;
    return x`<span aria-hidden="true">${shown}</span><span class="wa-visually-hidden">${final}</span>`;
  }
};
WaNumberTicker.css = [number_ticker_styles_default, visually_hidden_styles_default];
__decorateClass([
  r()
], WaNumberTicker.prototype, "displayValue", 2);
__decorateClass([
  n({ type: Number })
], WaNumberTicker.prototype, "value", 2);
__decorateClass([
  n({ attribute: "start-value", type: Number })
], WaNumberTicker.prototype, "startValue", 2);
__decorateClass([
  n({ type: Number })
], WaNumberTicker.prototype, "duration", 2);
__decorateClass([
  n({ type: Number })
], WaNumberTicker.prototype, "delay", 2);
__decorateClass([
  n()
], WaNumberTicker.prototype, "easing", 2);
__decorateClass([
  n({ type: Boolean })
], WaNumberTicker.prototype, "eager", 2);
__decorateClass([
  n()
], WaNumberTicker.prototype, "type", 2);
__decorateClass([
  n({ attribute: "without-grouping", type: Boolean })
], WaNumberTicker.prototype, "withoutGrouping", 2);
__decorateClass([
  n()
], WaNumberTicker.prototype, "currency", 2);
__decorateClass([
  n({ attribute: "currency-display" })
], WaNumberTicker.prototype, "currencyDisplay", 2);
__decorateClass([
  n({ attribute: "minimum-integer-digits", type: Number })
], WaNumberTicker.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  n({ attribute: "minimum-fraction-digits", type: Number })
], WaNumberTicker.prototype, "minimumFractionDigits", 2);
__decorateClass([
  n({ attribute: "maximum-fraction-digits", type: Number })
], WaNumberTicker.prototype, "maximumFractionDigits", 2);
__decorateClass([
  n({ attribute: "minimum-significant-digits", type: Number })
], WaNumberTicker.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  n({ attribute: "maximum-significant-digits", type: Number })
], WaNumberTicker.prototype, "maximumSignificantDigits", 2);
__decorateClass([
  n({ attribute: false })
], WaNumberTicker.prototype, "valueFormatter", 2);
__decorateClass([
  watch("value")
], WaNumberTicker.prototype, "handleValueChange", 1);
__decorateClass([
  watch("eager", { waitUntilFirstUpdate: true })
], WaNumberTicker.prototype, "handleEagerChange", 1);
WaNumberTicker = __decorateClass([
  t("wa-number-ticker")
], WaNumberTicker);

export {
  WaNumberTicker
};
