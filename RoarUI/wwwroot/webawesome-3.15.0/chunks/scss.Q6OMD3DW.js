/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "./chunk.763SWQQU.js";

// ../../node_modules/microlighter/dist/grammars/scss.js
var scss_default = { scopeName: "source.scss", dependencies: ["css"], patterns: [{ match: "//.*$", name: "comment.line.double-slash" }, { match: "\\$[a-zA-Z_-][\\w-]*", name: "entity.name.variable" }, { match: "#\\{[^}]+\\}", name: "entity.name.interpolation" }, { match: "(?:&|%[a-zA-Z_-][\\w-]*)", name: "entity.name.selector" }, { match: "@(mixin|include|function)\\s+([a-zA-Z_-][\\w-]*)", captures: { 1: { name: "keyword.control" }, 2: { name: "entity.name.function" } } }, { match: "@(if|else|each|for|while|return|use|forward|extend|at-root|debug|warn|error)\\b", captures: { 1: { name: "keyword.control" } } }, { match: "(?:==|!=|<=|>=|[+*/%-])", name: "keyword.operator" }, { include: "source.css" }] };
export {
  scss_default as default
};
