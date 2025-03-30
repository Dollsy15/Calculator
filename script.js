const valueEl = document.querySelector('.display'); 
const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl = document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number-0');
const number1El = document.querySelector('.number-1');
const number2El = document.querySelector('.number-2');
const number3El = document.querySelector('.number-3');
const number4El = document.querySelector('.number-4');
const number5El = document.querySelector('.number-5');
const number6El = document.querySelector('.number-6');
const number7El = document.querySelector('.number-7');
const number8El = document.querySelector('.number-8');
const number9El = document.querySelector('.number-9');

const numberElArray = [
  number0El, number1El, number2El, number3El, number4El,
  number5El, number6El, number7El, number8El, number9El
];

let valueStrInMemory = null;
let operatorInMemory = null;
let waitingForNewNumber = false;

const getValueAsStr = () => valueEl.textContent.replace(/,/g, '');
const getValueAsNum = () => parseFloat(getValueAsStr()) || 0;

const setStrAsValue = (valueStr) => {
  if (valueStr === '') valueStr = '0';
  if (valueStr[valueStr.length - 1] === '.') {
    valueEl.textContent = valueStr;
    return;
  }
  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (waitingForNewNumber) {  
    setStrAsValue(numStr);
    waitingForNewNumber = false;
  } else {
    setStrAsValue(currentValueStr === '0' ? numStr : currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  if (!valueStrInMemory || !operatorInMemory) return getValueAsStr();
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum = 0;

  switch (operatorInMemory) {
    case 'addition':
      newValueNum = valueNumInMemory + currentValueNum;
      break;
    case 'subtraction':
      newValueNum = valueNumInMemory - currentValueNum;
      break;
    case 'multiplication':
      newValueNum = valueNumInMemory * currentValueNum;
      break;
    case 'division':
      newValueNum = currentValueNum !== 0 ? valueNumInMemory / currentValueNum : 'Error';
      break;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  if (!valueStrInMemory) {
    valueStrInMemory = getValueAsStr();
    operatorInMemory = operation;
  } else {
    valueStrInMemory = getResultOfOperationAsStr();
    operatorInMemory = operation;
    setStrAsValue(valueStrInMemory);
  }
  waitingForNewNumber = true;
};

acEl.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
  waitingForNewNumber = false;
});

pmEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  if (currentValueNum !== 0) {
    setStrAsValue((currentValueNum * -1).toString());
  }
});

percentEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  setStrAsValue((currentValueNum / 100).toString());
});

additionEl.addEventListener('click', () => handleOperatorClick('addition'));
subtractionEl.addEventListener('click', () => handleOperatorClick('subtraction'));
multiplicationEl.addEventListener('click', () => handleOperatorClick('multiplication'));
divisionEl.addEventListener('click', () => handleOperatorClick('division'));

equalEl.addEventListener('click', () => {
  if (valueStrInMemory && operatorInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
    waitingForNewNumber = false;
  }
});

numberElArray.forEach((numberEl, index) => {
  numberEl.addEventListener('click', () => handleNumberClick(index.toString()));
});

