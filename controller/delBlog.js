const Blog = require("../models/blogs");

module.exports = async function (req, res) {
  const { id } = req.query;
  let blog;
  try {
    blog = await Blog.findById(id).exec();
  } catch (err) {
    console.error(err);
    res.status(500).send();
    return;
  }
  if (!blog) {
    res.status(404).send();
  } else {
    try {
      await blog.remove();
    } catch (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(JSON.stringify({message: "Blog deleted!"}));
  }
};
