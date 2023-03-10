const calculator = {
    firstNumber: null,
    operator: null,
    currentResult: null
  };
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Error";
    }
    return a / b;
  }
  
  function operate(operator, a, b) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return "Error";
    }
  }
  
  const display = document.getElementById("display");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalsButton = document.querySelector(".equals");
  const backspaceButton = document.querySelector(".backspace");
  const decimalButton = document.querySelector(".decimal");
  
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (display.value === "0") {
        display.value = button.value;
      } else {
        display.value += button.value;
      }
    });
  });
  
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const secondNumber = parseFloat(display.value);
      if (calculator.firstNumber === null) {
        calculator.firstNumber = secondNumber;
      } else {
        const result = operate(calculator.operator, calculator.firstNumber, secondNumber);
        calculator.currentResult = result;
        calculator.firstNumber = result;
        display.value = result.toFixed(2);
      }
      calculator.operator = button.value;
      display.value = "0";
    });
  });
  
clearButton.addEventListener("click", () => {
    calculator.firstNumber = null;
    calculator.operator = null;
    calculator.currentResult = null;
    display.value = "0";
  });
 

backspaceButton.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

decimalButton.addEventListener("click", () => {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
});
  
equalsButton.addEventListener("click", () => {
    const secondNumber = parseFloat(display.value);
    const result = operate(calculator.operator, calculator.firstNumber, secondNumber);
    if (calculator.currentResult === null) {
      calculator.currentResult = result;
    } else {
      calculator.currentResult = operate(calculator.operator, calculator.currentResult, secondNumber);
    }
    calculator.firstNumber = null;
    calculator.operator = null;
    if (calculator.currentResult === parseInt(calculator.currentResult)) {
        display.value = calculator.currentResult
    } else {
    display.value = calculator.currentResult.toFixed(2);
    }
    calculator.currentResult = null;
  });
