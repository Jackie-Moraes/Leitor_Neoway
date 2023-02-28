import connection from "../config/database.js"

export async function fillDatabase(completeData: string[][]) {
    try {
        for (let i = 0; i < completeData.length; i++) {
            const query = {
                text: `INSERT INTO users (cpf, private, incompleto, "dataUltimaCompra", "ticketMedio", "ticketUltimaCompra", "lojaFrequente", "lojaUltimaCompra") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                values: completeData[i],
            }
            await connection.query(query)
        }
    } catch (e) {
        console.error(e)
    }
}
