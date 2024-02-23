const express=require("express")
const { signup, sentotp, varifyOTP } = require("../controllers/commonController")
const router=express.Router()

router.post("/signup",signup)
router.post("/send-otp",sentotp)
router.post("/varifyOtp",varifyOTP)

module.exports=router