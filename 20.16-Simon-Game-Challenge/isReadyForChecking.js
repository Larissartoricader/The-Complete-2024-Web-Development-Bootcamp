import { checkingAnswer } from "./checkingAnswer.js";

export function isReadyForChecking(par1, par2, nrOfLevels) {
  console.log(par2);
  console.log(par1);
  if (
    par2.length === nrOfLevels &&
    par1.length === nrOfLevels &&
    par2.length === par1.length
  ) {
    console.log("Answer can be checked");
    checkingAnswer(par1, par2, nrOfLevels);
  } else {
    console.log("Waiting for the click from user");
  }
}
