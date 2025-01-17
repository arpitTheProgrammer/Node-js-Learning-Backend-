const express = require('express')
const fs = require('fs')
const users = require("./MOCK_DATA.json")
// const mw = require('./middleware.js')

const app = express()
const PORT = 8000

// Middleware - Plugin
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
    console.log("Hello From Middleware")
    req.myUserName = "Arpit Srivastava"
    fs.appendFile('log.txt', `${Date.now()}, ${req.method}, ${req.ip}, ${req.path}\n`, (err, data)=>{
        next()
    }) // Create files
    // console.log(mw)
    // return res.json({msg: "Hello From middleware"})
    // next(); // Transfer to the Next middleware
})

// app.use((req, res, next) => {
//     console.log("Hay", req.myUserName)
//     console.log('Time', Date.now())
//     next()
//     // return res.end("Hay", req.myUserName)
// })

app.get('/api/user', (req, res) => {
    console.log('I am in get rout ', req.myUserName)
    console.log(req.headers)
    res.setHeader('X-myName', "Arpit Srivastava") // This is a Custom Header
    return res.json(users)
})

app
    .route('/api/user/:id')
    .get((req, res)=> {
        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        return res.json(user)
    })
    .put((req, res) => {
        return res.json({status: "Pending"})
    })
    .delete((req, res) => {
        return res.json({status: "Pending"})
    })

// app.get('/api/user/:id', (req, res)=> {
//     const id = Number(req.params.id)
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })

app.get('/user', (req, res)=> {
    const html = `
    <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

// Create New User

// app.patch('/api/user/:id', (req, res) => {
//     return res.json({status: "Pending"})
// })


app.post("/api/user", (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "SUCCESS", id: users.length + 1})
    })
    console.log(body)
})



app.delete('/api/user', (req, res) => {
    const body = req.body;
    const index = users.findIndex(user => user.body === body);
    console.log(body)
    if(index !== -1){
        users.splice(index, 1);
        try {
        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users), 'utf-8')
            return res.json({status: "SUCCESS"})
    } catch{
        return req.json({status: "Failed"})
    }
    } else {
        return res.status(404).json({ status: "ERROR", message: "User not found" });
    }
})



app.listen(PORT, () =>{
    console.log(`Serve at PORT ${PORT}`)
})