const express = require("express")
import http from 'http'

const app = express()
app.get('/', (res, req) => {
    req.send("Hello")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${3000}`)
})