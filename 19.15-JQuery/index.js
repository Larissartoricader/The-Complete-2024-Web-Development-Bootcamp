$(document).ready(function () {
  $("h1").after("<h2>Dom Manipulation</h2>");
  $("h2").after(
    "Using $ is possible to select one or all html selector. You can use the methode .before or .after to decide where the new html selectors should be places. Be aware that jQuery also offers append and prepend. Those place the new html code inside the selected html selector, like < paragraf > < newselector >Text < paragraf >. Preppend places it at the begging the selected html and append at end of the selected html"
  );

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
  $("h1")
    .slideUp()
    .slideDown()
    .slideUp()
    .slideDown()
    .slideUp()
    .slideDown()
    .slideUp()
    .slideDown()
    .slideUp()
    .slideDown()
    .slideUp()
    .slideDown()
    .animate({ margin: "25%" });
  // hide
  // show
  // toggle
  // fadeIn
  // fadeOut
  // slideUp
  // slideDown
  // slideToggle
  // animate (only number) .animate({ margin: "50%" })
});

$("input").keypress(function (event) {
  const letter = event.key;
  $("h1").text(letter);
});

$("footer").on("mouseover", function () {
  $("body").css("background-color", "hotpink");
});

$("a").before("<h2>A New Headline from jQuery before selector a");
$("a").after("<h2>A New Headline from jQuery after selector a");
$("p").prepend("Text Preprend => ");
$("p").append(" <button> <= Append </button");
