const form = document.querySelector('[data-js="form"]');
const namesContainer = document.querySelector('[data-js="names-container"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const values = Object.fromEntries(formData);
  const nameOne = event.target.elements.name1.value;
  const nameTwo = event.target.elements.name2.value;

  //   const firstName = document.createElement("h2");
  //   firstName.textContent = nameOne;
  //   namesContainer.append(firstName);

  console.log(values);

  console.log(nameOne + " + " + nameTwo);

  window.location.href = "love.html";
});
