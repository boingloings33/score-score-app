import {
  Box,
  Typography,
  IconButton,
  Container,
  useTheme,
  Stack,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import StartGameForm from '@/components/forms/startGame/StartGameForm'
import { Link } from 'react-router-dom'

function StartGamePage() {
  const theme = useTheme()
  const navPadding = theme.spacing(7)

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: `calc(100vh - ${navPadding})`,
        pb: 2,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Link to="home">
            <IconButton
              color="secondary"
              sx={{
                position: 'absolute',
                top: '38px',
                left: '5px',
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>
          </Link>
          <Typography variant="h2" align="center" sx={{ pt: 5, px: 3 }}>
            Start a New Game
          </Typography>
        </Box>

        <Stack spacing={2}>
          <Typography variant="body1" align="center" sx={{ mt: 5 }}>
            Select a game you want to play:
          </Typography>
          <StartGameForm />
        </Stack>
      </Container>
    </Box>
  )
}

export default StartGamePage
