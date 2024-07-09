const codeBox = document.querySelector('[data-js="code"]');
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userNumber = Number(event.target.elements.number.value);

  let fibonacci = [0, 1];
  for (
    let sequenceLength = fibonacci.length;
    sequenceLength <= userNumber;
    sequenceLength++
  ) {
    let newNumber =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(newNumber);
    const fibonacciMessage = document.createElement("h2");
    fibonacciMessage.textContent = fibonacci;
    codeBox.append(fibonacciMessage);
  }
});
