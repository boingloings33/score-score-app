import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import theme from '@/theme'
import { useAuthContext } from '@/contexts/Auth'
import { CrownIcon } from '@/assets/icons'

function HeroSection() {
  let { authenticated } = useAuthContext()

  const navigate = useNavigate()

  const handleSignUp = () => {
    navigate('/login')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleKeyPress = (Event: { keyCode: number }) => {
    Event.keyCode === 13 && handleLogin()
  }

  return (
    <Container maxWidth="sm">
      <Stack
        spacing={12}
        sx={{
          color: theme.palette.primary.contrastText,
          textAlign: 'center',
          px: 4,
          py: 4,
        }}
      >
        <Stack spacing={4}>
          <Box sx={{ animation: `bounceAnimation 2.5s infinite` }}>
            <CrownIcon size="extraMedium" />
          </Box>
          <Typography variant="h2">
            Keep track of every time you beat your friends!
          </Typography>
          <Typography variant="body1">
            With score score, you can use a live tracker to keep score of your
            games, log the match to your account, and reference it anytime you
            need an upper hand on your someone.
          </Typography>
        </Stack>
        {!authenticated && (
          <Stack spacing={3} sx={{ mx: 'auto' }}>
            <Typography variant="body1">
              All you need to start tracking is an account!
            </Typography>
            <Stack spacing={2}>
              <Button
                variant="contained"
                onClick={handleSignUp}
                sx={{ width: '100%' }}
              >
                Create Account
              </Button>
              <Typography>
                Already have an account?{' '}
                <Box
                  component="span"
                  fontWeight="bold"
                  role="button"
                  tabIndex={0}
                  onClick={handleLogin}
                  onKeyDown={handleKeyPress}
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  Log In.
                </Box>
              </Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Container>
  )
}

export default HeroSection
