const fs = require("fs");

fs.writeFile("message2.txt", "Here is my Message from Node JS", (err) => {
  if (err) throw err;
  console.log("The file has been saved");
});
