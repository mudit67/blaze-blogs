const express = require("express");
const app = express();
const port = 8000;

// const getDB = require("./models/getDB").getDB;

const fetchData = require('./controller/fetchData').fetchData;

app.get("/fetchAll", fetchData);

// app.post("/append", (req,res) => {

// });

app.use("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
