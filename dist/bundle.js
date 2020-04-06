/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.scss":
/*!**************************!*\
  !*** ./src/content.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/enKeyboard.json":
/*!*****************************!*\
  !*** ./src/enKeyboard.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"key\":\"`\",\"upKey\":\"~\",\"code\":\"Backquote\"},{\"key\":\"1\",\"upKey\":\"!\",\"code\":\"Digit1\"},{\"key\":\"2\",\"upKey\":\"@\",\"code\":\"Digit2\"},{\"key\":\"3\",\"upKey\":\"#\",\"code\":\"Digit3\"},{\"key\":\"4\",\"upKey\":\"$\",\"code\":\"Digit4\"},{\"key\":\"5\",\"upKey\":\"%\",\"code\":\"Digit5\"},{\"key\":\"6\",\"upKey\":\"^\",\"code\":\"Digit6\"},{\"key\":\"7\",\"upKey\":\"&\",\"code\":\"Digit7\"},{\"key\":\"8\",\"upKey\":\"*\",\"code\":\"Digit8\"},{\"key\":\"9\",\"upKey\":\"(\",\"code\":\"Digit9\"},{\"key\":\"0\",\"upKey\":\")\",\"code\":\"Digit0\"},{\"key\":\"-\",\"upKey\":\"_\",\"code\":\"Minus\"},{\"key\":\"=\",\"upKey\":\"+\",\"code\":\"Equal\"},{\"key\":\"&larr;\",\"code\":\"Backspace\",\"speсification\":\"functional\"}],[{\"key\":\"Tab\",\"code\":\"Tab\",\"speсification\":\"functional\"},{\"key\":\"q\",\"code\":\"KeyQ\",\"speсification\":\"letter\"},{\"key\":\"w\",\"code\":\"KeyW\",\"speсification\":\"letter\"},{\"key\":\"e\",\"code\":\"KeyE\",\"speсification\":\"letter\"},{\"key\":\"r\",\"code\":\"KeyR\",\"speсification\":\"letter\"},{\"key\":\"t\",\"code\":\"KeyT\",\"speсification\":\"letter\"},{\"key\":\"y\",\"code\":\"KeyY\",\"speсification\":\"letter\"},{\"key\":\"u\",\"code\":\"KeyU\",\"speсification\":\"letter\"},{\"key\":\"i\",\"code\":\"KeyI\",\"speсification\":\"letter\"},{\"key\":\"o\",\"code\":\"KeyO\",\"speсification\":\"letter\"},{\"key\":\"p\",\"code\":\"KeyP\",\"speсification\":\"letter\"},{\"key\":\"[\",\"upKey\":\"{\",\"code\":\"BracketLeft\"},{\"key\":\"]\",\"upKey\":\"}\",\"code\":\"BracketRight\"},{\"key\":\"\\\\\",\"upKey\":\"|\",\"code\":\"Backslash\"},{\"key\":\"Del\",\"code\":\"Delete\",\"speсification\":\"functional\"}],[{\"key\":\"Caps\",\"code\":\"CapsLock\",\"speсification\":\"functional\"},{\"key\":\"a\",\"code\":\"KeyA\",\"speсification\":\"letter\"},{\"key\":\"s\",\"code\":\"KeyS\",\"speсification\":\"letter\"},{\"key\":\"d\",\"code\":\"KeyD\",\"speсification\":\"letter\"},{\"key\":\"f\",\"code\":\"KeyF\",\"speсification\":\"letter\"},{\"key\":\"g\",\"code\":\"KeyG\",\"speсification\":\"letter\"},{\"key\":\"h\",\"code\":\"KeyH\",\"speсification\":\"letter\"},{\"key\":\"j\",\"code\":\"KeyJ\",\"speсification\":\"letter\"},{\"key\":\"k\",\"code\":\"KeyK\",\"speсification\":\"letter\"},{\"key\":\"l\",\"code\":\"KeyL\",\"speсification\":\"letter\"},{\"key\":\";\",\"upKey\":\":\",\"code\":\"Semicolon\"},{\"key\":\"'\",\"upKey\":\"\\\"\",\"code\":\"IntlBackslash\"},{\"key\":\"&crarr;\",\"code\":\"Enter\",\"speсification\":\"functional\"}],[{\"key\":\"Shift\",\"code\":\"ShiftLeft\",\"speсification\":\"functional\"},{\"key\":\"z\",\"code\":\"KeyZ\",\"speсification\":\"letter\"},{\"key\":\"x\",\"code\":\"KeyX\",\"speсification\":\"letter\"},{\"key\":\"c\",\"code\":\"KeyC\",\"speсification\":\"letter\"},{\"key\":\"v\",\"code\":\"KeyV\",\"speсification\":\"letter\"},{\"key\":\"b\",\"code\":\"KeyB\",\"speсification\":\"letter\"},{\"key\":\"n\",\"code\":\"KeyN\",\"speсification\":\"letter\"},{\"key\":\"m\",\"code\":\"KeyM\",\"speсification\":\"letter\"},{\"key\":\",\",\"upKey\":\"<\",\"code\":\"Comma\"},{\"key\":\".\",\"upKey\":\">\",\"code\":\"Period\"},{\"key\":\"/\",\"upKey\":\"?\",\"code\":\"Slash\"},{\"key\":\"▲\",\"code\":\"ArrowUp\",\"speсification\":\"functional\"},{\"key\":\"Shift\",\"code\":\"ShiftRight\",\"speсification\":\"functional\"}],[{\"key\":\"Ctrl\",\"code\":\"ControlLeft\",\"speсification\":\"functional\"},{\"key\":\"EN\",\"code\":\"ChangeLang\",\"speсification\":\"functional\"},{\"key\":\"Alt\",\"code\":\"AltLeft\",\"speсification\":\"functional\"},{\"key\":\" \",\"upKey\":\" \",\"code\":\"Space\"},{\"key\":\"Alt\",\"code\":\"AltRight\",\"speсification\":\"functional\"},{\"key\":\"◄\",\"code\":\"ArrowLeft\",\"speсification\":\"functional\"},{\"key\":\"▼\",\"code\":\"ArrowDown\",\"speсification\":\"functional\"},{\"key\":\"►\",\"code\":\"ArrowRight\",\"speсification\":\"functional\"},{\"key\":\"Ctrl\",\"code\":\"ControlRight\",\"speсification\":\"functional\"}]]");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keyboard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.scss */ "./src/keyboard.scss");
