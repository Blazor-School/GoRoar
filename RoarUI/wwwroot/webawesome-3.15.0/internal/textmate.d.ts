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
/**
 * A TextMate tokenizer ported from microlighter. It works on a string and returns tokens instead of registering CSS
 * highlights, so each caller owns its ranges. Keep getCategory() in sync with upstream so the ::highlight() names stay
 * valid.
 */
import type { LoadedGrammars } from 'microlighter/grammar-dependencies.js';
import type { Grammar } from 'microlighter/grammar.js';
export interface Token {
    start: number;
    end: number;
    category: string;
}
/** Flattens a TextMate scope to a stable semantic highlight category. */
export declare const getCategory: (scope: string) => string | undefined;
/** Tokenizes text with a TextMate grammar. Grammars it includes by scope are looked up in the loaded set. */
export declare function tokenize(text: string, grammar: Grammar, grammars: LoadedGrammars): Token[];
