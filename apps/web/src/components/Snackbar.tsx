import { Snackbar as MuiSnackbar, Alert, Typography } from '@mui/material'
import useSnackbar from '@/hooks/useSnackbar'

export default function Snackbar() {
  const { snackbar, openSnackbar } = useSnackbar()
  const { message, type, ...snackbarData } = snackbar

  function closeSnackBar() {
    openSnackbar({ open: false })
  }

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={closeSnackBar}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      {...snackbarData}
    >
      <Alert onClose={closeSnackBar} severity={type}>
        <Typography variant="body2">{message}</Typography>
      </Alert>
    </MuiSnackbar>
  )
}
