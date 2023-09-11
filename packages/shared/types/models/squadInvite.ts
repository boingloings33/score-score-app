import { Squad, User } from '.'

export interface SquadInvite {
  id: number

  inviteeId: number
  squadId: number

  created?: Date
  accepted?: Date | null
  declined?: Date | null

  squad?: Squad
  invitee?: User
}
