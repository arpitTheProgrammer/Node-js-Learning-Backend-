// const http = require('node:http');

import http from 'http'
import {a, b, c} from './mymodule.js'
import val from './mymodule.js'
import newVal from './mymodule1.js'

const hostname  = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end(`${newVal}`)
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})