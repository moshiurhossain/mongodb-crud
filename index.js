const express = require('express')
const route = require('./src/routes/routes')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 8000

// config express to json
app.use(express.json())
//  using route
app.use(route)
// connecting db
mongoose.connect('mongodb+srv://mern2404:mern2404@cluster0.clrgxwz.mongodb.net/mern2404?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log('db connected')})
.catch((err)=>{console.log(err)})





app.listen(port,(err)=>{
    if(err) return console.log(err)
    console.log(`this server is running on port ${port}`)
                         })