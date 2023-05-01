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

/*
Use this if you want to use urlencoded format
app.use(
  express.urlencoded({
    extended: true,
  })
);
*/

// Use this if you want to use json format
app.use(express.json());

app.post("/astronauts", function (req, res) {
  const newAstronaut = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    nationality: req.body.nationality,
  };
  astronauts.push(newAstronaut);
  res.status(200).json(newAstronaut);
});

app.put("/astronauts/:id", function (req, res) {
  console.log(req.body);
  const id = parseInt(req.params.id);
  let astronaut = astronauts.find((astronaut) => astronaut.id === id);
  const editedAstronaut = { ...astronaut, ...req.body };
  astronaut.firstName = editedAstronaut.firstName;
  astronaut.lastName = editedAstronaut.lastName;
  astronaut.age = editedAstronaut.age;
  astronaut.nationality = editedAstronaut.nationality;
  res.status(200).json(astronaut);
});

