/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  getBasePath
} from "./chunk.HGBRCPUS.js";
import {
  __glob
} from "./chunk.763SWQQU.js";

// import("./grammars/**/*.js") in ../../node_modules/microlighter/dist/grammar-dependencies.js
var globImport_grammars_js = __glob({
  "./grammars/assembly.js": () => import("./assembly.ZYIZ5WGE.js"),
  "./grammars/astro.js": () => import("./astro.OQ5VJVYN.js"),
  "./grammars/bash.js": () => import("./bash.TSSED2BJ.js"),
  "./grammars/c.js": () => import("./c.EXLPOVWY.js"),
  "./grammars/cpp.js": () => import("./cpp.5TPZQWKZ.js"),
  "./grammars/csharp.js": () => import("./csharp.SGVKRYWZ.js"),
  "./grammars/css.js": () => import("./css.QVEESLXY.js"),
  "./grammars/dart.js": () => import("./dart.P6H4ZG5P.js"),
  "./grammars/dockerfile.js": () => import("./dockerfile.UKP6WIJR.js"),
  "./grammars/elixir.js": () => import("./elixir.LBQKEDMP.js"),
  "./grammars/git-diff.js": () => import("./git-diff.TPKUBAZK.js"),
  "./grammars/go.js": () => import("./go.TKQKYZKH.js"),
  "./grammars/graphql.js": () => import("./graphql.C4J7TZFE.js"),
  "./grammars/heex.js": () => import("./heex.SNQCCF6D.js"),
  "./grammars/html.js": () => import("./html.V2UVC43L.js"),
  "./grammars/ini.js": () => import("./ini.TQ3MB5PU.js"),
  "./grammars/java.js": () => import("./java.ROZKXHHI.js"),
  "./grammars/javascript.js": () => import("./javascript.IANX5HFR.js"),
  "./grammars/json.js": () => import("./json.CWWIHY6D.js"),
  "./grammars/kotlin.js": () => import("./kotlin.HQ5PZVTW.js"),
  "./grammars/lua.js": () => import("./lua.ZCOI2WIU.js"),
  "./grammars/markdown.js": () => import("./markdown.YAJ2AWDZ.js"),
  "./grammars/nginx.js": () => import("./nginx.TRDJBR5X.js"),
  "./grammars/objective-c.js": () => import("./objective-c.QPDWJ5N3.js"),
  "./grammars/perl.js": () => import("./perl.EJTLRP3N.js"),
  "./grammars/php.js": () => import("./php.V3PALZ6L.js"),
  "./grammars/powershell.js": () => import("./powershell.PYNZCANE.js"),
  "./grammars/python.js": () => import("./python.HZCEN5G6.js"),
  "./grammars/r.js": () => import("./r.3MSABD6M.js"),
  "./grammars/ruby.js": () => import("./ruby.ZLLWFHRW.js"),
  "./grammars/rust.js": () => import("./rust.LKFDB35O.js"),
  "./grammars/scss.js": () => import("./scss.Q6OMD3DW.js"),
  "./grammars/sql.js": () => import("./sql.4W53FWOL.js"),
  "./grammars/svelte.js": () => import("./svelte.IXD7E4L7.js"),
  "./grammars/swift.js": () => import("./swift.SNQONWY6.js"),
  "./grammars/toml.js": () => import("./toml.5Z6T7YWS.js"),
  "./grammars/tsx.js": () => import("./tsx.FZBW73MO.js"),
  "./grammars/typescript.js": () => import("./typescript.CEOICTOM.js"),
  "./grammars/vue.js": () => import("./vue.PUX5HGEW.js"),
  "./grammars/yaml.js": () => import("./yaml.GMEHPGRT.js")
});

