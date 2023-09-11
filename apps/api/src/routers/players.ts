import express, { Router } from 'express'
import { Express } from 'express'

import { processRequest } from 'zod-express-middleware'
import { updatePlayerScoreSchema } from 'shared/types/api'
import updatePlayerScore from '@/handlers/playerScores/updatePlayerScore'
import { getTopPlayersSchema } from 'shared/types/api/players'
import getTopPlayers from '@/handlers/players/getTopPlayers'
import validateAuthToken from '@/utils/validateAuthToken'

// import { processRequest } from 'zod-express-middleware'

const players = express.Router()

function createPlayerRoutes(router: Router) {
  router.use('/players', players)
}

// GET
// players.get('/', getAllPlayers)
players.get('/', processRequest(getTopPlayersSchema), getTopPlayers)

// POST
// players.post('/',
//  processRequest(createplayerschema),
//  createPlayableGame)

//Put
players.put(
  '/:playerId',
  processRequest(updatePlayerScoreSchema),
  validateAuthToken,
  updatePlayerScore
)

export default createPlayerRoutes
