
const userschema=require("../models/userschema")
const bcrypt=require("bcrypt")

const twilio=require("../utility/Otp/twilo")
const varifyotp=require("../utility/Otp/twilioOtpvarify")
const routerObj={
    signup: async (req, res) => {
      const {restaurantName, userName,contact,email,password,otp,sendViaPhone}=req.body

      try{
        const hashedPass=await bcrypt.hash(password,10)
        console.log(hashedPass);
        const newUser = {
          restaurantName:restaurantName,
          userName:userName,
          contact:sendViaPhone? contact:email ,
          password:hashedPass,
          
        };
        

        await  userschema.insertMany(newUser);
        res.status(200)

      }catch(err){
        res.status(500).json({message:"Internal server error"})
        console.log(err);
      }
      },

      sentotp:async (req,res)=>{
        try{
          const {contact}=req.body
          console.log(contact);
          twilio(contact)
        
          res.status(200).json({message:"otp sent successfully"})
        }catch(error){
          res.status(404).json({status:false});
        }
      },

      varifyOTP:async (req,res)=>{
        try{
          const {otp,contact}=req.body
          console.log(otp,contact);
          varifyotp(contact,otp)
          res.status(200).json({message:"otp varified successfully"})
        }catch{
          res.status(404).json({status:false});
        }
      }

}
module.exports=routerObj