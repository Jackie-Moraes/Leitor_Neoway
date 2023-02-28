export async function sanitizeFileData(formattedData: string[][]) {
    // Empty array for storing new sanitized data
    const sanitizedData = []

    for (const lines of formattedData) {
        // Running through each line, normalizing the content by removing blank spaces, lower-casing each letter and removing all accents
        const sanitizedLines = lines.map((value) => {
            if (!isNaN(parseFloat(value)) && value.includes(",")) {
                return parseFloat(value.replace(",", "."))
            }

            const cleanValue = value
                .trim()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            return cleanValue === "null" ? null : cleanValue
        })
        // Inserting sanitized lines into new array
        sanitizedData.push(sanitizedLines)
    }
    return sanitizedData
}
