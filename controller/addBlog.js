const Blog = require('../models/blogs');

module.exports = async function (req,res,next) {
    console.log(req.body);
    const {title,author, content,postDate} = req.body;
    const createBlog = new Blog({
        title:title,
        author:author,
        content:content,
        postDate:postDate
    });
    try{
        await createBlog.save();
    } catch(err) {
        // const error = new HttpError('blog post failed', 500);
        // return next(err);
        console.error(err);
        res.status(500).send({});
        return;
    }
    res.status(201).json({ blog: createBlog });
}