// Imports
const express = require("express");
const bodyParser = require("body-parser");
const moongoose = require("mongoose");
require("dotenv").config();

// constants for the entire app
const uri = process.env.DB_URI;
const app = express();
const port = 8000;

// body parser to decode the body of the incomings requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Controllers
const addBlog = require('./controller/addBlog');
const getBlog = require('./controller/getBlog').fetchBlog;
const fetchData = require("./controller/fetchData").fetchData;
const appendData = require("./controller/appendData").appendData;
const delData = require("./controller/delData").delData;
const updateData = require("./controller/updateData").updateData;

// Routes
app.get("/fetchAll", fetchData);

app.post("/append", bodyParser.json(), appendData);

app.post('/addBlog', bodyParser.json(),addBlog);
app.get('/getBlog',getBlog);

app.delete("/del", delData);

app.patch("/update", updateData);

app.use("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to Database
moongoose
  .connect(uri)
  .then(() => {
    console.log("Database connection established!");
    // Server
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });