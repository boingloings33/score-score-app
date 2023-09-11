import { getPlayableGamesSchema } from 'shared/types/api'
import express, { Router } from 'express'
import { processRequest } from 'zod-express-middleware'
import getPlayableGames from '@/handlers/playableGames/getPlayableGames'

const playableGames = express.Router()

function createPlayableGameRoutes(router: Router) {
  router.use('/playableGames', playableGames)
}

// GET
playableGames.get('/', processRequest(getPlayableGamesSchema), getPlayableGames)

// POST
// playableGames.post('/',
//  processRequest(createplayableGameSchema),
//  createPlayableGame)

export default createPlayableGameRoutes
