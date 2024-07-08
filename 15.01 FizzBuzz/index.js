let numbers = [];
let count = 1;

function fizzBuzz() {
  numbers.push(count);
  count++;
  console.log(numbers);
  const number = numbers[numbers.length - 1];
  console.log("The Number is " + number);
  if (number % 3 === 0 && number % 5 !== 0) {
    numbers[numbers.length - 1] = "Fizz";
  }
  if (number % 5 === 0 && number % 3 !== 0) {
    numbers[numbers.length - 1] = "Buzz";
  }
  if (number % 3 === 0 && number % 5 === 0) {
    numbers[numbers.length - 1] = "FizzBuzz";
  }
  console.log(numbers);
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
