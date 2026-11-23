/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */

// ../../node_modules/microlighter/dist/grammars/json.js
var json_default = { scopeName: "source.json", patterns: [{ match: '"(?:\\\\.|[^"\\\\])*"(?=\\s*:)', name: "entity.name.key" }, { match: '"(?:\\\\.|[^"\\\\])*"(?=\\s*[,}\\]])', name: "string.quoted.double" }, { match: "\\b(?:true|false)\\b", name: "constant.language.boolean" }, { match: "\\bnull\\b", name: "constant.language" }, { match: "(?<![\\w.])-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?\\b", name: "constant.numeric" }] };

export {
  json_default
};
