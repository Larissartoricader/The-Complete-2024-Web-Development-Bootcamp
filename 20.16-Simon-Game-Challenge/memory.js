import pickRandomColor from "./pickRandomColor.js";
import { userPickedColor } from "./userColor.js";
import { isReadyForChecking } from "./isReadyForChecking.js";

export const gameSequence = [];
export let userSequence = [];
export let level = 0;
export let clicksNeeded = 0;

$(document).on("keypress", function () {
  if (userSequence.length === 0) {
    nextLevel();
  }
});

$(".btn").on("click", function () {
  if (userSequence.length < clicksNeeded) {
    const currentButton = $(this);
    userSequence.push(userPickedColor(currentButton));

    isReadyForChecking(userSequence, gameSequence);
  }
});

export function nextLevel() {
  userSequence = [];
  level++;
  $("h1").text(`Level: ${level}`);
  clicksNeeded = level;
  gameSequence.push(pickRandomColor());
  playGameSequence();
}

export function playGameSequence() {
  let i = 0;

  function playNextColor() {
    if (i < gameSequence.length) {
      setTimeout(() => {
        $(`.btn[data-color="${gameSequence[i]}"]`).addClass("highlight");
        setTimeout(() => {
          $(`.btn[data-color="${gameSequence[i]}"]`).removeClass("highlight");
          i++;
          playNextColor();
        }, 1000);
      }, 1000);
    } else {
    }
  }

  playNextColor();
}
