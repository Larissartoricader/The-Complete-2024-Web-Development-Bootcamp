import { gameSequence } from "./memory.js";
import { userSequence } from "./memory.js";
import { level, clicksNeeded } from "./memory.js";
import { nextLevel } from "./memory.js";

export function checkingAnswer(par1, par2) {
  if (par1.join() === par2.join()) {
    console.log("Right! Same Sequence, Game goes on");
    par1.length = 0;
    nextLevel();
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
    setTimeout(() => {
      gameSequence.length = 0;
      userSequence.length = 0;
      clicksNeeded = 0;
      $("h1").text("Press A Key to Start");
    }, 1500);
  }
}
