require("dotenv").config({path: "./.env"});
const express = require('express')
const app =  express();

//db connection
require("./models/dbconfig").dbconnection();

//routes
const userRouter = require('./routes/userRoute');

//logger
const logger = require('morgan');
app.use(logger("tiny"));

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/user", userRouter);
app.all("*", (req, res, next)=>{
    res.status(404).json({
        success:false,
        message: `${req.url} route not found`,
    })
})





app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`)
})