import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

function typeOfDay() {
  const today = new Date();
  const numberOfToday = today.getDay();
  if (numberOfToday === 0 || numberOfToday === 6) {
    return "it's Weekend. Let's celebrate";
  } else {
    return "It's weekday. Time to work hard";
  }
}

app.get("/", (req, res) => {
  res.render("index", { typeOfDay: typeOfDay() });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
