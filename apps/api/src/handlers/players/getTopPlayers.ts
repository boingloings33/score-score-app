import { Response } from 'express'
import {
  GetTopPlayersRequest,
  GetTopPlayersResponse,
} from 'shared/types/api/players'
import errorHandler from '@/utils/errorHandler'
import { prisma } from '@/prismaConnection'
import { assertPlayableGameExists } from '@/utils/assertions'
import { User, WinLossRecord } from 'shared/types/models'

async function getTopPlayers(
  req: GetTopPlayersRequest,
  res: Response<GetTopPlayersResponse>
) {
  try {
    const { playableGameId } = req.query

    playableGameId && (await assertPlayableGameExists(playableGameId))

    const players = await prisma.$queryRawUnsafe<(User & WinLossRecord)[]>(`
        select 
          u1.id as id, 
          u1.username,
          u1.first_name as firstName,
          u1.last_name as lastName,
          u1.profile_pic as profilePic,
          sum(case when p1.score > p2.score then 1 else 0 end) as wins,
          sum(case when p1.score = p2.score then 1 else 0 end) as draws,
          sum(case when p1.score < p2.score then 1 else 0 end) as losses

        from 
          players p1
            
        inner join
          games g
        on 
          g.id = p1.game_id
            
        inner join
          playable_games pg
        on
          pg.id = g.game_played
            
        inner join
          players p2
        on 	
          g.id = p2.game_id
            
        left outer join
          users u1
        on 
          u1.id = p1.user_id
        left outer join
          users u2
        on 
          u2.id = p2.user_id
            
        where
            u1.id != 1 -- guest user id
            and
            p2.user_id != p1.user_id
            and
            g.completed is not null
            ${
              playableGameId
                ? `
            and 
            pg.id = 1
            `
                : ''
            }

        group by
          u1.id
        order by
          wins desc
        ;
    `)

    for (let player of players) {
      player.wins = Number(player.wins)
      player.draws = Number(player.draws)
      player.losses = Number(player.losses)
    }

    return res.json({
      data: players,
    })
  } catch (err) {
    return errorHandler(res, err, 'There was an error retrieving top players')
  }
}

export default getTopPlayers
