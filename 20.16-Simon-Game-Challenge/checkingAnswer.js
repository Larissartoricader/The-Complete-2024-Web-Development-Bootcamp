import pickRandomColor from "./pickRandomColor.js";
import { gameSequence } from "./memory.js";
import { userSequence } from "./memory.js";
import { userPickedColor } from "./userColor.js";
import { isReadyForChecking } from "./isReadyForChecking.js";

export function checkingAnswer(par1, par2) {
  if (par1.join() === par2.join()) {
    console.log("Right! Same Sequence, Game goes on");
  } else {
    console.log("Game over");
    const wrongSound = new Audio(`./sounds/wrong.mp3`);
    wrongSound.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over!!!");
    $("body").animate({ opacity: 0.0 }, 500, function () {
      $(this).css("opacity", "");
      $("body").removeClass("game-over");
      $("h1").text("Press A Key to Start");
    });
  }
}
