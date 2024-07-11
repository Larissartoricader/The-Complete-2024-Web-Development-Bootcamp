// const buttonW = document.querySelector(".w");
// const buttonA = document.querySelector(".a");
// const buttonS = document.querySelector(".s");
// const buttonD = document.querySelector(".d");
// const buttonJ = document.querySelector(".j");
// const buttonK = document.querySelector(".k");
// const buttonL = document.querySelector(".l");
const allButtons = document.querySelectorAll("button");

const audio = new Audio("./sounds/tom-1.mp3");

allButtons.forEach((button) => {
  button.addEventListener("click", () => audio.play());
});
