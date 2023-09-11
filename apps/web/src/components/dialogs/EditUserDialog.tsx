import { DialogProps } from '.'
import EditUserForm from '@/components/forms/EditUserForm'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import useGetMe from '@/hooks/api/users/useGetMe'
import {
  Dialog,
  Container,
  Typography,
  CircularProgress,
  IconButton,
  Box,
} from '@mui/material'

interface EditUserDialogProps extends DialogProps {}

function EditUserDialog({ open, onClose }: EditUserDialogProps) {
  const { data: me, isLoading } = useGetMe()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <Container
        maxWidth="xs"
        sx={{
          mt: 3,
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h3" textAlign="center" sx={{ mt: 7 }}>
            Edit Profile
          </Typography>
          <IconButton
            color="secondary"
            sx={{
              position: 'absolute',
              top: -6,
              left: 0,
            }}
            onClick={onClose}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </Box>
        {isLoading && <CircularProgress />}
        {me && <EditUserForm onUserUpdated={onClose} {...me} userId={me.id} />}
      </Container>
    </Dialog>
  )
}

export default EditUserDialog
