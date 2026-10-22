import styles from "./avatar-group.styles.js";

const supportsAdoptingStyleSheets = globalThis.ShadowRoot && (globalThis.ShadyCSS === undefined || globalThis.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
let styleSheet;

class RoarAvatarGroup extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: "open" });

        if (supportsAdoptingStyleSheets) {
            if (!styleSheet) {
                styleSheet = new CSSStyleSheet();
                styleSheet.replaceSync(styles);
            }

            shadowRoot.adoptedStyleSheets = [styleSheet];
        } else {
            const style = document.createElement("style");
            const nonce = globalThis.litNonce;

            if (nonce !== undefined) {
                style.setAttribute("nonce", nonce);
            }

            style.textContent = styles;
            shadowRoot.appendChild(style);
        }

        shadowRoot.appendChild(document.createElement("slot"));
    }
}

if (!customElements.get("roar-avatar-group")) {
    customElements.define("roar-avatar-group", RoarAvatarGroup);
}
