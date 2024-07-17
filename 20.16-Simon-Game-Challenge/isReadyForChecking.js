import { checkingAnswer } from "./checkingAnswer.js";
import { level } from "./memory.js";

export function isReadyForChecking(par1, par2) {
  console.log(par2);
  console.log(par1);
  if (
    par2.length === level &&
    par1.length === level &&
    par2.length === par1.length
  ) {
    console.log("Answer can be checked");
    checkingAnswer(par1, par2);
  } else {
    console.log("Waiting for the click from user");
  }
}
