const codeBox = document.querySelector('[data-js="code"]');
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userNumber = Number(event.target.elements.number.value);
  const fibonacciMessage = document.createElement("h2");

  let fibonacci = [0, 1];
  if (userNumber === 0) {
    fibonacciMessage.textContent = fibonacci[0];
  }
  if (userNumber === 1) {
    fibonacciMessage.textContent = fibonacci.slice(0, 2);
  }
  if (userNumber === 2) {
    fibonacciMessage.textContent = fibonacci.slice(0, 2);
  }
  for (i = fibonacci.length; i <= userNumber; i++) {
    let newNumber =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(newNumber);
  }

  fibonacciMessage.textContent = fibonacci.slice(0, userNumber + 1);

  codeBox.append(fibonacciMessage);
});
