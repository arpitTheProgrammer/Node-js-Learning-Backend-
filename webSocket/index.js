const { Socket } = require('dgram');
const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const app = express();
const server = http.createServer(app)
const io = new Server(server) // This is will handle my server

io.on('connection', (socket) => {
    socket.on("user-message", (message) => {
        console.log("A new User message is :- ", message)
    })
})
app.use(express.static(path.resolve('./public')))

app.get('/', (res, req) => {
    return res.sendFile('/public/index.html')
})
server.listen(9000, () => {
    console.log(`Server started at PORT ${9000}`)
})