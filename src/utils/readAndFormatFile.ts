import fs from "fs/promises"

export async function readAndFormatFile(file: string) {
    const content = await fs.readFile(file, "utf8")
    const lines = content.trim().split("\n")

    const formattedData = lines.map((line) => {
        const columns = line.split(/(?<=\S)\s+(?=\S)/g)
        return columns
    })
    formattedData.shift()

    return formattedData
}