/* harmony import */ var _keyboard_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keyboard_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keyboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.scss */ "./src/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_2__);





/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let lang = localStorage.getItem('userLanguage') || 'en';

const enKeyboard = __webpack_require__(/*! ./enKeyboard.json */ "./src/enKeyboard.json");
const ruKeyboard = __webpack_require__(/*! ./ruKeyboard.json */ "./src/ruKeyboard.json");

const body = document.querySelector('body');


let upperCase = false;
let shiftOn = false;
let cursorIndex = 0;

const content = document.createElement('div');
content.classList.add('content');
const h1 = document.createElement('h1');
content.append(h1);
h1.innerHTML = 'RSS Virtual keyboard';
body.append(content);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
content.append(textarea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
content.append(keyboard);

const os = document.createElement('div');
os.classList.add('os');
content.append(os);
os.innerHTML = 'Клавиатура создана в операционной системе Windows';
const switchLang = document.createElement('div');
switchLang.classList.add('switchLang');
content.append(switchLang);
switchLang.innerHTML = 'Для переключения языка используйте комбинацию ctrl+alt'
+ ' (для физической клавиатуры) или клавишу EN/RU (для виртуальной клавиатуры)';

textarea.addEventListener('click', () => { cursorIndex = textarea.selectionEnd; });

enKeyboard.forEach((row) => {
  const rowNode = document.createElement('div');
  rowNode.classList.add('keyboard__row');
  keyboard.append(rowNode);
  row.forEach((keyObj) => {
    const keyNode = document.createElement('div');
    keyNode.classList.add('keyboard__key');
    keyNode.id = keyObj.code;
    rowNode.append(keyNode);
    keyNode.enBoard = keyObj;
    keyNode.innerHTML = keyNode.enBoard.key;
    if (keyNode.enBoard.speсification === 'functional') {
      keyNode.classList.add('functional');
    }
  });
});

ruKeyboard.forEach((row) => {
  row.forEach((keyObj) => {
    const keyNode = document.getElementById(keyObj.code);
    keyNode.ruBoard = keyObj;
  });
});
function changeCase() {
  const allKeys = Array.from(document.querySelectorAll('.keyboard__key'));
  if (lang === 'en') {
    allKeys.forEach((key) => {
      if (key.enBoard.speсification === 'letter') {
        if (upperCase) {
          key.innerHTML = key.innerHTML.toLowerCase();
        } else {
          key.innerHTML = key.innerHTML.toUpperCase();
        }
      }
    });
  }
  if (lang === 'ru') {
    allKeys.forEach((key) => {
      if (key.ruBoard.speсification === 'letter') {
        if (upperCase) {
          key.innerHTML = key.innerHTML.toLowerCase();
        } else {
          key.innerHTML = key.innerHTML.toUpperCase();
        }
      }
    });
  }
  upperCase = !upperCase;
}
function changeShift() {
  changeCase();
  const allKeys = Array.from(document.querySelectorAll('.keyboard__key'));
  allKeys.forEach((key) => {
    if (lang === 'en') {
      if (!key.enBoard.speсification) {
        if (shiftOn) {
          key.innerHTML = key.enBoard.key;
        } else {
          key.innerHTML = key.enBoard.upKey;
        }
      }
      return;
    }
    if (lang === 'ru') {
      if (!key.ruBoard.speсification) {
        if (shiftOn) {
          key.innerHTML = key.ruBoard.key;
        } else {
          key.innerHTML = key.ruBoard.upKey;
        }
      }
    }
  });
  shiftOn = !shiftOn;
}

function changeLanguage() {
  const allKeys = Array.from(document.querySelectorAll('.keyboard__key'));
  if (lang === 'en') {
    allKeys.forEach((key) => {
      key.innerHTML = key.ruBoard.key;
    });
    lang = 'ru';
    localStorage.setItem('userLanguage', lang);
    if (upperCase) {
      upperCase = false;
      changeCase();
    }
    if (shiftOn) {
      shiftOn = false;
      changeShift();
      changeCase();
    }
    return;
  }
  if (lang === 'ru') {
    allKeys.forEach((key) => {
      key.innerHTML = key.enBoard.key;
    });
    lang = 'en';
    localStorage.setItem('userLanguage', lang);
    if (upperCase) {
      upperCase = false;
      changeCase();
    }
    if (shiftOn) {
      shiftOn = false;
      changeShift();
      changeCase();
    }
  }
}

if (lang === 'ru') {
  lang = 'en';
  changeLanguage();
}

function insertChar(simbol) {
  const arr = textarea.value.split('');
  arr.splice(cursorIndex, 0, simbol);
  textarea.value = arr.join('');
  cursorIndex += 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
}

keyboard.addEventListener('mousedown', (event) => {
  if (!event.target.classList.contains('keyboard__key')) { return; }
  if (event.target.id === 'CapsLock') { return; }
  event.target.classList.add('active');
  if (event.target.enBoard.speсification === 'functional') { return; }
  insertChar(event.target.innerHTML);
});

keyboard.addEventListener('mouseup', (event) => {
  if (!event.target.classList.contains('keyboard__key')) { return; }
  if (event.target.id === 'CapsLock') { return; }
  event.target.classList.remove('active');
  if (event.target.enBoard.speсification === 'functional') { return; }
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});


const changeLangKey = document.getElementById('ChangeLang');
changeLangKey.addEventListener('click', changeLanguage);


const capslockKey = document.getElementById('CapsLock');
capslockKey.addEventListener('click', () => {
  if (capslockKey.classList.contains('active')) {
    capslockKey.classList.remove('active');
  } else {
    capslockKey.classList.add('active');
  }
  changeCase();
});


const tabKey = document.getElementById('Tab');
tabKey.addEventListener('click', () => {
  insertChar('\t');
});

const backspaceKey = document.getElementById('Backspace');
backspaceKey.addEventListener('click', () => {
  const arr = textarea.value.split('');
  arr.splice(cursorIndex - 1, 1);
  textarea.value = arr.join('');
  cursorIndex = cursorIndex <= 0? 0: cursorIndex - 1;
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});

const enterKey = document.getElementById('Enter');
enterKey.addEventListener('click', () => {
  insertChar('\n');
});

const arrowUpKey = document.getElementById('ArrowUp');
arrowUpKey.addEventListener('click', () => {
  insertChar('▲');
});
const arrowLeftKey = document.getElementById('ArrowLeft');
arrowLeftKey.addEventListener('click', () => {
  insertChar('◄');
});
const arroDownKey = document.getElementById('ArrowDown');
arroDownKey.addEventListener('click', () => {
  insertChar('▼');
});
const arrowRightKey = document.getElementById('ArrowRight');
arrowRightKey.addEventListener('click', () => {
  insertChar('►');
});

const shiftLeftKey = document.getElementById('ShiftLeft');
shiftLeftKey.addEventListener('click', changeShift);
const shiftRightKey = document.getElementById('ShiftRight');
shiftRightKey.addEventListener('click', changeShift);


const deleteKey = document.getElementById('Delete');
deleteKey.addEventListener('click', () => {
  const arr = textarea.value.split('');
  arr.splice(cursorIndex, 1);
  textarea.value = arr.join('');
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});


document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const activeKey = document.getElementById(event.code);
  if (event.code === 'CapsLock') {
    if (capslockKey.classList.contains('active')) {
      capslockKey.classList.remove('active');
    } else {
      capslockKey.classList.add('active');
    }
    changeCase();
    return;
  }

  if (activeKey) {
    activeKey.classList.add('active');
  } else {
    return;
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    changeShift();
    return;
  }

  if (event.code === 'Backspace') {
    const arr = textarea.value.split('');
    arr.splice(cursorIndex - 1, 1);
    textarea.value = arr.join('');
    cursorIndex = cursorIndex <= 0? 0: cursorIndex - 1;
    textarea.selectionEnd = cursorIndex;
    return;
  }

  if (event.code === 'Delete') {
    const arr = textarea.value.split('');
    arr.splice(cursorIndex, 1);
    textarea.value = arr.join('');
    textarea.selectionEnd = cursorIndex;
    return;
  }

  if (event.code === 'Enter') {
    insertChar('\n');
    return;
  }

  if (event.code === 'Tab') {
    insertChar('\t');
    return;
  }

  if (event.code === 'ControlLeft'
  || event.code === 'ControlRight'
  || event.code === 'AltLeft'
  || event.code === 'AltRight'
  ) {
    textarea.focus();
    textarea.selectionEnd = cursorIndex;
    return;
  }


  insertChar(activeKey.innerHTML);
  textarea.selectionEnd = cursorIndex;
});


