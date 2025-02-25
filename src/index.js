import connnectDb from "./db/index.js";
import express, { Router } from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())

import userRouter from "./routes/user.routes.js"

app.use("/users", userRouter)

connnectDb()

app.listen(4000, ()=>{
    console.log("server is running on port 4000")
})