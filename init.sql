CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "cpf" CHAR(14) UNIQUE NOT NULL,
    "private" INTEGER NOT NULL,
    "incompleto" INTEGER NOT NULL,
    "dataUltimaCompra" DATE,
    "ticketMedio" FLOAT,
    "ticketUltimaCompra" FLOAT,
    "lojaFrequente" CHAR(18),
    "lojaUltimaCompra" CHAR(18)
)