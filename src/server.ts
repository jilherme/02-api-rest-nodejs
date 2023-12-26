import fastify from "fastify"
import { env } from "./env"
import { transactionsRoutes } from "./routes/transactions"
import fastifyCookie from "@fastify/cookie"

const app = fastify()

app.register(fastifyCookie) // order of registration matters
app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!")
  })
