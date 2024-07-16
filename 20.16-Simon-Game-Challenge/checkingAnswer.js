export function checkingAnswer(par1, par2) {
  if (par1.join() === par2.join()) {
    console.log("Same Sequence, Game goes on");
  } else {
    console.log("Game over");
  }
}
