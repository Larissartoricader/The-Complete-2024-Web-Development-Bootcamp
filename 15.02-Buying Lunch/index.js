const nameBox = document.querySelector('[data-js="namebox"]');
console.log(nameBox);
const button = document.querySelector('[data-js="button"]');
console.log(button);
const guest = [
  "alex",
  "michael",
  "samantha",
  "olivia",
  "ethan",
  "sophia",
  "daniel",
  "emily",
  "jackson",
];

function buyingDinner() {
  console.log("hello");
  const nrOfGuest = guest.length;
  console.log(nrOfGuest);
  const index = Math.round(Math.random() * (nrOfGuest - 1));
  console.log(index);
  const currentDinnerBuyer = guest[index];
  console.log(currentDinnerBuyer);
  const name = document.createElement("h2");
  name.textContent = currentDinnerBuyer;
  nameBox.append(name);

  return currentDinnerBuyer;
}

button.addEventListener("click", () => {
  buyingDinner();
});
