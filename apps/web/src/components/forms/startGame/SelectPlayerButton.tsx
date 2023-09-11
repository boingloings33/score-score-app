import { PlusIcon } from '@/assets/icons/PlusIcon'
import AddPlayerAndGuestDialog from '@/components/dialogs/selectPlayer/AddPlayerAndGuestDialog'
import useGetUser from '@/hooks/api/users/useGetUser'
import PersonIcon from '@mui/icons-material/Person'

import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useState } from 'react'

interface SelectPlayerButtonProps {
  userId: number
  guestName?: string
  onPlayerSelected: ({
    userId,
    guestName,
  }: {
    userId: number
    guestName?: string
  }) => void
  onGuestNameSelected: (guestName: string) => void
}

function SelectPlayerButton({
  userId,
  guestName,
  onPlayerSelected,
  onGuestNameSelected,
}: SelectPlayerButtonProps) {
  const [isSelectPlayerDialogOpen, setIsSelectPlayerDialogOpen] =
    useState<boolean>(false)

  const { data: user, isLoading } = useGetUser(userId)

  const noSelection = userId === 1 && !guestName
  const userIsSelected = userId !== 1 && !guestName
  const guestIsSelected = userId === 1 && guestName

  function handleClick() {
    // open dialog
    setIsSelectPlayerDialogOpen(true)
  }

  return (
    <>
      <AddPlayerAndGuestDialog
        open={isSelectPlayerDialogOpen}
        onPlayerSelected={onPlayerSelected}
        onGuestNameSelected={onGuestNameSelected}
        onClose={() => {
          setIsSelectPlayerDialogOpen(false)
        }}
      />
      <Button
        onClick={handleClick}
        variant={noSelection ? 'outlined' : 'contained'}
        color="secondary"
        startIcon={
          <>
            {guestIsSelected && (
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
                <PlusIcon size={'xs'} />
              </Stack>
            )}

            {userIsSelected && (
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
                <PersonIcon
                  sx={{
                    color: 'primary.light',
                    pl: '1.5px',
                  }}
                />
              </Stack>
            )}
          </>
        }
      >
        {noSelection && (
          <Typography variant="button" color="secondary">
            Select Player
          </Typography>
        )}
        {guestIsSelected && (
          <Typography
            variant="button"
            sx={{
              color: 'primary.contrastText',
            }}
          >
            {guestName}
          </Typography>
        )}
        {userIsSelected && (
          <Typography
            variant="button"
            sx={{
              color: 'primary.contrastText',
            }}
          >
            {isLoading && <CircularProgress size={15} />}
            {user?.username}
          </Typography>
        )}
      </Button>
    </>
  )
}

export default SelectPlayerButton
