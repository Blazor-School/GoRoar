/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  registerTranslation
} from "./chunk.CZ2YL77F.js";

// src/translations/de.ts
var translation = {
  $code: "de",
  $name: "Deutsch",
  $dir: "ltr",
  carousel: "Karussell",
  captions: "Untertitel",
  clearEntry: "Eingabe l\xF6schen",
  createOption: (value) => `\u201E${value}" erstellen`,
  close: "Schlie\xDFen",
  copied: "Kopiert",
  copy: "Kopieren",
  currentValue: "Aktueller Wert",
  decrement: "Verringern",
  dropFileHere: "Datei hier ablegen oder zum Durchsuchen klicken",
  dropFilesHere: "Dateien hier ablegen oder zum Durchsuchen klicken",
  error: "Fehler",
  enterFullscreen: "Vollbildmodus aktivieren",
  exitFullscreen: "Vollbildmodus beenden",
  goToSlide: (slide, count) => `Zu Folie ${slide} von ${count} gehen`,
  hidePassword: "Passwort verbergen",
  increment: "Erh\xF6hen",
  loading: "Wird geladen",
  moreOptions: "Weitere Optionen",
  mute: "Stummschalten",
  nextSlide: "N\xE4chste Folie",
  nextVideo: "N\xE4chstes Video",
  numCharacters: (num) => {
    if (num === 1) return "1 Zeichen";
    return `${num} Zeichen`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 Zeichen verbleibend";
    return `${num} Zeichen verbleibend`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Keine Optionen ausgew\xE4hlt";
    if (num === 1) return "1 Option ausgew\xE4hlt";
    return `${num} Optionen ausgew\xE4hlt`;
  },
  pause: "Pausieren",
  pauseAnimation: "Animation pausieren",
  pictureInPicture: "Bild im Bild",
  play: "Abspielen",
  playbackSpeed: "Abspielgeschwindigkeit",
  playlist: "Wiedergabeliste",
  playAnimation: "Animation abspielen",
  previousSlide: "Vorherige Folie",
  previousVideo: "Vorheriges Video",
  progress: "Fortschritt",
  remove: "Entfernen",
  resize: "Gr\xF6\xDFe \xE4ndern",
  scrollableRegion: "Scrollbarer Bereich",
  scrollToEnd: "Zum Ende scrollen",
  scrollToStart: "Zum Anfang scrollen",
  selectAColorFromTheScreen: "Farbe vom Bildschirm ausw\xE4hlen",
  showPassword: "Passwort anzeigen",
  slideNum: (slide) => `Folie ${slide}`,
  toggleColorFormat: "Farbformat wechseln",
  seek: "Suchen",
  seekProgress: (current, duration) => `${current} von ${duration}`,
  currentlyPlaying: "wird gerade abgespielt",
  unmute: "Stummschaltung aufheben",
  videoPlayer: "Videoplayer",
  volume: "Lautst\xE4rke",
  zoomIn: "Hineinzoomen",
  zoomOut: "Herauszoomen"
};
registerTranslation(translation);
var de_default = translation;

export {
  de_default
};
