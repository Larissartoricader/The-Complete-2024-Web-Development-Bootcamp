import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("url " + req.url);
  console.log("Method " + req.method);
  console.log("IP " + req.ip);
  console.log("Hostname " + req.hostname);
  console.log("Protocol " + req.protocol);
  console.log("Body " + req.body);
  console.log("Query " + req.query);
  console.log("Headers " + req.headers);
  console.log("Path " + req.path);
  console.log("Response Time " + req.responseTime);
  console.log("Cookies " + req.cookies);
  console.log("Referrer " + req.referrer);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
