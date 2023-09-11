import { Card, Divider, Typography, Stack, Grid, Box } from '@mui/material'
import { EightBallIcon } from '@/assets/icons'

interface WinLossCardProps {
  squadGameScores: []
  squadWinLossRecord: []
}

function WinLossCard({
  squadGameScores,
  squadWinLossRecord,
}: WinLossCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: 'primary.contrastText',
        p: 4,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography textAlign="start" variant="h5">
            Win/Loss Record:
          </Typography>
          <Typography variant="h5">93-70</Typography>
        </Stack>
        <Divider />

        <Box>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Stack direction="row" spacing={1}>
                <EightBallIcon size="small" />
                <Typography variant="body1">20-12</Typography>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" spacing={1}>
                <EightBallIcon size="small" />
                <Typography variant="body1">73-28</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Card>
  )
}

export default WinLossCard
