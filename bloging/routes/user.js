const express = require("express")
const {fullName, email, password} = require("../models/user")
const User = require("../models/user")
const router = express.Router();

router.get("/login", (req, res)=>{
    return res.render("login")
})

router.get("/signup", (req, res)=>{
    return res.render("signup")
})

router.post('/signup', async(req, res) => {
    const {fullName, email, password} = req.body;
    await User.create({
        fullName,
        email,
        password
    })

    return res.redirect("/")
})

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    console.log(email, password)
    const user =  User.matchPass(email, password)
    console.log("User", user);
    return res.redirect('/')
})

module.exports = router;