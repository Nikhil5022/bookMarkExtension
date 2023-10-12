const mongoose=require('mongoose')
const User=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    links:{
        type:Array,
        default:[]
    }
})
module.exports=mongoose.model("User",User)