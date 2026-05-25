/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/fr.ts
var translation = {
  $code: "fr",
  $name: "Fran\xE7ais",
  $dir: "ltr",
  carousel: "Carrousel",
  captions: "Sous-titres",
  clearEntry: `Effacer l'entr\xE9e`,
  createOption: (value) => `Cr\xE9er \xAB ${value} \xBB`,
  close: "Fermer",
  copied: "Copi\xE9",
  copy: "Copier",
  currentValue: "Valeur actuelle",
  decrement: "Diminuer",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Erreur",
  enterFullscreen: "Passer en plein \xE9cran",
  exitFullscreen: "Quitter le plein \xE9cran",
  goToSlide: (slide, count) => `Aller \xE0 la diapositive ${slide} de ${count}`,
  hidePassword: "Masquer le mot de passe",
  increment: "Augmenter",
  loading: "Chargement",
  moreOptions: "Plus d'options",
  mute: "Couper le son",
  nextSlide: "Diapositive suivante",
  nextVideo: "Vid\xE9o suivante",
  numCharacters: (num) => {
    if (num === 1) return "1 caract\xE8re";
    return `${num} caract\xE8res`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 caract\xE8re restant";
    return `${num} caract\xE8res restants`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Aucune option s\xE9lectionn\xE9e";
    if (num === 1) return "1 option s\xE9lectionn\xE9e";
    return `${num} options s\xE9lectionn\xE9es`;
  },
  pause: "Pause",
  pauseAnimation: "Suspendre l'animation",
  pictureInPicture: `Image dans l'image`,
  play: "Lecture",
  playbackSpeed: "Vitesse de lecture",
  playlist: "Liste de lecture",
  playAnimation: "Lire l'animation",
  previousSlide: "Diapositive pr\xE9c\xE9dente",
  previousVideo: "Vid\xE9o pr\xE9c\xE9dente",
  progress: "Progr\xE8s",
  remove: "Retirer",
  resize: "Redimensionner",
  scrollableRegion: "R\xE9gion d\xE9filante",
  scrollToEnd: `Faire d\xE9filer jusqu'\xE0 la fin`,
  scrollToStart: `Faire d\xE9filer jusqu'au d\xE9but`,
  selectAColorFromTheScreen: `S\xE9lectionnez une couleur \xE0 l'\xE9cran`,
  showPassword: "Montrer le mot de passe",
  slideNum: (slide) => `Diapositive ${slide}`,
  toggleColorFormat: "Changer le format de couleur",
  seek: "Rechercher",
  seekProgress: (current, duration) => `${current} sur ${duration}`,
  currentlyPlaying: "en cours de lecture",
  unmute: "R\xE9tablir le son",
  videoPlayer: "Lecteur vid\xE9o",
  volume: "Volume",
  zoomIn: "Zoomer",
  zoomOut: "D\xE9zoomer"
};
registerTranslation(translation);
var fr_default = translation;
export {
  fr_default as default
};
