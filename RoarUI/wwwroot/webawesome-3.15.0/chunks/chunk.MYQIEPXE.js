/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  counterUnits,
  getDuration,
  unitLengths
} from "./chunk.6VIDMBCN.js";
import {
  counter_styles_default
} from "./chunk.26XO63FT.js";
import {
  visually_hidden_styles_default
} from "./chunk.GDF3PG2B.js";
import {
  HasSlotController
} from "./chunk.RWNXKUCF.js";
import {
  WaFinishEvent
} from "./chunk.IIHGIRPB.js";
import {
  watch
} from "./chunk.PZAN6FPN.js";
import {
  WebAwesomeElement,
  n,
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

// src/components/counter/counter.ts
var defaultUnits = ["days", "hours", "minutes", "seconds"];
var formatters = /* @__PURE__ */ new Map();
function getFormatter(lang, options) {
  const key = lang + JSON.stringify(options);
  let formatter = formatters.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(lang, options);
    formatters.set(key, formatter);
  }
  return formatter;
}
function getUnitFormatter(lang, unit, unitDisplay) {
  return getFormatter(lang, { style: "unit", unit: unit.slice(0, -1), unitDisplay });
}
var WaCounter = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "finished");
    this.localize = new LocalizeController(this);
    this.isCountingDown = false;
    this.isFinished = false;
    this.pausedAt = null;
    this.shift = 0;
    this.startedAt = 0;
    this.values = {};
    this.direction = "down";
    this.label = "";
    this.largestUnit = "days";
    this.smallestUnit = "seconds";
    this.format = "long";
    this.withoutLabels = false;
    this.delimiter = "";
    this.paused = false;
  }
  connectedCallback() {
    super.connectedCallback();
    if (o) {
      return;
    }
    this.startedAt || (this.startedAt = Date.now());
    if (this.hasUpdated) {
      this.tick();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.timeout);
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (o || this.didSSR && !this.hasUpdated) {
      return;
    }
    if (changedProperties.has("duration")) {
      this.startedAt = Date.now();
    }
    if (changedProperties.has("date") || changedProperties.has("duration")) {
      this.shift = 0;
      this.pausedAt = null;
      this.isCountingDown = false;
    }
    if (this.paused) {
      this.pausedAt ?? (this.pausedAt = Date.now());
    } else if (this.pausedAt !== null) {
      this.shift += Date.now() - this.pausedAt;
      this.pausedAt = null;
    }
    this.tick();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.didSSR) {
      this.updateComplete.then(() => this.requestUpdate());
    }
  }
  /** Returns the units to show, largest to smallest. */
  getUnits() {
    const start = counterUnits.indexOf(this.largestUnit);
    const end = counterUnits.indexOf(this.smallestUnit);
    return start < 0 || end < 0 || start > end ? defaultUnits : counterUnits.slice(start, end + 1);
  }
  /** Computes the values from the clock, re-renders when one changes, and schedules the next tick. */
  tick() {
    clearTimeout(this.timeout);
    const isDown = this.direction !== "up";
    const offset = isDown ? this.duration ?? NaN : 0;
    const base = this.date ? new Date(this.date).getTime() : this.startedAt + offset;
    const target = base + this.shift;
    const now = this.pausedAt ?? Date.now();
    const diff = isDown ? target - now : now - target;
    const units = this.getUnits();
    const step = isDown && unitLengths[units[units.length - 1]] || 1e3;
    const shown = Math.max(0, (isDown ? Math.ceil(diff / step) : Math.floor(diff / step)) * step);
    const isFinished = isDown && shown === 0;
    let values = {};
    if (!isNaN(diff)) {
      const from = isDown ? target - shown : target;
      values = getDuration(new Date(from), new Date(from + shown), units[0], units[units.length - 1], isDown);
    }
    if (counterUnits.some((unit) => values[unit] !== this.values[unit])) {
      this.values = values;
      this.requestUpdate();
    }
    this.customStates.set("finished", isFinished);
    if (isFinished !== this.isFinished) {
      this.isFinished = isFinished;
      this.requestUpdate();
    }
    if (!isNaN(diff) && !isFinished && this.pausedAt === null && this.isConnected) {
      const delay = isDown ? diff % step || step : 1e3 - (diff % 1e3 + 1e3) % 1e3;
      this.timeout = setTimeout(() => this.tick(), delay);
    }
    if (isFinished && this.isCountingDown) {
      this.updateComplete.then(() => this.dispatchEvent(new WaFinishEvent()));
    }
    this.isCountingDown = isDown && shown > 0;
  }
  formatValue(lang, value, unit) {
    if (typeof this.valueFormatter === "function") {
      try {
        return this.valueFormatter(value, unit);
      } catch {
        return "";
      }
    }
    return getFormatter(lang, { minimumIntegerDigits: 2 }).format(value);
  }
  /** Returns the localized label for a unit, pluralized for its value. */
  getLabel(lang, value, unit) {
    const unitDisplay = this.format === "short" || this.format === "narrow" ? this.format : "long";
    return getUnitFormatter(lang, unit, unitDisplay).formatToParts(value).filter((part) => part.type === "unit").map((part) => part.value).join("");
  }
  handleLabelChange() {
    if (this.internals) {
      this.internals.role = "timer";
      this.internals.ariaLabel = this.label || null;
    }
  }
  render() {
    const lang = this.localize.lang();
    const units = this.getUnits();
    const firstNonZero = units.findIndex((unit) => this.values[unit]);
    const spokenUnits = units.slice(firstNonZero < 0 ? -1 : firstNonZero);
    const phrase = spokenUnits.map((unit) => getUnitFormatter(lang, unit, "long").format(this.values[unit] ?? 0)).join(" ");
    const hasValues = Object.keys(this.values).length > 0;
    const shownUnits = this.withoutLabels || !hasValues ? units : spokenUnits;
    const widestLabels = units.map(
      (unit) => [0, 1, 2, 5].map((sample) => this.getLabel(lang, sample, unit)).reduce((widest, sample) => sample.length > widest.length ? sample : widest)
    );
    const sizerSpans = widestLabels.map((label) => x`<span class="sizer" aria-hidden="true">${label}</span>`);
    const unitTemplates = shownUnits.map((unit, index) => {
      const value = this.values[unit] ?? 0;
      const label = this.getLabel(lang, value, unit);
      const delimiterSpan = x`<span part="delimiter" class="delimiter" aria-hidden="true">${this.delimiter}</span>`;
      const valueSpan = x`<span part="value" class="value">${this.formatValue(lang, value, unit)}</span>`;
      const defaultLabel = x`<span class="default-label"><span>${label}</span>${sizerSpans}</span>`;
      const labelSpan = x`<span part="label" class="label"><slot name=${unit}>${defaultLabel}</slot></span>`;
      const unitSpan = x`<span part="unit" class="unit" aria-hidden="true">${valueSpan}${labelSpan}</span>`;
      return index > 0 && this.delimiter ? x`${delimiterSpan}${unitSpan}` : unitSpan;
    });
    const showFinished = this.isFinished && this.hasSlotController.test("finished");
    const counter = x`<span class="wa-visually-hidden">${phrase}</span>${unitTemplates}`;
    return x`<slot name="finished" ?hidden=${!showFinished}></slot>${showFinished ? E : counter}`;
  }
};
WaCounter.css = [counter_styles_default, visually_hidden_styles_default];
__decorateClass([
  n()
], WaCounter.prototype, "date", 2);
__decorateClass([
  n({ type: Number })
], WaCounter.prototype, "duration", 2);
__decorateClass([
  n({ reflect: true })
], WaCounter.prototype, "direction", 2);
__decorateClass([
  n()
], WaCounter.prototype, "label", 2);
__decorateClass([
  n({ attribute: "largest-unit" })
], WaCounter.prototype, "largestUnit", 2);
__decorateClass([
  n({ attribute: "smallest-unit" })
], WaCounter.prototype, "smallestUnit", 2);
__decorateClass([
  n()
], WaCounter.prototype, "format", 2);
__decorateClass([
  n({ attribute: "without-labels", type: Boolean, reflect: true })
], WaCounter.prototype, "withoutLabels", 2);
__decorateClass([
  n()
], WaCounter.prototype, "delimiter", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaCounter.prototype, "paused", 2);
__decorateClass([
  n({ attribute: false })
], WaCounter.prototype, "valueFormatter", 2);
__decorateClass([
  watch("label")
], WaCounter.prototype, "handleLabelChange", 1);
WaCounter = __decorateClass([
  t("wa-counter")
], WaCounter);

export {
  WaCounter
};
