
const mw = (req, res, next) => {
    console.log("Middleware is exported")
    // next()
}
export default mw();






//These middleware used in index.js

/*
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
*/

