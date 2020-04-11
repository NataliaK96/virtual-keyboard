let lang = localStorage.getItem('userLanguage') || 'en';
import * as enKeyboard from './enKeyboard.json';
import * as ruKeyboard from './ruKeyboard.json';

const body = document.querySelector('body');
const functional = 'functional'
const letter = 'letter'

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
switchLang.innerHTML = `Для переключения языка используйте комбинацию ctrl+alt
 (для физической клавиатуры) или клавишу EN/RU (для виртуальной клавиатуры)`;

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
    if (keyNode.enBoard.speсification === functional) {
      keyNode.classList.add(functional);
    }
  });
});

ruKeyboard.forEach((row) => {
  row.forEach((keyObj) => {
    const keyNode = document.getElementById(keyObj.code);
    keyNode.ruBoard = keyObj;
  });
});
const allKeys = Array.from(document.querySelectorAll('.keyboard__key'));
let langBoard 
function changeLetterCase() {
  allKeys.forEach((key) => {
    if (lang === 'en') {langBoard = key.enBoard}
    if (lang === 'ru') {langBoard = key.ruBoard}
    if (langBoard.speсification === letter) {
      if (upperCase) {
        key.innerHTML = key.innerHTML.toLowerCase();
      } else {
        key.innerHTML = key.innerHTML.toUpperCase();
      }
    }
  });
}
function changeCase() {
    changeLetterCase()
  
  upperCase = !upperCase;
}
function changeLetterShift(){
  allKeys.forEach((key) => {
    if (lang === 'en') {langBoard = key.enBoard}
    if (lang === 'ru') {langBoard = key.ruBoard}
      if (!langBoard.speсification) {
        if (shiftOn) {
          key.innerHTML = langBoard.key;
        } else {
          key.innerHTML = langBoard.upKey;
        }
      }
    })
}
function changeShift() {
  changeCase();
  changeLetterShift()
  
  shiftOn = !shiftOn;
}

function changeLetterLanguage(){
  if (lang === 'en') {
    lang = 'ru'
  }
  else {
    lang = 'en'
  }


  allKeys.forEach((key) => {
    if (lang === 'en') {
      langBoard = key.enBoard
    }
    if (lang === 'ru') {
      langBoard = key.ruBoard
    }
    key.innerHTML = langBoard.key
    if (upperCase) {
      upperCase = false;
      changeCase();
    }
    if (shiftOn) {
      shiftOn = false;
      changeShift();
      changeCase();
    }
  })
}
function changeLanguage() {
    changeLetterLanguage()
    localStorage.setItem('userLanguage', lang);
    
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
  if (event.target.enBoard.speсification === functional) { return; }
  insertChar(event.target.innerHTML[0]);
});

keyboard.addEventListener('mouseup', (event) => {
  if (!event.target.classList.contains('keyboard__key')) { return; }
  if (event.target.id === 'CapsLock') { return; }
  event.target.classList.remove('active');
  if (event.target.enBoard.speсification === functional) { return; }
  textarea.focus();
  textarea.selectionEnd = cursorIndex;
});


const changeLangKey = document.getElementById('ChangeLang');
changeLangKey.addEventListener('click', changeLanguage);

function capslockActive() {
  if (capslockKey.classList.contains('active')) {
    capslockKey.classList.remove('active');
  } else {
    capslockKey.classList.add('active');
  }
}
const capslockKey = document.getElementById('CapsLock');
capslockKey.addEventListener('click', () => {
  capslockActive()
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
  cursorIndex = cursorIndex <= 0 ? 0 : cursorIndex - 1;
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
    capslockActive()
    changeCase();
    return;
  }

  if (activeKey) {
    activeKey.classList.add('active');
  } else {
    return;
  }
  function isSpecialCode(...arg){
    return arg.some(item => item === event.code)
  }
  if (isSpecialCode('ShiftLeft', 'ShiftRight')) {
    changeShift();
    return;
  }

  if (isSpecialCode('Backspace')) {
    const arr = textarea.value.split('');
    arr.splice(cursorIndex - 1, 1);
    textarea.value = arr.join('');
    cursorIndex = cursorIndex <= 0 ? 0 : cursorIndex - 1;
    textarea.selectionEnd = cursorIndex;
    return;
  }

  if (isSpecialCode('Delete')) {
    const arr = textarea.value.split('');
    arr.splice(cursorIndex, 1);
    textarea.value = arr.join('');
    textarea.selectionEnd = cursorIndex;
    return;
  }

  if (isSpecialCode('Enter')) {
    insertChar('\n');
    return;
  }

  if (isSpecialCode('Tab')) {
    insertChar('\t');
    return;
  }

  if (isSpecialCode('ControlLeft', 'ControlRight', 'AltLeft', 'AltRight')) {
    textarea.focus();
    textarea.selectionEnd = cursorIndex;
    return;
  }


  insertChar(activeKey.innerHTML[0]);
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
