const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;