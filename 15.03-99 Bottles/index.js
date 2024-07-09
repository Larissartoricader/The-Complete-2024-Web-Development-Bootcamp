const bodyElement = document.querySelector("body");
const bottles = [];
let count = 1;

function beerGame() {
  while (count <= 100) {
    bottles.push(101 - count);
    console.log(bottles);
    count++;
    const aBottleLess = bottles[bottles.length - 1] - 1;
    const bottlesNr = document.createElement("h2");
    bottlesNr.textContent = `${
      bottles[bottles.length - 1]
    } bottles of beer on the wall, ${
      bottles[bottles.length - 1]
    } bottles of beer. Take one down and pass it around, ${aBottleLess} bottle of beer on the wall`;
    bodyElement.append(bottlesNr);
  }
}
beerGame();
