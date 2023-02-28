import fs from "fs/promises"

export async function readAndFormatFile(file: string) {
    // Reading file's content and separating based on each line break
    const content = await fs.readFile(file, "utf8")
    const lines = content.trim().split("\n")

    // Separating lines into columns based on blank space between each one
    const formattedData = lines.map((line) => {
        const columns = line.split(/(?<=\S)\s+(?=\S)/g)
        return columns
    })

    // Removing unneeded first line
    formattedData.shift()

    return formattedData
}
