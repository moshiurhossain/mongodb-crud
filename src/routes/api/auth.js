const register_controller = require("../../controllers/register");
const express = require('express')
const authApi = express.Router()

authApi.post('/register' , register_controller)
module.exports = authApi