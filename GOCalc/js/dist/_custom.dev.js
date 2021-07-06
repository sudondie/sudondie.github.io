"use strict";

var inputText = document.querySelector('.input-text');
var outputText = document.querySelector('.output-text');
var numpadText = document.querySelector('.numpad-buttons');
var operationsText = document.querySelector('.operations');
var extraOperationsMain = document.querySelector('.extra-operations'); //element i want to show

var extraOperationsText = document.querySelector('.extra-operations-numpad');
var extraArrowText = document.querySelector('.extra-operations', ':before'); //clicked element

var divs = [numpadText, operationsText, extraOperationsText];
var numpad = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='];
var operations = ['c', '/', '*', '-', '+'];
var extraOperations = ['inv', 'rad', '%', 'sin', 'cos', 'tan', 'ln', 'log', 'sqrt', 'pi', 'e', '**', '(', ')', '!'];
numpad.map(function (i) {
  return numpadText.insertAdjacentHTML('beforeend', "<button value=\"".concat(i, "\">").concat(i, "</button>"));
});
operations.map(function (i) {
  return operationsText.insertAdjacentHTML('beforeend', "<button value=\"".concat(i, "\">").concat(i, "</button>"));
});
extraOperations.map(function (i) {
  return extraOperationsText.insertAdjacentHTML('beforeend', "<button value=\"".concat(i, "\">").concat(i, "</button>"));
});

var sin = function sin(e) {
  return Math.sin(e * (Math.PI / 180));
};

var cos = function cos(e) {
  return Math.cos(e * (Math.PI / 180));
};

var tan = function tan(e) {
  return Math.tan(e * (Math.PI / 180));
};

var sqrt = function sqrt(e) {
  return Math.sqrt(e);
};

var ln = function ln(e) {
  return Math.log(e);
};

var log = function log(e) {
  return Math.log10(e);
};

var pi = Math.PI;
var e = Math.E;

var calculate = function calculate(target) {
  try {
    switch (target) {
      case 'c':
        inputText.textContent = '';
        outputText.textContent = '';
        break;

      case '=':
        var result = eval(inputText.textContent.slice(0, inputText.textContent.length - 1));
        Number.isInteger(result) == true ? result = result : result = result.toFixed(7);
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

extraArrowText.addEventListener('click', function () {
  extraOperationsMain.classList.toggle('clicked');
});
divs.forEach(function (e) {
  e.addEventListener('click', function (e) {
    var target = e.target.value;

    isTargetOparator = function isTargetOparator(target) {
      return operations.includes(target) ? true : false;
    };

    isTargetExtraOparator = function isTargetExtraOparator(target) {
      return extraOperations.includes(target) ? true : false;
    };

    target !== undefined && target !== 'inv' && target !== 'rad' && target !== '!' && target !== '%' ? !isTargetOparator(inputText.textContent.slice(inputText.textContent.length - 1)) ? inputText.textContent += target : !isTargetOparator(target) ? inputText.textContent += target : null : null;
    calculate(target);
  });
});