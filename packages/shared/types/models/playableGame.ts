import { Game, User } from '.'
import { z } from 'zod'
import type { Icon as IconOrigin } from '@prisma/client'

// export const IconSchema = z.nativeEnum(PrismaIcon)
// export type Icon = `${z.infer<typeof IconSchema>}` // union of "A" | "B" | "C"
// export const Icon = PrismaIcon

// // Import original enum as type
// import type { UserRoleEnum as UserRoleEnumOrigin } from '@prisma/client'

// // Guarantee that the implementation corresponds to the original type
// export const UserRoleEnum: { [k in UserRoleEnumOrigin ]: k } = {
//   Role1: 'Role1',
//   Role2: 'Role2',
// } as const
export const Icon: { [k in IconOrigin]: k } = {
  PLUS: 'PLUS',
  MINUS: 'MINUS',
  EQUAL: 'EQUAL',
  CIRCLE: 'CIRCLE',
  CROWN: 'CROWN',
  BAT: 'BAT',
  BASKETBALL: 'BASKETBALL',
  EIGHT_BALL: 'EIGHT_BALL',
  BOWLING_BALL: 'BOWLING_BALL',
  BEAN_BAG: 'BEAN_BAG',
  CUP: 'CUP',
  GOLF_BALL: 'GOLF_BALL',
  HOCKEY_PUCK: 'HOCKEY_PUCK',
  PADDLE: 'PADDLE',
  SOCCER_BALL: 'SOCCER_BALL',
} as const

// // Re-exporting the original type with the original name
// export type UserRoleEnum = UserRoleEnumOrigin
export type Icon = IconOrigin
export const IconSchema = z.nativeEnum(Icon)

const nameSchema = z.string().max(32)
const pointsToWinSchema = z.number().int().positive()

export const playableGameSchema = z.object({
  name: nameSchema,
  pointsToWin: pointsToWinSchema,
})

export interface PlayableGame {
  id: number
  name: string

  pointsToWin: number | null

  icon: Icon

  created?: Date | null
  createdById?: number | null

  createdBy?: User
  gamesPlayed?: Game[]
}
