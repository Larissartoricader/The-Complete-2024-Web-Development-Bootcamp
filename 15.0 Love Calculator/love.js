const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  localStorage.setItem(
    "formData",
    JSON.stringify(Object.fromEntries(formData))
  );
  window.location.href = "love.html";
});

const namesContainer = document.querySelector('[data-js="names-container"]');
const formData = JSON.parse(localStorage.getItem("formData"));

namesContainer.textContent = `Name 1: ${formData.name1}, Name 2: ${formData.name2}`;

const loveScoreBox = document.querySelector('[data-js="love-score"]');

function loveCalculator() {
  const n = Math.random();
  const nTo100 = n * 100;
  const loveScore = Math.floor(nTo100) + 1;

  loveScoreBox.textContent = loveScore;
}

loveCalculator();
