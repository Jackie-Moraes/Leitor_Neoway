export async function checkCPFandCNPJ(sanitizedData: string[][]) {
    const data = sanitizedData

    // Setting Regex for matching and checking data from file
    const cpfRegex = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/g
    const cnpjRegex =
        /(\d{2}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s/]?\d{4}[-.\s]?\d{2})/g

    // Checking each array and validating CPF & CNPJ based on regex
    for (let i = 0; i < sanitizedData.length; i++) {
        const cpf = sanitizedData[i][0]
        const cnpjMostFrequent = sanitizedData[i][6]
        const cnpjMostRecent = sanitizedData[i][7]

        // Validating if CPF/CNPJ is valid, and if not, removes the content from the array before resuming execution
        if (cpf !== null && !cpf.match(cpfRegex)) {
            sanitizedData.splice(i, 1)
            i--
        }

        if (cnpjMostFrequent !== null && !cnpjMostFrequent.match(cnpjRegex)) {
            sanitizedData.splice(i, 1)
            i--
        }

        if (cnpjMostRecent !== null && !cnpjMostRecent.match(cnpjRegex)) {
            sanitizedData.splice(i, 1)
            i--
        }
    }

    return data
}
