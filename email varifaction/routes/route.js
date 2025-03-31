const express = require('express')
const {HandleSaveUser, verifyEmail} = require('../controllers/controllers')

const route = express.Router()

route.post('/signup', HandleSaveUser)
route.get('/', (req, res)=>{
    res.send("Hello WOrld")
})

route.post('/verify', verifyEmail)
module.exports = route;