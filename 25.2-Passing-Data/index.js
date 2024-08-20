import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const numberOfLetters = firstName.length + lastName.length;
  res.render("index.ejs", {
    name: `${firstName}  ${lastName}`,
    number: numberOfLetters,
  });

  console.log(`${firstName} ${lastName}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});