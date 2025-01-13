import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("Hii Bro")
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server at http://localhost${3000}`)
})