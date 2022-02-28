const data = require("./../models/getDB").getDB();
const delDb = require("./../models/delDB").delDB;

exports.delData = (req, res, next) => {
  matchBlogs = data.data.filter(({ id }) => id == req.query.id);
  if (matchBlogs.length) {
    try{
        delDb(data,req.query.id);
    }catch(err){
        console.error(err);
        res.status(500).send();
        return
    }
    res.send("Blog deleted");
  } else {
    res
      .status(404)
      .send(
        "Blog not found. must have been deleted earlier or not created in the first place."
      );
  }
};
