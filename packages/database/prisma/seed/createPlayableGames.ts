import { Icon, PrismaClient } from '@prisma/client'

const createPlayableGames = async (prisma: PrismaClient) => {
  try {
    const playableGamesResult = await prisma.playableGame.createMany({
      data: [
        {
          id: 1,
          name: 'Ping Pong',
          pointsToWin: 21,
          icon: Icon.PADDLE,
        },
        {
          id: 2,
          name: 'Cornhole',
          pointsToWin: 21,
          icon: Icon.BEAN_BAG,
        },
        {
          id: 3,
          name: 'Eight Ball Pool',
          icon: Icon.EIGHT_BALL,
        },
        {
          id: 4,
          name: 'Foosball',
          pointsToWin: 10,
          icon: Icon.SOCCER_BALL,
        },
        {
          id: 5,
          name: 'Air Hockey',
          pointsToWin: 10,
          icon: Icon.HOCKEY_PUCK,
        },
        {
          id: 6,
          name: 'Cup Pong',
          icon: Icon.CUP,
        },
      ],
    })

    return Promise.resolve<{ name: string; data: string }>({
      name: 'playableGames',
      data: `${playableGamesResult.count} playable games created`,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

export default createPlayableGames
