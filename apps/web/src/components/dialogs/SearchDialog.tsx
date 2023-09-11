import { DialogProps } from '.'
import {
  Avatar,
  Box,
  Dialog,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import ControlledTextField from '@/components/inputs/ControlledTextField'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useSearchUsers from '@/hooks/api/users/useSearchUsers'
import { useDebounce } from 'use-lodash-debounce'

interface SearchFormFields {
  searchTerm: string
}

const searchFormSchema = z.object({
  searchTerm: z.string(),
})

export interface SearchDialogProps extends DialogProps {
  mode?: 'users' | 'squads' | 'all'
  onUserClicked: (userId: number) => void
}

function SearchDialog({
  open,
  onClose,
  mode = 'all',
  onUserClicked,
}: SearchDialogProps) {
  const { control, watch, reset } = useForm<SearchFormFields>({
    mode: 'onChange',
    defaultValues: { searchTerm: '' },
    resolver: zodResolver(searchFormSchema),
  })

  const watchedSearchTerm = watch('searchTerm')
  const debouncedSearchTerm = useDebounce(watchedSearchTerm, 300)

  const { data: users } = useSearchUsers(debouncedSearchTerm)

  const handleClose = () => {
    reset()
    onClose()
  }

  function handleResultClicked(userId: number) {
    onUserClicked(userId)
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <Box sx={{ padding: 4 }}>
        <Box marginBottom={1}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box marginBottom={1}>
          <ControlledTextField
            control={control}
            name="searchTerm"
            TextFieldProps={{
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <List>
          {users?.map((user) => (
            <ListItemButton
              key={user.id}
              onClick={() => handleResultClicked(user.id)}
            >
              <Stack direction={'row'} spacing={1} alignItems="center">
                <Avatar
                  variant="square"
                  sx={{ width: '24px', height: '24px' }}
                />
                <Typography variant="body1">{user.username}</Typography>
              </Stack>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Dialog>
  )
}

export default SearchDialog
