const schemas = require('./schemas.js')
const mongoose=require('mongoose')

mongoose.set("strictQuery", false);

const User = mongoose.model("User",schemas.user)

async function addUser(userData){
    const newUser = new User(userData)
    const userExists = await User.findOne({"username":newUser.username})
    if(userExists==null){
        await newUser.save()
        return "user Added"
    }
    else{
        return "user existed"
    }
}

async function getUser(userData){
    const newUser=new User(userData)
    const userExists=await User.findOne({"userName":newUser.username})
    if(userExists!=null){
        console.log(userExists)
        return "user exist" 
    }
    return "User Not Found"
}


module.exports.addUser=addUser
module.exports.getUser=getUser