document.addEventListener('keyup', (event) => {
  const activeKey = document.getElementById(event.code);
  if (event.code === 'CapsLock') { return; }
  if (activeKey) {
    activeKey.classList.remove('active');
  } else {
    return;
  }

  if (event.code === 'ShiftLeft'
    || event.code === 'ShiftRight'
  ) {
    changeShift();
    return;
  }

  if (event.code === 'ControlLeft'
  || event.code === 'ControlRight'
  || event.code === 'AltLeft'
  || event.code === 'AltRight'
  ) {
    event.preventDefault();
  }
});


function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', () => {
    pressed.add(window.event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', () => {
    pressed.delete(window.event.code);
  });
}

runOnKeys(() => { changeLanguage(); }, 'ControlLeft', 'AltLeft');
runOnKeys(() => { changeLanguage(); }, 'ControlRight', 'AltRight');


/***/ }),

/***/ "./src/keyboard.scss":
/*!***************************!*\
  !*** ./src/keyboard.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ruKeyboard.json":
/*!*****************************!*\
  !*** ./src/ruKeyboard.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"key\":\"ё\",\"code\":\"Backquote\",\"speсification\":\"letter\"},{\"key\":\"1\",\"upKey\":\"!\",\"code\":\"Digit1\"},{\"key\":\"2\",\"upKey\":\"\\\"\",\"code\":\"Digit2\"},{\"key\":\"3\",\"upKey\":\"№\",\"code\":\"Digit3\"},{\"key\":\"4\",\"upKey\":\";\",\"code\":\"Digit4\"},{\"key\":\"5\",\"upKey\":\"%\",\"code\":\"Digit5\"},{\"key\":\"6\",\"upKey\":\":\",\"code\":\"Digit6\"},{\"key\":\"7\",\"upKey\":\"?\",\"code\":\"Digit7\"},{\"key\":\"8\",\"upKey\":\"*\",\"code\":\"Digit8\"},{\"key\":\"9\",\"upKey\":\"(\",\"code\":\"Digit9\"},{\"key\":\"0\",\"upKey\":\")\",\"code\":\"Digit0\"},{\"key\":\"-\",\"upKey\":\"_\",\"code\":\"Minus\"},{\"key\":\"=\",\"upKey\":\"+\",\"code\":\"Equal\"},{\"key\":\"&larr;\",\"code\":\"Backspace\",\"speсification\":\"functional\"}],[{\"key\":\"Tab\",\"code\":\"Tab\",\"speсification\":\"functional\"},{\"key\":\"й\",\"code\":\"KeyQ\",\"speсification\":\"letter\"},{\"key\":\"ц\",\"code\":\"KeyW\",\"speсification\":\"letter\"},{\"key\":\"у\",\"code\":\"KeyE\",\"speсification\":\"letter\"},{\"key\":\"к\",\"code\":\"KeyR\",\"speсification\":\"letter\"},{\"key\":\"е\",\"code\":\"KeyT\",\"speсification\":\"letter\"},{\"key\":\"н\",\"code\":\"KeyY\",\"speсification\":\"letter\"},{\"key\":\"г\",\"code\":\"KeyU\",\"speсification\":\"letter\"},{\"key\":\"ш\",\"code\":\"KeyI\",\"speсification\":\"letter\"},{\"key\":\"щ\",\"code\":\"KeyO\",\"speсification\":\"letter\"},{\"key\":\"з\",\"code\":\"KeyP\",\"speсification\":\"letter\"},{\"key\":\"х\",\"code\":\"BracketLeft\",\"speсification\":\"letter\"},{\"key\":\"ъ\",\"code\":\"BracketRight\",\"speсification\":\"letter\"},{\"key\":\"\\\\\",\"upKey\":\"/\",\"code\":\"Backslash\"},{\"key\":\"Del\",\"code\":\"Delete\",\"speсification\":\"functional\"}],[{\"key\":\"Caps\",\"code\":\"CapsLock\",\"speсification\":\"functional\"},{\"key\":\"ф\",\"code\":\"KeyA\",\"speсification\":\"letter\"},{\"key\":\"ы\",\"code\":\"KeyS\",\"speсification\":\"letter\"},{\"key\":\"в\",\"code\":\"KeyD\",\"speсification\":\"letter\"},{\"key\":\"а\",\"code\":\"KeyF\",\"speсification\":\"letter\"},{\"key\":\"п\",\"code\":\"KeyG\",\"speсification\":\"letter\"},{\"key\":\"р\",\"code\":\"KeyH\",\"speсification\":\"letter\"},{\"key\":\"о\",\"code\":\"KeyJ\",\"speсification\":\"letter\"},{\"key\":\"л\",\"code\":\"KeyK\",\"speсification\":\"letter\"},{\"key\":\"д\",\"code\":\"KeyL\",\"speсification\":\"letter\"},{\"key\":\"ж\",\"upKey\":\":\",\"code\":\"Semicolon\",\"speсification\":\"letter\"},{\"key\":\"э\",\"code\":\"IntlBackslash\",\"speсification\":\"letter\"},{\"key\":\"&crarr;\",\"code\":\"Enter\",\"speсification\":\"functional\"}],[{\"key\":\"Shift\",\"code\":\"ShiftLeft\",\"speсification\":\"functional\"},{\"key\":\"я\",\"code\":\"KeyZ\",\"speсification\":\"letter\"},{\"key\":\"ч\",\"code\":\"KeyX\",\"speсification\":\"letter\"},{\"key\":\"с\",\"code\":\"KeyC\",\"speсification\":\"letter\"},{\"key\":\"м\",\"code\":\"KeyV\",\"speсification\":\"letter\"},{\"key\":\"и\",\"code\":\"KeyB\",\"speсification\":\"letter\"},{\"key\":\"т\",\"code\":\"KeyN\",\"speсification\":\"letter\"},{\"key\":\"ь\",\"code\":\"KeyM\",\"speсification\":\"letter\"},{\"key\":\"б\",\"code\":\"Comma\",\"speсification\":\"letter\"},{\"key\":\"ю\",\"code\":\"Period\",\"speсification\":\"letter\"},{\"key\":\".\",\"upKey\":\",\",\"code\":\"Slash\"},{\"key\":\"▲\",\"code\":\"ArrowUp\",\"speсification\":\"functional\"},{\"key\":\"Shift\",\"code\":\"ShiftRight\",\"speсification\":\"functional\"}],[{\"key\":\"Ctrl\",\"code\":\"ControlLeft\",\"speсification\":\"functional\"},{\"key\":\"RU\",\"code\":\"ChangeLang\",\"speсification\":\"functional\"},{\"key\":\"Alt\",\"code\":\"AltLeft\",\"speсification\":\"functional\"},{\"key\":\" \",\"upKey\":\" \",\"code\":\"Space\"},{\"key\":\"Alt\",\"code\":\"AltRight\",\"speсification\":\"functional\"},{\"key\":\"◄\",\"code\":\"ArrowLeft\",\"speсification\":\"functional\"},{\"key\":\"▼\",\"code\":\"ArrowDown\",\"speсification\":\"functional\"},{\"key\":\"►\",\"code\":\"ArrowRight\",\"speсification\":\"functional\"},{\"key\":\"Ctrl\",\"code\":\"ControlRight\",\"speсification\":\"functional\"}]]");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuc2Nzcz85ZmRiIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLnNjc3M/NTdkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDTDtBQUNJOzs7Ozs7Ozs7Ozs7QUNGeEI7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsZ0RBQW1CO0FBQzlDLG1CQUFtQixtQkFBTyxDQUFDLGdEQUFtQjs7QUFFOUM7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUNBQXFDLEVBQUU7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQsUUFBUTtBQUNsRSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBLDREQUE0RCxRQUFRO0FBQ3BFO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDBEQUEwRCxRQUFRO0FBQ2xFLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0EsNERBQTRELFFBQVE7QUFDcEU7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsa0JBQWtCLEVBQUU7QUFDckMsaUJBQWlCLGtCQUFrQixFQUFFOzs7Ozs7Ozs7Ozs7QUMzV3JDLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2tleWJvYXJkLnNjc3MnO1xyXG5pbXBvcnQgJy4va2V5Ym9hcmQnO1xyXG5pbXBvcnQgJy4vY29udGVudC5zY3NzJztcclxuIiwibGV0IGxhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckxhbmd1YWdlJykgfHwgJ2VuJztcclxuXHJcbmNvbnN0IGVuS2V5Ym9hcmQgPSByZXF1aXJlKCcuL2VuS2V5Ym9hcmQuanNvbicpO1xyXG5jb25zdCBydUtleWJvYXJkID0gcmVxdWlyZSgnLi9ydUtleWJvYXJkLmpzb24nKTtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5cclxubGV0IHVwcGVyQ2FzZSA9IGZhbHNlO1xyXG5sZXQgc2hpZnRPbiA9IGZhbHNlO1xyXG5sZXQgY3Vyc29ySW5kZXggPSAwO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5jb250ZW50LmFwcGVuZChoMSk7XHJcbmgxLmlubmVySFRNTCA9ICdSU1MgVmlydHVhbCBrZXlib2FyZCc7XHJcbmJvZHkuYXBwZW5kKGNvbnRlbnQpO1xyXG5cclxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG50ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYScpO1xyXG5jb250ZW50LmFwcGVuZCh0ZXh0YXJlYSk7XHJcbmNvbnN0IGtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmtleWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJyk7XHJcbmNvbnRlbnQuYXBwZW5kKGtleWJvYXJkKTtcclxuXHJcbmNvbnN0IG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm9zLmNsYXNzTGlzdC5hZGQoJ29zJyk7XHJcbmNvbnRlbnQuYXBwZW5kKG9zKTtcclxub3MuaW5uZXJIVE1MID0gJ9Ca0LvQsNCy0LjQsNGC0YPRgNCwINGB0L7Qt9C00LDQvdCwINCyINC+0L/QtdGA0LDRhtC40L7QvdC90L7QuSDRgdC40YHRgtC10LzQtSBXaW5kb3dzJztcclxuY29uc3Qgc3dpdGNoTGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zd2l0Y2hMYW5nLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaExhbmcnKTtcclxuY29udGVudC5hcHBlbmQoc3dpdGNoTGFuZyk7XHJcbnN3aXRjaExhbmcuaW5uZXJIVE1MID0gJ9CU0LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INC60L7QvNCx0LjQvdCw0YbQuNGOIGN0cmwrYWx0J1xyXG4rICcgKNC00LvRjyDRhNC40LfQuNGH0LXRgdC60L7QuSDQutC70LDQstC40LDRgtGD0YDRiykg0LjQu9C4INC60LvQsNCy0LjRiNGDIEVOL1JVICjQtNC70Y8g0LLQuNGA0YLRg9Cw0LvRjNC90L7QuSDQutC70LDQstC40LDRgtGD0YDRiyknO1xyXG5cclxudGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGN1cnNvckluZGV4ID0gdGV4dGFyZWEuc2VsZWN0aW9uRW5kOyB9KTtcclxuXHJcbmVuS2V5Ym9hcmQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgY29uc3Qgcm93Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvd05vZGUuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX3JvdycpO1xyXG4gIGtleWJvYXJkLmFwcGVuZChyb3dOb2RlKTtcclxuICByb3cuZm9yRWFjaCgoa2V5T2JqKSA9PiB7XHJcbiAgICBjb25zdCBrZXlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBrZXlOb2RlLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19rZXknKTtcclxuICAgIGtleU5vZGUuaWQgPSBrZXlPYmouY29kZTtcclxuICAgIHJvd05vZGUuYXBwZW5kKGtleU5vZGUpO1xyXG4gICAga2V5Tm9kZS5lbkJvYXJkID0ga2V5T2JqO1xyXG4gICAga2V5Tm9kZS5pbm5lckhUTUwgPSBrZXlOb2RlLmVuQm9hcmQua2V5O1xyXG4gICAgaWYgKGtleU5vZGUuZW5Cb2FyZC5zcGXRgWlmaWNhdGlvbiA9PT0gJ2Z1bmN0aW9uYWwnKSB7XHJcbiAgICAgIGtleU5vZGUuY2xhc3NMaXN0LmFkZCgnZnVuY3Rpb25hbCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbnJ1S2V5Ym9hcmQuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgcm93LmZvckVhY2goKGtleU9iaikgPT4ge1xyXG4gICAgY29uc3Qga2V5Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleU9iai5jb2RlKTtcclxuICAgIGtleU5vZGUucnVCb2FyZCA9IGtleU9iajtcclxuICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIGNoYW5nZUNhc2UoKSB7XHJcbiAgY29uc3QgYWxsS2V5cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleWJvYXJkX19rZXknKSk7XHJcbiAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgIGFsbEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChrZXkuZW5Cb2FyZC5zcGXRgWlmaWNhdGlvbiA9PT0gJ2xldHRlcicpIHtcclxuICAgICAgICBpZiAodXBwZXJDYXNlKSB7XHJcbiAgICAgICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmlubmVySFRNTC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChsYW5nID09PSAncnUnKSB7XHJcbiAgICBhbGxLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBpZiAoa2V5LnJ1Qm9hcmQuc3Bl0YFpZmljYXRpb24gPT09ICdsZXR0ZXInKSB7XHJcbiAgICAgICAgaWYgKHVwcGVyQ2FzZSkge1xyXG4gICAgICAgICAga2V5LmlubmVySFRNTCA9IGtleS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAga2V5LmlubmVySFRNTCA9IGtleS5pbm5lckhUTUwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICB1cHBlckNhc2UgPSAhdXBwZXJDYXNlO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVNoaWZ0KCkge1xyXG4gIGNoYW5nZUNhc2UoKTtcclxuICBjb25zdCBhbGxLZXlzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX2tleScpKTtcclxuICBhbGxLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgICAgaWYgKCFrZXkuZW5Cb2FyZC5zcGXRgWlmaWNhdGlvbikge1xyXG4gICAgICAgIGlmIChzaGlmdE9uKSB7XHJcbiAgICAgICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmVuQm9hcmQua2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmVuQm9hcmQudXBLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChsYW5nID09PSAncnUnKSB7XHJcbiAgICAgIGlmICgha2V5LnJ1Qm9hcmQuc3Bl0YFpZmljYXRpb24pIHtcclxuICAgICAgICBpZiAoc2hpZnRPbikge1xyXG4gICAgICAgICAga2V5LmlubmVySFRNTCA9IGtleS5ydUJvYXJkLmtleTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAga2V5LmlubmVySFRNTCA9IGtleS5ydUJvYXJkLnVwS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHNoaWZ0T24gPSAhc2hpZnRPbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2UoKSB7XHJcbiAgY29uc3QgYWxsS2V5cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleWJvYXJkX19rZXknKSk7XHJcbiAgaWYgKGxhbmcgPT09ICdlbicpIHtcclxuICAgIGFsbEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGtleS5pbm5lckhUTUwgPSBrZXkucnVCb2FyZC5rZXk7XHJcbiAgICB9KTtcclxuICAgIGxhbmcgPSAncnUnO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJMYW5ndWFnZScsIGxhbmcpO1xyXG4gICAgaWYgKHVwcGVyQ2FzZSkge1xyXG4gICAgICB1cHBlckNhc2UgPSBmYWxzZTtcclxuICAgICAgY2hhbmdlQ2FzZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoaWZ0T24pIHtcclxuICAgICAgc2hpZnRPbiA9IGZhbHNlO1xyXG4gICAgICBjaGFuZ2VTaGlmdCgpO1xyXG4gICAgICBjaGFuZ2VDYXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChsYW5nID09PSAncnUnKSB7XHJcbiAgICBhbGxLZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBrZXkuaW5uZXJIVE1MID0ga2V5LmVuQm9hcmQua2V5O1xyXG4gICAgfSk7XHJcbiAgICBsYW5nID0gJ2VuJztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTGFuZ3VhZ2UnLCBsYW5nKTtcclxuICAgIGlmICh1cHBlckNhc2UpIHtcclxuICAgICAgdXBwZXJDYXNlID0gZmFsc2U7XHJcbiAgICAgIGNoYW5nZUNhc2UoKTtcclxuICAgIH1cclxuICAgIGlmIChzaGlmdE9uKSB7XHJcbiAgICAgIHNoaWZ0T24gPSBmYWxzZTtcclxuICAgICAgY2hhbmdlU2hpZnQoKTtcclxuICAgICAgY2hhbmdlQ2FzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaWYgKGxhbmcgPT09ICdydScpIHtcclxuICBsYW5nID0gJ2VuJztcclxuICBjaGFuZ2VMYW5ndWFnZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRDaGFyKHNpbWJvbCkge1xyXG4gIGNvbnN0IGFyciA9IHRleHRhcmVhLnZhbHVlLnNwbGl0KCcnKTtcclxuICBhcnIuc3BsaWNlKGN1cnNvckluZGV4LCAwLCBzaW1ib2wpO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gYXJyLmpvaW4oJycpO1xyXG4gIGN1cnNvckluZGV4ICs9IDE7XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxufVxyXG5cclxua2V5Ym9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlib2FyZF9fa2V5JykpIHsgcmV0dXJuOyB9XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0NhcHNMb2NrJykgeyByZXR1cm47IH1cclxuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5lbkJvYXJkLnNwZdGBaWZpY2F0aW9uID09PSAnZnVuY3Rpb25hbCcpIHsgcmV0dXJuOyB9XHJcbiAgaW5zZXJ0Q2hhcihldmVudC50YXJnZXQuaW5uZXJIVE1MKTtcclxufSk7XHJcblxyXG5rZXlib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlib2FyZF9fa2V5JykpIHsgcmV0dXJuOyB9XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0NhcHNMb2NrJykgeyByZXR1cm47IH1cclxuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5lbkJvYXJkLnNwZdGBaWZpY2F0aW9uID09PSAnZnVuY3Rpb25hbCcpIHsgcmV0dXJuOyB9XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxufSk7XHJcblxyXG5cclxuY29uc3QgY2hhbmdlTGFuZ0tleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDaGFuZ2VMYW5nJyk7XHJcbmNoYW5nZUxhbmdLZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VMYW5ndWFnZSk7XHJcblxyXG5cclxuY29uc3QgY2Fwc2xvY2tLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2Fwc0xvY2snKTtcclxuY2Fwc2xvY2tLZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGNhcHNsb2NrS2V5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgIGNhcHNsb2NrS2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYXBzbG9ja0tleS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9XHJcbiAgY2hhbmdlQ2FzZSgpO1xyXG59KTtcclxuXHJcblxyXG5jb25zdCB0YWJLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGFiJyk7XHJcbnRhYktleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpbnNlcnRDaGFyKCdcXHQnKTtcclxufSk7XHJcblxyXG5jb25zdCBiYWNrc3BhY2VLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQmFja3NwYWNlJyk7XHJcbmJhY2tzcGFjZUtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBhcnIgPSB0ZXh0YXJlYS52YWx1ZS5zcGxpdCgnJyk7XHJcbiAgYXJyLnNwbGljZShjdXJzb3JJbmRleCAtIDEsIDEpO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gYXJyLmpvaW4oJycpO1xyXG4gIGN1cnNvckluZGV4ID0gY3Vyc29ySW5kZXggPD0gMD8gMDogY3Vyc29ySW5kZXggLSAxO1xyXG4gIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgdGV4dGFyZWEuc2VsZWN0aW9uRW5kID0gY3Vyc29ySW5kZXg7XHJcbn0pO1xyXG5cclxuY29uc3QgZW50ZXJLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRW50ZXInKTtcclxuZW50ZXJLZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaW5zZXJ0Q2hhcignXFxuJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgYXJyb3dVcEtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBcnJvd1VwJyk7XHJcbmFycm93VXBLZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaW5zZXJ0Q2hhcign4payJyk7XHJcbn0pO1xyXG5jb25zdCBhcnJvd0xlZnRLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXJyb3dMZWZ0Jyk7XHJcbmFycm93TGVmdEtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpbnNlcnRDaGFyKCfil4QnKTtcclxufSk7XHJcbmNvbnN0IGFycm9Eb3duS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fycm93RG93bicpO1xyXG5hcnJvRG93bktleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpbnNlcnRDaGFyKCfilrwnKTtcclxufSk7XHJcbmNvbnN0IGFycm93UmlnaHRLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXJyb3dSaWdodCcpO1xyXG5hcnJvd1JpZ2h0S2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGluc2VydENoYXIoJ+KWuicpO1xyXG59KTtcclxuXHJcbmNvbnN0IHNoaWZ0TGVmdEtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdTaGlmdExlZnQnKTtcclxuc2hpZnRMZWZ0S2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU2hpZnQpO1xyXG5jb25zdCBzaGlmdFJpZ2h0S2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NoaWZ0UmlnaHQnKTtcclxuc2hpZnRSaWdodEtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVNoaWZ0KTtcclxuXHJcblxyXG5jb25zdCBkZWxldGVLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVsZXRlJyk7XHJcbmRlbGV0ZUtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBhcnIgPSB0ZXh0YXJlYS52YWx1ZS5zcGxpdCgnJyk7XHJcbiAgYXJyLnNwbGljZShjdXJzb3JJbmRleCwgMSk7XHJcbiAgdGV4dGFyZWEudmFsdWUgPSBhcnIuam9pbignJyk7XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgYWN0aXZlS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQuY29kZSk7XHJcbiAgaWYgKGV2ZW50LmNvZGUgPT09ICdDYXBzTG9jaycpIHtcclxuICAgIGlmIChjYXBzbG9ja0tleS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIGNhcHNsb2NrS2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2Fwc2xvY2tLZXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VDYXNlKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aXZlS2V5KSB7XHJcbiAgICBhY3RpdmVLZXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC5jb2RlID09PSAnU2hpZnRMZWZ0JyB8fCBldmVudC5jb2RlID09PSAnU2hpZnRSaWdodCcpIHtcclxuICAgIGNoYW5nZVNoaWZ0KCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgIGNvbnN0IGFyciA9IHRleHRhcmVhLnZhbHVlLnNwbGl0KCcnKTtcclxuICAgIGFyci5zcGxpY2UoY3Vyc29ySW5kZXggLSAxLCAxKTtcclxuICAgIHRleHRhcmVhLnZhbHVlID0gYXJyLmpvaW4oJycpO1xyXG4gICAgY3Vyc29ySW5kZXggPSBjdXJzb3JJbmRleCA8PSAwPyAwOiBjdXJzb3JJbmRleCAtIDE7XHJcbiAgICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC5jb2RlID09PSAnRGVsZXRlJykge1xyXG4gICAgY29uc3QgYXJyID0gdGV4dGFyZWEudmFsdWUuc3BsaXQoJycpO1xyXG4gICAgYXJyLnNwbGljZShjdXJzb3JJbmRleCwgMSk7XHJcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IGFyci5qb2luKCcnKTtcclxuICAgIHRleHRhcmVhLnNlbGVjdGlvbkVuZCA9IGN1cnNvckluZGV4O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcclxuICAgIGluc2VydENoYXIoJ1xcbicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50LmNvZGUgPT09ICdUYWInKSB7XHJcbiAgICBpbnNlcnRDaGFyKCdcXHQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC5jb2RlID09PSAnQ29udHJvbExlZnQnXHJcbiAgfHwgZXZlbnQuY29kZSA9PT0gJ0NvbnRyb2xSaWdodCdcclxuICB8fCBldmVudC5jb2RlID09PSAnQWx0TGVmdCdcclxuICB8fCBldmVudC5jb2RlID09PSAnQWx0UmlnaHQnXHJcbiAgKSB7XHJcbiAgICB0ZXh0YXJlYS5mb2N1cygpO1xyXG4gICAgdGV4dGFyZWEuc2VsZWN0aW9uRW5kID0gY3Vyc29ySW5kZXg7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5zZXJ0Q2hhcihhY3RpdmVLZXkuaW5uZXJIVE1MKTtcclxuICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBjdXJzb3JJbmRleDtcclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBhY3RpdmVLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChldmVudC5jb2RlKTtcclxuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0NhcHNMb2NrJykgeyByZXR1cm47IH1cclxuICBpZiAoYWN0aXZlS2V5KSB7XHJcbiAgICBhY3RpdmVLZXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC5jb2RlID09PSAnU2hpZnRMZWZ0J1xyXG4gICAgfHwgZXZlbnQuY29kZSA9PT0gJ1NoaWZ0UmlnaHQnXHJcbiAgKSB7XHJcbiAgICBjaGFuZ2VTaGlmdCgpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50LmNvZGUgPT09ICdDb250cm9sTGVmdCdcclxuICB8fCBldmVudC5jb2RlID09PSAnQ29udHJvbFJpZ2h0J1xyXG4gIHx8IGV2ZW50LmNvZGUgPT09ICdBbHRMZWZ0J1xyXG4gIHx8IGV2ZW50LmNvZGUgPT09ICdBbHRSaWdodCdcclxuICApIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBydW5PbktleXMoZnVuYywgLi4uY29kZXMpIHtcclxuICBjb25zdCBwcmVzc2VkID0gbmV3IFNldCgpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XHJcbiAgICBwcmVzc2VkLmFkZCh3aW5kb3cuZXZlbnQuY29kZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXByZXNzZWQuaGFzKGNvZGVzW2ldKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlc3NlZC5jbGVhcigpO1xyXG4gICAgZnVuYygpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgcHJlc3NlZC5kZWxldGUod2luZG93LmV2ZW50LmNvZGUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5ydW5PbktleXMoKCkgPT4geyBjaGFuZ2VMYW5ndWFnZSgpOyB9LCAnQ29udHJvbExlZnQnLCAnQWx0TGVmdCcpO1xyXG5ydW5PbktleXMoKCkgPT4geyBjaGFuZ2VMYW5ndWFnZSgpOyB9LCAnQ29udHJvbFJpZ2h0JywgJ0FsdFJpZ2h0Jyk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=