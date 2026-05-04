/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/sv.ts
var translation = {
  $code: "sv",
  $name: "Svenska",
  $dir: "ltr",
  carousel: "Karusell",
  captions: "Undertexter",
  clearEntry: "\xC5terst\xE4ll val",
  createOption: (value) => `Skapa "${value}"`,
  close: "St\xE4ng",
  copied: "Kopierade",
  copy: "Kopiera",
  currentValue: "Nuvarande v\xE4rde",
  decrement: "Minska",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Fel",
  enterFullscreen: "G\xE5 till helsk\xE4rm",
  exitFullscreen: "Avsluta helsk\xE4rm",
  goToSlide: (slide, count) => `G\xE5 till bild ${slide} av ${count}`,
  hidePassword: "D\xF6lj l\xF6senord",
  increment: "\xD6ka",
  loading: "L\xE4ser in",
  moreOptions: "Fler alternativ",
  mute: "St\xE4ng av ljud",
  nextSlide: "N\xE4sta bild",
  nextVideo: "N\xE4sta video",
  numCharacters: (num) => {
    if (num === 1) return "1 tecken";
    return `${num} tecken`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 tecken kvar";
    return `${num} tecken kvar`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Inga alternativ har valts";
    if (num === 1) return "1 alternativ valt";
    return `${num} alternativ valda`;
  },
  pause: "Pausa",
  pauseAnimation: "Pausa animation",
  pictureInPicture: "Bild i bild",
  play: "Spela",
  playbackSpeed: "Uppspelningshastighet",
  playlist: "Spellista",
  playAnimation: "Spela upp animation",
  previousSlide: "F\xF6reg\xE5ende bild",
  previousVideo: "F\xF6reg\xE5ende video",
  progress: "Framsteg",
  remove: "Ta bort",
  resize: "\xC4ndra storlek",
  scrollableRegion: "Scrollbart omr\xE5de",
  scrollToEnd: "Skrolla till slutet",
  scrollToStart: "Skrolla till b\xF6rjan",
  selectAColorFromTheScreen: "V\xE4lj en f\xE4rg fr\xE5n sk\xE4rmen",
  showPassword: "Visa l\xF6senord",
  slideNum: (slide) => `Bild ${slide}`,
  toggleColorFormat: "V\xE4xla f\xE4rgformat",
  seek: "S\xF6k",
  seekProgress: (current, duration) => `${current} av ${duration}`,
  currentlyPlaying: "spelas nu",
  unmute: "Sl\xE5 p\xE5 ljud",
  videoPlayer: "Videospelare",
  volume: "Volym",
  zoomIn: "Zooma in",
  zoomOut: "Zooma ut"
};
registerTranslation(translation);
var sv_default = translation;
export {
  sv_default as default
};
