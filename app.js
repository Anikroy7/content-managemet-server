const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require("cors");
mongoose.set('strictQuery', true);
const app = express()
const port = process.env.PORT || 8080;
const blogsRouter = require('./routes/blogs.route')

// middleware 
app.use(express.json());
app.use(cors())

//routes
app.use('/api/v1/blogs', blogsRouter)


mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('connected to db sccessfull');
    })
    .catch((err) => {
        console.log(err.message);
    });


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Content management server is running at ${port}`);
})