import { Router } from "express"

import { validateFile } from "../middlewares/validateInformation.js"
import { fileController } from "../controllers/fileController.js"

const fileRouter = Router()

fileRouter.post("/", validateFile, fileController.fileReader)

export default fileRouter
