const express = require('express')
const {HandleConnectDb} = require('./connect')
const URL = require('./Models/url')

const urlRoute = require('./routes/url')
const app = express()
const PORT = 8000;

HandleConnectDb('mongodb://127.0.0.1:27017/short-url')
app.listen(() => {
    console.log('MongoDB Connected')
})

app.use('/url', urlRoute)
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hey")
})

app.get('/:shortId', async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId,
        },
        {
        $push: {
            visitHistory: {
                timestamps: Date.now(),
            }
        }
    }
)
        res.redirect(entry.redirectUrl)
})
app.listen(PORT, () => {
    console.log(`Serve st PORT:-  ${PORT}`)
})