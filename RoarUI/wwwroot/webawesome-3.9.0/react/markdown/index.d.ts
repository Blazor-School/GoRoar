import Component from '../../components/markdown/markdown.js';
/**
 * @summary Markdown elements render markdown content as HTML directly in the browser, making it easy to display
 *  user-generated content or documentation without a server-side build step.
 * @documentation https://webawesome.com/docs/components/markdown
 * @status experimental
 * @since 3.4
 *
 * @ssr - Because `<wa-markdown>` relies on the content of its children, it is not usable in an SSR context which does not have a DOM.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
