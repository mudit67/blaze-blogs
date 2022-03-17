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
app.use(bodyParser.json());
// Router imports
const apiRoutes = require('./routes/apiRoutes');
const pageRoutes = require('./routes/pageRoutes');

// Routes
app.use(apiRoutes);
app.use(pageRoutes);


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