import { EndGameRequest, EndGameResponse } from 'shared/types/api'
import { prisma } from '@/prismaConnection'
import { assertGameExists } from '@/utils/assertions'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { Response } from 'express'
import { AuthLocals } from '@/utils/validateAuthToken'

async function endGame(
  req: EndGameRequest,
  res: Response<EndGameResponse, AuthLocals>
) {
  try {
    const { gameId } = req.params
    const { user } = res.locals

    const game = await assertGameExists(gameId)

    if (!game.players?.find((player) => player.userId === user.id)) {
      throw new StatusError(403, 'You do not have permission to end this game')
    }

    await prisma.game.update({
      where: {
        id: Number(gameId),
      },
      data: {
        completed: new Date(),
      },
    })

    return res.json({
      message: 'The finished game was updated successfully',
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error updating a finished game')
  }
}

export default endGame
