// DOM - Grabs element from HTML so it can speak to Javascript
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operatorSelectInput = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultParagraph = document.getElementById("result");

// Brain of the calculator - It runs when you click a button
function calculate() {
  // It reads what the user typed, convert text into numbers and read which operator was selected
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  const operator = operatorSelectInput.value;
  let result;
  // It checks if the user type something else apart from number? If yes show error and stop function
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultParagraph.textContent = "Please enter a valid number";
    return;
  }

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        resultParagraph.textContent = "Division by zero is not allowed";
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      result = "Invalid operator";
  }

  // It prints answer to the screem
  resultParagraph.textContent = "Result: " + result;
}
// When user click the button - It calls the function
calculateButton.addEventListener("click", calculate);
