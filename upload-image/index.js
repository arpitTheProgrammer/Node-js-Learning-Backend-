const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()
const PORT = 8000;

// const upload = multer({dest: "upload/"})
const storage = multer.diskStorage({
    destination: function(req, res, cb){
        return cb(null, "./upload")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }   
})
const upload = multer({storage})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended: false})) // Help to parse form data
app.get("/", (req, res) => {
    return res.render("home")
})

app.post('/upload', upload.single("profileimage"), (req, res)=>{
    console.log(req.body)
    console.log(req.file) //  It help to Upload on data base by using Path
    return res.redirect("/")
})
app.listen(PORT, () => {
    console.log(`Serve at ${PORT}`)
})