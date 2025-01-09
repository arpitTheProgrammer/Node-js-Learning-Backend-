// const express = require('express');
import express from 'express';

const app = express();
app.use(express.static('dist')); // This is Bad Practice to Serve Frontend 
// app.get('/', (req, res) => {
//     res.send("Server is Ready")
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: "This is Joke"
        },
        {
            id: 1,
            title: 'Another Joke',
            content: "This is Joke two"
        },
        {
            id: 1,
            title: 'Third Joke',
            content: "This is Joke three"
        },
        {
            id: 1,
            title: 'Forth Joke',
            content: "This is Joke four"
        },
        {
            id: 1,
            title: 'Fifth Joke',
            content: "This is Joke five"
        },
        {
            id: 1,
            title: 'Sixth Joke',
            content: "This is Joke Six"
        },
    ];
    res.send(jokes)
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost${port}`)
});