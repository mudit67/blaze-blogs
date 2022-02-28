const getDB = require("./../models/getDB").getDB;
const appendData = require("./../models/postDB").postDB;
exports.appendData = (req, res, next) => {
  if (validateData(req.body)) {
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

function validateData(reqBody) {
  if (reqBody.author) {
    if (reqBody.content) {
      return true;
    }
    return false;
  }
  return false;
}
