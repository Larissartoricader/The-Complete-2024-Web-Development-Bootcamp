import pickRandomColor from "./pickRandomColor.js";

$(document).on("keypress", function () {
  pickRandomColor();
});

$(".btn").click(function () {
  const userClickedColor = $(this).attr("id");
  console.log("The user Color is " + userClickedColor);
});
