import { Stack, Skeleton, Container, Box } from '@mui/material'

function TopPlayersListSkeleton() {
  return (
    <Container maxWidth={'sm'}>
      <Stack alignItems="center">
        <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
          <Box sx={{ pt: 6 }}>
            <Skeleton
              variant="rectangular"
              sx={{
                width: '80px',
                height: '80px',
              }}
            />
            <Skeleton variant="text" />
          </Box>

          <Stack alignItems="center">
            <Skeleton
              variant="rectangular"
              sx={{
                width: '64px',
                height: '64px',
                mb: 1,
              }}
            />
            <Skeleton
              variant="rectangular"
              sx={{
                width: '120px',
                height: '120px',
              }}
            />
            <Skeleton variant="text" width="100%" />
          </Stack>

          <Box sx={{ pt: 6 }}>
            <Skeleton
              variant="rectangular"
              sx={{
                width: '80px',
                height: '80px',
              }}
            />
            <Skeleton variant="text" />
          </Box>
        </Stack>

        <Skeleton
          variant="rectangular"
          sx={{ mt: 8, width: '100%', height: '310px' }}
        />
      </Stack>
    </Container>
  )
}

export default TopPlayersListSkeleton
