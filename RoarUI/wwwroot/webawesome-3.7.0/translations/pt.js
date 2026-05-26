/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.76ZI4IYG.js";
import "../chunks/chunk.PBQ4NLHZ.js";
import {
  registerTranslation
} from "../chunks/chunk.CZ2YL77F.js";
import "../chunks/chunk.JHZRD2LV.js";

// src/translations/pt.ts
var translation = {
  $code: "pt",
  $name: "Portugu\xEAs",
  $dir: "ltr",
  carousel: "Carrossel",
  captions: "Legendas",
  clearEntry: "Limpar entrada",
  createOption: (value) => `Criar "${value}"`,
  close: "Fechar",
  copied: "Copiado",
  copy: "Copiar",
  currentValue: "Valor atual",
  decrement: "Diminuir",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  error: "Erro",
  enterFullscreen: "Entrar em ecr\xE3 inteiro",
  exitFullscreen: "Sair do ecr\xE3 inteiro",
  goToSlide: (slide, count) => `V\xE1 para o slide ${slide} de ${count}`,
  hidePassword: "Esconder a senha",
  increment: "Aumentar",
  loading: "Carregando",
  moreOptions: "Mais op\xE7\xF5es",
  mute: "Sem som",
  nextSlide: "Pr\xF3ximo slide",
  nextVideo: "Pr\xF3ximo v\xEDdeo",
  numCharacters: (num) => {
    if (num === 1) return "1 caractere";
    return `${num} caracteres`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "1 caractere restante";
    return `${num} caracteres restantes`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nenhuma op\xE7\xE3o selecionada";
    if (num === 1) return "1 op\xE7\xE3o selecionada";
    return `${num} op\xE7\xF5es selecionadas`;
  },
  pause: "Pausar",
  pauseAnimation: "Pausar anima\xE7\xE3o",
  pictureInPicture: "Imagem em imagem",
  play: "Reproduzir",
  playbackSpeed: "Velocidade de reprodu\xE7\xE3o",
  playlist: "Lista de reprodu\xE7\xE3o",
  playAnimation: "Reproduzir anima\xE7\xE3o",
  previousSlide: "Slide anterior",
  previousVideo: "V\xEDdeo anterior",
  progress: "Progresso",
  remove: "Remover",
  resize: "Mudar o tamanho",
  scrollableRegion: "Regi\xE3o rol\xE1vel",
  scrollToEnd: "Rolar at\xE9 o final",
  scrollToStart: "Rolar at\xE9 o in\xEDcio",
  selectAColorFromTheScreen: "Selecionar uma cor da tela",
  showPassword: "Mostrar senha",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Trocar o formato de cor",
  seek: "Procurar",
  seekProgress: (current, duration) => `${current} de ${duration}`,
  currentlyPlaying: "a reproduzir",
  unmute: "Ativar som",
  videoPlayer: "Leitor de v\xEDdeo",
  volume: "Volume",
  zoomIn: "Aumentar zoom",
  zoomOut: "Diminuir zoom"
};
registerTranslation(translation);
var pt_default = translation;
export {
  pt_default as default
};
