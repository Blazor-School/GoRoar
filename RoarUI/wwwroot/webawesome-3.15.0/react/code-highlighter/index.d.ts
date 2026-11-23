import Component from '../../components/code-highlighter/code-highlighter.js';
import { type EventName } from '@lit/react';
import type { WaErrorEvent, WaLoadEvent } from '../../events/events.js';
export type { WaErrorEvent, WaLoadEvent } from '../../events/events.js';
/**
 * @summary Code highlighters display syntax-highlighted code with a copy button. Use them for code samples, install
 *  commands, and configuration snippets.
 * @documentation https://webawesome.com/docs/components/code-highlighter
 * @status experimental
 * @since 3.14
 *
 * @dependency wa-copy-button
 *
 * @slot - The code to display. It's parsed as HTML, so escape `<` as `&lt;` and `&` as `&amp;` where the parser
 *  would read them as markup, or wrap the code in a `<script type="text/plain">` element to skip escaping. Slotted code
 *  is dedented automatically unless `without-dedent` is set.
 *
 * @event wa-load - Emitted when the grammar for the current language has loaded and the code has been highlighted.
 * @event wa-error - Emitted when no grammar exists for the current language. The code renders as plain text.
 *
 * @csspart pre - The `<pre>` element that acts as the scroll container.
 * @csspart code - The `<code>` element that contains the code.
 * @csspart copy-button - The `<wa-copy-button>` element.
 * @csspart copy-button__button - The copy button's `button` part.
 * @csspart copy-button__copy-icon - The copy button's `copy-icon` part.
 * @csspart copy-button__success-icon - The copy button's `success-icon` part.
 * @csspart copy-button__error-icon - The copy button's `error-icon` part.
 * @csspart copy-button__feedback - The copy button's `feedback` part.
 *
 * @cssstate loading - Applied while the grammar for the current language is loading.
 * @cssstate error - Applied when no grammar exists for the current language.
 * @cssstate highlighted - Applied once the code has been highlighted.
 *
 * @cssproperty [--comment-color=light-dark(var(--wa-color-gray-40), var(--wa-color-gray-60))] - The color of comments
 *  and quotes.
 * @cssproperty [--keyword-color=light-dark(var(--wa-color-purple-40), var(--wa-color-purple-60))] - The color of
 *  keywords, storage modifiers, at-rules, doctypes, `!important`, and sections.
 * @cssproperty [--operator-color=light-dark(var(--wa-color-gray-30), var(--wa-color-gray-80))] - The color of operators
 *  and punctuation.
 * @cssproperty [--string-color=light-dark(var(--wa-color-green-40), var(--wa-color-green-60))] - The color of strings,
 *  regular expressions, attribute values, links, and raw text.
 * @cssproperty [--constant-color=light-dark(var(--wa-color-orange-40), var(--wa-color-orange-60))] - The color of
 *  numbers, booleans, constants, symbols, entities, and anchors.
 * @cssproperty [--function-color=light-dark(var(--wa-color-blue-40), var(--wa-color-blue-60))] - The color of
 *  functions, decorators, and animation names.
 * @cssproperty [--type-color=light-dark(var(--wa-color-blue-40), var(--wa-color-blue-60))] - The color of types and
 *  built-ins.
 * @cssproperty [--variable-color=light-dark(var(--wa-color-blue-40), var(--wa-color-blue-60))] - The color of
 *  variables and interpolations.
 * @cssproperty [--property-color=light-dark(var(--wa-color-blue-40), var(--wa-color-blue-60))] - The color of
 *  properties, keys, and attribute names.
 * @cssproperty [--tag-color=light-dark(var(--wa-color-purple-40), var(--wa-color-purple-60))] - The color of tags.
 * @cssproperty [--selector-color=light-dark(var(--wa-color-purple-40), var(--wa-color-purple-60))] - The color of CSS
 *  selectors.
 * @cssproperty [--inserted-color=light-dark(var(--wa-color-green-40), var(--wa-color-green-60))] - The color of
 *  inserted lines in diffs.
 * @cssproperty [--deleted-color=light-dark(var(--wa-color-red-40), var(--wa-color-red-60))] - The color of deleted
 *  lines in diffs.
 *
 * @ssr - `<wa-code-highlighter>` renders an empty code block during SSR. The code and its highlighting appear after the
 *  component hydrates, because the Custom Highlight API needs a DOM.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onWaLoad: EventName<WaLoadEvent>;
    onWaError: EventName<WaErrorEvent>;
}>;
export default reactWrapper;
