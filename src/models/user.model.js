import { Schema } from "mongoose";
import mongoose from "mongoose"

const userSchema = new Schema({
    username: String, 
    password: String
})

const User = mongoose.model("User", userSchema)

export default User