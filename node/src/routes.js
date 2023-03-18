import { Router } from 'express'
import TeamController from './app/controllers/TeamController.js'

const routes = Router()

routes.get('/teams', TeamController.index)
routes.get('/teams/:id', TeamController.show)

routes.post('/teams', TeamController.store)

routes.put('/teams/:id', TeamController.update)

routes.delete('/teams/:id', TeamController.delete)

export default routes