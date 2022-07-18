import  express  from 'express'
import { routes } from './routes'

const server = express()
const HOST = 'http://localhost:'
const PORT = 8081 || process.env.PORT

server.use(express.json())
server.use(routes)

server.listen(PORT, () => {
    console.log(`Server is running in ${HOST}${PORT}`)
})