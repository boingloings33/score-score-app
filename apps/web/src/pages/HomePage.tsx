import Footer from '../components/Footer'

import { Box, Container, Stack, Typography, useTheme } from '@mui/material'

import HeroSection from '../components/HeroSection'
import GameCardList from '@/components/GameCardList'
import useGetMe from '@/hooks/api/users/useGetMe'
import ContinueGameSection from '@/components/ContinueGameSection'

function HomePage() {
  const theme = useTheme()
  const { data: user } = useGetMe()

  return (
    <Box>
      <HeroSection />
      <Box sx={{ background: theme.palette.background.default }}>
        <Container maxWidth="sm" sx={{ px: 0 }}>
          <Stack
            spacing={4}
            sx={{
              background: theme.palette.background.default,
              textAlign: 'center',
              px: 4,
              py: 4,
            }}
          >
            <Stack spacing={2}>
              <Typography variant="body1">
                Select any game and start playing
              </Typography>
              <Typography variant="h5">
                And may the best competitor win!
              </Typography>
            </Stack>

            {user && <ContinueGameSection userId={user.id} />}

            <Box>
              <GameCardList />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage
