const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const numpadText = document.querySelector('.numpad-buttons');
const operationsText = document.querySelector('.operations');
const divs = [numpadText, operationsText];
const numpad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='];
const operations = ['c', '/', '*', '-', '+'];
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

let calculate = (target) => {
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
        : (result = result.toFixed(3));
      outputText.textContent = result;
      inputText.textContent = '';
      break;
    case 'sin':
      inputText.textContent += '(';
  }
};

divs.forEach((e) => {
  e.addEventListener('click', (e) => {
    let target = e.target.value;
    target !== undefined ? (inputText.textContent += target) : null;
    calculate(target);
  });
});
