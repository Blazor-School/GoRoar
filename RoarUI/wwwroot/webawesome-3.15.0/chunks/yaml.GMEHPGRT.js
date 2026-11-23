/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "./chunk.763SWQQU.js";

// ../../node_modules/microlighter/dist/grammars/yaml.js
var yaml_default = { scopeName: "source.yaml", patterns: [{ match: "#.*$", name: "comment.line.number-sign" }, { match: "^(?:---|\\.\\.\\.)\\s*$|^%YAML\\b.*$", name: "keyword.control.document" }, { match: "^\\s*(?:-\\s+)?([^#\\s][^\\r\\n:#]*?)(?=\\s*:)", captures: { 1: { name: "entity.name.key" } } }, { match: "[&*][a-zA-Z_][\\w-]*|![^\\s]+", name: "entity.name.anchor" }, { match: `(['"])(?:\\\\.|(?!\\1)[^\\\\\\r\\n]|\\r?\\n[ \\t]+)*\\1`, name: "string.quoted" }, { match: "(?<=:\\s)[|>][-+]?\\s*$", name: "keyword.control.block-scalar" }, { match: "\\b(?:true|false|yes|no|on|off)\\b", name: "constant.language.boolean" }, { match: "\\bnull\\b|~", name: "constant.language" }, { match: "(?<![\\w.-])-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b", name: "constant.numeric" }] };
export {
  yaml_default as default
};
