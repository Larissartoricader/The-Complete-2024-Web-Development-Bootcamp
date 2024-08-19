// console.log("helllo");
// const date = new Date();
// const numberOfWeek = date.getDay();

// const weekend = "It's Weekend. Let's have fun";
// const weekday = "It's weekday. Let's work hard";

// function dayOfWeek() {
//   if (numberOfWeek == 0 || numberOfWeek == 6) {
//     return console.log(weekend);
//   } else {
//     console.log(weekday);
//   }
// }

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
