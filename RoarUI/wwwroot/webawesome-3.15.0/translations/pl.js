/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
import "../chunks/chunk.6TJ3RFTS.js";
import "../chunks/chunk.N6MLWEOM.js";
import {
  registerTranslation
} from "../chunks/chunk.HOKYDFUG.js";
import "../chunks/chunk.763SWQQU.js";

// src/translations/pl.ts
var translation = {
  $code: "pl",
  $name: "Polski",
  $dir: "ltr",
  alignCenter: "Wy\u015Brodkuj",
  alignEnd: "Wyr\xF3wnaj do ko\u0144ca",
  alignJustify: "Wyjustuj",
  alignment: "Wyr\xF3wnanie",
  alignStart: "Wyr\xF3wnaj do pocz\u0105tku",
  allTagsRemoved: "Usuni\u0119to wszystkie tagi",
  alternativeText: "Tekst alternatywny",
  am: "AM",
  apply: "Zastosuj",
  autosizeColumn: "Dopasuj szeroko\u015B\u0107 kolumny",
  blockquote: "Cytat blokowy",
  bold: "Pogrubienie",
  bulletList: "Lista punktowana",
  caption: "Podpis",
  captions: "Napisy",
  carousel: "Karuzela",
  cell: "Kom\xF3rka",
  chooseDate: "Wybierz dat\u0119",
  chooseDecade: "Wybierz dekad\u0119",
  chooseMonth: "Wybierz miesi\u0105c",
  chooseTime: "Wybierz godzin\u0119",
  chooseYear: "Wybierz rok",
  clearEntry: "Wyczy\u015B\u0107 wpis",
  clearFilter: "Wyczy\u015B\u0107 filtr",
  clearFormatting: "Wyczy\u015B\u0107 formatowanie",
  clearSort: "Wyczy\u015B\u0107 sortowanie",
  close: "Zamknij",
  closeCalendar: "Zamknij kalendarz",
  closeTimeInput: "Zamknij selektor godziny",
  code: "Kod",
  codeBlock: "Blok kodu",
  collapseRow: "Zwi\u0144 wiersz",
  colorBlue: "Niebieski",
  colorGray: "Szary",
  colorGreen: "Zielony",
  colorOrange: "Pomara\u0144czowy",
  colorPink: "R\xF3\u017Cowy",
  colorPurple: "Fioletowy",
  colorRed: "Czerwony",
  colorYellow: "\u017B\xF3\u0142ty",
  column: "Kolumna",
  columnMenu: "Opcje kolumny",
  columnMovedToPosition: (label, position, total) => `Przeniesiono ${label} na pozycj\u0119 ${position} z ${total}`,
  columns: "Kolumny",
  compactPageXOfY: (page, total) => `${page} z ${total}`,
  completed: "Uko\u0144czono",
  copied: "Skopiowane",
  copy: "Kopiuj",
  createOption: (value) => `Utw\xF3rz "${value}"`,
  currentlyPlaying: "aktualnie odtwarzane",
  currentValue: "Aktualna warto\u015B\u0107",
  date: "Data",
  datePickerKeyboardHelp: "U\u017Cyj klawiszy strza\u0142ek, aby zmieni\u0107 warto\u015Bci; naci\u015Bnij Alt+Strza\u0142ka w d\xF3\u0142, aby otworzy\u0107 kalendarz.",
  day: "Dzie\u0144",
  dayPeriod: "AM/PM",
  decrement: "Zmniejsz",
  deleteColumn: "Usu\u0144 kolumn\u0119",
  deleteRow: "Usu\u0144 wiersz",
  deleteTable: "Usu\u0144 tabel\u0119",
  deselectAllRows: "Odznacz wszystkie wiersze",
  disabled: "Wy\u0142\u0105czone",
  dropFileHere: "Drop file here or click to browse",
  dropFilesHere: "Drop files here or click to browse",
  editEmbed: "Edytuj osadzon\u0105 tre\u015B\u0107",
  editImage: "Edytuj obraz",
  editLink: "Edytuj link",
  embed: "Osadzona tre\u015B\u0107",
  embedPlaceholder: "Wklej adres URL lub kod osadzania",
  embedRemoved: "Usuni\u0119to osadzon\u0105 tre\u015B\u0107",
  embedUrl: "Adres URL osadzonej tre\u015Bci",
  empty: "Puste",
  endDate: "Data ko\u0144cowa",
  enterAtLeastNumCharacters: (min) => {
    if (min === 1) return "Wprowad\u017A co najmniej 1 znak";
    const mod10 = min % 10;
    const mod100 = min % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Wprowad\u017A co najmniej ${min} znaki`;
    return `Wprowad\u017A co najmniej ${min} znak\xF3w`;
  },
  enterFullscreen: "W\u0142\u0105cz pe\u0142ny ekran",
  enterUpToNumCharacters: (max) => {
    if (max === 1) return "Wprowad\u017A maksymalnie 1 znak";
    const mod10 = max % 10;
    const mod100 = max % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Wprowad\u017A maksymalnie ${max} znaki`;
    return `Wprowad\u017A maksymalnie ${max} znak\xF3w`;
  },
  error: "B\u0142\u0105d",
  exitFullscreen: "Wy\u0142\u0105cz pe\u0142ny ekran",
  expandRow: "Rozwi\u0144 wiersz",
  filterByColumn: (label) => `Filtruj wed\u0142ug: ${label}`,
  filterFrom: "Od",
  filterMax: "Maks.",
  filterMin: "Min.",
  filterTo: "Do",
  firstPage: "Pierwsza strona",
  formatMenu: "Wi\u0119cej formatowania",
  formatting: "Formatowanie",
  goToSlide: (slide, count) => `Przejd\u017A do slajdu ${slide} z ${count}`,
  heading: "Nag\u0142\xF3wek",
  headingLevel: (level) => `Nag\u0142\xF3wek ${level}`,
  hideColumn: "Ukryj kolumn\u0119",
  hidePassword: "Ukryj has\u0142o",
  highlight: "Wyr\xF3\u017Cnienie",
  highlightColor: "Kolor wyr\xF3\u017Cnienia",
  horizontalRule: "Linia pozioma",
  hour: "Godzina",
  image: "Obraz",
  imageRemoved: "Usuni\u0119to obraz",
  imageUrl: "Adres URL obrazu",
  incompleteDate: "Wprowad\u017A prawid\u0142ow\u0105 dat\u0119.",
  increment: "Zwi\u0119ksz",
  indent: "Zwi\u0119ksz wci\u0119cie",
  insertColumnAfter: "Wstaw kolumn\u0119 za bie\u017C\u0105c\u0105",
  insertColumnBefore: "Wstaw kolumn\u0119 przed bie\u017C\u0105c\u0105",
  insertEmbed: "Wstaw osadzon\u0105 tre\u015B\u0107",
  insertImage: "Wstaw obraz",
  insertLink: "Wstaw link",
  insertRowAbove: "Wstaw wiersz powy\u017Cej",
  insertRowBelow: "Wstaw wiersz poni\u017Cej",
  insertTable: "Wstaw tabel\u0119",
  insertTableOfSize: (rows, columns) => `Wstaw tabel\u0119 ${rows} \xD7 ${columns}`,
  italic: "Kursywa",
  jumpBackwardX: (count) => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Cofnij o ${count} strony`;
    return `Cofnij o ${count} stron`;
  },
  jumpForwardX: (count) => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Przejd\u017A o ${count} strony do przodu`;
    return `Przejd\u017A o ${count} stron do przodu`;
  },
  keyAlt: "Alt",
  keyCtrl: "Ctrl",
  keyShift: "Shift",
  lastPage: "Ostatnia strona",
  lightbox: "Lightbox",
  link: "Link",
  linkRemoved: "Usuni\u0119to link",
  linkUrl: "Adres URL linku",
  lists: "Listy",
  loading: "\u0141adowanie",
  locked: "Zablokowano",
  mediaLoadError: "Nie uda\u0142o si\u0119 wczyta\u0107 multimedi\xF3w",
  mergeCells: "Scal kom\xF3rki",
  minute: "Minuta",
  month: "Miesi\u0105c",
  moreOptions: "Wi\u0119cej opcji",
  moveColumnAfter: "Przesu\u0144 kolumn\u0119 do przodu",
  moveColumnBefore: "Przesu\u0144 kolumn\u0119 do ty\u0142u",
  moveRowDown: "Przesu\u0144 wiersz w d\xF3\u0142",
  moveRowUp: "Przesu\u0144 wiersz w g\xF3r\u0119",
  mute: "Wycisz",
  nextDecade: "Nast\u0119pna dekada",
  nextMonth: "Nast\u0119pny miesi\u0105c",
  nextPage: "Nast\u0119pna strona",
  nextSlide: "Nast\u0119pny slajd",
  nextVideo: "Nast\u0119pny film",
  nextYear: "Nast\u0119pny rok",
  noData: "Brak danych",
  noOptions: "Brak opcji",
  noResults: "Brak pasuj\u0105cych wynik\xF3w",
  noSuggestions: "Brak sugestii",
  notCompleted: "Nieuko\u0144czono",
  now: "Teraz",
  numCharacters: (num) => {
    if (num === 1) return "1 znak";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `${num} znaki`;
    return `${num} znak\xF3w`;
  },
  numCharactersRemaining: (num) => {
    if (num === 1) return "Pozosta\u0142 1 znak";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Pozosta\u0142y ${num} znaki`;
    return `Pozosta\u0142o ${num} znak\xF3w`;
  },
  numOptionsAvailable: (num) => {
    if (num === 0) return "Brak dost\u0119pnych opcji";
    if (num === 1) return "Dost\u0119pna 1 opcja";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Dost\u0119pne ${num} opcje`;
    return `Dost\u0119pnych ${num} opcji`;
  },
  numOptionsSelected: (num) => {
    if (num === 0) return "Nie wybrano opcji";
    if (num === 1) return "Wybrano 1\xA0opcj\u0119";
    return `Wybrano ${num} opcje`;
  },
  numRowsCopied: (num) => {
    if (num === 1) return "Skopiowano 1 wiersz";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Skopiowano ${num} wiersze`;
    return `Skopiowano ${num} wierszy`;
  },
  numRowsSelected: (num) => {
    if (num === 1) return "Wybrano 1 wiersz";
    const mod10 = num % 10;
    const mod100 = num % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Wybrano ${num} wiersze`;
    return `Wybrano ${num} wierszy`;
  },
  openInNewTab: "Otw\xF3rz w nowej karcie",
  openLink: "Otw\xF3rz link",
  optionPosition: (label, position, total) => `${label}, ${position} z ${total}`,
  optionsLoadError: "Nie uda\u0142o si\u0119 wczyta\u0107 opcji",
  orderedList: "Lista numerowana",
  outdent: "Zmniejsz wci\u0119cie",
  pageXOfY: (page, total) => `Strona ${page} z ${total}`,
  pagination: "Paginacja",
  paragraph: "Akapit",
  pasteAsPlainText: "Wklej jako zwyk\u0142y tekst",
  pause: "Wstrzymaj",
  pauseAnimation: "Wstrzymaj animacj\u0119",
  pictureInPicture: "Obraz w obrazie",
  pinLeft: "Przypnij do lewej",
  pinRight: "Przypnij do prawej",
  play: "Odtw\xF3rz",
  playAnimation: "Odtw\xF3rz animacj\u0119",
  playbackSpeed: "Pr\u0119dko\u015B\u0107 odtwarzania",
  playlist: "Lista odtwarzania",
  pm: "PM",
  previousDecade: "Poprzednia dekada",
  previousMonth: "Poprzedni miesi\u0105c",
  previousPage: "Poprzednia strona",
  previousSlide: "Poprzedni slajd",
  previousVideo: "Poprzedni film",
  previousYear: "Poprzedni rok",
  progress: "Post\u0119p",
  rangeTooLong: (max) => {
    if (max === 1) return "Wybierz zakres nie d\u0142u\u017Cszy ni\u017C 1 dzie\u0144";
    const mod10 = max % 10;
    const mod100 = max % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Wybierz zakres nie d\u0142u\u017Cszy ni\u017C ${max} dni`;
    return `Wybierz zakres nie d\u0142u\u017Cszy ni\u017C ${max} dni`;
  },
  rangeTooShort: (min) => {
    if (min === 1) return "Wybierz zakres o d\u0142ugo\u015Bci co najmniej 1 dnia";
    const mod10 = min % 10;
    const mod100 = min % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14))
      return `Wybierz zakres o d\u0142ugo\u015Bci co najmniej ${min} dni`;
    return `Wybierz zakres o d\u0142ugo\u015Bci co najmniej ${min} dni`;
  },
  readonly: "Tylko do odczytu",
  redo: "Pon\xF3w",
  remove: "Usun\u0105\u0107",
  removeLink: "Usu\u0144 link",
  resetColumns: "Resetuj kolumny",
  resize: "Zmie\u0144 rozmiar",
  resizeColumn: "Zmie\u0144 szeroko\u015B\u0107 kolumny",
  row: "Wiersz",
  rowsAndColumns: (rows, columns) => {
    const plural = (n, one, few, many) => {
      if (n === 1) return `${n} ${one}`;
      const mod10 = n % 10;
      const mod100 = n % 100;
      if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `${n} ${few}`;
      return `${n} ${many}`;
    };
    return `${plural(rows, "wiersz", "wiersze", "wierszy")}, ${plural(columns, "kolumna", "kolumny", "kolumn")}`;
  },
  rowsPerPage: "Wierszy na stron\u0119",
  scrollableRegion: "Obszar przewijalny",
  scrollToEnd: "Przewi\u0144 do ko\u0144ca",
  scrollToStart: "Przewi\u0144 do pocz\u0105tku",
  search: "Szukaj",
  second: "Sekunda",
  seek: "Szukaj",
  seekProgress: (current, duration) => `${current} z ${duration}`,
  selectAColorFromTheScreen: "Pr\xF3bkuj z ekranu",
  selectAllRows: "Zaznacz wszystkie wiersze",
  selectCell: "Zaznacz kom\xF3rk\u0119",
  selected: "Wybrano",
  selectedDateLabel: (date) => `Wybrano: ${date}`,
  selectedRangeLabel: (range) => `Wybrany zakres: ${range}`,
  selectGroup: "Zaznacz grup\u0119",
  selectionCleared: "Wyczyszczono wyb\xF3r",
  selectRow: "Zaznacz wiersz",
  selectTable: "Zaznacz tabel\u0119",
  showingNofMRows: (shown, total) => `Wy\u015Bwietlono ${shown} z ${total} wierszy`,
  showingXtoYofZ: (start, end, total) => `${start}\u2013${end} z ${total}`,
  showPassword: "Poka\u017C has\u0142o",
  slideNum: (slide) => `Slajd ${slide}`,
  sortAscending: "Sortuj rosn\u0105co",
  sortColumn: "Sortuj kolumn\u0119",
  sortDescending: "Sortuj malej\u0105co",
  splitCell: "Podziel kom\xF3rk\u0119",
  startDate: "Data pocz\u0105tkowa",
  steps: "Kroki",
  stepXOfY: (step, total) => `Krok ${step} z ${total}`,
  strikethrough: "Przekre\u015Blenie",
  subscript: "Indeks dolny",
  suggestions: "Sugestie",
  suggestionsAvailable: (count) => {
    if (count === 1) return "Dost\u0119pna 1 sugestia";
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Dost\u0119pne ${count} sugestie`;
    return `Dost\u0119pnych ${count} sugestii`;
  },
  suggestionsLoadError: "Nie uda\u0142o si\u0119 wczyta\u0107 sugestii",
  superscript: "Indeks g\xF3rny",
  tableInserted: "Wstawiono tabel\u0119",
  tableOptions: "Opcje tabeli",
  tableSize: "Rozmiar tabeli",
  tagAdded: (tag) => `Dodano ${tag}`,
  tagAlreadyAdded: (tag) => `Tag ${tag} ju\u017C istnieje`,
  tagInputKeyboardHelp: "Naci\u015Bnij Backspace lub Delete, aby usun\u0105\u0107 ten tag.",
  tagRemoved: (tag) => `Usuni\u0119to ${tag}`,
  textColor: "Kolor tekstu",
  textStyle: "Styl tekstu",
  time: "Godzina",
  timeInputKeyboardHelp: "U\u017Cyj klawiszy strza\u0142ek, aby zmieni\u0107 warto\u015Bci; naci\u015Bnij Alt+Strza\u0142ka w d\xF3\u0142, aby otworzy\u0107 selektor godziny.",
  title: "Tytu\u0142",
  today: "Dzisiaj",
  toggleColorFormat: "Prze\u0142\u0105cz format",
  toggleHeaderColumn: "Kolumna nag\u0142\xF3wka",
  toggleHeaderRow: "Wiersz nag\u0142\xF3wka",
  tooFewTags: (min) => {
    if (min === 1) return "Dodaj co najmniej 1 tag";
    const mod10 = min % 10;
    const mod100 = min % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Dodaj co najmniej ${min} tagi`;
    return `Dodaj co najmniej ${min} tag\xF3w`;
  },
  tooManyTags: (max) => {
    if (max === 1) return "Dodaj nie wi\u0119cej ni\u017C 1 tag";
    const mod10 = max % 10;
    const mod100 = max % 100;
    if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return `Dodaj nie wi\u0119cej ni\u017C ${max} tagi`;
    return `Dodaj nie wi\u0119cej ni\u017C ${max} tag\xF3w`;
  },
  underline: "Podkre\u015Blenie",
  undo: "Cofnij",
  unmute: "W\u0142\u0105cz d\u017Awi\u0119k",
  unpin: "Odepnij",
  unpinColumn: "Odepnij kolumn\u0119",
  url: "Adres URL",
  videoPlayer: "Odtwarzacz wideo",
  volume: "G\u0142o\u015Bno\u015B\u0107",
  wrapTextEnd: "Obraz na ko\u0144cu, tekst go op\u0142ywa",
  wrapTextStart: "Obraz na pocz\u0105tku, tekst go op\u0142ywa",
  year: "Rok",
  zoomIn: "Powi\u0119ksz",
  zoomOut: "Pomniejsz"
};
registerTranslation(translation);
var pl_default = translation;
export {
  pl_default as default
};
