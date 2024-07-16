export default function pickRandomColor() {
  const optionsOfColors = ["red", "green", "blue", "yellow"];
  const indexOfRandomColor = Math.floor(Math.random() * optionsOfColors.length);
  const chooseColor = optionsOfColors[indexOfRandomColor];
  console.log("The random choose Color is " + chooseColor);
  return chooseColor;
}
