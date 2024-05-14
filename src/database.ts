import 'dotenv'
import { Client } from "pg";

console.log(process.env.POSTGRES_HOST)

export async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORF,
  })

  await client.connect()
  return client;
}