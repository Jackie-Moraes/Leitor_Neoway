import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import fileRouter from "./routers/fileRouter.js"
import errorHandler from "./middlewares/errorHandlerMiddleware.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// Routers
app.use("/file", fileRouter)

// Error Handler
app.use(errorHandler)

export default app
