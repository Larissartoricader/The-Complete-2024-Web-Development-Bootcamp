export default function pickRandomColor() {
  const optionsOfColors = ["red", "green", "blue", "yellow"];
  const indexOfRandomColor = Math.floor(Math.random() * optionsOfColors.length);

  const randomColor = optionsOfColors[indexOfRandomColor];
  console.log("The random choose Color is " + randomColor);
  const randomColorSound = new Audio(`./sounds/${randomColor}.mp3`);
  randomColorSound.play();
  const randomColorButton = $(`#${randomColor}`);
  randomColorButton.fadeOut(20).fadeIn(20);
  return randomColor;
}
