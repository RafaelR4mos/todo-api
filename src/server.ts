import Fastify from "fastify";
import { getNewClient } from "./database";
import 'dotenv'

const fastify = Fastify({
  logger: true
})

const connectedClient = await getNewClient();
console.log(connectedClient)

try {
  await fastify.listen({ port: Number(process.env.PORT) ?? 3333, host: '0.0.0.0', })
  console.log("HTTP Server is running")
} catch (error) {
  fastify.log.error(error)
  process.exit(1)
}