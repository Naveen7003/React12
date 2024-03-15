const express = require('express');
const router = express.Router();

const {home, createuser}= require('../controllers/userControllers');


router.get("/", home)

router.post("/create", createuser);


module.exports = router;