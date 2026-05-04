/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/nb.ts
var translation = {
  $code: "nb",
  $name: "Norwegian Bokm\xE5l",
  $dir: "ltr",
  carousel: "Karusell",
  captions: "Teksting",
  clearEntry: "T\xF8m felt",
  createOption: (value) => `Opprett "${value}"`,
  close: "Lukk",
  copied: "Kopiert",
  copy: "Kopier",
  currentValue: "N\xE5v\xE6rende verdi",
  decrement: "Reduser",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Feil",
  enterFullscreen: "G\xE5 til fullskjerm",
  exitFullscreen: "Avslutt fullskjerm",
  goToSlide: (slide, count) => `G\xE5 til visning ${slide} av ${count}`,
  hidePassword: "Skjul passord",
  increment: "\xD8k",
  loading: "Laster",
  moreOptions: "Flere alternativer",
  mute: "Demp lyd",
  nextSlide: "Neste visning",
  nextVideo: "Neste video",
  numCharacters: (num) => {
    if (num === 1) return "1 tegn";
    return `${num} tegn`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 tegn gjenst\xE5r";
    return `${num} tegn gjenst\xE5r`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Ingen alternativer valgt";
    if (num === 1) return "Ett alternativ valgt";
    return `${num} alternativer valgt`;
  },
  pause: "Pause",
  pauseAnimation: "Sett animasjon p\xE5 pause",
  pictureInPicture: "Bilde i bilde",
  play: "Spill av",
  playbackSpeed: "Avspillingshastighet",
  playlist: "Spilleliste",
  playAnimation: "Spill av animasjon",
  previousSlide: "Forrige visning",
  previousVideo: "Forrige video",
  progress: "Fremdrift",
  remove: "Fjern",
  resize: "Endre st\xF8rrelse",
  scrollableRegion: "Rullbar region",
  scrollToEnd: "Rull til slutten",
  scrollToStart: "Rull til starten",
  selectAColorFromTheScreen: "Velg en farge fra skjermen",
  showPassword: "Vis passord",
  slideNum: (slide) => `Visning ${slide}`,
  toggleColorFormat: "Bytt fargeformat",
  seek: "S\xF8k",
  seekProgress: (current, duration) => `${current} av ${duration}`,
  currentlyPlaying: "spilles n\xE5",
  unmute: "Skru p\xE5 lyd",
  videoPlayer: "Videospiller",
  volume: "Volum",
  zoomIn: "Zoom inn",
  zoomOut: "Zoom ut"
};
registerTranslation(translation);
var nb_default = translation;
export {
  nb_default as default
};
