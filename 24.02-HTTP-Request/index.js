import express, { request, response } from "express";

const app = express();
const port = 4000;

app.listen(port, () => console.log(`Serv<<er running on port ${port}!`));

app.get("/", (request, response) => {
  response.send("<h1>Hello, World AGAIN !</h1>");
});

app.get("/about", (request, response) => {
  response.send("<h1>About me</h1>");
});

app.get("/contact", (request, response) => {
  response.send("<h1>Contact</h1>");
});
