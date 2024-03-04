// import express

const express = require('express')

// import cors

const cors =require('cors')

const logic = require('./Services/logics')

// create an application usoing express
const emsServer =express()

// using cors to connect frontend port

emsServer.use(cors({
    origin:"http://localhost:3000"
}))

// craete a middleware for parsing json data
emsServer.use(express.json())

// Define a port number
emsServer.listen(8000,()=>{
    console.log("emsServer listening on the port 8000");
})

// API call for get all employee details - loaclhost :8000/get=all-employees
emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{
        res.status(response.statuscode).json(response)

    })


})

//API call for add an emplo yee details - loaclhost :8000/add-employee
emsServer.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statuscode).json(response)
    })
})

//API call for delete an empl0yee details - loaclhost :8000/add-employee
emsServer.delete('/delete-employee/:id',(req,res)=>{
    logic.dltemp(req.params.id).then
    ((response)=>{
        res.status(response.statuscode).json(response)

    })
})

//API call for get an empl0yee details - loaclhost :8000/add-employee

emsServer.get('/view-employee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then
    ((response)=>{
        res.status(response.statuscode).json(response)

    })
})



//API call for update an empl0yee details - loaclhost :8000/add-employee

emsServer.post('/update-employee/:id',(req,res)=>{
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then
    ((response)=>{
        res.status(response.statuscode).json(response)

    })
})
