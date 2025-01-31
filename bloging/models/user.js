const {createHmac, randomBytes} = require("crypto")
const {Schema , Model, model} = require('mongoose')

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salt: {
        type: String,
        // require: true
    },
    password: {
        type: String,
        require: true
    },
    profileImageUrl: {
        type: String,
        default: "/public/avator.png"
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
})

userSchema.pre('save', function(next){
    const user = this;

    if(!user.isModified("password")){
        return;
    }


    // this function will hash the user Password
    const salt = 'someRandomSalt';
    const hashPass = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
    
    this.salt = salt;
    this.password = hashPass;
    next()

})

userSchema.static('matchPass', async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) {
      throw new Error('User Not Found');
    }
  
    const salt = user.salt;
    const hashPass = user.password;
  
    const userProvidedPass = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
  
    if (hashPass !== userProvidedPass) {
      throw new Error('Incorrect Password');
    }
  
    // Return user object with sensitive data removed
    return { ...user, password: undefined, salt: undefined };
  });
  
  const User = model("User", userSchema);
  
  module.exports = User;