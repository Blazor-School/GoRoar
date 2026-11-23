/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  typescript_default
} from "./chunk.K4PD7LOC.js";
import {
  javascript_default
} from "./chunk.3A5WBOWC.js";
import {
  json_default
} from "./chunk.J6LQ25J6.js";
import {
  html_default
} from "./chunk.2CFGEVAR.js";
import {
  css_default
} from "./chunk.L3E44XVP.js";
import {
  dedent
} from "./chunk.N2PYEOBL.js";
import {
  code_highlighter_styles_default
} from "./chunk.NQ7HNYGM.js";
import {
  loadCodeGrammars,
  normalizeLanguage,
  preloadCodeGrammars,
  unwatchCodeHighlighter,
  watchCodeHighlighter
} from "./chunk.ANNJ3J2Z.js";
import {
  WaErrorEvent
} from "./chunk.YDQCS2HK.js";
import {
  WaLoadEvent
} from "./chunk.WDIIGUNP.js";
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

// src/internal/textmate.ts
var noMatch = { indices: [[Infinity, Infinity]] };
var getCategory = (scope) => {
  const parts = scope.split(".");
  const [first, second, third] = parts;
  const last = parts[parts.length - 1];
  if (first === "markup" && ["quote", "inserted", "deleted", "raw"].includes(second)) return second;
  if (first === "entity" && second === "name") return third;
  if (scope.startsWith("constant.character.entity")) return "character-entity";
  if (parts.includes("numeric")) return "numeric";
  if (scope.startsWith("support.type.property-name")) return "property";
  if (parts.includes("attribute-value")) return "attribute-value";
  if (scope.startsWith("string.other.link")) return "link";
  if (["doctype", "at-rule", "important", "regexp", "boolean", "symbol", "operator", "attribute-name"].includes(last))
    return last;
  if (["comment", "string", "constant", "storage", "keyword", "variable", "punctuation", "entity", "support"].includes(
    first
  ))
    return first;
  return void 0;
};
var escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var expandEnd = (pattern, beginMatch) => pattern.replace(/\\(\d+)/g, (reference, index) => {
  return beginMatch[+index] === void 0 ? reference : escapeRegex(beginMatch[+index]);
});
var getRules = (rule) => {
  if (!rule) return [];
  if (Array.isArray(rule)) return rule;
  const single = rule;
  if (single.match || single.begin || single.include) return [single];
  return rule.patterns || [];
};
function tokenize(text, grammar, grammars) {
  const tokens = [];
  const regexes = /* @__PURE__ */ new Map();
  const matches = /* @__PURE__ */ new Map();
  const addRange = (start, end, scope) => {
    const category = getCategory(scope);
    if (!category || start === end) return;
    tokens.push({ start, end, category });
  };
  const addCaptures = (match, captures = {}) => {
    Object.entries(captures).forEach(([index, capture]) => {
      const offsets = match.indices[+index];
      if (offsets) addRange(offsets[0], offsets[1], capture.name);
    });
  };
  const exec = (pattern, start, end) => {
    let match = matches.get(pattern);
    if (!match || match.indices[0][0] < start) {
      if (!regexes.has(pattern)) regexes.set(pattern, new RegExp(pattern, "dgm"));
      const regex = regexes.get(pattern);
      regex.lastIndex = start;
      match = regex.exec(text) || noMatch;
      matches.set(pattern, match);
    }
    return match.indices[0][0] < end && match.indices[0][1] <= end ? match : null;
  };
  const resolveInclude = (include, current, baseGrammar) => {
    if (include === "$self") return { grammar: current, rules: current.patterns };
    if (include === "$base") return { grammar: baseGrammar, rules: baseGrammar.patterns };
    if (include[0] === "#") {
      return { grammar: current, rules: getRules(current.repository?.[include.slice(1)]) };
    }
    const [scopeName, repositoryName] = include.split("#");
    const includedGrammar = grammars.scopes.get(scopeName);
    if (!includedGrammar) return null;
    return {
      grammar: includedGrammar,
      rules: repositoryName ? getRules(includedGrammar.repository?.[repositoryName]) : includedGrammar.patterns
    };
  };
  const expandRules = (rules, current, baseGrammar, activeIncludes = /* @__PURE__ */ new Set()) => {
    const expanded = [];
    rules.forEach((rule) => {
      if (rule.include) {
        const includeKey = `${current.scopeName}:${rule.include}`;
        if (activeIncludes.has(includeKey)) return;
        const included = resolveInclude(rule.include, current, baseGrammar);
        if (!included) return;
        const nestedIncludes = new Set(activeIncludes);
        nestedIncludes.add(includeKey);
        expanded.push(...expandRules(included.rules, included.grammar, baseGrammar, nestedIncludes));
        return;
      }
      if (rule.match || rule.begin && rule.end) expanded.push({ grammar: current, rule });
    });
    return expanded;
  };
  const nextRule = (contexts, start, end) => {
    let winner = null;
    contexts.forEach((context) => {
      const pattern = context.rule.match || context.rule.begin;
      const match = exec(pattern, start, end);
      if (!match) return;
      if (!winner || match.indices[0][0] < winner.match.indices[0][0]) {
        winner = { ...context, match };
      }
    });
    return winner;
  };
  const scanRegion = (rules, start, end, current, baseGrammar = current, closing = null) => {
    const contexts = expandRules(rules, current, baseGrammar);
    let cursor = start;
    while (cursor < end) {
      const candidate = nextRule(contexts, cursor, end);
      const endMatch = closing ? exec(closing.pattern, cursor, end) : null;
      const candidateStart = candidate?.match.indices[0][0] ?? Infinity;
      const endStart = endMatch?.indices[0][0] ?? Infinity;
      if (endMatch && (endStart < candidateStart || endStart === candidateStart && !closing?.applyEndPatternLast)) {
        return { contentEnd: endStart, end: endMatch.indices[0][1], match: endMatch };
      }
      if (!candidate) return { contentEnd: end, end, match: null };
      const { rule, match, grammar: ruleGrammar } = candidate;
      if (rule.match) {
        if (rule.name) addRange(match.indices[0][0], match.indices[0][1], rule.name);
        addCaptures(match, rule.captures);
        cursor = match.indices[0][1] > cursor ? match.indices[0][1] : cursor + 1;
        continue;
      }
      const nested = scanRegion(rule.patterns || [], match.indices[0][1], end, ruleGrammar, baseGrammar, {
        pattern: expandEnd(rule.end, match),
        applyEndPatternLast: rule.applyEndPatternLast
      });
      if (rule.name) addRange(match.indices[0][0], nested.end, rule.name);
      if (rule.contentName) addRange(match.indices[0][1], nested.contentEnd, rule.contentName);
      addCaptures(match, rule.beginCaptures || rule.captures);
      if (nested.match) addCaptures(nested.match, rule.endCaptures || rule.captures);
      cursor = nested.end > cursor ? nested.end : cursor + 1;
    }
    return { contentEnd: end, end, match: null };
  };
  scanRegion(grammar.patterns, 0, text.length, grammar);
  return tokens;
}

