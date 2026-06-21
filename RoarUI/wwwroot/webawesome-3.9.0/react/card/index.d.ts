import Component from '../../components/card/card.js';
/**
 * @summary Cards group related content and actions inside a bordered container. Use them to present products, articles,
 *  user profiles, or any self-contained unit of information.
 * @documentation https://webawesome.com/docs/components/card
 * @status stable
 * @since 2.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot media - An optional media section to render at the start of the card.
 * @slot actions - An optional actions section to render at the end for the horizontal card.
 * @slot header-actions - An optional actions section to render in the header of the vertical card.
 * @slot footer-actions - An optional actions section to render in the footer of the vertical card.
 *
 * @csspart media - The container that wraps the card's media.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty [--spacing=var(--wa-space-l)] - The amount of space around and between sections of the card. Expects a single value.
 *
 * @ssr - `<wa-card>` requires `with-header` / `with-media` / `with-footer` attributes to be set if you use any of these slots. This is a limitation of the platform not currently providing a `:has-slotted` CSS directive to allow us to apply things like borders based on slotted content. Without these attributes, only the body of the card will be rendered via SSR.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
