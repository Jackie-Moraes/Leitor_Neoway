import format from "pg-format"

import connection from "../config/database.js"

export async function fillDatabase(completeData: string[][]) {
    try {
        // Inserting all data at once via the format function [concatenating all strings at once and doing a single query]

        const query = format(
            'INSERT INTO users (cpf, private, incompleto, "dataUltimaCompra", "ticketMedio", "ticketUltimaCompra", "lojaFrequente", "lojaUltimaCompra") VALUES %L',
            completeData
        )
        await connection.query(query)
    } catch (e) {
        console.error(e)
        throw { type: "databaseError", message: e.message }
    }
}
