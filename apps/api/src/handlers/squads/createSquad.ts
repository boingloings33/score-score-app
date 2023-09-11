import { CreateSquadRequest, CreateSquadResponse } from 'shared/types/api'
import { Response } from 'express'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { prisma } from '@/prismaConnection'
import { assertUserExists } from '@/utils/assertions'
import { AuthLocals } from '@/utils/validateAuthToken'

async function createSquad(
  req: CreateSquadRequest,
  res: Response<CreateSquadResponse, AuthLocals>
) {
  try {
    const { name } = req.body
    const { user } = res.locals

    await assertUserExists(user.id)

    if (user.squadId) {
      throw new StatusError(
        400,
        'You cannot create a squad if you are already a part of another squad'
      )
    }

    const squad = await prisma.squad.create({
      data: {
        name: name,
        ownerId: user.id,
      },
    })

    return res.json({
      message: 'Your squad was created successfully',
      data: squad,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error creating a squad.')
  }
}

export default createSquad
