const express = require("express");
const app = express();
app.use(express.json())
require("./db/conn")
const StudentDetails = require("./models/student")

//Create Student Document using promises
// app.post('/api/students',(req,res)=>{
//     const userDetails = new StudentDetails(req.body)
//     userDetails.save().then(()=>{
//         res.status(201).send(userDetails);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
// })

//Create Student Document using async awati
app.post('/api/students', async (req,res)=>{
    try{
        const userDetails = new StudentDetails(req.body)
        const creatUser = await userDetails.save()
        res.status(201).send(creatUser)

    }catch(err){
        res.status(400).send(err)
    }
})

//Reading Documents of every studends
app.get('/api/students',async (req,res)=>{
    try{
        const getDetails = await StudentDetails.find();
        res.send(getDetails);
    }catch(err){
        res.status(400).send(err)
    }
})

//Reading Document of specific student
app.get('/api/students/:name', async (req,res)=>{
    try{
        const name = req.params.name;
        const getName = await StudentDetails.findOne({name})
        console.log("success");
        res.send(getName)
    }catch(err){
        res.status(500).send(err)
    }
})

//Updating document
app.put('/api/students/:name',async(req,res)=>{
    try{
        const name = req.params.name;
        const updateDetail = await StudentDetails.findOneAndUpdate({name},req.body,{new:true})
        res.send(updateDetail)
    }catch(err){
        res.status(404).send(err)
    }
})

//Deleting document
app.delete('/api/students/:name', async (req,res)=>{
    try{
        const name = req.params.name;
        const deleteDocument = await StudentDetails.deleteOne({name}, {new:true})
        res.send(deleteDocument)
    }catch(err){
        res.status(404).send(err)
    }
})

const port = process.env.port || 5000
app.listen(port, ()=> console.log(`port ${port} is listening`))