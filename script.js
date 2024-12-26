const screen = document.querySelector(".screen"),
  buttons = document.querySelector(".keys"),
  clearBtn = document.querySelector(".clear"),
  plusBtn = document.querySelector(".plus"),
  minusBtn = document.querySelector(".minus"),
  divideBtn = document.querySelector(".devide"),
  timesBtn = document.querySelector(".times"),
  equalBtn = document.querySelector(".eval");

let previousValue = null,
  currentOperation = "",
  finishResult = false;

buttons.addEventListener("click", (event) => {
  let buttonText = event.target.textContent;

  if (finishResult) {
    return;
  } else {
    if (
      buttonText === "+" ||
      buttonText === "=" ||
      buttonText === "-" ||
      buttonText === "x" ||
      buttonText === "÷"
    ) {
      return;
    } else if (event.target.tagName === "SPAN") {
      screen.append(event.target.textContent);
    }
  }
});

clearBtn.addEventListener("click", () => {
  clearScreen();

  previousValue = null;
  currentOperation = "";
  finishResult = false;
});

plusBtn.addEventListener("click", () => setOperation("+"));
minusBtn.addEventListener("click", () => setOperation("-"));
timesBtn.addEventListener("click", () => setOperation("x"));
divideBtn.addEventListener("click", () => setOperation("÷"));

equalBtn.addEventListener("click", result);

function setOperation(operation) {
  currentOperation = operation;
  if (screen.textContent !== "") {
    previousValue = parseFloat(screen.textContent);
    clearScreen();
  }
}

function result() {
  const screenValue = parseFloat(screen.textContent);

  if (isNaN(screenValue)) {
    return;
  }

  switch (currentOperation) {
    case "+":
      previousValue += screenValue;
      break;
    case "-":
      previousValue -= screenValue;
      break;
    case "x":
      previousValue *= screenValue;
      break;
    case "÷":
      if (screenValue === 0) {
        screen.textContent = "Error <33";
        previousValue = null;
        currentOperation = "";
        return;
      }

      previousValue /= screenValue;
      break;
  }

  screen.textContent = previousValue;
  currentOperation = "";
  finishResult = true;
}

function clearScreen() {
  screen.textContent = "";
}
