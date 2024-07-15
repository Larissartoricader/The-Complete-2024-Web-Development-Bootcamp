const blueSound = new Audio("./sounds/blue.mp3");
const redSound = new Audio("./sounds/red.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");
const greenSound = new Audio("./sounds/green.mp3");

const blueButton = $("#blue");
const redButton = $("#red");
const yellowButton = $("#yellow");
const greenButton = $("#green");

blueButton.on("click", function () {
  blueSound.play();
});

redButton.on("click", function () {
  redSound.play();
});

yellowButton.on("click", function () {
  yellowSound.play();
});

greenButton.on("click", function () {
  greenSound.play();
});

const gameLine = [];
const colorOptions = ["red", "green", "yellow", "blue"];

function game() {
  randomColorIndex = Math.floor(Math.random() * colorOptions.length);
  currentColor = colorOptions[randomColorIndex];
  console.log("The current color is " + currentColor);
}

game();
