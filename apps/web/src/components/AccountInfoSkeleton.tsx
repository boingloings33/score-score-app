import { Stack, Skeleton, Container, Box } from '@mui/material'
export default function AccountInfoSkeleton() {
  return (
    <Container maxWidth={'sm'}>
      <Stack spacing={3}>
        <Stack alignItems="center" spacing={2}>
          <Skeleton
            variant="rectangular"
            sx={{
              width: '120px',
              height: '120px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: '100%', height: '32px' }}
          />
          <Skeleton
            variant="rectangular"
            sx={{ width: '100%', height: '24px' }}
          />
        </Stack>
        <Skeleton variant="rectangular" sx={{ height: '32px' }} />
        <Skeleton variant="rectangular" sx={{ height: '104px' }} />
        <Skeleton variant="rectangular" sx={{ height: '104px' }} />
      </Stack>
    </Container>
  )
}
