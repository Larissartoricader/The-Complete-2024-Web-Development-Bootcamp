import { checkingAnswer } from "./checkingAnswer.js";

export function isReadyForChecking(par1, par2) {
  console.log(par2);
  console.log(par1);
  if (par2.length > 0 && par1.length > 0 && par2.length === par1.length) {
    console.log("confira resposta");
    checkingAnswer(par1, par2);
  } else {
    console.log("nada");
  }
}
