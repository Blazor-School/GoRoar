/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/zh-cn.ts
var translation = {
  $code: "zh-cn",
  $name: "\u7B80\u4F53\u4E2D\u6587",
  $dir: "ltr",
  carousel: "\u8DD1\u9A6C\u706F",
  captions: "\u5B57\u5E55",
  clearEntry: "\u6E05\u7A7A",
  createOption: (value) => `\u521B\u5EFA"${value}"`,
  close: "\u5173\u95ED",
  copied: "\u5DF2\u590D\u5236",
  copy: "\u590D\u5236",
  currentValue: "\u5F53\u524D\u503C",
  decrement: "\u51CF\u5C11",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "\u9519\u8BEF",
  enterFullscreen: "\u8FDB\u5165\u5168\u5C4F",
  exitFullscreen: "\u9000\u51FA\u5168\u5C4F",
  goToSlide: (slide, count) => `\u8F6C\u5230\u7B2C ${slide} \u5F20\u5E7B\u706F\u7247\uFF0C\u5171 ${count} \u5F20`,
  hidePassword: "\u9690\u85CF\u5BC6\u7801",
  increment: "\u589E\u52A0",
  loading: "\u52A0\u8F7D\u4E2D",
  moreOptions: "\u66F4\u591A\u9009\u9879",
  mute: "\u9759\u97F3",
  nextSlide: "\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247",
  nextVideo: "\u4E0B\u4E00\u4E2A\u89C6\u9891",
  numCharacters: (num) => `${num}\u4E2A\u5B57\u7B26`,
  numCharactersRemaining: (num) => `\u5269\u4F59${num}\u4E2A\u5B57\u7B26`,
  numOptionsSelected: (num) => {
    if (num === 0) return "\u672A\u9009\u62E9\u4EFB\u4F55\u9879\u76EE";
    if (num === 1) return "\u5DF2\u9009\u62E9 1 \u4E2A\u9879\u76EE";
    return `${num} \u9009\u62E9\u9879\u76EE`;
  },
  pause: "\u6682\u505C",
  pauseAnimation: "\u6682\u505C\u52A8\u753B",
  pictureInPicture: "\u753B\u4E2D\u753B",
  play: "\u64AD\u653E",
  playbackSpeed: "\u64AD\u653E\u901F\u5EA6",
  playlist: "\u64AD\u653E\u5217\u8868",
  playAnimation: "\u64AD\u653E\u52A8\u753B",
  previousSlide: "\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247",
  previousVideo: "\u4E0A\u4E00\u4E2A\u89C6\u9891",
  progress: "\u8FDB\u5EA6",
  remove: "\u5220\u9664",
  resize: "\u8C03\u6574\u5927\u5C0F",
  scrollableRegion: "\u53EF\u6EDA\u52A8\u533A\u57DF",
  scrollToEnd: "\u6EDA\u52A8\u81F3\u9875\u5C3E",
  scrollToStart: "\u6EDA\u52A8\u81F3\u9875\u9996",
  selectAColorFromTheScreen: "\u4ECE\u5C4F\u5E55\u4E2D\u9009\u62E9\u4E00\u79CD\u989C\u8272",
  showPassword: "\u663E\u793A\u5BC6\u7801",
  slideNum: (slide) => `\u5E7B\u706F\u7247 ${slide}`,
  toggleColorFormat: "\u5207\u6362\u989C\u8272\u6A21\u5F0F",
  seek: "\u8DF3\u8F6C",
  seekProgress: (current, duration) => `${current} / ${duration}`,
  currentlyPlaying: "\u6B63\u5728\u64AD\u653E",
  unmute: "\u53D6\u6D88\u9759\u97F3",
  videoPlayer: "\u89C6\u9891\u64AD\u653E\u5668",
  volume: "\u97F3\u91CF",
  zoomIn: "\u653E\u5927",
  zoomOut: "\u7F29\u5C0F"
};
registerTranslation(translation);
var zh_cn_default = translation;
export {
  zh_cn_default as default
};
