$(document).ready(function () {
  $("h1").addClass("new-h1").text("Good Bye");

  $("body").removeClass("new-body");

  $("button").css("background-color", "red");

  $("footer").html("<h2>Inserted HTML from JQuery</h2>");

  $("a").text("Yahoo it").attr("href", "https://yahoo.com");
});

$("h1").click(function () {
  if ($("h1").text() === "Hello Again") {
    $("h1").text("Good Bye");
  } else {
    $("h1").text("Hello Again");
  }
});

$("button").click(function () {
  $("h1").css("color", "red");
});

$("input").keypress(function (event) {
  const letter = event.key;
  $("h1").text(letter);
});
