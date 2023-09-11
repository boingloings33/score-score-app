import express, { Router } from 'express'
import {
  authSchema,
  createUserSchema,
  deleteUserSchema,
  getUserSchema,
  searchUsersSchema,
  updateUserSchema,
} from 'shared/types/api'
import { processRequest } from 'zod-express-middleware'

import auth from '@/handlers/users/auth'
import createUser from '@/handlers/users/createUser'
import getMe from '@/handlers/users/getMe'
import getUsersBySquad from '@/handlers/users/getUsersBySquad'
import searchUsers from '@/handlers/users/searchUsers'
import updateUser from '@/handlers/users/updateUser'
import validateAuthToken from '@/utils/validateAuthToken'
import getUser from '@/handlers/users/getUser'

const users = express.Router()

function createUserRoutes(router: Router) {
  router.use('/users', users)
}

// GET
users.get('/me', validateAuthToken, getMe)
users.get('/search', processRequest(searchUsersSchema), searchUsers)
users.get('/squad/:squadId', getUsersBySquad)
users.get('/:userId', processRequest(getUserSchema), getUser)

// POST
users.post('/', processRequest(createUserSchema), createUser)
users.post('/auth', processRequest(authSchema), auth)

// PUT
users.put(
  '/:userId',
  processRequest(updateUserSchema),
  validateAuthToken,
  updateUser
)

// DELETE
//users.delete('/:userId', processRequest(deleteUserSchema), deleteUser)

export default createUserRoutes
