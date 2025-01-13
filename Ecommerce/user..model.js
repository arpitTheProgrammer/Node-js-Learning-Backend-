import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please Enter Your Password"]
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model('User', userSchema)