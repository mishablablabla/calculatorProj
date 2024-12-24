const screen = document.querySelector(".screen"),
  buttons = document.querySelector(".keys"),
  clearBtn = document.querySelector(".clear"),
  plusBtn = document.querySelector(".plus"),
  minusByn = document.querySelector(".minus"),
  devideBtn = document.querySelector(".devide"),
  timesBtn = document.querySelector(".times"),
  equalBtn = document.querySelector(".eval");

let previousValue = 0;
let currentOperation = "jf";

buttons.addEventListener("click", (event) => {
  let buttonText = event.target.textContent;

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
});

clearBtn.addEventListener("click", () => {
  clearScreen();
  previousValue = 0;
});

plusBtn.addEventListener("click", () => {
  currentOperation = "+";
  previousValue += parseFloat(screen.textContent);
  console.log(previousValue);

  clearScreen();
});

minusByn.addEventListener("click", () => {
  currentOperation = "-";
  if (previousValue === 0) {
    previousValue = parseFloat(screen.textContent);
  } else {
    previousValue = previousValue - parseFloat(screen.textContent);
  }
  console.log(previousValue);

  clearScreen();
});

timesBtn.addEventListener("click", () => {
  currentOperation = "x";
  if (previousValue === 0) {
    previousValue = parseFloat(screen.textContent);
  } else {
    previousValue = previousValue * parseFloat(screen.textContent);
  }

  clearScreen();
});

devideBtn.addEventListener("click", () => {
  currentOperation = "÷";
  if (previousValue === 0) {
    previousValue = parseFloat(screen.textContent);
  } else {
    previousValue = previousValue / parseFloat(screen.textContent);
  }

  clearScreen();
});

equalBtn.addEventListener("click", result);

function result() {
  if (currentOperation === "+") {
    previousValue += parseFloat(screen.textContent);
  } else if (currentOperation === "-") {
    previousValue = previousValue - parseFloat(screen.textContent);
  } else if (currentOperation === "x") {
    previousValue = previousValue * parseFloat(screen.textContent);
  } else if (currentOperation === "÷") {
    previousValue = previousValue / parseFloat(screen.textContent);
  }
  clearScreen();
  screen.textContent = previousValue;
}

function clearScreen() {
  screen.textContent = "";
}
