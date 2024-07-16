const colorOptions = ["red", "green", "yellow", "blue"];
const gameSequence = [];
const userSequence = [];

const blueSound = new Audio("./sounds/blue.mp3");
const redSound = new Audio("./sounds/red.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");
const greenSound = new Audio("./sounds/green.mp3");

const blueButton = $("#blue");
const redButton = $("#red");
const yellowButton = $("#yellow");
const greenButton = $("#green");

$(document).on("keypress", function () {
  startGame();
});

function startGame() {
  game();
  $(".btn").click(function () {
    const userClickedColor = $(this).attr("id");
    console.log("The current User Color " + userClickedColor);
    userSequence.push(userClickedColor);
    console.log("The User Sequence " + userSequence);
    const userClickedColorSound = new Audio(`./sounds/${userClickedColor}.mp3`);
    userClickedColorSound.play();
    userClickedColorButton = $(`#${userClickedColor}`);
    userClickedColorButton.addClass("pressed");
    removeClickedClass(userClickedColorButton);
    if (userSequence.length === gameSequence.length) {
      checkSequences();
    } else {
      none;
    }
  });
}

function game() {
  randomColor();
}

// Random Color
function randomColor(gameSequence) {
  randomColorIndex = Math.floor(Math.random() * colorOptions.length);
  currentColor = colorOptions[randomColorIndex];
  gameSequence.push(currentColor);
  const randomColorSound = new Audio(`./sounds/${currentColor}.mp3`);
  randomColorSound.play();
  const randomColorButton = $(`#${currentColor}`);
  randomColorButton.fadeOut(20).fadeIn(20);

  console.log("The current color is " + currentColor);
  console.log("The current Game Sequence " + gameSequence);

  return currentColor;
}

// User Color
function userColor() {}

// Checking Sequences
function checkSequences() {
  console.log(gameSequence);
  console.log(gameSequence.join());
  console.log(userSequence);
  console.log(userSequence.join());

  if (userSequence.join() === gameSequence.join()) {
    console.log("Same sequence!!!!");
    game();
  } else if (userSequence.length === gameSequence.length) {
    const wrongSound = new Audio(`./sounds/wrong.mp3`);
    wrongSound.play();
    wrongSound.onended = function () {
      resetGame();
    };
  }
}

function removeClickedClass(buttonName) {
  setTimeout(function () {
    buttonName.removeClass("pressed");
  }, 200);
}

function resetGame() {
  userSequence = [];
  gameSequence = [];
  // Reiniciar outras variáveis de estado conforme necessário
  startGame(); // Assumindo que startGame() inicia o jogo novamente
}

// Aguarda o som terminar de tocar antes de reiniciar o jogo

// blueButton.on("click", function () {
//   blueSound.play();
//   blueButton.addClass("pressed");
//   removeClickedClass(blueButton);
//   userSequence.push("blue");
//   console.log(userSequence);
// });

// redButton.on("click", function () {
//   redSound.play();
//   redButton.addClass("pressed");
//   removeClickedClass(redButton);
//   userSequence.push("red");
//   console.log(userSequence);
// });

// yellowButton.on("click", function () {
//   yellowSound.play();
//   yellowButton.addClass("pressed");
//   removeClickedClass(yellowButton);
//   userSequence.push("yellow");
//   console.log(userSequence);
// });

// greenButton.on("click", function () {
//   greenSound.play();
//   greenButton.addClass("pressed");
//   removeClickedClass(greenButton);
//   userSequence.push("green");
//   console.log(userSequence);
// });

// $(document).ready(function () {
//   console.log("Load of the Game Sequence " + [gameSequence]);
//   console.log("Load of the User Sequence " + [userSequence]);
// });
