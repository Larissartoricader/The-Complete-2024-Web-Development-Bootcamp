const blueSound = new Audio("./sounds/blue.mp3");
const redSound = new Audio("./sounds/red.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");
const greenSound = new Audio("./sounds/green.mp3");

const blueButton = $("#blue");
const redButton = $("#red");
const yellowButton = $("#yellow");
const greenButton = $("#green");

function removeClickedClass(buttonName) {
  setTimeout(function () {
    buttonName.removeClass("pressed");
  }, 200);
}

blueButton.on("click", function () {
  blueSound.play();
  blueButton.addClass("pressed");
  removeClickedClass(blueButton);
});

redButton.on("click", function () {
  redSound.play();
  redButton.addClass("pressed");
  removeClickedClass(redButton);
});

yellowButton.on("click", function () {
  yellowSound.play();
  yellowButton.addClass("pressed");
  removeClickedClass(yellowButton);
});

greenButton.on("click", function () {
  greenSound.play();
  greenButton.addClass("pressed");
  removeClickedClass(greenButton);
});

const gameSequence = [];
const userSequence = [];
const colorOptions = ["red", "green", "yellow", "blue"];

function randomColor() {
  randomColorIndex = Math.floor(Math.random() * colorOptions.length);
  currentColor = colorOptions[randomColorIndex];
  console.log("The current color is " + currentColor);
  const randomColorSound = new Audio(`./sounds/${currentColor}.mp3`);
  const randomColorButton = $(`#${currentColor}`);
  randomColorButton.slideUp().slideDown();
  randomColorSound.play();
  return currentColor;
}

function game() {
  gameSequence.push(randomColor());
  console.log("This is the Game Sequence " + [gameSequence]);
}

$(document).on("keypress", function () {
  game();
});
