const patchDB = require("./../models/patchDB").patchDB;
const data = require("./../models/getDB").getDB();
const validate = require("./validateBlog").validateNew;

exports.updateData = (req, res, next) => {
  var check = data.data.filter(({ id }) => {
    // console.log(
    //   Number(id),
    //   Number(req.query.id),
    //   Number(id) === Number(req.query.id)
    // );
    return Number(id) === Number(req.query.id);
  }).length;
  if (check) {
    if (validate(req.body)) {
      try {
        console.log(req.body);
        patchDB(data, req.query.id, req.body);
      } catch (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send("Blog updated!")
    } else {
      res.status(404).send("Invalid Blog!");
    }
  } else {
    res.status(404).send("Couldn't find the blog!");
  }
};