// ../../node_modules/microlighter/dist/grammar-dependencies.js
var languageAliases = {
  docker: "dockerfile",
  gql: "graphql",
  js: "javascript",
  jsx: "javascript",
  md: "markdown",
  py: "python",
  rb: "ruby",
  sass: "scss",
  sh: "bash",
  shell: "bash",
  ts: "typescript",
  yml: "yaml",
  zsh: "bash"
};
var normalizeLanguage = (language, aliases = {}) => aliases[language] || languageAliases[language] || language;
var getExternalLanguages = (value) => {
  const languages = /* @__PURE__ */ new Set();
  const visit = (item) => {
    if (Array.isArray(item)) {
      item.forEach(visit);
    } else if (item && typeof item === "object") {
      if (typeof item.include === "string" && !/^[#$]/.test(item.include)) {
        const scope = item.include.split("#")[0];
        const match = scope.match(/^(?:source|text)\.([a-z0-9_-]+)/);
        if (match) languages.add(match[1]);
      }
      Object.values(item).forEach(visit);
    }
  };
  visit(value);
  return languages;
};
var getGrammar = (language) => globImport_grammars_js(`./grammars/${language}.js`).then((module) => module.default).catch(() => null);
var createGrammarLoader = (importLanguage = getGrammar) => {
  const loadingLanguages = /* @__PURE__ */ new Map();
  const grammars = {
    languages: {},
    scopes: /* @__PURE__ */ new Map()
  };
  const loadGrammar = (language) => {
    if (!loadingLanguages.has(language)) {
      const grammarModule = importLanguage(language).then((grammar) => {
        if (grammar) {
          grammars.languages[language] = grammar;
          grammars.scopes.set(grammar.scopeName, grammar);
        }
        return grammar;
      });
      loadingLanguages.set(language, grammarModule);
    }
    return (
      /** @type {Promise<Grammar | null>} */
      loadingLanguages.get(language)
    );
  };
  return async (languages) => {
    const visited = /* @__PURE__ */ new Set();
    let pending = [...new Set(languages)].filter((language) => /^[a-z0-9_-]+$/.test(language));
    while (pending.length) {
      pending.forEach((language) => visited.add(language));
      const loaded = (
        /** @type {Grammar[]} */
        (await Promise.all(pending.map(loadGrammar))).filter(Boolean)
      );
      pending = [...new Set(loaded.flatMap(
        (grammar) => grammar.dependencies || [...getExternalLanguages(grammar)]
      ))].map((language) => normalizeLanguage(language)).filter((language) => !visited.has(language));
    }
    return grammars;
  };
};

// src/components/code-highlighter/grammars.ts
var registry = /* @__PURE__ */ new Map();
var watchedHighlighters = /* @__PURE__ */ new Set();
function importGrammar(name) {
  const grammar = registry.get(name);
  if (grammar) {
    return Promise.resolve(grammar);
  }
  return import(
    /* @vite-ignore */
    getBasePath(`assets/grammars/${name}.js`)
  ).then((module) => module.default ?? null).catch(() => null);
}
var loader = createGrammarLoader(importGrammar);
function preloadCodeGrammars(grammars) {
  for (const [name, grammar] of Object.entries(grammars)) {
    if (!registry.has(name)) {
      registry.set(name, grammar);
    }
  }
}
function watchCodeHighlighter(highlighter) {
  watchedHighlighters.add(highlighter);
}
function unwatchCodeHighlighter(highlighter) {
  watchedHighlighters.delete(highlighter);
}
function loadCodeGrammars(languages) {
  return loader(languages);
}
function registerCodeGrammar(name, grammar) {
  const language = name.toLowerCase();
  registry.set(language, grammar);
  loader = createGrammarLoader(importGrammar);
  watchedHighlighters.forEach((highlighter) => {
    if (highlighter.grammarName === language) {
      highlighter.ensureGrammar();
    }
  });
}

export {
  normalizeLanguage,
  preloadCodeGrammars,
  watchCodeHighlighter,
  unwatchCodeHighlighter,
  loadCodeGrammars,
  registerCodeGrammar
};
