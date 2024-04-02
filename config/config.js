const mongoose=require("mongoose")
const connect=mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("database is connected")
})
.catch((error)=>{
    console.error(TypeError);
    console.log("data base not connected");
})
module.exports=connect