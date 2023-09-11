import { Box, Typography, Stack, Container, Grid } from '@mui/material'
import Logo from '../assets/TRUST logo.png'
import { ScoreScoreInLineIcon, ScoreScoreLogoIcon } from '@/assets/icons'

const Footer = () => {
  return (
    <Container maxWidth="xs">
      <Stack
        alignItems="center"
        sx={{
          pt: 7,
          pb: 8,
        }}
      >
        <Box sx={{ p: 2 }}>
          <ScoreScoreLogoIcon />
        </Box>

        <Box sx={{ mb: 7 }}>
          <ScoreScoreInLineIcon />
        </Box>

        <Typography variant="body1" color="primary.contrastText" sx={{ pb: 1 }}>
          This project was created in part with
        </Typography>

        <img src={Logo} height="48" width="190" alt="Code and Trust Logo" />

        <Box mt={4} textAlign="center">
          <Typography
            variant="caption"
            color="primary.contrastText"
            sx={{ margin: 'auto' }}
          >
            Designed and developed by the 2023 interns
          </Typography>

          <Grid
            container
            rowSpacing={1}
            sx={{
              mt: 2,
              textDecoration: 'underline',
              color: 'primary.contrastText',
            }}
          >
            <Grid item xs={4}>
              <Typography variant="body2">Tyler Wagner</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">Zachary Butler</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">Brenden Baio</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">Adrien Lemmel</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">Preston Santiago</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2">Jakob Susol</Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  )
}

export default Footer
