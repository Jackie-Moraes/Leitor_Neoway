import { Request, Response } from "express"

import { fileService } from "../services/fileService.js"

export const fileController = {
    async fileReader(req: Request, res: Response) {
        // Getting file path from locals, stored in previous step
        const { file } = res.locals

        // Running all needed steps to format, sanitize and store data
        await fileService.maintainFile(file)
        // Sending status "created" once all steps have been successfully performed
        res.sendStatus(201)
    },
}
