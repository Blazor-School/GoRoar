/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/it.ts
var translation = {
  $code: "it",
  $name: "Italiano",
  $dir: "ltr",
  carousel: "Carosello",
  captions: "Sottotitoli",
  clearEntry: "Cancella inserimento",
  createOption: (value) => `Crea "${value}"`,
  close: "Chiudi",
  copied: "Copiato",
  copy: "Copia",
  currentValue: "Valore attuale",
  decrement: "Diminuisci",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Errore",
  enterFullscreen: "Entra in modalit\xE0 a schermo intero",
  exitFullscreen: "Esci dalla modalit\xE0 a schermo intero",
  goToSlide: (slide, count) => `Vai alla diapositiva ${slide} di ${count}`,
  hidePassword: "Nascondi password",
  increment: "Aumenta",
  loading: "In caricamento",
  moreOptions: "Altre opzioni",
  mute: "Disattiva audio",
  nextSlide: "Prossima diapositiva",
  nextVideo: "Video successivo",
  numCharacters: (num) => {
    if (num === 1) return "1 carattere";
    return `${num} caratteri`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 carattere rimanente";
    return `${num} caratteri rimanenti`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nessuna opzione selezionata";
    if (num === 1) return "1 opzione selezionata";
    return `${num} opzioni selezionate`;
  },
  pause: "Pausa",
  pauseAnimation: "Metti in pausa animazione",
  pictureInPicture: `Immagine nell'immagine`,
  play: "Riproduci",
  playbackSpeed: "Velocit\xE0 di riproduzione",
  playlist: "Playlist",
  playAnimation: "Riproduci animazione",
  previousSlide: "Diapositiva precedente",
  previousVideo: "Video precedente",
  progress: "Avanzamento",
  remove: "Rimuovi",
  resize: "Ridimensiona",
  scrollableRegion: "Area scorrevole",
  scrollToEnd: "Scorri alla fine",
  scrollToStart: "Scorri all'inizio",
  selectAColorFromTheScreen: "Seleziona un colore dalla schermo",
  showPassword: "Mostra password",
  slideNum: (slide) => `Diapositiva ${slide}`,
  toggleColorFormat: "Cambia formato colore",
  seek: "Cerca",
  seekProgress: (current, duration) => `${current} di ${duration}`,
  currentlyPlaying: "in riproduzione",
  unmute: "Attiva audio",
  videoPlayer: "Lettore video",
  volume: "Volume",
  zoomIn: "Ingrandire",
  zoomOut: "Rimpicciolire"
};
registerTranslation(translation);
var it_default = translation;
export {
  it_default as default
};
