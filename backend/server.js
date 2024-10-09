const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = require("./db.json");

// make a get request from db
app.get("/estates", (req, res) => {
  console.log("Get request received");
  res.json(db);
});

// make a specified get request from db
app.get("/estates/:id", (req, res) => {
  console.log("Get request received");
  const id = req.params.id;
  const estate = db.find((estate) => estate.id == id);
  res.json(estate);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
