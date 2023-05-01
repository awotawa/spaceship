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

app.get("/astronauts/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const astronaut = astronauts.find((astronaut) => astronaut.id === id);
  console.log(astronaut);
  if (astronaut === undefined) {
    res.status(404).json("The requested astronaut was not found.");
  } else {
    res.status(200).json(astronaut);
  }
});
