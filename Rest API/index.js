const express = require('express')
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000

app.get('/api/user', (req, res) => {
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
app.listen(PORT, () =>{
    console.log(`Serve at PORT ${PORT}`)
})