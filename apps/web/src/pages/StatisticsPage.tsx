import { CrownIcon } from '@/assets/icons'
import GameHistory from '@/components/GameHistory'
import TopPlayersList from '@/components/TopPlayersList'
import StartGameForm from '@/components/forms/startGame/StartGameForm'
import { Container, Typography, Box, Stack, useTheme } from '@mui/material'

function StatisticsPage() {
  const theme = useTheme()
  const navPadding = theme.spacing(7)

  return (
    <Container maxWidth="xs" sx={{ mt: 7 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: 'center', color: 'primary.contrastText', mb: 2 }}
      >
        Global Top Players
      </Typography>

      <TopPlayersList />

      <GameHistory />
    </Container>
  )
}

export default StatisticsPage