decimalEl.addEventListener('click', () => {
  const valueEl = document.querySelector('.display'); 
  const historyEl = document.querySelector('.history'); 
  const acEl = document.querySelector('.ac');
  const pmEl = document.querySelector('.pm');
  const percentEl = document.querySelector('.percent');
  
  const additionEl = document.querySelector('.addition');
  const subtractionEl = document.querySelector('.subtraction');
  const multiplicationEl = document.querySelector('.multiplication');
  const divisionEl = document.querySelector('.division');
  const equalEl = document.querySelector('.equal');
  
  const decimalEl = document.querySelector('.decimal');
  const number0El = document.querySelector('.number-0');
  const number1El = document.querySelector('.number-1');
  const number2El = document.querySelector('.number-2');
  const number3El = document.querySelector('.number-3');
  const number4El = document.querySelector('.number-4');
  const number5El = document.querySelector('.number-5');
  const number6El = document.querySelector('.number-6');
  const number7El = document.querySelector('.number-7');
  const number8El = document.querySelector('.number-8');
  const number9El = document.querySelector('.number-9');
  
  const numberElArray = [
    number0El, number1El, number2El, number3El, number4El,
    number5El, number6El, number7El, number8El, number9El
  ];
  
  let valueStrInMemory = null;
  let operatorInMemory = null;
  let historyStr = ''; 
  let waitingForNewNumber = false;
  
  const getValueAsStr = () => valueEl.textContent.replace(/,/g, '');
  const getValueAsNum = () => parseFloat(getValueAsStr()) || 0;
  
  const setStrAsValue = (valueStr) => {
    if (valueStr === '') valueStr = '0';
    if (valueStr[valueStr.length - 1] === '.') {
      valueEl.textContent = valueStr;
      return;
    }
    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
      valueEl.textContent = parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
      valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
  };
  
  const updateHistory = (newStr) => {
    historyStr = newStr;
    historyEl.textContent = historyStr;
  };
  
  const handleNumberClick = (numStr) => {
    if (waitingForNewNumber) {  
      setStrAsValue(numStr);
      waitingForNewNumber = false;
    } else {
      setStrAsValue(getValueAsStr() === '0' ? numStr : getValueAsStr() + numStr);
    }
    updateHistory(historyStr + numStr);
  };
  
  const getResultOfOperationAsStr = () => {
    if (!valueStrInMemory || !operatorInMemory) return getValueAsStr();
    const currentValueNum = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum = 0;
  
    switch (operatorInMemory) {
      case 'addition':
        newValueNum = valueNumInMemory + currentValueNum;
        break;
      case 'subtraction':
        newValueNum = valueNumInMemory - currentValueNum;
        break;
      case 'multiplication':
        newValueNum = valueNumInMemory * currentValueNum;
        break;
      case 'division':
        newValueNum = currentValueNum !== 0 ? valueNumInMemory / currentValueNum : 'Error';
        break;
    }
    return newValueNum.toString();
  };
  
  const handleOperatorClick = (operation, symbol) => {
    if (!valueStrInMemory) {
      valueStrInMemory = getValueAsStr();
      operatorInMemory = operation;
      updateHistory(valueStrInMemory + ' ' + symbol + ' ');
    } else {
      valueStrInMemory = getResultOfOperationAsStr();
      operatorInMemory = operation;
      setStrAsValue(valueStrInMemory);
      updateHistory(historyStr + ' ' + symbol + ' ');
    }
    waitingForNewNumber = true;
  };
  
  acEl.addEventListener('click', () => {
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;
    updateHistory('');
    waitingForNewNumber = false;
  });
  
  pmEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    if (currentValueNum !== 0) {
      setStrAsValue((currentValueNum * -1).toString());
      updateHistory(historyStr + ' ±');
    }
  });
  
  percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    setStrAsValue((currentValueNum / 100).toString());
    updateHistory(historyStr + ' %');
  });
  
  additionEl.addEventListener('click', () => handleOperatorClick('addition', '+'));
  subtractionEl.addEventListener('click', () => handleOperatorClick('subtraction', '−'));
  multiplicationEl.addEventListener('click', () => handleOperatorClick('multiplication', '×'));
  divisionEl.addEventListener('click', () => handleOperatorClick('division', '÷'));
  
  equalEl.addEventListener('click', () => {
    if (valueStrInMemory && operatorInMemory) {
      setStrAsValue(getResultOfOperationAsStr());
      updateHistory(historyStr + ' = ' + getResultOfOperationAsStr());
      valueStrInMemory = null;
      operatorInMemory = null;
      waitingForNewNumber = false;
    }
  });
  
  numberElArray.forEach((numberEl, index) => {
    numberEl.addEventListener('click', () => handleNumberClick(index.toString()));
  });
  
  decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    if (!currentValueStr.includes('.')) {
      setStrAsValue(currentValueStr + '.');
      updateHistory(historyStr + '.');
    }
  });

  currentValueStr = getValueAsStr();
  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});
