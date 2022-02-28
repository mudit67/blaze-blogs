const getDB = require("./../models/getDB").getDB;

exports.fetchData = (req, res, next) => {
//   console.log(req.query);
  if (req.query.filter === "none") {
    res.send(getDB());
  }
  else{
      res.status(404).send('Not found!');
  }
};
