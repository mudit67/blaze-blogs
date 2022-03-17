const express = require('express');

// Controller imports
const getBlog = require('../controller/getBlog');
const addBlog = require('../controller/addBlog');
const delBlog = require('../controller/delBlog');
const updateBlog = require('../controller/updateBlog');


const router = express.Router();

router.post('/addBlog',addBlog);
router.get('/getBlog',getBlog.fetchBlog);
router.get('/getRecent', getBlog.fetchRecent);
router.delete('/delBlog', delBlog);
router.patch('/updateBlog', updateBlog);


module.exports = router;