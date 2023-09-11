import { MinusIcon, PlusIcon } from '@/assets/icons'
import useUpdatePlayerScore from '@/hooks/api/players/useUpdatePlayerScore'
import {
  IconButton,
  Paper,
  Avatar,
  Divider,
  Stack,
  Box,
  Typography,
} from '@mui/material'

interface PointsScorecardProps {
  playerId: number
  score: number
  playerName: string
  avatar: string | null
  displayControls: boolean
}

const PointsScorecard = ({
  playerId,
  score,
  playerName,
  avatar,
  displayControls,
}: PointsScorecardProps) => {
  const { mutateAsync: addPoint, isLoading: isAddPointLoading } =
    useUpdatePlayerScore()
  const { mutateAsync: removePoint, isLoading: isRemovePointLoading } =
    useUpdatePlayerScore()

  const handlePlusClicked = () => {
    addPoint({
      playerId,
      scoreScalar: 1,
    })
  }

  const handleMinusClicked = () => {
    removePoint({
      playerId,
      scoreScalar: -1,
    })
  }

  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: '8px',
        width: 'auto',
        py: 3,
        px: 5,
        position: 'relative',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Avatar
          variant="square"
          sx={{ borderRadius: '8px', mr: 2, border: 1, borderColor: 'divider' }}
        >
          {avatar}
        </Avatar>
        <Typography variant="h3" color="secondary.light">
          {playerName}
        </Typography>
      </Stack>

      <Divider
        sx={{ borderBottomWidth: '2px', mt: 3, mb: 4, color: 'divider' }}
      />

      <Stack direction="row" sx={{ justifyItems: 'space-between' }}>
        {displayControls && (
          <Box
            sx={{
              boxShadow: 4,
              borderRadius: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
            }}
          >
            {
              <IconButton
                disabled={score === 0 || !displayControls}
                onClick={handleMinusClicked}
                sx={{
                  width: '80px',
                  height: '80px',
                  border: 2,
                  borderColor: 'divider',
                }}
              >
                <MinusIcon size="small" />
              </IconButton>
            }
          </Box>
        )}

        <Box flexGrow={1}>
          <Typography
            variant="h1"
            color="secondary.contrastText"
            textAlign="center"
          >
            {score + Number(isAddPointLoading) - Number(isRemovePointLoading)}
          </Typography>
        </Box>

        {displayControls && (
          <Box
            sx={{
              boxShadow: 4,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
            }}
          >
            <IconButton
              onClick={handlePlusClicked}
              disabled={!displayControls}
              sx={{
                width: '80px',
                height: '80px',
                border: 2,
                borderColor: 'divider',
              }}
            >
              <PlusIcon size="small" />
            </IconButton>
          </Box>
        )}
      </Stack>
    </Paper>
  )
}

export default PointsScorecard
