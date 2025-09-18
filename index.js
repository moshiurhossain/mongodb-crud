const express = require('express')
const route = require('./src/routes/routes')
const app = express()
const port = 8000

 
app.use(route)

app.listen(port,()=>{console.log(`this server is running on port ${port}`)})