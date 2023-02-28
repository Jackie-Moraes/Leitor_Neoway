export async function sanitizeFileData(formattedData: string[][]) {
    const sanitizedData = []
    for (const lines of formattedData) {
        const sanitizedLines = lines.map((valor) => {
            const valorLimpo = valor
                .trim()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            return valorLimpo === "null" ? null : valorLimpo
        })
        sanitizedData.push(sanitizedLines)
    }
    return sanitizedData
}
