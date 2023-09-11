import { CrownIcon } from '@/assets/icons'
import TopPlayersListSkeleton from '@/components/TopPlayersListSkeleton'
import useTopPlayers from '@/hooks/api/players/useTopPlayers'
import { Avatar, Box, Stack, Typography } from '@mui/material'

interface TopPlayersInfoProps {}

function TopPlayersList({}: TopPlayersInfoProps) {
  const { data: topPlayers, isLoading } = useTopPlayers()

  if (isLoading) {
    return <TopPlayersListSkeleton />
  } else if (!topPlayers) {
    return (
      <Typography variant="h3">
        There was a problem loading the top players
      </Typography>
    )
  } else {
    const topPlayersSorted = topPlayers.sort((a, b) => b.wins - a.wins)

    const topPlayer = topPlayersSorted[0]
    const secondTopPlayer = topPlayersSorted[1]
    const thirdTopPlayer = topPlayersSorted[2]

    const otherTopPlayers = topPlayersSorted.slice(3)

    return (
      <>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mb={2}
        >
          {/* #2 player */}
          {secondTopPlayer && (
            <Box>
              <Box px={3}>
                <Avatar
                  sx={{
                    width: '80px',
                    height: '80px',
                    mb: 1,
                  }}
                  alt=""
                  src={secondTopPlayer.profilePic || ''}
                />
              </Box>

              <Typography variant="body1" color="primary.contrastText">
                {secondTopPlayer.username}
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                {secondTopPlayer.wins} - {secondTopPlayer.losses}
              </Typography>
            </Box>
          )}

          {/* #1 player */}
          {topPlayer && (
            <Box>
              <Box sx={{ animation: `bounceAnimation 2.5s infinite` }}>
                <CrownIcon size="medium" />
              </Box>

              <Avatar
                sx={{
                  width: '120px',
                  height: '120px',
                  mb: 1,
                  mt: 2,
                }}
                alt=""
                src={topPlayer.profilePic || ''}
              />

              <Typography variant="body1" color="primary.contrastText">
                {topPlayer.username}
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                {topPlayer.wins} - {topPlayer.losses}
              </Typography>
            </Box>
          )}

          {/* #3 player */}
          {thirdTopPlayer && (
            <Box>
              <Box px={3}>
                <Avatar
                  sx={{
                    width: '80px',
                    height: '80px',
                    mb: 1,
                  }}
                  alt=""
                  src={thirdTopPlayer.profilePic || ''}
                />
              </Box>

              <Typography variant="body1" color="primary.contrastText">
                {thirdTopPlayer.username}
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
                {thirdTopPlayer.wins} - {thirdTopPlayer.losses}
              </Typography>
            </Box>
          )}
        </Stack>

        <Stack
          spacing={3}
          px={3}
          py={2}
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: '8px',
          }}
        >
          {otherTopPlayers.map((user, index) => (
            <Stack
              key={user.id}
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Typography variant="button">{index + 4}.</Typography>
              {/* profile pic goes here */}
              <Typography
                variant="body1"
                sx={{
                  flexGrow: 1,
                }}
              >
                {user.username}
              </Typography>

              <Typography variant="body2">
                {user.wins} - {user.losses}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </>
    )
  }
}

export default TopPlayersList
