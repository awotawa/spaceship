const express = require("express");
const app = express();

const astronauts = require("./astronauts.json");

const port = 3000;

app.listen(port, () => {
  console.log(`Spaceship app listening at http://localhost:${port}`);
});

app.get("/astronauts", function (req, res) {
  res.status(200).json(astronauts);
  console.log(astronauts);
});
