const Blog = require("../models/blogs");

exports.fetchBlog = async function (req, res) {
  console.log(req.query);
  if (req.query.id) {
    let blogMatch;
    try {
      if (req.query.l) {
        blogMatch = await Blog.findById(req.query.id).exec();
      } else {
      }
      // console.log(await Blog.findOne({_id: req.}))
    } catch (err) {
      res.status(500).send(err);
      return;
    }
    if (!blogMatch) {
      res.status(404).send("ID not found!");
    } else {
      res.status(200).send(JSON.stringify(blogMatch));
    }
  } else if (req.query.author) {
    let blogMatch;
    try {
      if (req.query.l) {
        blogMatch = await Blog.find({ author: req.query.author })
          .limit(req.query.l)
          .sort("-postDate")
          .exec();
      } else {
        blogMatch = await Blog.find({ author: req.query.author })
          .sort("-postDate")
          .exec();
      }
    } catch (err) {
      res.status(500).send(err);
      return;
    }
    if (!blogMatch) {
      res.status(404).send("Author not found!");
    } else {
      res.status(200).send(JSON.stringify(blogMatch));
    }
  } else {
    res.status(400).send();
  }
};
