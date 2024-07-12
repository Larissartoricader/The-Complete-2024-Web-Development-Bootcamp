const allButtons = document.querySelectorAll("button");

// SOLUTION with SWITCH

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let classButton = button.className;
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

    // SOLUTION WITH IF/ELSE

    // let rightAudio;
    // const buttonClass = button.className;

    // if (buttonClass.includes("w")) {
    //   rightAudio = "./sounds/kick-bass.mp3";
    // } else if (buttonClass.includes("a")) {
    //   rightAudio = "./sounds/crash.mp3";
    // } else if (buttonClass.includes("s")) {
    //   rightAudio = "./sounds/snare.mp3";
    // } else if (buttonClass.includes("d")) {
    //   rightAudio = "./sounds/tom-1.mp3";
    // } else if (buttonClass.includes("j")) {
    //   rightAudio = "./sounds/tom-2.mp3";
    // } else if (buttonClass.includes("l")) {
    //   rightAudio = "./sounds/tom-3.mp3";
    // } else if (buttonClass.includes("l")) {
    //   rightAudio = "./sounds/tom-4.mp3";
    // }

    // if (rightAudio) {
    //   const audio = new Audio(rightAudio);
    //   audio.play();
    // }
  });
});

// const allButtons = document.querySelectorAll("button");

// allButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let rightAudio;
//     const buttonClass = button.className;

//     if (buttonClass.includes("w")) {
//       rightAudio = "./sounds/kick-bass.mp3";
//     } else if (buttonClass.includes("a")) {
//       rightAudio = "./sounds/crash.mp3";
//     } else if (buttonClass.includes("s")) {
//       rightAudio = "./sounds/snare.mp3";
//     } else if (buttonClass.includes("d")) {
//       rightAudio = "./sounds/tom-1.mp3";
//     } else if (buttonClass.includes("j")) {
//       rightAudio = "./sounds/tom-2.mp3";
//     } else if (buttonClass.includes("l")) {
//       rightAudio = "./sounds/tom-3.mp3";
//     } else if (buttonClass.includes("l")) {
//       rightAudio = "./sounds/tom-4.mp3";
//     }

//     if (rightAudio) {
//       const audio = new Audio(rightAudio);
//       audio.play();
//     }
//   });
// });
