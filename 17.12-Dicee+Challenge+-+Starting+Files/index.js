function dice() {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  const heading = document.querySelector("h1");

  diceNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log("Dice Number 1 - " + diceNumber1);
  img1.setAttribute("src", `./images/dice${diceNumber1}.png`);

  diceNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log("Dice Number 2 - " + diceNumber2);
  img2.setAttribute("src", `./images/dice${diceNumber2}.png`);

  if (diceNumber1 > diceNumber2) {
    heading.textContent = "🚩 Player 1 wins";
  }
  if (diceNumber1 < diceNumber2) {
    heading.textContent = " Player 2 wins 🚩";
  }
  if (diceNumber1 === diceNumber2) {
    heading.textContent = "Draw";
  }
}

if (localStorage.getItem("hasLoadedBefore") === "true") {
  dice();
} else {
  localStorage.setItem("hasLoadedBefore", "true");
}
