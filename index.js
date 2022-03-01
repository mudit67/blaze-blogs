// Imports
const express = require("express");
const bodyParser = require("body-parser");

// constants for the entire app
const app = express();
const port = 8000;

// body parser to decode the body of the incomings requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Controllers
const fetchData = require("./controller/fetchData").fetchData;
const appendData = require("./controller/appendData").appendData;
const delData = require('./controller/delData').delData;
const updateData = require('./controller/updateData').updateData;


// Routes
app.get("/fetchAll", fetchData);

app.post("/append",bodyParser.json(), appendData);

app.delete('/del', delData)

app.patch('/update', updateData);

app.use("/", (req, res) => {
  res.send("Hello World!");
});


// Server
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
