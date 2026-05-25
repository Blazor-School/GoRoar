/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/cs.ts
var translation = {
  $code: "cs",
  $name: "\u010Ce\u0161tina",
  $dir: "ltr",
  carousel: "Karusel",
  captions: "Titulky",
  clearEntry: "Smazat polo\u017Eku",
  createOption: (value) => `Vytvo\u0159it "${value}"`,
  close: "Zav\u0159\xEDt",
  copied: "Zkop\xEDrov\xE1no",
  copy: "Kop\xEDrovat",
  currentValue: "Sou\u010Dasn\xE1 hodnota",
  decrement: "Sn\xED\u017Eit",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Chyba",
  enterFullscreen: "P\u0159ej\xEDt na celou obrazovku",
  exitFullscreen: "Ukon\u010Dit celou obrazovku",
  goToSlide: (slide, count) => `P\u0159ej\xEDt na slide ${slide} z ${count}`,
  hidePassword: "Skr\xFDt heslo",
  increment: "Zv\xFD\u0161it",
  loading: "Nahr\xE1v\xE1 se",
  moreOptions: "Dal\u0161\xED mo\u017Enosti",
  mute: "Ztlumit",
  nextSlide: "Dal\u0161\xED slide",
  nextVideo: "Dal\u0161\xED video",
  numCharacters: (num) => {
    if (num === 1) return "1 znak";
    if (num >= 2 && num <= 4) return `${num} znaky`;
    return `${num} znak\u016F`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 zb\xFDvaj\xEDc\xED znak";
    if (num >= 2 && num <= 4) return `${num} zb\xFDvaj\xEDc\xED znaky`;
    return `${num} zb\xFDvaj\xEDc\xEDch znak\u016F`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nejsou vybr\xE1ny \u017E\xE1dn\xE9 mo\u017Enosti";
    if (num === 1) return "Je vybr\xE1na jedna mo\u017Enost";
    return `Po\u010Det vybran\xFDch mo\u017Enost\xED: ${num}`;
  },
  pause: "Pozastavit",
  pauseAnimation: "Pozastavit animaci",
  pictureInPicture: "Obraz v obraze",
  play: "P\u0159ehr\xE1t",
  playbackSpeed: "Rychlost p\u0159ehr\xE1v\xE1n\xED",
  playlist: "Playlist",
  playAnimation: "P\u0159ehr\xE1t animaci",
  previousSlide: "P\u0159edchoz\xED slide",
  previousVideo: "P\u0159edchoz\xED video",
  progress: "Pr\u016Fb\u011Bh",
  remove: "Odstranit",
  resize: "Zm\u011Bnit velikost",
  scrollableRegion: "Posunovateln\xE1 oblast",
  scrollToEnd: "Scrollovat na konec",
  scrollToStart: "Scrollovat na za\u010D\xE1tek",
  selectAColorFromTheScreen: "Vybrat barvu z obrazovky",
  showPassword: "Zobrazit heslo",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "P\u0159epnout form\xE1t barvy",
  seek: "P\u0159ej\xEDt",
  seekProgress: (current, duration) => `${current} z ${duration}`,
  currentlyPlaying: "pr\xE1v\u011B se p\u0159ehr\xE1v\xE1",
  unmute: "Zapnout zvuk",
  videoPlayer: "P\u0159ehr\xE1va\u010D videa",
  volume: "Hlasitost",
  zoomIn: "P\u0159ibl\xED\u017Eit",
  zoomOut: "Odd\xE1lit"
};
registerTranslation(translation);
var cs_default = translation;
export {
  cs_default as default
};
