import { Router } from 'express'
import { UsersController } from './controllers/usersController'

const routes = Router()
const usersController = new UsersController()

routes.get('/users', usersController.showUsers)
routes.post('/users', usersController.createUser)

export { routes }