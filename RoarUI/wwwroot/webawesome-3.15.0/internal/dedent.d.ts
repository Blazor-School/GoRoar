/**
 * Removes blank lines from the start and end of the text and strips the common leading whitespace from the rest, like
 * Python's textwrap.dedent. The indent is the longest whitespace prefix every non-blank line shares, so tabs survive
 * and lines indented with different characters only lose what they have in common. Blank lines come back empty and
 * line endings are normalized to LF.
 *
 * Set tabSize to expand leading tabs to spaces first, which is what markdown parsers expect.
 */
export declare function dedent(text: string, options?: {
    tabSize?: number;
}): string;
