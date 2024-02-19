const express=require("express")
const { signup } = require("../controllers/commonController")
const router=express.Router()

router.post("/signup",signup)

module.exports=router