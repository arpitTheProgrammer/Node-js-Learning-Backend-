import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema(
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
        }
    }
    ,{timestamps: true}
)

export const subTodos = mongoose.model('SubTodos', subTodoSchema);