import useGetMe from '@/hooks/api/users/useGetMe'
import { Typography, Avatar, Stack, Paper } from '@mui/material'
import { string } from 'zod'

interface AccountInfoProps {
  username: string
  firstName: string | null
  lastName: string | null
  profilePic: string | null
}

export default function AccountInfo({
  username,
  firstName,
  lastName,
  profilePic,
}: AccountInfoProps) {
  return (
    <Stack spacing={1} alignItems="center">
      <Paper elevation={2}>
        <Avatar
          sx={{
            width: '120px',
            height: '120px',
          }}
          alt=""
          src={profilePic || ''}
        />
      </Paper>
      <Typography variant="h3">{username}</Typography>
      <Typography variant="caption">
        {firstName || username} {firstName && lastName}
      </Typography>
    </Stack>
  )
}
