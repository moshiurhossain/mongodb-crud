const mongoose = require('mongoose')
// create Schema
const authSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    pasword:{
        type:String,
        required:true,
    },
})
// create model
module.exports= mongoose.model('auth', authSchema)