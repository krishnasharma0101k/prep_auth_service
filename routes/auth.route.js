import express from "express"
import { GoogleAuth, logOut, useCoins } from "../controllers/auth.controller.js" 


const authRouter = express.Router()

authRouter.post("/login", GoogleAuth)
authRouter.post("/logout", logOut)
authRouter.post("/user-coins", useCoins)

export default authRouter

// http:.localhost:400/api/auth/login