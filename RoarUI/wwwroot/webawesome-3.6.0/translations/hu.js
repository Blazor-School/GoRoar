/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/hu.ts
var translation = {
  $code: "hu",
  $name: "Magyar",
  $dir: "ltr",
  carousel: "K\xF6rhinta",
  captions: "Feliratok",
  clearEntry: "Bejegyz\xE9s t\xF6rl\xE9se",
  createOption: (value) => `\u201E${value}" l\xE9trehoz\xE1sa`,
  close: "Bez\xE1r\xE1s",
  copied: "M\xE1solva",
  copy: "M\xE1sol\xE1s",
  currentValue: "Aktu\xE1lis \xE9rt\xE9k",
  decrement: "Cs\xF6kkent\xE9s",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Hiba",
  enterFullscreen: "Teljes k\xE9perny\u0151",
  exitFullscreen: "Kil\xE9p\xE9s a teljes k\xE9perny\u0151b\u0151l",
  goToSlide: (slide, count) => `Ugr\xE1s a ${count}/${slide}. di\xE1ra`,
  hidePassword: "Jelsz\xF3 elrejt\xE9se",
  increment: "N\xF6vel\xE9s",
  loading: "Bet\xF6lt\xE9s",
  moreOptions: "Tov\xE1bbi lehet\u0151s\xE9gek",
  mute: "Eln\xE9m\xEDt\xE1s",
  nextSlide: "K\xF6vetkez\u0151 dia",
  nextVideo: "K\xF6vetkez\u0151 vide\xF3",
  numCharacters: (num) => {
    if (num === 1) return "1 karakter";
    return `${num} karakter`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 karakter maradt";
    return `${num} karakter maradt`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nincsenek kiv\xE1lasztva opci\xF3k";
    if (num === 1) return "1 lehet\u0151s\xE9g kiv\xE1lasztva";
    return `${num} lehet\u0151s\xE9g kiv\xE1lasztva`;
  },
  pause: "Sz\xFCnet",
  pauseAnimation: "Anim\xE1ci\xF3 sz\xFCneteltet\xE9se",
  pictureInPicture: "K\xE9p a k\xE9pben",
  play: "Lej\xE1tsz\xE1s",
  playbackSpeed: "Lej\xE1tsz\xE1si sebess\xE9g",
  playlist: "Lej\xE1tsz\xE1si lista",
  playAnimation: "Anim\xE1ci\xF3 lej\xE1tsz\xE1sa",
  previousSlide: "El\u0151z\u0151 dia",
  previousVideo: "El\u0151z\u0151 vide\xF3",
  progress: "Folyamat",
  remove: "Elt\xE1vol\xEDt\xE1s",
  resize: "\xC1tm\xE9retez\xE9s",
  scrollableRegion: "G\xF6rgethet\u0151 ter\xFClet",
  scrollToEnd: "G\xF6rgessen a v\xE9g\xE9re",
  scrollToStart: "G\xF6rgessen az elej\xE9re",
  selectAColorFromTheScreen: "Sz\xEDn v\xE1laszt\xE1sa a k\xE9perny\u0151r\u0151l",
  showPassword: "Jelsz\xF3 megjelen\xEDt\xE9se",
  slideNum: (slide) => `${slide}. dia`,
  toggleColorFormat: "Sz\xEDnform\xE1tum v\xE1ltoztat\xE1sa",
  seek: "Keres\xE9s",
  seekProgress: (current, duration) => `${current} / ${duration}`,
  currentlyPlaying: "\xE9ppen j\xE1tszik",
  unmute: "Eln\xE9m\xEDt\xE1s felold\xE1sa",
  videoPlayer: "Vide\xF3lej\xE1tsz\xF3",
  volume: "Hanger\u0151",
  zoomIn: "Nagy\xEDt\xE1s",
  zoomOut: "Kicsiny\xEDt\xE9s"
};
registerTranslation(translation);
var hu_default = translation;
export {
  hu_default as default
};
