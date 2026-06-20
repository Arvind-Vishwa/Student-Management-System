const express=require('express')
const app=express();
const connectDB=require("./db/db")
const Student=require('./models/student.model')

// API for the CRUD

// GET POST PATCH DELETE

app.use(express.json())
app.use(cors())


connectDB();

app.get('/',async(req,res)=>{
    const students=await Student.find();
    res.json(students)
})

app.post('/form',async(req,res)=>{
    const student=await Student.create(req.body);
    res.json(student)
})

app.put('/:id',async(req,res)=>{
    const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.json(student)
})

app.delete('/:id',async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id)
    return res.json({message:"Student Deleted"})
})


app.listen(3000,()=>{
    console.log('Server is created');
})