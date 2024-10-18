// get two number and an operator then calcuate it
// ------------------------------------------------------------------ way 1
function calcuate(num1, num2, operator) {
  let result = null;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      throw new Error("the operator is not valid");

      break;
  }

  return result;
}

console.log(calcuate(5, 10, "+"));

// ------------------------------------------------------------------ way 2

function calcuation(num1, num2, operator) {
  let result = null;

  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else {
    result = "the operator is not valid";
  }

  return result;
}

console.log(calcuation(650, 50, "/"));
