function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  switch(operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let operand1 = '';
let operand2 = '';
let operator = '';
let result;

numbers.forEach( button => button.addEventListener('click', e => {
  if(operator === '') {
    operand1 += e.target.textContent;
    display.textContent = operand1;
  } else {
    operand2 += e.target.textContent;
    display.textContent = operand2;
  }
}))

operators.forEach( o => o.addEventListener('click', e => {
  if(operand1 !== '' && operator === '') {
    display.textContent = '';
    operator = e.target.textContent;
    console.log(e.target.textContent)
  }
}))

equals.addEventListener('click', () => {
  if(operand1 !== '' && operand2  !== '' && operator !== '') {
    // perform operation
    result = operate(+operand1,+operand2,operator);
  
    // reset values
    operand1 = '';
    operand2 = '';
    operator = '';
  
    //display result
    display.textContent = result;
  }
})

clear.addEventListener('click', () => {
  // reset data
  operand1 = '';
  operand2 = '';
  operator = '';
  // reset display
  display.textContent = '';
})