import { prisma } from '@/prismaConnection'
import { assertGameExists } from '@/utils/assertions'
import errorHandler, { StatusError } from '@/utils/errorHandler'
import { AuthLocals } from '@/utils/validateAuthToken'
import { Response } from 'express'
import { DeleteGameRequest, DeleteGameResponse } from 'shared/types/api'

async function deleteGame(
  req: DeleteGameRequest,
  res: Response<DeleteGameResponse, AuthLocals>
) {
  try {
    const { gameId } = req.params
    const { user } = res.locals

    await assertGameExists(gameId)

    const game = await prisma.game.findFirst({
      where: {
        id: Number(gameId),
      },
      select: {
        players: true,
      },
    })

    if (!game?.players?.find((player) => player.userId === user.id)) {
      // neither of the players userId is the userId of the requester
      throw new StatusError(
        403,
        'You cannot delete a game if you are not a player'
      )
    }

    await prisma.game.delete({
      where: {
        id: Number(gameId),
      },
    })

    return res.json({
      message: 'Your game was deleted successfully',
    })
  } catch (err) {
    return errorHandler(res, err, 'There was a problem deleting the game')
  }
}

export default deleteGame
