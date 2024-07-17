export function userPickedColor(currentButton) {
  const userClickedColor = $(currentButton).attr("id");
  console.log("The user Color is " + userClickedColor);
  const userClickedColorSound = new Audio(`./sounds/${userClickedColor}.mp3`);
  userClickedColorSound.play();
  currentButton.addClass("pressed");
  setTimeout(function () {
    currentButton.removeClass("pressed");
  }, 200);
  return userClickedColor;
}
