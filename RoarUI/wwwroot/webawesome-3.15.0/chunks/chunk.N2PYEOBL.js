/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */

// src/internal/dedent.ts
function expandLeadingTabs(line, tabSize) {
  return line.replace(/^[ \t]+/, (whitespace) => {
    let column = 0;
    let expanded = "";
    for (const char of whitespace) {
      const width = char === "	" ? tabSize - column % tabSize : 1;
      expanded += " ".repeat(width);
      column += width;
    }
    return expanded;
  });
}
function dedent(text, options = {}) {
  let lines = text.replace(/\r\n?/g, "\n").split("\n");
  if (options.tabSize) {
    lines = lines.map((line) => expandLeadingTabs(line, options.tabSize));
  }
  while (lines.length > 0 && lines[0].trim() === "") lines.shift();
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();
  const codeLines = lines.filter((line) => line.trim() !== "");
  let indent = codeLines.length > 0 ? /^[ \t]*/.exec(codeLines[0])[0] : "";
  for (const line of codeLines) {
    let length = 0;
    while (length < indent.length && line[length] === indent[length]) length++;
    indent = indent.slice(0, length);
  }
  return lines.map((line) => line.trim() === "" ? "" : line.slice(indent.length)).join("\n");
}

export {
  dedent
};
