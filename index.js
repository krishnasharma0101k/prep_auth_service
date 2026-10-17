
import dotenv from "dotenv"
dotenv.config()
import express from "express"

import { connectDB } from "./configs/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"



const app = express()


app.use(express.json())
app.use(cookieParser())


const port = process.env.PORT || 5001

app.get("/", (req, res) => {
    res.send("hello from Auth")
})


app.use("/", authRouter)

app.listen(port, () => {
    console.log(`atuth started on ${port}`);
    connectDB()
    
})
