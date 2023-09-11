import { PlayableGame, Squad, SquadInvite } from '.'
import { z } from 'zod'

const usernameSchema = z.string().max(32)
const firstNameSchema = z.string()
const lastNameSchema = z.string()

export const passwordSchema = z
  .string()
  .regex(
    /^(?=.*[\d])(?=.*[!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/])(?=.*[A-Z])[A-Za-z\d!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]{8,}$/
  )

export const userSchema = z.object({
  username: usernameSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  // profilePic: z.string().url(),
})

export interface User {
  id: number
  username: string

  password?: never // do not include password in any api get requests
  refreshToken?: never // do not include refreshToken in any api get requests

  firstName: string | null
  lastName: string | null
  profilePic: string | null

  squadId?: number | null

  created?: Date
  updated?: Date

  squad?: Squad
  createdGames?: PlayableGame[]
  squadInvites?: SquadInvite[]

  ownedSquads?: never // do not include this in your queries
  players?: never // do not include this in any queries
}
