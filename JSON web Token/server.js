const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 8080;
const secretKey = "secretKey";

app.get('/', (req, res) => {
    return res.send("Hello World")
})

app.get('/jwt', (req, res) => {
    return res.send("<input/>")
})

app.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'arpit',
        email: 'arpit.sri16@gmail.com'
    }
    jwt.sign({user}, secretKey, { expiresIn: '300s'}, (err, token) => {
        res.json({
            token
        })
        console.log(token)
    })
})

app.post('/profile', verifyToken, (req, res) =>{
    jwt.verify(req.token, secretKey, (err, authData) => {
        if(err){
            res.send({
                result: "Invalid Token"
            })
        } else {
            res.json({
                message: "profile accessed",
                authData
            })
        }
    })
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ")
        const token = bearer[1]
        req.token = token;
        next()
    } else {
        res.send({
            result: 'Token is undefined'
        })
    }
}

app.listen(PORT, (req, res) => {
    console.log(`Serve ar ${PORT}`)
})