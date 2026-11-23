/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import {
  registerTranslation
} from "../chunks/chunk.HOKYDFUG.js";
import "../chunks/chunk.763SWQQU.js";

// src/translations/sl.ts
var translation = {
  $code: "sl",
  $name: "Slovenski",
  $dir: "ltr",
  alignCenter: "Poravnaj na sredino",
  alignEnd: "Poravnaj na konec",
  alignJustify: "Obojestranska poravnava",
  alignment: "Poravnava",
  alignStart: "Poravnaj na za\u010Detek",
  allTagsRemoved: "Vse oznake odstranjene",
  alternativeText: "Nadomestno besedilo",
  am: "AM",
  apply: "Uporabi",
  autosizeColumn: "Samodejno prilagodi velikost stolpca",
  blockquote: "Citat",
  bold: "Krepko",
  bulletList: "Ozna\u010Deni seznam",
  caption: "Napis",
  captions: "Podnapisi",
  carousel: "Vrtiljak",
  cell: "Celica",
  chooseDate: "Izberite datum",
  chooseDecade: "Izberite desetletje",
  chooseMonth: "Izberite mesec",
  chooseTime: "Izberite \u010Das",
  chooseYear: "Izberite leto",
  clearEntry: "Po\u010Disti vnos",
  clearFilter: "Po\u010Disti filter",
  clearFormatting: "Po\u010Disti oblikovanje",
  clearSort: "Po\u010Disti razvr\u0161\u010Danje",
  close: "Zapri",
  closeCalendar: "Zapri koledar",
  closeTimeInput: "Zapri izbirnik \u010Dasa",
  code: "Koda",
  codeBlock: "Blok kode",
  collapseRow: "Strni vrstico",
  colorBlue: "Modra",
  colorGray: "Siva",
  colorGreen: "Zelena",
  colorOrange: "Oran\u017Ena",
  colorPink: "Ro\u017Enata",
  colorPurple: "Vijoli\u010Dna",
  colorRed: "Rde\u010Da",
  colorYellow: "Rumena",
  column: "Stolpec",
  columnMenu: "Mo\u017Enosti stolpca",
  columnMovedToPosition: (label, position, total) => `${label} premaknjen na polo\u017Eaj ${position} od ${total}`,
  columns: "Stolpci",
  compactPageXOfY: (page, total) => `${page} od ${total}`,
  completed: "Dokon\u010Dano",
  copied: "Kopirano",
  copy: "Kopiraj",
  createOption: (value) => `Ustvari "${value}"`,
  currentlyPlaying: "se trenutno predvaja",
  currentValue: "Trenutna vrednost",
  date: "Datum",
  datePickerKeyboardHelp: "S pu\u0161\u010Di\u010Dnimi tipkami spreminjajte vrednosti; pritisnite Alt+Pu\u0161\u010Dica navzdol za odpiranje koledarja.",
  day: "Dan",
  dayPeriod: "AM/PM",
  decrement: "Zmanj\u0161aj",
  deleteColumn: "Izbri\u0161i stolpec",
  deleteRow: "Izbri\u0161i vrstico",
  deleteTable: "Izbri\u0161i tabelo",
  deselectAllRows: "Prekli\u010Di izbiro vseh vrstic",
  disabled: "Onemogo\u010Deno",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  editEmbed: "Uredi vdelano vsebino",
  editImage: "Uredi sliko",
  editLink: "Uredi povezavo",
  embed: "Vdelana vsebina",
  embedPlaceholder: "Prilepite URL ali kodo za vdelavo",
  embedRemoved: "Vdelana vsebina odstranjena",
  embedUrl: "URL vdelane vsebine",
  empty: "Prazno",
  endDate: "Kon\u010Dni datum",
  enterAtLeastNumCharacters: (min) => {
    const mod100 = min % 100;
    if (mod100 === 1) return `Vnesite vsaj ${min} znak`;
    if (mod100 === 2) return `Vnesite vsaj ${min} znaka`;
    if (mod100 === 3 || mod100 === 4) return `Vnesite vsaj ${min} znake`;
    return `Vnesite vsaj ${min} znakov`;
  },
  enterFullscreen: "Vstopi v celozaslonski na\u010Din",
  enterUpToNumCharacters: (max) => {
    const mod100 = max % 100;
    if (mod100 === 1) return `Vnesite najve\u010D ${max} znak`;
    if (mod100 === 2) return `Vnesite najve\u010D ${max} znaka`;
    if (mod100 === 3 || mod100 === 4) return `Vnesite najve\u010D ${max} znake`;
    return `Vnesite najve\u010D ${max} znakov`;
  },
  error: "Napaka",
  exitFullscreen: "Zapusti celozaslonski na\u010Din",
  expandRow: "Raz\u0161iri vrstico",
  filterByColumn: (label) => `Filtriraj po ${label}`,
  filterFrom: "Od",
  filterMax: "Najv.",
  filterMin: "Najm.",
  filterTo: "Do",
  firstPage: "Prva stran",
  formatMenu: "Ve\u010D oblikovanja",
  formatting: "Oblikovanje",
  goToSlide: (slide, count) => `Pojdi na diapozitiv ${slide} od ${count}`,
  heading: "Naslov",
  headingLevel: (level) => `Naslov ${level}`,
  hideColumn: "Skrij stolpec",
  hidePassword: "Skrij geslo",
  highlight: "Ozna\u010Devanje",
  highlightColor: "Barva ozna\u010Devanja",
  horizontalRule: "Vodoravna \u010Drta",
  hour: "Ura",
  image: "Slika",
  imageRemoved: "Slika odstranjena",
  imageUrl: "URL slike",
  incompleteDate: "Vnesite veljaven datum.",
  increment: "Pove\u010Daj",
  indent: "Pove\u010Daj zamik",
  insertColumnAfter: "Vstavi stolpec za trenutnim",
  insertColumnBefore: "Vstavi stolpec pred trenutnim",
  insertEmbed: "Vstavi vdelano vsebino",
  insertImage: "Vstavi sliko",
  insertLink: "Vstavi povezavo",
  insertRowAbove: "Vstavi vrstico zgoraj",
  insertRowBelow: "Vstavi vrstico spodaj",
  insertTable: "Vstavi tabelo",
  insertTableOfSize: (rows, columns) => `Vstavi tabelo ${rows} \xD7 ${columns}`,
  italic: "Le\u017Ee\u010De",
  jumpBackwardX: (count) => {
    const mod100 = count % 100;
    if (mod100 === 1) return `Pomakni se ${count} stran nazaj`;
    if (mod100 === 2) return `Pomakni se ${count} strani nazaj`;
    if (mod100 === 3 || mod100 === 4) return `Pomakni se ${count} strani nazaj`;
    return `Pomakni se ${count} strani nazaj`;
  },
  jumpForwardX: (count) => {
    const mod100 = count % 100;
    if (mod100 === 1) return `Pomakni se ${count} stran naprej`;
    if (mod100 === 2) return `Pomakni se ${count} strani naprej`;
    if (mod100 === 3 || mod100 === 4) return `Pomakni se ${count} strani naprej`;
    return `Pomakni se ${count} strani naprej`;
  },
  keyAlt: "Alt",
  keyCtrl: "Ctrl",
  keyShift: "Shift",
  lastPage: "Zadnja stran",
  lightbox: "Pregledovalnik medijev",
  link: "Povezava",
  linkRemoved: "Povezava odstranjena",
  linkUrl: "URL povezave",
  lists: "Seznami",
  loading: "Nalaganje",
  locked: "Zaklenjeno",
  mediaLoadError: "Medijske vsebine ni bilo mogo\u010De nalo\u017Eiti",
  mergeCells: "Zdru\u017Ei celice",
  minute: "Minuta",
  month: "Mesec",
  moreOptions: "Ve\u010D mo\u017Enosti",
  moveColumnAfter: "Premakni stolpec naprej",
  moveColumnBefore: "Premakni stolpec nazaj",
  moveRowDown: "Premakni vrstico navzdol",
  moveRowUp: "Premakni vrstico navzgor",
  mute: "Uti\u0161aj",
  nextDecade: "Naslednje desetletje",
  nextMonth: "Naslednji mesec",
  nextPage: "Naslednja stran",
  nextSlide: "Naslednji diapozitiv",
  nextVideo: "Naslednji videoposnetek",
  nextYear: "Naslednje leto",
  noData: "Ni podatkov",
  noOptions: "Ni mo\u017Enosti",
  noResults: "Ni ustreznih rezultatov",
  noSuggestions: "Ni predlogov",
  notCompleted: "Ni dokon\u010Dano",
  now: "Zdaj",
  numCharacters: (num) => {
    const mod100 = num % 100;
    if (mod100 === 1) return `${num} znak`;
    if (mod100 === 2) return `${num} znaka`;
    if (mod100 === 3 || mod100 === 4) return `${num} znaki`;
    return `${num} znakov`;
  },
  numCharactersRemaining: (num) => {
    const mod100 = num % 100;
    if (mod100 === 1) return `Preostane ${num} znak`;
    if (mod100 === 2) return `Preostaneta ${num} znaka`;
    if (mod100 === 3 || mod100 === 4) return `Preostanejo ${num} znaki`;
    return `Preostane ${num} znakov`;
  },
  numOptionsAvailable: (num) => {
    if (num === 0) return "Ni razpolo\u017Eljivih mo\u017Enosti";
    const mod100 = num % 100;
    if (mod100 === 1) return `Na voljo je ${num} mo\u017Enost`;
    if (mod100 === 2) return `Na voljo sta ${num} mo\u017Enosti`;
    if (mod100 === 3 || mod100 === 4) return `Na voljo so ${num} mo\u017Enosti`;
    return `Na voljo je ${num} mo\u017Enosti`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nobena mo\u017Enost ni izbrana";
    if (num === 1) return "1 mo\u017Enost izbrana";
    if (num === 2) return "2 mo\u017Enosti izbrani";
    if (num === 3 || num === 4) return `${num} mo\u017Enosti izbrane`;
    return `${num} mo\u017Enosti izbranih`;
  },
  numRowsCopied: (num) => {
    const mod100 = num % 100;
    if (mod100 === 1) return `${num} kopirana vrstica`;
    if (mod100 === 2) return `${num} kopirani vrstici`;
    if (mod100 === 3 || mod100 === 4) return `${num} kopirane vrstice`;
    return `${num} kopiranih vrstic`;
  },
  numRowsSelected: (num) => {
    const mod100 = num % 100;
    if (mod100 === 1) return `${num} izbrana vrstica`;
    if (mod100 === 2) return `${num} izbrani vrstici`;
    if (mod100 === 3 || mod100 === 4) return `${num} izbrane vrstice`;
    return `${num} izbranih vrstic`;
  },
  openInNewTab: "Odpri v novem zavihku",
  openLink: "Odpri povezavo",
  optionPosition: (label, position, total) => `${label}, ${position} od ${total}`,
  optionsLoadError: "Mo\u017Enosti ni bilo mogo\u010De nalo\u017Eiti",
  orderedList: "O\u0161tevil\u010Deni seznam",
  outdent: "Zmanj\u0161aj zamik",
  pageXOfY: (page, total) => `Stran ${page} od ${total}`,
  pagination: "O\u0161tevil\u010Devanje strani",
  paragraph: "Odstavek",
  pasteAsPlainText: "Prilepi kot navadno besedilo",
  pause: "Premor",
  pauseAnimation: "Zaustavi animacijo",
  pictureInPicture: "Slika v sliki",
  pinLeft: "Pripni levo",
  pinRight: "Pripni desno",
  play: "Predvajaj",
  playAnimation: "Predvajaj animacijo",
  playbackSpeed: "Hitrost predvajanja",
  playlist: "Seznam predvajanja",
  pm: "PM",
  previousDecade: "Prej\u0161nje desetletje",
  previousMonth: "Prej\u0161nji mesec",
  previousPage: "Prej\u0161nja stran",
  previousSlide: "Prej\u0161nji diapozitiv",
  previousVideo: "Prej\u0161nji videoposnetek",
  previousYear: "Prej\u0161nje leto",
  progress: "Napredek",
  rangeTooLong: (max) => {
    const mod100 = max % 100;
    if (mod100 === 1) return `Izberite obdobje, ki ni dalj\u0161e od ${max} dneva`;
    if (mod100 === 2) return `Izberite obdobje, ki ni dalj\u0161e od ${max} dni`;
    if (mod100 === 3 || mod100 === 4) return `Izberite obdobje, ki ni dalj\u0161e od ${max} dni`;
    return `Izberite obdobje, ki ni dalj\u0161e od ${max} dni`;
  },
  rangeTooShort: (min) => {
    const mod100 = min % 100;
    if (mod100 === 1) return `Izberite obdobje, dolgo vsaj ${min} dan`;
    if (mod100 === 2) return `Izberite obdobje, dolgo vsaj ${min} dneva`;
    if (mod100 === 3 || mod100 === 4) return `Izberite obdobje, dolgo vsaj ${min} dni`;
    return `Izberite obdobje, dolgo vsaj ${min} dni`;
  },
  readonly: "Samo za branje",
  redo: "Uveljavi",
  remove: "Odstrani",
  removeLink: "Odstrani povezavo",
  resetColumns: "Ponastavi stolpce",
  resize: "Spremeni velikost",
  resizeColumn: "Spremeni velikost stolpca",
  row: "Vrstica",
  rowsAndColumns: (rows, columns) => {
    const plural = (n, one, two, few, many) => {
      const mod100 = n % 100;
      if (mod100 === 1) return `${n} ${one}`;
      if (mod100 === 2) return `${n} ${two}`;
      if (mod100 === 3 || mod100 === 4) return `${n} ${few}`;
      return `${n} ${many}`;
    };
    return `${plural(rows, "vrstica", "vrstici", "vrstice", "vrstic")}, ${plural(columns, "stolpec", "stolpca", "stolpci", "stolpcev")}`;
  },
  rowsPerPage: "Vrstic na stran",
  scrollableRegion: "Podro\u010Dje za drsenje",
  scrollToEnd: "Pomakni se na konec",
  scrollToStart: "Pomakni se na za\u010Detek",
  search: "Iskanje",
  second: "Sekunda",
  seek: "I\u0161\u010Di",
  seekProgress: (current, duration) => `${current} od ${duration}`,
  selectAColorFromTheScreen: "Izberite barvo z zaslona",
  selectAllRows: "Izberi vse vrstice",
  selectCell: "Izberi celico",
  selected: "Izbrano",
  selectedDateLabel: (date) => `Izbrano: ${date}`,
  selectedRangeLabel: (range) => `Izbrano obdobje: ${range}`,
  selectGroup: "Izberi skupino",
  selectionCleared: "Izbira po\u010Di\u0161\u010Dena",
  selectRow: "Izberi vrstico",
  selectTable: "Izberi tabelo",
  showingNofMRows: (shown, total) => `Prikazanih ${shown} od ${total} vrstic`,
  showingXtoYofZ: (start, end, total) => `${start}\u2013${end} od ${total}`,
  showPassword: "Prika\u017Ei geslo",
  slideNum: (slide) => `Diapozitiv ${slide}`,
  sortAscending: "Razvrsti nara\u0161\u010Dajo\u010De",
  sortColumn: "Razvrsti stolpec",
  sortDescending: "Razvrsti padajo\u010De",
  splitCell: "Razdeli celico",
  startDate: "Za\u010Detni datum",
  steps: "Koraki",
  stepXOfY: (step, total) => `Korak ${step} od ${total}`,
  strikethrough: "Pre\u010Drtano",
  subscript: "Podpisano",
  suggestions: "Predlogi",
  suggestionsAvailable: (count) => {
    const mod100 = count % 100;
    if (mod100 === 1) return `Na voljo je ${count} predlog`;
    if (mod100 === 2) return `Na voljo sta ${count} predloga`;
    if (mod100 === 3 || mod100 === 4) return `Na voljo so ${count} predlogi`;
    return `Na voljo je ${count} predlogov`;
  },
  suggestionsLoadError: "Predlogov ni bilo mogo\u010De nalo\u017Eiti",
  superscript: "Nadpisano",
  tableInserted: "Tabela vstavljena",
  tableOptions: "Mo\u017Enosti tabele",
  tableSize: "Velikost tabele",
  tagAdded: (tag) => `${tag} dodano`,
  tagAlreadyAdded: (tag) => `Oznaka ${tag} \u017Ee obstaja`,
  tagInputKeyboardHelp: "Pritisnite Backspace ali Delete, da odstranite to oznako.",
  tagRemoved: (tag) => `${tag} odstranjeno`,
  textColor: "Barva besedila",
  textStyle: "Slog besedila",
  time: "\u010Cas",
  timeInputKeyboardHelp: "S pu\u0161\u010Di\u010Dnimi tipkami spreminjajte vrednosti; pritisnite Alt+Pu\u0161\u010Dica navzdol za odpiranje izbirnika \u010Dasa.",
  title: "Naslov",
  today: "Danes",
  toggleColorFormat: "Preklopi format barve",
  toggleHeaderColumn: "Naslovni stolpec",
  toggleHeaderRow: "Naslovna vrstica",
  tooFewTags: (min) => {
    const mod100 = min % 100;
    if (mod100 === 1) return `Dodajte vsaj ${min} oznako`;
    if (mod100 === 2) return `Dodajte vsaj ${min} oznaki`;
    if (mod100 === 3 || mod100 === 4) return `Dodajte vsaj ${min} oznake`;
    return `Dodajte vsaj ${min} oznak`;
  },
  tooManyTags: (max) => {
    const mod100 = max % 100;
    if (mod100 === 1) return `Dodajte najve\u010D ${max} oznako`;
    if (mod100 === 2) return `Dodajte najve\u010D ${max} oznaki`;
    if (mod100 === 3 || mod100 === 4) return `Dodajte najve\u010D ${max} oznake`;
    return `Dodajte najve\u010D ${max} oznak`;
  },
  underline: "Pod\u010Drtano",
  undo: "Razveljavi",
  unmute: "Vklopi zvok",
  unpin: "Odpni",
  unpinColumn: "Odpni stolpec",
  url: "URL",
  videoPlayer: "Videopredvajalnik",
  volume: "Glasnost",
  wrapTextEnd: "Slika na koncu, besedilo jo obliva",
  wrapTextStart: "Slika na za\u010Detku, besedilo jo obliva",
  year: "Leto",
  zoomIn: "Pove\u010Daj",
  zoomOut: "Pomanj\u0161aj"
};
registerTranslation(translation);
var sl_default = translation;
export {
  sl_default as default
};
