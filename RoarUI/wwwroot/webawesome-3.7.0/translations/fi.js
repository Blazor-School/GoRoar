/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/fi.ts
var translation = {
  $code: "fi",
  $name: "Suomi",
  $dir: "ltr",
  carousel: "Karuselli",
  captions: "Tekstitys",
  clearEntry: "Poista merkint\xE4",
  createOption: (value) => `Luo "${value}"`,
  close: "Sulje",
  copied: "Kopioitu",
  copy: "Kopioi",
  currentValue: "Nykyinen arvo",
  decrement: "V\xE4henn\xE4",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Virhe",
  enterFullscreen: "Siirry koko n\xE4yt\xF6lle",
  exitFullscreen: "Poistu koko n\xE4yt\xF6lt\xE4",
  goToSlide: (slide, count) => `Siirry diaan ${slide} / ${count}`,
  hidePassword: "Piilota salasana",
  increment: "Lis\xE4\xE4",
  loading: "Ladataan",
  moreOptions: "Lis\xE4\xE4 vaihtoehtoja",
  mute: "Mykist\xE4",
  nextSlide: "Seuraava dia",
  nextVideo: "Seuraava video",
  numCharacters: (num) => {
    if (num === 1) return "1 merkki";
    return `${num} merkki\xE4`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 merkki j\xE4ljell\xE4";
    return `${num} merkki\xE4 j\xE4ljell\xE4`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Ei valittuja vaihtoehtoja";
    if (num === 1) return "Yksi vaihtoehto valittu";
    return `${num} vaihtoehtoa valittu`;
  },
  pause: "Keskeyt\xE4",
  pauseAnimation: "Keskeyt\xE4 animaatio",
  pictureInPicture: "Kuva kuvassa",
  play: "Toista",
  playbackSpeed: "Toistonopeus",
  playlist: "Soittolista",
  playAnimation: "Toista animaatio",
  previousSlide: "Edellinen dia",
  previousVideo: "Edellinen video",
  progress: "Edistyminen",
  remove: "Poista",
  resize: "Muuta kokoa",
  scrollableRegion: "Vieritett\xE4v\xE4 alue",
  scrollToEnd: "Vierit\xE4 loppuun",
  scrollToStart: "Vierit\xE4 alkuun",
  selectAColorFromTheScreen: "Valitse v\xE4ri n\xE4yt\xF6lt\xE4",
  showPassword: "N\xE4yt\xE4 salasana",
  slideNum: (slide) => `Dia ${slide}`,
  toggleColorFormat: "Vaihda v\xE4riformaattia",
  seek: "Siirry",
  seekProgress: (current, duration) => `${current} / ${duration}`,
  currentlyPlaying: "toistetaan parhaillaan",
  unmute: "Poista mykistys",
  videoPlayer: "Videosoitin",
  volume: "\xC4\xE4nenvoimakkuus",
  zoomIn: "L\xE4henn\xE4",
  zoomOut: "Loitonna"
};
registerTranslation(translation);
var fi_default = translation;
export {
  fi_default as default
};
