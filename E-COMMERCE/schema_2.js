//module_2 schemaFile-2

const mongoose=require('mongoose')
const Validation=new mongoose.Schema({
    userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"commerce",
       },
    Title:String,
    ImageURL:String,
    Description:String,
    Price:String,
    Available:{
        type:String,
      enum: ['Available','Not_Available']
    },

})

module.exports=mongoose.model('e_commerce',Validation)