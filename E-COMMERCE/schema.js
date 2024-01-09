
// Module file

const mongoose=require('mongoose')
const validation=new mongoose.Schema({
    User:String,
    Email:String,
    Password:String
    
})
module.exports=mongoose.model("commerce",validation)