const express = require('express');

// const mongoose = require('mongoose');
const users = require("./MOCK_DATA.json");

const {connectMongoDb} = require('./connection')
const {logReqRes} = require('./middlewares/index')

const userRouter = require("./routes/user")
const app = express();
const PORT = 8000;

connectMongoDb('mongodb://127.0.0.1:27017/RestAPI')
// MongoDB schema for User

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());  // Add this for JSON parsing

app.use(logReqRes("log.txt"));

// Routes


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

app.use('/user', userRouter)