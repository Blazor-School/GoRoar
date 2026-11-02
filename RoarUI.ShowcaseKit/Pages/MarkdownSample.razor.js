const configuredInstances = new WeakSet();

export function enableHighlight(marked) {
    if (configuredInstances.has(marked)) {
        return;
    }

    marked.use({
        extensions: [{
            name: "highlight",
            level: "inline",
            start(source) {
                return source.indexOf("==");
            },
            tokenizer(source) {
                const match = /^==([^=]+)==/.exec(source);

                if (match) {
                    return { type: "highlight", raw: match[0], tokens: this.lexer.inlineTokens(match[1]) };
                }
            },
            renderer(token) {
                return `<mark>${this.parser.parseInline(token.tokens)}</mark>`;
            }
        }]
    });

    configuredInstances.add(marked);
}
