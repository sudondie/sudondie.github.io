const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const numpadText = document.querySelector('.numpad-buttons');
const operationsText = document.querySelector('.operations');
const extraOperationsMain = document.querySelector('.extra-operations'); //element i want to show
const extraOperationsText = document.querySelector('.extra-operations-numpad');
const extraArrowText = document.querySelector('.extra-operations', ':before'); //clicked element
const divs = [numpadText, operationsText, extraOperationsText];
const numpad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='];
const operations = ['c', '/', '*', '-', '+'];
const extraOperations = [
  'inv',
  'rad',
  '%',
  'sin',
  'cos',
  'tan',
  'ln',
  'log',
  'sqrt',
  'pi',
  'e',
  '**',
  '(',
  ')',
  '!',
];
numpad.map((i) =>
  numpadText.insertAdjacentHTML(
    'beforeend',
    `<button value="${i}">${i}</button>`
  )
);
operations.map((i) =>
  operationsText.insertAdjacentHTML(
    'beforeend',
    `<button value="${i}">${i}</button>`
  )
);
extraOperations.map((i) =>
  extraOperationsText.insertAdjacentHTML(
    'beforeend',
    `<button value="${i}">${i}</button>`
  )
);
let sin = (e) => {
  return Math.sin(e * (Math.PI / 180));
};
let cos = (e) => {
  return Math.cos(e * (Math.PI / 180));
};
let tan = (e) => {
  return Math.tan(e * (Math.PI / 180));
};
let sqrt = (e) => {
  return Math.sqrt(e);
};
let ln = (e) => {
  return Math.log(e);
};
let log = (e) => {
  return Math.log10(e);
};
let pi = Math.PI;
let e = Math.E;

let calculate = (target) => {
  try {
    switch (target) {
      case 'c':
        inputText.textContent = '';
        outputText.textContent = '';
        break;
      case '=':
        let result = eval(
          inputText.textContent.slice(0, inputText.textContent.length - 1)
        );
        Number.isInteger(result) == true
          ? (result = result)
          : (result = result.toFixed(7));
        outputText.textContent = result;
        inputText.textContent = '';
        break;
      case 'sin':
        inputText.textContent += '(';
        break;
      case 'cos':
        inputText.textContent += '(';
        break;
      case 'tan':
        inputText.textContent += '(';
        break;
      case 'sqrt':
        inputText.textContent += '(';
        break;
      case 'ln':
        inputText.textContent += '(';
        break;
      case 'log':
        inputText.textContent += '(';
        break;
      case 'pi':
        inputText.textContent += '';
        break;
    }
  } catch (e) {
    inputText.textContent = '';
    outputText.textContent += 'Неверное выражение';
  }
};
extraArrowText.addEventListener('click', () => {
  extraOperationsMain.classList.toggle('clicked');
});

divs.forEach((e) => {
  e.addEventListener('click', (e) => {
    let target = e.target.value;
    isTargetOparator = (target) => {
      return operations.includes(target) ? true : false;
    };
    isTargetExtraOparator = (target) => {
      return extraOperations.includes(target) ? true : false;
    };
    target !== undefined &&
    target !== 'inv' &&
    target !== 'rad' &&
    target !== '!' &&
    target !== '%'
      ? !isTargetOparator(
          inputText.textContent.slice(inputText.textContent.length - 1)
        )
        ? (inputText.textContent += target)
        : !isTargetOparator(target)
        ? (inputText.textContent += target)
        : null
      : null;
    calculate(target);
  });
});
