const gameSequence = [];
const userSequence = [];
const colorOptions = ["red", "green", "yellow", "blue"];

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
  userSequence.push("blue");
  console.log(userSequence);
});

redButton.on("click", function () {
  redSound.play();
  redButton.addClass("pressed");
  removeClickedClass(redButton);
  userSequence.push("red");
  console.log(userSequence);
});

yellowButton.on("click", function () {
  yellowSound.play();
  yellowButton.addClass("pressed");
  removeClickedClass(yellowButton);
  userSequence.push("yellow");
  console.log(userSequence);
});

greenButton.on("click", function () {
  greenSound.play();
  greenButton.addClass("pressed");
  removeClickedClass(greenButton);
  userSequence.push("green");
  console.log(userSequence);
});

function randomColor() {
  randomColorIndex = Math.floor(Math.random() * colorOptions.length);
  currentColor = colorOptions[randomColorIndex];
  console.log("The current color is " + currentColor);
  const randomColorSound = new Audio(`./sounds/${currentColor}.mp3`);
  const randomColorButton = $(`#${currentColor}`);
  randomColorButton.fadeOut(10).fadeIn(10);
  randomColorSound.play();
  gameSequence.push(currentColor);

  return currentColor;
}

function game() {
  randomColor();
  console.log("The current Game Sequence is " + [gameSequence]);
  console.log("This current User Sequence is " + [userSequence]);

  $(".btn").click(function () {
    const clickedColor = $(this).attr("id");
    userSequence.push(clickedColor);
  });

  if (userSequence.join() === gameSequence.join()) {
    console.log("Same sequence");
    gameSequence.push(randomColor());
  } else if (userSequence.length === gameSequence.length) {
    const wrongSound = new Audio(`./sounds/wrong.mp3`);
    wrongSound.play();
  }
}

$(document).on("keypress", function () {
  game();
});

$(document).ready(function () {
  console.log("Load of the Game Sequence " + [gameSequence]);
  console.log("Load of the User Sequence " + [userSequence]);
});
