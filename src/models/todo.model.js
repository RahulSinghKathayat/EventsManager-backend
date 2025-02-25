import mongoose, {Schema} from "mongoose";

const todoSchema = new Schema({
    title: String,
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Todo = mongoose.model("Todo", todoSchema)