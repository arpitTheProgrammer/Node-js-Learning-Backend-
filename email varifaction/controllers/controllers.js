const { sendVerificationCode } = require('../middleware/email');
const User = require('../modals/user')


const HandleSaveUser = async(req, res) => {
    const {FullName, email, password} = req.body;
    try{
    const varificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const newUser = await User.create({
        FullName,
        email,
        password,
        varificationCode
    })


    // const savedUser = await newUser.save()
    console.log(newUser)
    sendVerificationCode(newUser.email, varificationCode)
    return res.json({message: "User saved"})
} catch(err){
    res.json({message: "Unable to save user"})
    console.log(err)
}
}
const verifyEmail = async(req, res) =>{
    try {
        const {code} = req.body;
        const user = await User.findOne({
            varificationCode:code
        })
        if(!user){
            return res.json({message: "User doesn't exists"})
        }
        user.isVerified = true;
        user.varificationCode = undefined

        await user.save()
    } catch (error) {
        return res.json({message: "Internal Server Error"})
    }
}


module.exports = {
    HandleSaveUser,
    verifyEmail
};