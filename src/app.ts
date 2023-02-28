import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import fileRouter from "./routers/fileRouter.js"
import handleErrors from "./middlewares/errorHandlerMiddleware.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// Routers
app.use(fileRouter)

// Error Handler
app.use(handleErrors)

export default app
