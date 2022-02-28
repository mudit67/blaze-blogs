const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

// const getDB = require("./models/getDB").getDB;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

const fetchData = require("./controller/fetchData").fetchData;
const appendData = require("./controller/appendData").appendData;

app.get("/fetchAll", fetchData);

app.post("/append",bodyParser.json(), appendData);

app.use("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
