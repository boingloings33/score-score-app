import { SquadInvite, User } from '.'
import { z } from 'zod'

const nameSchema = z.string().max(32)
const sloganSchema = z.string().max(64)
const bioSchema = z.string().max(500)

export const squadSchema = z.object({
  name: nameSchema,
  slogan: sloganSchema,
  bio: bioSchema,
})

export interface Squad {
  id: number

  name: string
  squadLogo?: string | null
  slogan?: string | null
  bio?: string | null

  ownerId: number
  owner?: User

  created?: Date
  updated?: Date

  members?: User[]
  squadInvites?: SquadInvite[]
}
