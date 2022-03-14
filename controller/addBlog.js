const Blog = require('../models/blogs');

module.exports = async function (req,res,next) {
    console.log(req.body);
    const {title,author, content,postDate} = req.body;
    const createBlog = new Blog({
        title,
        author,
        content,
        postDate
    });
    try{
        await createBlog.save();
    } catch(err) {
        res.status(400).send(Object.values(err.errors).map(({message}) => (message)));
        return;
    }
    res.status(201).json({ blog: createBlog });
}