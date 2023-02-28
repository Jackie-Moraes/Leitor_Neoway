import { Request, Response } from "express"
import path from "path"

import { fileService } from "../services/fileService.js"

const __dirname = path.resolve()
const filePath = `${__dirname}/scan/dados.txt`

export const fileController = {
    async fileReader(req: Request, res: Response) {
        await fileService.maintainFile(filePath)
        res.sendStatus(201)
    },
}
