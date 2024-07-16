import pickRandomColor from "./pickRandomColor.js";
import { userPickedColor } from "./userColor.js";
import { isReadyForChecking } from "./isReadyForChecking.js";

const gameSequence = [];
const userSequence = [];

$(document).on("keypress", function () {
  gameSequence.push(pickRandomColor());
});

$(".btn").on("click", function () {
  const currentButton = $(this);
  userSequence.push(userPickedColor(currentButton));
  isReadyForChecking(userSequence, gameSequence);
});
