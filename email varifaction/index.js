const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const route = require('./routes/route')

const app = express()

const PORT = 8000;
const secretKey = 'secreteKey'
app.use(express.json())
// app.user(express.urlencoded({extended: true}))

mongoose.connect('mongodb://127.0.0.1:27017/otpVerification')
.then(()=>{
    console.log('mongoDB is Connected')
})
.catch((err) => {
    console.log('unable to Connect MongoDb')
})


app.use('/', route);
app.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: "arpit",
        email: 'arpit.sriv2005@gmail.com'
    }
    jwt.sign({user}, secretKey, {expiresIn: '500s'}, (err, token) => {
        res.json({
            token
        })  
        console.log(token) 
    })
})

app.post('/profile', verifyToken, (req, res)=> {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if(err){
            res.json({
                message: "Token no exists"
            })
        } else{
            res.json({
                message: "Profile accessed",
                authData
            })
        }
    })
})
function verifyToken(req, res, next){
    const bearerheaders = req.headers['authorization']
    if(typeof bearerheaders !== 'undefined'){
        const bearer = bearerheaders.split(" ")
        const token = bearer[1];
        req.token = token
        next()
    } else {
        res.json("Token is invalid")
    }
}

app.listen(PORT, (req, res) => {
    console.log(`serve at ${PORT}`)
})