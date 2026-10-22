const styles = `
    :host {
        display: block;
    }

    :host([hidden]) {
        display: none !important;
    }

    ::slotted(wa-avatar) {
        border: solid 2px var(--wa-color-surface-default);
    }

    ::slotted(wa-avatar:not(:first-of-type)) {
        margin-left: calc(-1 * var(--wa-space-m));
    }
`;

export default styles;
