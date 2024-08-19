//Bordyrparses is now part of express, I can use boryParses or express
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body.password);
  if (req.body.password === "IGotIt") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send(`
      <h1>Not Authorized, try again</h1>
      <p><a href="/">Back</a></p>
    `);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
