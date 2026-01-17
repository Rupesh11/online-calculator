const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operatorSelectInput = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultParagraph = document.getElementById("result");

function calculate() {
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  const operator = operatorSelectInput.value;
  let result;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultParagraph.textContent = "Please select the right operator";
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
        resultParagraph.textContent = "Divison by Zero is not valid";
        return;
      }
      result = firstNumber / secondNumber;
      break;

    default:
      result = "Invlalid operator";
  }
  resultParagraph.textContent = "Result: " + result;
}
calculateButton.addEventListener("click", calculate);
