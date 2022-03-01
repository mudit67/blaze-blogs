const getDB = require("./../models/getDB").getDB;
const appendData = require("./../models/postDB").postDB;
const validateBlog = require("./validateBlog").validateNew;
exports.appendData = (req, res, next) => {
  if (validateBlog(req.body)) {
    try {
      appendData(getDB(), req.body);
    } catch (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send("Blog uploaded!");
  } else {
    res.status(400).send("Invalid Data!");
  }
};
