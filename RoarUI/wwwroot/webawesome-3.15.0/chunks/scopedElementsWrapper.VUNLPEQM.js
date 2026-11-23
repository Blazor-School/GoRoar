/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  S,
  i2 as i
} from "./chunk.E4Q7ZNYW.js";
import "./chunk.BKE5EYM3.js";
import "./chunk.763SWQQU.js";

// ../../node_modules/@open-wc/dedupe-mixin/src/dedupeMixin.js
var appliedClassMixins = /* @__PURE__ */ new WeakMap();
function wasMixinPreviouslyApplied(mixin, superClass) {
  let klass = superClass;
  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }
    klass = Object.getPrototypeOf(klass);
  }
  return false;
}
function dedupeMixin(mixin) {
  return (superClass) => {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }
    const mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}

// ../../node_modules/@open-wc/scoped-elements/src/ScopedElementsMixin.js
var version = "2.2.2";
var versions = window["scopedElementsVersions"] || (window["scopedElementsVersions"] = []);
if (!versions.includes(version)) {
  versions.push(version);
}
var supportsScopedRegistry = !!ShadowRoot.prototype.createElement;
var ScopedElementsMixinImplementation = (superclass) => (
  /** @type {ScopedElementsHost} */
  class ScopedElementsHost extends superclass {
    /**
     * Obtains the scoped elements definitions map if specified.
     *
     * @returns {ScopedElementsMap}
     */
    static get scopedElements() {
      return {};
    }
    static get scopedElementsVersion() {
      return version;
    }
    /**
     * Obtains the ShadowRoot options.
     *
     * @type {ShadowRootInit}
     */
    static get shadowRootOptions() {
      return this.__shadowRootOptions;
    }
    /**
     * Set the shadowRoot options.
     *
     * @param {ShadowRootInit} value
     */
    static set shadowRootOptions(value) {
      this.__shadowRootOptions = value;
    }
    /**
     * Obtains the element styles.
     *
     * @returns {CSSResultOrNative[]}
     */
    static get elementStyles() {
      return this.__elementStyles;
    }
    static set elementStyles(styles) {
      this.__elementStyles = styles;
    }
    // either TS or ESLint will complain here
    // eslint-disable-next-line no-unused-vars
    constructor(..._args) {
      super();
      this.renderOptions = this.renderOptions || void 0;
    }
    /**
     * Obtains the CustomElementRegistry associated to the ShadowRoot.
     *
     * @returns {CustomElementRegistry}
     */
    get registry() {
      return this.constructor.__registry;
    }
    /**
     * Set the CustomElementRegistry associated to the ShadowRoot
     *
     * @param {CustomElementRegistry} registry
     */
    set registry(registry) {
      this.constructor.__registry = registry;
    }
    createRenderRoot() {
      const { scopedElements, shadowRootOptions, elementStyles } = (
        /** @type {typeof ScopedElementsHost} */
        this.constructor
      );
      const shouldCreateRegistry = !this.registry || // @ts-ignore
      this.registry === this.constructor.__registry && !Object.prototype.hasOwnProperty.call(this.constructor, "__registry");
      if (shouldCreateRegistry) {
        this.registry = supportsScopedRegistry ? new CustomElementRegistry() : customElements;
        for (const [tagName, klass] of Object.entries(scopedElements)) {
          this.defineScopedElement(tagName, klass);
        }
      }
      const options = {
        mode: "open",
        ...shadowRootOptions,
        customElements: this.registry,
        registry: this.registry
      };
      const createdRoot = this.attachShadow(options);
      if (supportsScopedRegistry) {
        this.renderOptions.creationScope = createdRoot;
      }
      if (createdRoot instanceof ShadowRoot) {
        S(createdRoot, elementStyles);
        this.renderOptions.renderBefore = this.renderOptions.renderBefore || createdRoot.firstChild;
      }
      return createdRoot;
    }
    createScopedElement(tagName) {
      const root = supportsScopedRegistry ? this.shadowRoot : document;
      return root.createElement(tagName);
    }
    /**
     * Defines a scoped element.
     *
     * @param {string} tagName
     * @param {typeof HTMLElement} klass
     */
    defineScopedElement(tagName, klass) {
      const registeredClass = this.registry.get(tagName);
      if (registeredClass && supportsScopedRegistry === false && registeredClass !== klass) {
        console.error(
          [
            `You are trying to re-register the "${tagName}" custom element with a different class via ScopedElementsMixin.`,
            "This is only possible with a CustomElementRegistry.",
            "Your browser does not support this feature so you will need to load a polyfill for it.",
            'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.',
            'e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',
            "For more details you can visit https://open-wc.org/docs/development/scoped-elements/"
          ].join("\n")
        );
      }
      if (!registeredClass) {
        return this.registry.define(tagName, klass);
      }
      return this.registry.get(tagName);
    }
    /**
     * @deprecated use the native el.tagName instead
     *
     * @param {string} tagName
     * @returns {string} the tag name
     */
    // eslint-disable-next-line class-methods-use-this
    getScopedTagName(tagName) {
      return this.constructor.getScopedTagName(tagName);
    }
    /**
     * @deprecated use the native el.tagName instead
     *
     * @param {string} tagName
     * @returns {string} the tag name
     */
    // eslint-disable-next-line class-methods-use-this
    static getScopedTagName(tagName) {
      return this.__registry.get(tagName) ? tagName : void 0;
    }
  }
);
var ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);

// ../../node_modules/@open-wc/testing-helpers/src/scopedElementsWrapper.js
var ScopedElementsTestWrapper = class extends ScopedElementsMixin(i) {
  static get properties() {
    return {
      scopedElements: { type: Object },
      template: { type: Object }
    };
  }
  constructor(scopedElement, template) {
    super();
    this.scopedElements = scopedElement;
    this.template = template;
  }
  firstUpdated(_changed) {
    super.firstUpdated(_changed);
    Object.keys(this.scopedElements).forEach(
      (key) => (
        // @ts-ignore
        this.defineScopedElement(key, this.scopedElements[key])
      )
    );
  }
  render() {
    return this.template;
  }
};
var getWrapperUniqueName = (counter = 0) => {
  const tag = `scoped-elements-test-wrapper-${counter}`;
  if (customElements.get(tag) !== void 0) {
    return getWrapperUniqueName(counter + 1);
  }
  return tag;
};
function getScopedElementsTemplate(template, scopedElements) {
  const wrapperTagName = getWrapperUniqueName();
  class Scope extends ScopedElementsTestWrapper {
  }
  customElements.define(wrapperTagName, Scope);
  const scope = new Scope(scopedElements, template);
  return scope;
}
export {
  getScopedElementsTemplate
};
