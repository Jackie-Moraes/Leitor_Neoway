import { fillDatabase } from "../repositories/fileRepository.js"
import { checkCPFandCNPJ } from "../utils/checkCPFandCNPJ.js"
import { readAndFormatFile } from "../utils/readAndFormatFile.js"
import { sanitizeFileData } from "../utils/sanitizeFileData.js"

export const fileService = {
    async maintainFile(file: string) {
        const formattedData = await readAndFormatFile(file)
        const sanitizedData = await sanitizeFileData(formattedData)
        const completeData = await checkCPFandCNPJ(sanitizedData)
        await fillDatabase(completeData)
    },
}
