import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'

import LoginForm from '@/components/forms/LoginForm'
import { useNavigate } from 'react-router-dom'
import { ScoreScoreLogoIcon } from '@/assets/icons/ScoreScoreLogoIcon'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const Login = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  function navigateToSignup() {
    navigate('/signup')
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

        <Box display="flex" justifyContent="center" sx={{ mb: 4 }}>
          <ScoreScoreLogoIcon />
        </Box>

        <Typography variant="h3" textAlign="center" sx={{ mb: 5 }}>
          Let's get you back to score scoring!
        </Typography>

        <LoginForm />

        <Divider sx={{ my: 6 }}>
          <Typography color={theme.palette.divider} variant="body2">
            or
          </Typography>
        </Divider>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: 'background.default',
          }}
          fullWidth
          onClick={navigateToSignup}
        >
          Create Account
        </Button>
      </Container>
    </Box>
  )
}

export default Login
