import { NextFunction, Request, Response } from "express"
import path from "path"

export async function validateFile(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const __dirname = path.resolve()
    const filePath = `${__dirname}/scan/dados.txt`

    if (!filePath) {
        throw {
            type: "validationError",
            message: `Missing file. Insert a "dados".txt file into the scan folder and try again.`,
        }
    }

    res.locals.file = filePath
    next()
}
