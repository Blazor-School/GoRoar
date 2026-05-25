/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/da.ts
var translation = {
  $code: "da",
  $name: "Dansk",
  $dir: "ltr",
  carousel: "Karrusel",
  captions: "Undertekster",
  clearEntry: "Ryd indtastning",
  createOption: (value) => `Opret "${value}"`,
  close: "Luk",
  copied: "Kopieret",
  copy: "Kopier",
  currentValue: "Nuv\xE6rende v\xE6rdi",
  decrement: "Formindsk",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Fejl",
  enterFullscreen: "G\xE5 til fuldsk\xE6rm",
  exitFullscreen: "Afslut fuldsk\xE6rm",
  goToSlide: (slide, count) => `G\xE5 til dias ${slide} af ${count}`,
  hidePassword: "Skjul adgangskode",
  increment: "For\xF8g",
  loading: "Indl\xE6ser",
  moreOptions: "Flere muligheder",
  mute: "Sl\xE5 lyd fra",
  nextSlide: "N\xE6ste slide",
  nextVideo: "N\xE6ste video",
  numCharacters: (num) => {
    if (num === 1) return "1 tegn";
    return `${num} tegn`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 tegn tilbage";
    return `${num} tegn tilbage`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Ingen valgt";
    if (num === 1) return "1 valgt";
    return `${num} valgt`;
  },
  pause: "S\xE6t p\xE5 pause",
  pauseAnimation: "Pause animation",
  pictureInPicture: "Billede i billede",
  play: "Afspil",
  playbackSpeed: "Afspilningshastighed",
  playlist: "Afspilningsliste",
  playAnimation: "Afspil animation",
  previousSlide: "Forrige dias",
  previousVideo: "Forrige video",
  progress: "Status",
  remove: "Fjern",
  resize: "Tilpas st\xF8rrelse",
  scrollableRegion: "Rullebar region",
  scrollToEnd: "Scroll til slut",
  scrollToStart: "Scroll til start",
  selectAColorFromTheScreen: "V\xE6lg en farve fra sk\xE6rmen",
  showPassword: "Vis adgangskode",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Skift farveformat",
  seek: "S\xF8g",
  seekProgress: (current, duration) => `${current} af ${duration}`,
  currentlyPlaying: "afspilles nu",
  unmute: "Sl\xE5 lyd til",
  videoPlayer: "Videoafspiller",
  volume: "Lydstyrke",
  zoomIn: "Zoom ind",
  zoomOut: "Zoom ud"
};
registerTranslation(translation);
var da_default = translation;
export {
  da_default as default
};
