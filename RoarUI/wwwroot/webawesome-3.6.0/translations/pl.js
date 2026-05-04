/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/pl.ts
var translation = {
  $code: "pl",
  $name: "Polski",
  $dir: "ltr",
  carousel: "Karuzela",
  captions: "Napisy",
  clearEntry: "Wyczy\u015B\u0107 wpis",
  createOption: (value) => `Utw\xF3rz "${value}"`,
  close: "Zamknij",
  copied: "Skopiowane",
  copy: "Kopiuj",
  currentValue: "Aktualna warto\u015B\u0107",
  decrement: "Zmniejsz",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "B\u0142\u0105d",
  enterFullscreen: "W\u0142\u0105cz pe\u0142ny ekran",
  exitFullscreen: "Wy\u0142\u0105cz pe\u0142ny ekran",
  goToSlide: (slide, count) => `Przejd\u017A do slajdu ${slide} z ${count}`,
  hidePassword: "Ukryj has\u0142o",
  increment: "Zwi\u0119ksz",
  loading: "\u0141adowanie",
  moreOptions: "Wi\u0119cej opcji",
  mute: "Wycisz",
  nextSlide: "Nast\u0119pny slajd",
  nextVideo: "Nast\u0119pny film",
  numCharacters: (num) => {
    if (num === 1) return "1 znak";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `${num} znaki`;
    return `${num} znak\xF3w`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "Pozosta\u0142 1 znak";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Pozosta\u0142y ${num} znaki`;
    return `Pozosta\u0142o ${num} znak\xF3w`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nie wybrano opcji";
    if (num === 1) return "Wybrano 1\xA0opcj\u0119";
    return `Wybrano ${num} opcje`;
  },
  pause: "Wstrzymaj",
  pauseAnimation: "Wstrzymaj animacj\u0119",
  pictureInPicture: "Obraz w obrazie",
  play: "Odtw\xF3rz",
  playbackSpeed: "Pr\u0119dko\u015B\u0107 odtwarzania",
  playlist: "Lista odtwarzania",
  playAnimation: "Odtw\xF3rz animacj\u0119",
  previousSlide: "Poprzedni slajd",
  previousVideo: "Poprzedni film",
  progress: "Post\u0119p",
  remove: "Usun\u0105\u0107",
  resize: "Zmie\u0144 rozmiar",
  scrollableRegion: "Obszar przewijalny",
  scrollToEnd: "Przewi\u0144 do ko\u0144ca",
  scrollToStart: "Przewi\u0144 do pocz\u0105tku",
  selectAColorFromTheScreen: "Pr\xF3bkuj z ekranu",
  showPassword: "Poka\u017C has\u0142o",
  slideNum: (slide) => `Slajd ${slide}`,
  toggleColorFormat: "Prze\u0142\u0105cz format",
  seek: "Szukaj",
  seekProgress: (current, duration) => `${current} z ${duration}`,
  currentlyPlaying: "aktualnie odtwarzane",
  unmute: "W\u0142\u0105cz d\u017Awi\u0119k",
  videoPlayer: "Odtwarzacz wideo",
  volume: "G\u0142o\u015Bno\u015B\u0107",
  zoomIn: "Powi\u0119ksz",
  zoomOut: "Pomniejsz"
};
registerTranslation(translation);
var pl_default = translation;
export {
  pl_default as default
};
