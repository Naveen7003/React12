require("dotenv").config({path: "./.env"});
const express = require('express')
const app =  express();

//db connection
require("./models/dbconfig").dbconnection();

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`)
})