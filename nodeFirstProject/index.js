require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',  (req, res) => { //  req = Request means when we req at /twitter than show the res = response 
    res.send("This is My twitter page")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please Login First</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})