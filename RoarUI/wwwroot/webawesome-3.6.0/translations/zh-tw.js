/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/zh-tw.ts
var translation = {
  $code: "zh-tw",
  $name: "\u6B63\u9AD4\u4E2D\u6587",
  $dir: "ltr",
  carousel: "\u5E7B\u71C8\u7247",
  captions: "\u5B57\u5E55",
  clearEntry: "\u6E05\u7A7A",
  createOption: (value) => `\u5EFA\u7ACB\u300C${value}\u300D`,
  close: "\u95DC\u9589",
  copied: "\u5DF2\u8907\u88FD",
  copy: "\u8907\u88FD",
  currentValue: "\u7576\u524D\u503C",
  decrement: "\u6E1B\u5C11",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "\u932F\u8AA4",
  enterFullscreen: "\u9032\u5165\u5168\u87A2\u5E55",
  exitFullscreen: "\u9000\u51FA\u5168\u87A2\u5E55",
  goToSlide: (slide, count) => `\u8F49\u5230\u7B2C ${slide} \u5F35\u5E7B\u71C8\u7247\uFF0C\u5171 ${count} \u5F35`,
  hidePassword: "\u96B1\u85CF\u5BC6\u78BC",
  increment: "\u589E\u52A0",
  loading: "\u8F09\u5165\u4E2D",
  moreOptions: "\u66F4\u591A\u9078\u9805",
  mute: "\u975C\u97F3",
  nextSlide: "\u4E0B\u4E00\u5F35\u5E7B\u71C8\u7247",
  nextVideo: "\u4E0B\u4E00\u500B\u5F71\u7247",
  numCharacters: (num) => `${num}\u500B\u5B57\u5143`,
  numCharactersRemaining: (num) => `\u5269\u9918${num}\u500B\u5B57\u5143`,
  numOptionsSelected: (num) => {
    if (num === 0) return "\u672A\u9078\u64C7\u4EFB\u4F55\u9805\u76EE";
    if (num === 1) return "\u5DF2\u9078\u64C7 1 \u500B\u9805\u76EE";
    return `${num} \u9078\u64C7\u9805\u76EE`;
  },
  pause: "\u66AB\u505C",
  pauseAnimation: "\u66AB\u505C\u52D5\u756B",
  pictureInPicture: "\u5B50\u6BCD\u756B\u9762",
  play: "\u64AD\u653E",
  playbackSpeed: "\u64AD\u653E\u901F\u5EA6",
  playlist: "\u64AD\u653E\u6E05\u55AE",
  playAnimation: "\u64AD\u653E\u52D5\u756B",
  previousSlide: "\u4E0A\u4E00\u5F35\u5E7B\u71C8\u7247",
  previousVideo: "\u4E0A\u4E00\u500B\u5F71\u7247",
  progress: "\u9032\u5EA6",
  remove: "\u79FB\u9664",
  resize: "\u8ABF\u6574\u5927\u5C0F",
  scrollableRegion: "\u53EF\u6372\u52D5\u533A\u57DF",
  scrollToEnd: "\u6372\u81F3\u9801\u5C3E",
  scrollToStart: "\u6372\u81F3\u9801\u9996",
  selectAColorFromTheScreen: "\u5F9E\u87A2\u5E55\u4E2D\u9078\u64C7\u4E00\u7A2E\u984F\u8272",
  showPassword: "\u986F\u793A\u5BC6\u78BC",
  slideNum: (slide) => `\u5E7B\u71C8\u7247 ${slide}`,
  toggleColorFormat: "\u5207\u63DB\u984F\u8272\u683C\u5F0F",
  seek: "\u8DF3\u8F49",
  seekProgress: (current, duration) => `${current} / ${duration}`,
  currentlyPlaying: "\u6B63\u5728\u64AD\u653E",
  unmute: "\u53D6\u6D88\u975C\u97F3",
  videoPlayer: "\u5F71\u7247\u64AD\u653E\u5668",
  volume: "\u97F3\u91CF",
  zoomIn: "\u653E\u5927",
  zoomOut: "\u7E2E\u5C0F"
};
registerTranslation(translation);
var zh_tw_default = translation;
export {
  zh_tw_default as default
};
