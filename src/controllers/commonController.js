
const userschema=require("../models/userschema")
const bcrypt=require("bcrypt")
const routerObj={
    signup: async (req, res) => {
      const {restaurantName, userName,contact,password,otp}=req.body
      try{
        const hashedPass=await bcrypt.hash(password,10)
        console.log(hashedPass);
      }catch(err){
        console.log(err);
      }
      }
}
module.exports=routerObj