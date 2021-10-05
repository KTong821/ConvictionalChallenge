import express from 'express'
import cors from 'cors'

// Main server bootstrap
export const serverSetup = (router: express.Router): express.Express => {
  const server = express()
  server.use(express.json())
  server.use(cors())

  server.use('/v0', router)
  server.use((_req, res) => res.status(404).json({ message: "No route found" }))
  return server
}