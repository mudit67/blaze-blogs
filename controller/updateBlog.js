const Blog = require("../models/blogs");

module.exports = async function (req, res) {
  const { id } = req.query;
  const { title, content } = req.body;
  let blog;
  try {
    blog = await Blog.findById(id).exec();
  } catch (err) {
    console.error(err);
    res.status(500).send();
    return;
  }
  if (!blog) {
    res.status(404).send("Blog not found!");
    return;
  } else {
    if (
      (blog.title !== title || blog.content !== content) &&
      (title || content)
    ) {
      if (title) {
        blog.title = title;
      }
      if (content) {
        blog.content = content;
      }
      try {
        await blog.save();
      } catch (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.status(200).send(blog.toObject());
    } else {
      res.status(404).send("No change detected!");
    }
  }
};
