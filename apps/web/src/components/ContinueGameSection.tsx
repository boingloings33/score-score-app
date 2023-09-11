import { Box, Divider, Grow, useTheme } from '@mui/material'
import useCurrentGameByUser from '@/hooks/api/games/useCurrentGameByUser'
import { User } from 'shared/types/models'
import ContinueGameCard from '@/components/ContinueGameCard'

interface ContinueGameCardProps {
  userId: User['id']
}

const ContinueGameSection = ({ userId }: ContinueGameCardProps) => {
  const theme = useTheme()
  const { data: currentGame } = useCurrentGameByUser(userId)

  if (!currentGame) {
    return <></>
  } else {
    return (
      <Grow in>
        <Box>
          <Divider
            sx={{
              borderColor: theme.palette.primary.main,
              borderWidth: 1,
              my: 4,
            }}
          />

          <ContinueGameCard currentGame={currentGame} />

          <Divider
            sx={{
              borderColor: theme.palette.primary.main,
              borderWidth: 1,
              mt: 4,
            }}
          />
        </Box>
      </Grow>
    )
  }
}

export default ContinueGameSection
