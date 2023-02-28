import { Request, Response } from "express"

import { fileService } from "../services/fileService.js"

export const fileController = {
    async fileReader(req: Request, res: Response) {
        const { file } = res.locals
        await fileService.maintainFile(file)
        res.sendStatus(201)
    },
}
