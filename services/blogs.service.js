const { ObjectId } = require('mongodb');
const Blogs = require('../models/blogs')

module.exports.getBlogsServices = async () => {
    const result = await Blogs.find({})
    return result;
}


module.exports.postBlogServices = async (blog) => {
    const result = await Blogs.create(blog);
    return result;
}

module.exports.updateBlogService = async (id, doc) => {
    const result = await Blogs.updateOne({ _id: ObjectId(id) }, { $set: doc })
    return result;
}

module.exports.deleteBlogService = async (id) => {
    const result = await Blogs.deleteOne({ _id: id })
    return result;
}