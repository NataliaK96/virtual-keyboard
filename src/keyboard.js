let lang = localStorage.getItem('userLanguage') || 'en';
import * as enKeyboard from './enKeyboard.json';
import * as ruKeyboard from './ruKeyboard.json';

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
  insertChar(event.target.innerHTML[0]);
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
    cursorIndex = cursorIndex <= 0 ? 0 : cursorIndex - 1;
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
