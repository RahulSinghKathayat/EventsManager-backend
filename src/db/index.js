import mongoose from "mongoose"

const connnectDb = async() => {
    try {
        const connectionInsatnce = await mongoose.connect("mongodb+srv://Mongodb:hemakathayat@rahul.6xwpt.mongodb.net/")
        console.log(`db is connect to the server: ${connectionInsatnce.connection.host}`)
    } catch (error) {
        console.log("connection error", error)
        process.exit(1)
        
    }
}

export default connnectDb