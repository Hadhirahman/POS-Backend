const express=require("express")
const app=express()
const PORT=process.env.PORT||5000
const bodyParser=require("body-parser")
require("dotenv").config()
const mongoose=require("./config/config")
const cors=require("cors")
const commonRoutes=require("./src/router/commonRouter")

// require("dotenv").config

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use("/",commonRoutes)

mongoose.then(()=>{
 app.listen(PORT,()=>{
        console.log("run with this PORT"+PORT);
    })
})