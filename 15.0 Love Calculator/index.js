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
