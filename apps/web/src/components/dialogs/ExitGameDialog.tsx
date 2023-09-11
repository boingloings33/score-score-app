import { DialogProps } from '.'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Link } from 'react-router-dom'

interface ExitGameDialog extends DialogProps {}

function ExitGameDialog({ open, onClose }: ExitGameDialog) {
  const handleClose = () => {
    onClose()
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
        title="Are you sure you want to exit?"
      />
      <DialogContent sx={{ py: 7, px: 4 }}>
        <DialogContentText variant="h3" textAlign="center" sx={{ mb: 3 }}>
          Are you sure you want to exit?
        </DialogContentText>
        <DialogContentText
          id="alert-dialog-description"
          variant="body2"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Don’t worry, your progress will be saved and you can return to it
          later.
        </DialogContentText>
        <Link to="/">
          <Button variant="outlined" onClick={handleClose} fullWidth>
            Yes, leave game.
          </Button>
        </Link>
        <Button
          variant="contained"
          onClick={handleClose}
          fullWidth
          sx={{
            mt: 3,
          }} /*Need to link this button to GameResults Page*/
        >
          No, go back!
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default ExitGameDialog
