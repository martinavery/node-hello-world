const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger())
app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello, world!"
    })
})

module.exports = app;
