const express = require('express');
const blogsController = require('../controller/blog.controller')

const router = express.Router();

router.route('/')
    .get(blogsController.getBlogs)
    .post(blogsController.createBlog)

router.route('/:id')
    .patch(blogsController.updateBlog)
    .delete(blogsController.deleteBlog)


module.exports = router;    