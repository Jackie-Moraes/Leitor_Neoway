import { fillDatabase } from "../repositories/fileRepository.js"
import { checkCPFandCNPJ } from "../utils/checkCPFandCNPJ.js"
import { readAndFormatFile } from "../utils/readAndFormatFile.js"
import { sanitizeFileData } from "../utils/sanitizeFileData.js"

export const fileService = {
    async maintainFile(file: string) {
        // Separating each line's content and removing the first entry
        const formattedData = await readAndFormatFile(file)
        // Altering line's contents for standardization
        const sanitizedData = await sanitizeFileData(formattedData)
        // Filtering contents and removing invalid entries
        const completeData = await checkCPFandCNPJ(sanitizedData)
        // Inserting now filtered data into desired database
        await fillDatabase(completeData)
    },
}
