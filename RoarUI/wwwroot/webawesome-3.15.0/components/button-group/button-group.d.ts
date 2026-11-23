import WebAwesomeElement from '../../internal/webawesome-element.js';
/**
 * @summary Button groups combine related buttons into a single visual unit. Use them for toolbars, segmented controls,
 *  or any set of actions that belong together.
 * @documentation https://webawesome.com/docs/components/button-group
 * @status stable
 * @since 2.0
 *
 * @slot - One or more `<wa-button>` elements to display in the button group.
 *
 * @csspart base - Deprecated. Use the `button-group` part instead.
 * @csspart button-group - The component's outer wrapper.
 */
export default class WaButtonGroup extends WebAwesomeElement {
    static css: import("lit").CSSResult[];
    defaultSlot: HTMLSlotElement;
    disableRole: boolean;
    hasOutlined: boolean;
    /**
     * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
     * devices when interacting with the control and is strongly recommended.
     */
    label: string;
    /** The button group's orientation. */
    orientation: 'horizontal' | 'vertical';
    handleLabelChange(): void;
    private handleFocus;
    private handleBlur;
    private handleMouseOver;
    private handleMouseOut;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-button-group': WaButtonGroup;
    }
}
