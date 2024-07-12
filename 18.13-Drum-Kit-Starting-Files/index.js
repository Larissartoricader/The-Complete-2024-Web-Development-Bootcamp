const allButtons = document.querySelectorAll("button");

function makeSound(classButton) {
  switch (true) {
    case classButton.includes("w"):
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case classButton.includes("a"):
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case classButton.includes("s"):
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case classButton.includes("d"):
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case classButton.includes("j"):
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case classButton.includes("k"):
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case classButton.includes("l"):
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log("Something Wrong " + classButton);
  }
}

function buttonAnimation(currentKey) {
  let currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 500);
}

// SOLUTION with Keypress
document.addEventListener("keypress", function (event) {
  let classButton = event.key;
  makeSound(classButton);
  console.log(classButton);
  buttonAnimation(classButton);
});

// SOLUTION with Click

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let classButton = button.className.slice(0, 1);
    makeSound(classButton);
    console.log(classButton);
    buttonAnimation(classButton);
  });
});
