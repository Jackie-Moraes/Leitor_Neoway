import { NextFunction, Request, Response } from "express"
import path from "path"

export async function validateFile(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Defaulting to root folder and searching for the desired file
    const __dirname = path.resolve()
    const filePath = `${__dirname}/scan/dados.txt`

    // If the file is missing, throw error and stop execution
    if (!filePath) {
        throw {
            type: "validationError",
            message: `Missing file. Insert a "dados".txt file into the scan folder and try again.`,
        }
    }

    // If the file is present, save it into locals and continue execution
    res.locals.file = filePath
    next()
}
