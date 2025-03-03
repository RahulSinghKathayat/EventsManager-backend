import dotenv from "dotenv"
import connnectDb from "./db/index.js";
import express, { response, Router } from "express"
import cors from "cors"
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/api/quote", async(req,res)=>{
    try {
        const model = await genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
        
        const prompt = 'Provide a random inspirational quote.';
        const result = await model.generateContent(prompt)

        console.log(result.response.text())

        const quote = result.response.text().trim();
    return res.json({ quote });

    } catch (error) {
        console.error("error generating the quote", error)
        res.status(500).json({error: "failed to fetch quote"})
    }
})

import userRouter from "./routes/user.routes.js"

app.use("/users", userRouter)

connnectDb()

app.listen(4000, ()=>{
    console.log("server is running on port 4000")
})
