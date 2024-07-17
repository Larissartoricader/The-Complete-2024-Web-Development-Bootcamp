import { nextLevel } from "./memory.js";

export function checkingAnswer(par1, par2, nrOfLevels) {
  if (par1.join() === par2.join()) {
    console.log("Right! Same Sequence, Game goes on");
    par1.length = 0;
    nextLevel();
  } else {
    console.log("Game over");
    const wrongSound = new Audio(`./sounds/wrong.mp3`);
    wrongSound.play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press key to start over");
    $("body").animate({ opacity: 0.0 }, 500, function () {
      $(this).css("opacity", "");
      $("body").removeClass("game-over");
    });
    setTimeout(() => {
      $(document).one("keypress", () => {
        window.location.reload();
      });
    }, 1500);
  }
}
