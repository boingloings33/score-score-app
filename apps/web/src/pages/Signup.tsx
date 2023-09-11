import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'

import NewUserForm from '@/components/forms/NewUserForm'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { ScoreScoreInLineIcon } from '@/assets/icons'

function Signup() {
  const navigate = useNavigate()

  const theme = useTheme()

  function navigateToLogin() {
    navigate('/login')
  }

  function navigateToHome() {
    navigate('/')
  }

  return (
    <Box
      color="primary.contrastText"
      sx={{
        overflow: 'hidden',
        p: 4,
      }}
    >
      <Container maxWidth="xs">
        <IconButton color="inherit" onClick={navigateToHome}>
          <ChevronLeftIcon fontSize="large" />
        </IconButton>

        <Typography variant="h2" textAlign="center">
          Welcome to
        </Typography>

        <Box textAlign="center" mb={2}>
          <ScoreScoreInLineIcon />
        </Box>

        <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
          Create an account to start tracking all of the games you play.
        </Typography>

        <NewUserForm />

        <Divider sx={{ my: 6 }}>
          <Typography color={theme.palette.divider} variant="body2">
            or
          </Typography>
        </Divider>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: 'background.default',
          }}
          onClick={navigateToLogin}
        >
          Log In
        </Button>
      </Container>
    </Box>
  )
}

export default Signup
