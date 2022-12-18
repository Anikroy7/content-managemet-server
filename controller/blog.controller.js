const { getBlogsServices, postBlogServices, updateBlogService, deleteBlogService } = require("../services/blogs.service");

module.exports.getBlogs = async (req, res, next) => {

    // const blogs = req.body;

    try {
        const result = await getBlogsServices();
        res.status(200).json({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: "Failed to get blogs",
            message: error.message
        })
    }
}
module.exports.createBlog = async (req, res, next) => {
    // res.send('hitted create blogs'); 

    try {
        const blog = req.body;
        const result = await postBlogServices(blog);
        // console.log(result);
        res.status(200).send({
            status: "Success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "Failed",
            error: "Failed to insert blogs",
            message: error.message
        })
    }

}

module.exports.updateBlog = async (req, res, next) => {
    // res.send('hitted create blogs'); 

    try {
        const blog = req.body;
        const { id } = req.params;
        const result = await updateBlogService(id, blog);
        console.log(result, 'again');
        // console.log(result);
        res.status(200).send({
            status: "Success to update",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "Failed",
            error: "Failed to insert blogs",
            message: error.message
        })
    }

}
module.exports.deleteBlog = async (req, res, next) => {
    // res.send('hitted create blogs');

    try {
        const blog = req.body;
        const { id } = req.params;
        const result = await deleteBlogService(id);

        res.status(200).send({
            status: "Success to Delete",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: "Failed",
            error: "Failed to Delete blog",
            message: error.message
        })
    }

}