const shortid = require('shortid')
const URL = require('../Models/url')


const HandleGenerateUrl = async(req, res) => {
    const body = req.body;
    const shortID = shortid()
    const myUrl = await URL.create({
        shortID: shortID,
        redirectUrl: body.url,
        visitHistory: []
    }) 
    const saveUrl = await myUrl.save()
    console.log(saveUrl)
    return res.json({id: shortID})
}

module.exports = {
    HandleGenerateUrl
}