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

// make a get request with id
app.get("/estates/:id", (req, res) => {
  const { id } = req.params;
  const estate = db.estates.filter((estate) => estate.id == id);
  console.log(estate);
  res.json(estate);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
