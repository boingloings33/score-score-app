import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { DialogProps } from '.'
import useEndGame from '@/hooks/api/games/useEndGame'

export interface EndGameDialogProps extends DialogProps {
  gameId: number
}

function EndGameDialog({ open, onClose, gameId }: EndGameDialogProps) {
  const handleClose = () => {
    onClose()
  }

  const { mutateAsync: endGame, isLoading: isEndGameLoading } = useEndGame()

  const handleEndGame = () => {
    endGame(gameId).then(() => {
      handleClose()
    })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          borderRadius: '8px',
          width: '100%',
          maxWidth: '366px',
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        variant="h4"
        title=" Did you complete your game?"
      />
      <DialogContent sx={{ py: 7, px: 4 }}>
        <DialogContentText variant="h3" textAlign="center" sx={{ mb: 3 }}>
          Did you complete your game?
        </DialogContentText>
        <DialogContentText
          id="alert-dialog-description"
          variant="body2"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Once you end the game, your statistics will be counted and you can't
          return.
        </DialogContentText>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            border: 2,
            borderRadius: '4px',

            '&:hover': {
              border: 2,
            },
          }}
          onClick={handleClose}
        >
          Oops we're not done yet
        </Button>
        <Button
          variant="contained"
          onClick={handleEndGame}
          fullWidth
          sx={{
            borderRadius: '4px',
            mt: 3,
          }}
        >
          Yes, we have a winner!
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default EndGameDialog
