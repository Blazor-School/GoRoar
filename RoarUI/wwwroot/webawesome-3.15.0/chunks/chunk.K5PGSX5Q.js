/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */

// src/utilities/defined.ts
async function allDefined(options) {
  const opts = {
    match: (tagName) => tagName.startsWith("wa-"),
    additionalElements: [],
    root: document,
    timeout: 2e3,
    ...options
  };
  const additionalElements = Array.isArray(opts.additionalElements) ? opts.additionalElements : [opts.additionalElements];
  const undefinedElements = [...opts.root.querySelectorAll(":not(:defined)")].map((el) => el.localName).filter((tag, index, arr) => arr.indexOf(tag) === index).filter((tag) => opts.match(tag));
  const tagsToAwait = [...undefinedElements, ...additionalElements];
  let timer;
  const timedOut = new Promise((resolve) => {
    if (opts.timeout === Infinity) return;
    timer = setTimeout(() => {
      const pending = tagsToAwait.filter((tag) => !customElements.get(tag));
      console.warn(`allDefined() timed out after ${opts.timeout}ms waiting for: ${pending.join(", ")}`);
      resolve();
    }, opts.timeout);
  });
  try {
    await Promise.race([Promise.all(tagsToAwait.map((tag) => customElements.whenDefined(tag))), timedOut]);
  } finally {
    clearTimeout(timer);
  }
  await new Promise(requestAnimationFrame);
}

export {
  allDefined
};
