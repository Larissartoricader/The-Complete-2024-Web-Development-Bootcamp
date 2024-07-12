const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let rightAudio;
    const buttonClass = button.className;

    if (buttonClass.includes("w")) {
      rightAudio = "./sounds/kick-bass.mp3";
    } else if (buttonClass.includes("a")) {
      rightAudio = "./sounds/crash.mp3";
    } else if (buttonClass.includes("s")) {
      rightAudio = "./sounds/snare.mp3";
    } else if (buttonClass.includes("d")) {
      rightAudio = "./sounds/tom-1.mp3";
    } else if (buttonClass.includes("j")) {
      rightAudio = "./sounds/tom-2.mp3";
    } else if (buttonClass.includes("l")) {
      rightAudio = "./sounds/tom-3.mp3";
    } else if (buttonClass.includes("l")) {
      rightAudio = "./sounds/tom-4.mp3";
    }

    if (rightAudio) {
      const audio = new Audio(rightAudio);
      audio.play();
    }
  });
});
