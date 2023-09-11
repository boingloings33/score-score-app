import express, { Router } from 'express'
import { processRequest } from 'zod-express-middleware'

import getCurrentGame from '@/handlers/games/getCurrentGame'
import getGamesByUser from '@/handlers/games/getGamesByUser'
import getRecentGames from '@/handlers/games/getRecentGames'
import updateCurrentGame from '@/handlers/games/updateCurrentGame'
import { getGameById } from '@/handlers/games/getGameById'
import { startNewGame } from '@/handlers/games/startNewGame'
import endGame from '@/handlers/games/endGame'
import {
  endGameSchema,
  getGameByUserSchema,
  getGameSchema,
  startNewGameSchema,
  listGamesSchema,
  getCurrentGameByUserSchema,
  deleteGameSchema,
} from 'shared/types/api'
import listGames from '@/handlers/games/listGames'
import validateAuthToken from '@/utils/validateAuthToken'
import deleteGame from '@/handlers/games/deleteGame'

const games = express.Router()

function createGameRoutes(router: Router) {
  router.use('/games', games)
}

// GET
games.get('/', processRequest(listGamesSchema), listGames)
games.get('/recent', getRecentGames)
games.get('/user/:userId', processRequest(getGameByUserSchema), getGamesByUser)
games.get(
  '/current/:userId',
  processRequest(getCurrentGameByUserSchema),
  getCurrentGame
)
games.get('/:gameId', processRequest(getGameSchema), getGameById)

// POST
games.post(
  '/',
  processRequest(startNewGameSchema),
  validateAuthToken,
  startNewGame
)

// PUT
games.put(
  '/:gameId/end',
  processRequest(endGameSchema),
  validateAuthToken,
  endGame
)
games.put('/:gameId', validateAuthToken, updateCurrentGame)

// DELETE
games.delete(
  '/:gameId',
  processRequest(deleteGameSchema),
  validateAuthToken,
  deleteGame
)

export default createGameRoutes
