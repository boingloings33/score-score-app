import express, { Router } from 'express'

import getSquadInvites from '@/handlers/squadInvites/getSquadInvites'
import getUserInvites from '@/handlers/squadInvites/getUserInvites'
import postInvite from '@/handlers/squadInvites/sendInvite'
import putAcceptInvite from '@/handlers/squadInvites/acceptInvite'
import putDeclineInvite from '@/handlers/squadInvites/declineInvite'
import validateAuthToken from '@/utils/validateAuthToken'
// import { processRequest } from 'zod-express-middleware'

const squadInvites = express.Router()

function createSquadInviteRoutes(router: Router) {
  router.use('/squadInvites', squadInvites)
}

// GET
squadInvites.get('/squad', validateAuthToken, getSquadInvites)
squadInvites.get('/user', validateAuthToken, getUserInvites)

// POST
squadInvites.post('/', validateAuthToken, postInvite)

// PUT
squadInvites.put('/accept', validateAuthToken, putAcceptInvite)
squadInvites.put('/decline', validateAuthToken, putDeclineInvite)

export default createSquadInviteRoutes