// src/components/code-highlighter/code-highlighter.ts
preloadCodeGrammars({
  css: css_default,
  html: html_default,
  javascript: javascript_default,
  json: json_default,
  typescript: typescript_default
});
var supportsHighlights = !o && typeof CSS !== "undefined" && "highlights" in CSS;
var highlights = /* @__PURE__ */ new Map();
function getHighlight(category) {
  let highlight = highlights.get(category);
  if (!highlight) {
    highlight = new Highlight();
    highlights.set(category, highlight);
    CSS.highlights.set(`wa-${category}`, highlight);
  }
  return highlight;
}
var WaCodeHighlighter = class extends WebAwesomeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.mutationObserver = null;
    this.resizeObserver = null;
    this.hasWarnedAboutElements = false;
    this.ranges = [];
    this.canScroll = false;
    this.loadedGrammar = null;
    this.code = "";
    this.language = "";
    this.label = "";
    this.withoutCopy = false;
    this.withoutDedent = false;
    this.wrap = false;
  }
  /** @internal The grammar name the current language resolves to. */
  get grammarName() {
    return normalizeLanguage(this.language.toLowerCase());
  }
  connectedCallback() {
    super.connectedCallback();
    if (!o) {
      watchCodeHighlighter(this);
      this.mutationObserver = new MutationObserver(() => this.requestUpdate());
      this.mutationObserver.observe(this, { childList: true, characterData: true, subtree: true });
      this.resizeObserver = new ResizeObserver(() => this.updateCanScroll());
      this.resizeObserver.observe(this);
    }
    if (this.hasUpdated) {
      this.highlight();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchCodeHighlighter(this);
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    this.clearHighlights();
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("language") && !o) {
      this.ensureGrammar();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    const code = this.displayedCode;
    const codeChanged = this.codeElement.textContent !== code;
    if (codeChanged) {
      this.codeElement.textContent = code;
    }
    if (codeChanged || changedProperties.has("loadedGrammar")) {
      this.highlight();
    }
    this.updateCanScroll();
  }
  /** The code that's shown: the code property, or the slotted code. */
  get displayedCode() {
    return this.code || this.slottedCode;
  }
  /** Gets the code from the light DOM, dedented unless `without-dedent` is set. */
  get slottedCode() {
    if (o) return "";
    const script = this.querySelector(':scope > script[type="text/plain"]');
    if (!script && this.firstElementChild && !this.hasWarnedAboutElements) {
      this.hasWarnedAboutElements = true;
      console.warn(
        `<wa-code-highlighter> found HTML elements in its content, which usually means the code wasn't escaped. Escape "<" as "&lt;" and "&" as "&amp;", wrap the code in <script type="text/plain">, or set the code property instead.`,
        this
      );
    }
    const text = script ? script.text : this.textContent ?? "";
    if (this.withoutDedent) {
      return text.replace(/^\r?\n/, "");
    }
    return dedent(text);
  }
  /** @internal Loads the grammar for the current language and reports the outcome with a state and an event. */
  async ensureGrammar() {
    const language = this.language.toLowerCase();
    const grammarName = this.grammarName;
    this.loadedGrammar = null;
    this.customStates.set("error", false);
    this.customStates.set("loading", Boolean(language));
    if (!language) return;
    const grammars = await loadCodeGrammars([grammarName]);
    const grammar = grammars.languages[grammarName];
    if (this.language.toLowerCase() !== language) return;
    this.customStates.set("loading", false);
    if (!grammar) {
      this.customStates.set("error", true);
      console.warn(
        `<wa-code-highlighter> has no grammar for "${this.language}". The code renders as plain text.`,
        this
      );
      this.dispatchEvent(new WaErrorEvent());
      return;
    }
    this.loadedGrammar = { grammar, grammars };
    await this.updateComplete;
    this.dispatchEvent(new WaLoadEvent());
  }
  /** Replaces this element's highlight ranges with ranges for the current code and grammar. */
  highlight() {
    if (!supportsHighlights) return;
    this.clearHighlights();
    const node = this.codeElement?.firstChild;
    const canHighlight = Boolean(this.loadedGrammar) && this.isConnected && node?.nodeType === Node.TEXT_NODE;
    this.customStates.set("highlighted", canHighlight);
    if (!canHighlight) return;
    const text = node.data;
    const { grammar, grammars } = this.loadedGrammar;
    for (const token of tokenize(text, grammar, grammars)) {
      const range = new Range();
      const highlight = getHighlight(token.category);
      range.setStart(node, token.start);
      range.setEnd(node, token.end);
      highlight.add(range);
      this.ranges.push([highlight, range]);
    }
  }
  /** Removes this element's ranges from the shared highlights. */
  clearHighlights() {
    for (const [highlight, range] of this.ranges) {
      highlight.delete(range);
    }
    this.ranges = [];
  }
  /** Keeps the copy button's composed events from reaching this element, where they'd look like grammar events. */
  handleCopyButtonEvent(event) {
    event.stopPropagation();
  }
  handleKeyDown(event) {
    if (event.key === "Home") {
      event.preventDefault();
      this.pre.scrollTo({ left: 0, top: 0 });
    }
    if (event.key === "End") {
      event.preventDefault();
      this.pre.scrollTo({ left: this.pre.scrollWidth, top: this.pre.scrollHeight });
    }
  }
  updateCanScroll() {
    if (!this.pre) return;
    this.canScroll = this.pre.scrollWidth > this.pre.clientWidth || this.pre.scrollHeight > this.pre.clientHeight;
  }
  render() {
    return x`
      <pre
        part="pre"
        role="region"
        aria-label=${this.label || this.localize.term("code")}
        tabindex=${this.canScroll ? "0" : "-1"}
        @keydown=${this.handleKeyDown}
      ><code part="code"></code></pre>
      ${this.withoutCopy ? E : x`
            <wa-copy-button
              part="copy-button"
              exportparts="
                button:copy-button__button,
                copy-icon:copy-button__copy-icon,
                success-icon:copy-button__success-icon,
                error-icon:copy-button__error-icon,
                feedback:copy-button__feedback
              "
              .value=${this.displayedCode}
              @wa-load=${this.handleCopyButtonEvent}
              @wa-error=${this.handleCopyButtonEvent}
            ></wa-copy-button>
          `}
    `;
  }
};
WaCodeHighlighter.css = code_highlighter_styles_default;
__decorateClass([
  e("code")
], WaCodeHighlighter.prototype, "codeElement", 2);
__decorateClass([
  e("pre")
], WaCodeHighlighter.prototype, "pre", 2);
__decorateClass([
  r()
], WaCodeHighlighter.prototype, "canScroll", 2);
__decorateClass([
  r()
], WaCodeHighlighter.prototype, "loadedGrammar", 2);
__decorateClass([
  n()
], WaCodeHighlighter.prototype, "code", 2);
__decorateClass([
  n()
], WaCodeHighlighter.prototype, "language", 2);
__decorateClass([
  n()
], WaCodeHighlighter.prototype, "label", 2);
__decorateClass([
  n({ attribute: "without-copy", type: Boolean, reflect: true })
], WaCodeHighlighter.prototype, "withoutCopy", 2);
__decorateClass([
  n({ attribute: "without-dedent", type: Boolean, reflect: true })
], WaCodeHighlighter.prototype, "withoutDedent", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], WaCodeHighlighter.prototype, "wrap", 2);
WaCodeHighlighter = __decorateClass([
  t("wa-code-highlighter")
], WaCodeHighlighter);

export {
  WaCodeHighlighter
};
/*!
 * Portions of this file are derived from microlighter 2.2.0 (https://github.com/davatron5000/microlighter).
 *
 * MIT License
 *
 * Copyright (c) 2026 Dave Rupert
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
