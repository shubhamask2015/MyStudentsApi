const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://localhost:27017/students-api",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected successfully to database!")
}).catch((e)=>{
    console.log("not connected to database: "+e)
})