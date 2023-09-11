import AccountInfo from '../components/AccountInfo'
import SquadCard from '../components/SquadCard'
import WinLossCard from '../components/WinLossCard'
import {
  Typography,
  Button,
  Stack,
  Box,
  Container,
  useTheme,
} from '@mui/material'
import useGetMe from '@/hooks/api/users/useGetMe'
import AccountInfoSkeleton from '@/components/AccountInfoSkeleton'
import { Navigate } from 'react-router-dom'
import GameHistory from '@/components/GameHistory'
import useDialog from '@/hooks/useDialog'

export default function UserProfilePage() {
  const { data: me, isLoading } = useGetMe()
  const theme = useTheme()
  const navPadding = theme.spacing(7)

  const { openEditUserDialog } = useDialog()

  function handleEditClicked() {
    openEditUserDialog()
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: `calc(100vh - ${navPadding})`,
          py: 8,
          px: 4,
        }}
      >
        {isLoading && <AccountInfoSkeleton />}
        {!isLoading && !me && <Navigate to="/login" />}
        {me && (
          <Container maxWidth="sm">
            <Stack spacing={4}>
              {me && (
                <AccountInfo
                  username={me.username}
                  firstName={me.firstName}
                  lastName={me.lastName}
                  profilePic={me.profilePic}
                />
              )}
              <Button
                variant="outlined"
                sx={{ backgroundColor: 'primary.contrastText' }}
                onClick={handleEditClicked}
              >
                <Typography variant="button">Edit Account</Typography>
              </Button>
              <SquadCard />
              <WinLossCard squadGameScores={[]} squadWinLossRecord={[]} />
            </Stack>
          </Container>
        )}
      </Box>
      <Container maxWidth="sm">
        <GameHistory userId={me?.id} />
      </Container>
    </>
  )
}
