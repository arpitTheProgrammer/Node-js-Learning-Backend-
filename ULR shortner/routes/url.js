const express = require('express')
const {HandleGenerateUrl} = require('../controllers/url')

const router = express.Router();

router.post("/", () => {
    HandleGenerateUrl
    console.log("SUCCESS")
})


module.exports = router