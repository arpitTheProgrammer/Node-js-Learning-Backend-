import mongoose from 'mongoose'
import { Category } from './category.model'

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

// Make New Schema to use In orderItem as an Object

const ordersSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        orderItems: {
            type: [orderItemsSchema] // This is Another Schema
        },
        address: {
            type: [addressSchema]
        },
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"], // enum is use to Choose one of them
            default: "PENDING"
        }
    },
    {timestamps: true})

export const Order = mongoose.models('Order', ordersSchema)