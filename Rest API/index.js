const express = require('express');
const path = require('path')

const staticRouter = require('./routes/staticRouter')
// const mongoose = require('mongoose');
const users = require("./MOCK_DATA.json");
const userData = require("./modals/user")

const {connectMongoDb} = require('./connection')
const {logReqRes} = require('./middlewares/index')

const userRouter = require("./routes/user");
const User = require('./modals/user');
const app = express();
const PORT = 8000;

connectMongoDb('mongodb://127.0.0.1:27017/RestAPI')
// MongoDB schema for User

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());  // Add this for JSON parsing
app.use(express.urlencoded({extended: false}))
app.use("/", staticRouter)
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(logReqRes("log.txt"));

// Routes




// establishing EJS




app.get("/path", async(req, res)=> {
  const userData = await User.find({})
  // return res.end(`${userData.map((item)=>"\n " +  item.firstName + " " +  item.lastName)}`);
  return res.render('home', {
    user: userData,
  })
})




app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

app.use('/user', userRouter)