import { PrismaClient } from '@prisma/client'

import createUsers from './createUsers'
import createPlayableGames from './createPlayableGames'
import createGames from './createGames'
import createPlayers from './createPlayers'

const prisma = new PrismaClient()

async function main() {
  const seeds = [createUsers, createPlayableGames, createGames, createPlayers]

  const results: { name: string; data: string }[] = []

  for (const seed of seeds) {
    const response = (await seed(prisma)) as { name: string; data: string }
    results.push(response)
  }

  results.forEach((result) => {
    console.info(`Create ${result.name}:`, result.data)
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
