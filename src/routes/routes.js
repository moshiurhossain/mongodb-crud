const authApi = require("./api/auth");

const express = require('express')
const route = express.Router()

// Connecting route with authAPI
route.use('/auth', authApi)

// export route
module.exports = route