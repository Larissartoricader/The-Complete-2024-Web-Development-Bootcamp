const listElement = document.querySelector("ul").lastElementChild;
console.log(listElement);

listElement.innerHTML = "Larissa";

const googleListElement = document.querySelector(".list a");
console.log(googleListElement);
googleListElement.style.color = "red";

const buttonColor = document.querySelector("button");
buttonColor.style.backgroundColor = "yellow";

const heading = document.querySelector("h1");
console.log(heading);
heading.classList.add("huge");
