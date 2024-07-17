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
  }
}
