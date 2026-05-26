/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/sl.ts
var translation = {
  $code: "sl",
  $name: "Slovenski",
  $dir: "ltr",
  carousel: "Vrtiljak",
  captions: "Podnapisi",
  clearEntry: "Po\u010Disti vnos",
  createOption: (value) => `Ustvari "${value}"`,
  close: "Zapri",
  copied: "Kopirano",
  copy: "Kopiraj",
  currentValue: "Trenutna vrednost",
  decrement: "Zmanj\u0161aj",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Napaka",
  enterFullscreen: "Vstopi v celozaslonski na\u010Din",
  exitFullscreen: "Zapusti celozaslonski na\u010Din",
  goToSlide: (slide, count) => `Pojdi na diapozitiv ${slide} od ${count}`,
  hidePassword: "Skrij geslo",
  increment: "Pove\u010Daj",
  loading: "Nalaganje",
  moreOptions: "Ve\u010D mo\u017Enosti",
  mute: "Uti\u0161aj",
  nextSlide: "Naslednji diapozitiv",
  nextVideo: "Naslednji videoposnetek",
  numCharacters: (num) => {
    const mod100 = num % 100;
    if (mod100 === 1) return `${num} znak`;
    if (mod100 === 2) return `${num} znaka`;
    if (mod100 === 3 || mod100 === 4) return `${num} znaki`;
    return `${num} znakov`;
  },
  numCharactersRemaining: (num) => {
    const mod100 = num % 100;
    if (mod100 === 1) return `Preostane ${num} znak`;
    if (mod100 === 2) return `Preostaneta ${num} znaka`;
    if (mod100 === 3 || mod100 === 4) return `Preostanejo ${num} znaki`;
    return `Preostane ${num} znakov`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nobena mo\u017Enost ni izbrana";
    if (num === 1) return "1 mo\u017Enost izbrana";
    if (num === 2) return "2 mo\u017Enosti izbrani";
    if (num === 3 || num === 4) return `${num} mo\u017Enosti izbrane`;
    return `${num} mo\u017Enosti izbranih`;
  },
  pause: "Premor",
  pauseAnimation: "Zaustavi animacijo",
  pictureInPicture: "Slika v sliki",
  play: "Predvajaj",
  playbackSpeed: "Hitrost predvajanja",
  playlist: "Seznam predvajanja",
  playAnimation: "Predvajaj animacijo",
  previousSlide: "Prej\u0161nji diapozitiv",
  previousVideo: "Prej\u0161nji videoposnetek",
  progress: "Napredek",
  remove: "Odstrani",
  resize: "Spremeni velikost",
  scrollableRegion: "Podro\u010Dje za drsenje",
  scrollToEnd: "Pomakni se na konec",
  scrollToStart: "Pomakni se na za\u010Detek",
  selectAColorFromTheScreen: "Izberite barvo z zaslona",
  showPassword: "Prika\u017Ei geslo",
  slideNum: (slide) => `Diapozitiv ${slide}`,
  toggleColorFormat: "Preklopi format barve",
  seek: "I\u0161\u010Di",
  seekProgress: (current, duration) => `${current} od ${duration}`,
  currentlyPlaying: "se trenutno predvaja",
  unmute: "Vklopi zvok",
  videoPlayer: "Videopredvajalnik",
  volume: "Glasnost",
  zoomIn: "Pove\u010Daj",
  zoomOut: "Pomanj\u0161aj"
};
registerTranslation(translation);
var sl_default = translation;
export {
  sl_default as default
};
