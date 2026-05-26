/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import {
  en_default
} from "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/en-gb.ts
var translation = {
  ...en_default,
  $code: "en-GB",
  $name: "English (United Kingdom)",
  captions: "Captions",
  enterFullscreen: "Enter fullscreen",
  exitFullscreen: "Exit fullscreen",
  mute: "Mute",
  nextVideo: "Next video",
  pause: "Pause",
  pictureInPicture: "Picture in picture",
  play: "Play",
  playbackSpeed: "Playback speed",
  playlist: "Playlist",
  previousVideo: "Previous video",
  selectAColorFromTheScreen: "Select a colour from the screen",
  toggleColorFormat: "Toggle colour format",
  seek: "Seek",
  seekProgress: (current, duration) => `${current} of ${duration}`,
  currentlyPlaying: "currently playing",
  unmute: "Unmute",
  videoPlayer: "Video player",
  volume: "Volume"
};
registerTranslation(translation);
var en_gb_default = translation;
export {
  en_gb_default as default
};
