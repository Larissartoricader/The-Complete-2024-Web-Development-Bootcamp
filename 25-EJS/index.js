import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.render(__dirname + "/views/index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// console.log("helllo");
//

// const weekend = "It's Weekend. Let's have fun";
// const weekday = "It's weekday. Let's work hard";

// function dayOfWeek() {
//   if (numberOfWeek == 0 || numberOfWeek == 6) {
//     return console.log(weekend);
//   } else {
//     console.log(weekday);
//   }
// }
