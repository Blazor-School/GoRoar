import { type LoadedGrammars } from 'microlighter/grammar-dependencies.js';
import type { Grammar } from 'microlighter/grammar.js';
import type WaCodeHighlighter from './code-highlighter.js';
export type { Grammar, LoadedGrammars };
/** @internal Adds grammars that ship with the component, without overriding registered ones. */
export declare function preloadCodeGrammars(grammars: Record<string, Grammar>): void;
/** Adds a code highlighter to the list of watched highlighters. */
export declare function watchCodeHighlighter(highlighter: WaCodeHighlighter): void;
/** Removes a code highlighter from the list of watched highlighters. */
export declare function unwatchCodeHighlighter(highlighter: WaCodeHighlighter): void;
/** Loads the grammars for the given normalized language names, plus the grammars they include. */
export declare function loadCodeGrammars(languages: string[]): Promise<LoadedGrammars>;
/**
 * Registers a TextMate grammar for `<wa-code-highlighter>`, or overrides a built-in one. Names may contain lowercase
 * letters, numbers, hyphens, and underscores. Highlighters already using the language update right away.
 */
export declare function registerCodeGrammar(name: string, grammar: Grammar): void;
