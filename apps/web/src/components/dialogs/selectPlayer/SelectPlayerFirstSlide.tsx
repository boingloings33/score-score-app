import {
  Box,
  IconButton,
  Typography,
  Stack,
  Button,
  useTheme,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useWizardContext } from '@/components/wizard/Wizard'
import useGetMe from '@/hooks/api/users/useGetMe'
import { useFormContext } from 'react-hook-form'
import { StartGameFormFields } from '@/components/forms/startGame/StartGameForm'
import useDialog from '@/hooks/useDialog'
import PersonIcon from '@mui/icons-material/Person'

interface SelectPlayerFirstSlideProps {
  onPlayerSelected: ({
    userId,
    guestName,
  }: {
    userId: number
    guestName?: string
  }) => void
  handleClose: () => void
}

function SelectPlayerFirstSlide({
  handleClose,
  onPlayerSelected,
}: SelectPlayerFirstSlideProps) {
  const { stepForward } = useWizardContext()
  const { openSearchDialog } = useDialog()

  const { data: me } = useGetMe()
  const { getValues } = useFormContext<StartGameFormFields>()
  const { player1, player2 } = getValues()

  const showMeAsAnOption = me && me.id !== player1.id && me.id !== player2.id

  function handleGuestClick() {
    stepForward && stepForward()
  }

  function handleMeClicked() {
    if (!me) {
      return
    }

    onPlayerSelected({
      userId: me?.id,
    })
    handleClose()
  }

  function handleUserClicked(userId: number) {
    onPlayerSelected({ userId })
    handleClose()
  }

  function handleSearchClicked() {
    openSearchDialog({
      open: true,
      onClose: () => {
        // do nothing
      },
      onUserClicked: handleUserClicked,
    })
  }

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        sx={{ position: 'relative', mb: 4, pt: '2px' }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            p: 0,
            top: '0',
            left: '0',
          }}
        >
          <ChevronLeftIcon
            sx={{
              fontSize: 42,
              color: 'secondary.main',
            }}
          />
        </IconButton>
        <Typography variant="h3" textAlign="center">
          Add player
        </Typography>
      </Stack>

      <Stack spacing={4}>
        {showMeAsAnOption && (
          <Button
            color="info"
            variant="contained"
            fullWidth
            onClick={handleMeClicked}
            startIcon={
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'secondary.light',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'divider',
                  py: '2px',
                }}
              >
                {me.profilePic === null ? (
                  <PersonIcon
                    sx={{
                      color: 'primary.light',
                    }}
                  />
                ) : (
                  me.profilePic
                )}
              </Stack>
            }
          >
            {me.username}
          </Button>
        )}
        <Button onClick={handleGuestClick} variant="outlined" fullWidth>
          Create Guest
        </Button>

        <Button variant="contained" fullWidth onClick={handleSearchClicked}>
          Search user
        </Button>
      </Stack>
    </Box>
  )
}

export default SelectPlayerFirstSlide
