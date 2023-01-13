const express = require("express")
const Student = require('../db/models/students')
const router = new express.Router()

router.get("", (req, res)=>{
    res.send("Welcome to home!");
})

//uses promisses for insertion
/*router.post('/students',(req, res)=>{
    const newStudent = new Student(req.body)
    newStudent.save()
        .then(()=>{
            res.status(201).send(req.body)
        })
        .catch((e)=>{
            res.status(400).send(e)
        })
})*/

//uses Async-Await for saving data into database
router.post('/students', async (req, res)=>{
    try{
        const newStudent = new Student(req.body)
        const savedData = await newStudent.save()
        res.send(savedData)
    }
    catch(e){
        console.error('Insertion Faild')
        res.status(401).send(e)
    }
})

//fetching data from apidatabase
router.get('/students',async (req, res)=>{
    try{
        const foundData = await Student.find()
        res.send(foundData)
    }
    catch(e){
        res.status(400).send(e)
    }
})

//fetching perticular student data based on _id
router.get("/students/:id",async (req, res)=>{
    const _id = req.params.id
    try{
        const foundData = await Student.findById(_id)
        if(!foundData) res.status(500).send()
        res.send(foundData)
    }
    catch(e){
        res.status(500).send(e)
    }
})

//updating perticular field data
router.patch('/students/:id', async (req, res)=>{
    try{
        const _id = req.params.id
        const updatedData = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        })
        res.send("Updated Data is:\n\n"+updatedData)
    } 
    catch(e){
        res.status(404).send(e)
    }

})

router.delete('/students/:id',async (req, res)=>{
    try{
        const sid = req.params.id
        const delData = await Student.findByIdAndDelete({_id:sid})
        if(delData) res.send("deleted successfully!!\n"+delData)
        res.send("Invalid id, Student not found!!!")
    }
    catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;