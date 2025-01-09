import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    //{
    //     userName: String,
    //     email: String,
    //     isActive: Boolean // We Defined data type taken by user
    // }
    {
        userName: {
            type: String,
            required: true,
            unique: true, // username must be Unique
            // lowercase: true // Input must be lower case
        },
        
        email: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Please Enter the Password"], // We can pass massege here
        }
        
    },
    {
        timestamps: true
    }
) // {} method of taking object

export const User = mongoose.model("User", userSchema)