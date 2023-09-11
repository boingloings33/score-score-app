import express, { Express } from 'express'

import createGameRoutes from '@/routers/games'
import createPlayableGameRoutes from '@/routers/playableGames'
import createPlayerRoutes from '@/routers/players'
import createSquadInviteRoutes from '@/routers/squadInvites'
import createSquadRoutes from '@/routers/squads'
import createUserRoutes from '@/routers/users'

const appRouter = express.Router()

function createRoutes(app: Express) {
  app.use('/api', appRouter)

  createUserRoutes(appRouter)
  createGameRoutes(appRouter)
  createPlayableGameRoutes(appRouter)
  createPlayerRoutes(appRouter)
  createSquadRoutes(appRouter)
  createSquadInviteRoutes(appRouter)
}

export default createRoutes
