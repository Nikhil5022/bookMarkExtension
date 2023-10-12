const mongoose=require('mongoose')
const express=require('express')
const queries = require('./queries.js')
const schemas = require('./schemas.js')



const app=express()
mongoose.connect("mongodb://0.0.0.0:27017/links").then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})
app.listen("8000",()=>{
    console.log("running on 8000")
})

app.post("/addUser",(req,res)=>{
    userData=req.body 
    queries.addUser(userData).then(response=>{
        res.send("user added")
        res.send(response)
    }).catch(err=>{
        res.send(err)
    })
})



app.get("/getUser/:username",(req,res)=>{
    username=req.params.username
    queries.getUser(username).then(response=>{
        if(response=="User Not Found"){
            res.send({"message":response})
        }
        else{
            res.send(response)
        }
    })
})