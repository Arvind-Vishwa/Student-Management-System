require('dotenv').config()
const mongoose=require('mongoose')

async function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database is conneted")
    })



}

module.exports=connectDB