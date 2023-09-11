import { CircularProgress, Typography, Box } from '@mui/material'
import { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface InfiniteScrollProps {
  children: ReactNode
  isLoading: boolean
  isFetchingNextPage: boolean
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
}

const InfiniteScroll = ({
  children,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Box sx={{ overflowY: 'auto' }}>
      {children}
      {!isLoading && (
        <Box
          ref={ref}
          sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
        >
          {!isFetchingNextPage && (
            <Typography variant="caption">
              {hasNextPage && 'Loading More'}
            </Typography>
          )}
          {isFetchingNextPage && <CircularProgress size={30} />}
        </Box>
      )}
    </Box>
  )
}
export default InfiniteScroll
