import { Router } from "express"

import { fileController } from "../controllers/fileController.js"

const fileRouter = Router()

fileRouter.post("/file", fileController.fileReader)

export default fileRouter
