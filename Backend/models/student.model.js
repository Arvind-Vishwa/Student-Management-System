const mongoose=require('mongoose')


const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }

})

const studentModel=mongoose.model("student",StudentSchema)

module.exports=studentModel;