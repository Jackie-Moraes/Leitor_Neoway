import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// Routers Temporary Location

export default app
