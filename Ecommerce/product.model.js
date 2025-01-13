import mongoose from 'mongoose'
import { Category } from './category.model'

const productSchema = new mongoose.Schema(
    {
        description: {
            required: true,
            type: String
        },
        name: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            default: 0
        },
        stock: {
            type: Number,
            default: 0
        },
        Category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category", // Compulsary to write here
            required: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {timestamps: true})

export const Products = mongoose.model('Products', productSchema)