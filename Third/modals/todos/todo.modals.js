import mongoose from 'mongoose'

const todosSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.types.ObjectId,
            ref: "User"
        },
        subTodos: {
            type: [{
                type: mongoose.Schema.types.ObjectId,
                ref: "SubTodos"
            }]    
        }
    }, {timestamps: true}
)

export const todos = mongoose.model('Todo', todosSchema); 