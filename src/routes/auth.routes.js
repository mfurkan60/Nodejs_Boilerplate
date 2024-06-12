const router = require("express").Router();
const {login, register} = require("../contorllers/auth.controller")


router.post("/login", login)   //api/register diye ulaşmalı

router.post("/register" , register) // api/register diye ulaşmalı



module.export = router 


