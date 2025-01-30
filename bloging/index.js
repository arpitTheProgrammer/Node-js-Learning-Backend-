const express = require('express')
const path = require('path')
const userRoute = require('./routes/user')
const app = express();
const PORT = 8000;
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/blogify").then(() => {
    console.log("MongoDb is Connected")
})

app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"))
app.use(express.urlencoded({extended: false})) 

app.get('/', (req, res)=>{
    return res.render('home')
})

app.use('/', userRoute)


app.listen(PORT, () => {
    console.log(`Servve at ${8000}`)
})