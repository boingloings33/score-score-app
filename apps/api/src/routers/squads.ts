import express, { Router } from 'express'
import listSquads from '@/handlers/squads/listSquads'
import getSquad from '@/handlers/squads/getSquad'
import updateSquad from '@/handlers/squads/updateSquad'
import deleteSquad from '@/handlers/squads/deleteSquad'
import createSquad from '@/handlers/squads/createSquad'
import { processRequest } from 'zod-express-middleware'
import validateAuthToken from '@/utils/validateAuthToken'

// import { processRequest } from 'zod-express-middleware'

const squads = express.Router()

function createSquadRoutes(router: Router) {
  router.use('/squads', squads)
}

// GET
squads.get('/', listSquads)
squads.get('/:squadId', getSquad)

//PUT
squads.put('/:squadId', validateAuthToken, updateSquad)

// POST
squads.post('/', validateAuthToken, createSquad)

// DELETE
squads.delete('/:squadId', validateAuthToken, deleteSquad)

export default createSquadRoutes
