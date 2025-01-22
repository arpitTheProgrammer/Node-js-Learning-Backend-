const mongoose = require('mongoose')

const HandleConnectDb = async(url) => {
    return mongoose.connect(url)
}

module.exports = {
    HandleConnectDb
}