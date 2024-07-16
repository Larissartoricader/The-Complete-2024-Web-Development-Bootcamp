export function userPickedColor(currentButton) {
  const userClickedColor = $(currentButton).attr("id");
  console.log("The user Color is " + userClickedColor);

  return userClickedColor;
}
