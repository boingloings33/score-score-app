import { PrismaClient } from '@prisma/client'

const createPlayers = async (prisma: PrismaClient) => {
  try {
    const playersResult = await prisma.player.createMany({
      data: [
        {
          gameId: 1,
          guestName: 'John Doe',
          score: 20,
        },
        {
          gameId: 1,
          userId: 2,
          score: 21,
        },

        {
          gameId: 2,
          userId: 3,
          score: 21,
        },
        {
          gameId: 2,
          userId: 4,
          score: 20,
        },

        {
          gameId: 3,
          userId: 1,
          score: 3,
        },
        {
          gameId: 3,
          userId: 3,
          score: 3,
        },

        {
          gameId: 4,
          userId: 2,
          score: 21,
        },
        {
          gameId: 4,
          guestName: 'Ghost',
          score: 20,
        },

        {
          gameId: 5,
          guestName: 'John Doe',
          score: 5,
        },
        {
          gameId: 5,
          userId: 2,
          score: 5,
        },

        {
          gameId: 6,
          userId: 3,
          score: 6,
        },
        {
          gameId: 6,
          userId: 4,
          score: 6,
        },

        {
          gameId: 7,
          userId: 5,
          score: 7,
        },
        {
          gameId: 7,
          userId: 6,
          score: 7,
        },

        {
          gameId: 8,
          userId: 7,
          score: 8,
        },
        {
          gameId: 8,
          guestName: 'Ghost',
          score: 8,
        },

        {
          gameId: 9,
          guestName: 'John Doe',
          score: 9,
        },
        {
          gameId: 9,
          userId: 2,
          score: 9,
        },

        {
          gameId: 10,
          userId: 3,
          score: 10,
        },
        {
          gameId: 10,
          userId: 2,
          score: 10,
        },

        {
          gameId: 11,
          userId: 2,
          score: 11,
        },
        {
          gameId: 11,
          userId: 6,
          score: 11,
        },

        {
          gameId: 12,
          userId: 2,
          score: 12,
        },
        {
          gameId: 12,
          guestName: 'Ghost',
          score: 12,
        },

        {
          gameId: 13,
          guestName: 'John Doe',
          score: 21,
        },
        {
          gameId: 13,
          userId: 2,
          score: 20,
        },

        {
          gameId: 14,
          userId: 3,
          score: 21,
        },
        {
          gameId: 14,
          userId: 2,
          score: 20,
        },

        {
          gameId: 15,
          userId: 2,
          score: 21,
        },
        {
          gameId: 15,
          userId: 6,
          score: 20,
        },

        {
          gameId: 16,
          userId: 2,
          score: 21,
        },
        {
          gameId: 16,
          guestName: 'Ghost',
          score: 20,
        },

        {
          gameId: 17,
          guestName: 'John Doe',
          score: 21,
        },
        {
          gameId: 17,
          userId: 2,
          score: 20,
        },

        {
          gameId: 18,
          userId: 2,
          score: 21,
        },
        {
          gameId: 18,
          userId: 4,
          score: 20,
        },

        {
          gameId: 19,
          userId: 5,
          score: 21,
        },
        {
          gameId: 19,
          userId: 2,
          score: 20,
        },

        {
          gameId: 20,
          userId: 2,
          score: 21,
        },
        {
          gameId: 20,
          guestName: 'Ghost',
          score: 20,
        },

        {
          gameId: 21,
          userId: 2,
          score: 21,
        },
        {
          gameId: 21,
          userId: 6,
          score: 20,
        },

        {
          gameId: 22,
          userId: 2,
          score: 21,
        },
        {
          gameId: 22,
          guestName: 'Ghost',
          score: 20,
        },

        {
          gameId: 23,
          guestName: 'John Doe',
          score: 21,
        },
        {
          gameId: 23,
          userId: 2,
          score: 20,
        },

        {
          gameId: 24,
          userId: 3,
          score: 21,
        },
        {
          gameId: 24,
          userId: 2,
          score: 20,
        },

        {
          gameId: 25,
          userId: 2,
          score: 21,
        },
        {
          gameId: 25,
          userId: 6,
          score: 20,
        },

        {
          gameId: 26,
          userId: 2,
          score: 21,
        },
        {
          gameId: 26,
          guestName: 'Ghost',
          score: 20,
        },

        {
          gameId: 27,
          guestName: 'John Doe',
          score: 21,
        },
        {
          gameId: 27,
          userId: 2,
          score: 20,
        },

        {
          gameId: 28,
          userId: 2,
          score: 21,
        },
        {
          gameId: 28,
          userId: 4,
          score: 20,
        },

        {
          gameId: 29,
          userId: 5,
          score: 21,
        },
        {
          gameId: 29,
          userId: 2,
          score: 20,
        },

        {
          gameId: 30,
          userId: 2,
          score: 21,
        },
        {
          gameId: 30,
          guestName: 'Ghost',
          score: 20,
        },
      ],
    })

    return Promise.resolve<{ name: string; data: string }>({
      name: 'players',
      data: `${playersResult.count} players created`,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

export default createPlayers
