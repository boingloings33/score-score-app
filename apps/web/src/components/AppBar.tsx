import { AppBar as MuiAppBar, Toolbar, Box, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'

import SideMenu from '@/components/SideMenu'
import useDialog from '@/hooks/useDialog'
import { ScoreScoreIcon, LogoIcon } from '@/assets/icons'
import { AuthProvider } from '@/contexts/Auth'

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { openSearchDialog } = useDialog()

  const navigate = useNavigate()
  const { pathname: url } = useLocation()

  function closeDrawer() {
    setIsDrawerOpen(false)
  }

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen)
  }

  function handleSearchClicked() {
    openSearchDialog({
      open: true,
      onClose: () => {
        // do nothing
      },
      onUserClicked: (userId) => {
        navigate(`/user/${userId}`)
      },
    })
  }

  useEffect(() => {
    closeDrawer()
  }, [url])

  return (
    <>
      <MuiAppBar color="inherit">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <IconButton onClick={toggleDrawer} size="large" edge="start">
              <LogoIcon size="small" />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} textAlign="center">
            <ScoreScoreIcon />
          </Box>

          <Box>
            <IconButton size="large" edge="start" onClick={handleSearchClicked}>
              <SearchIcon color="secondary" />
            </IconButton>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <AuthProvider>
        <SideMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </AuthProvider>
    </>
  )
}

export default AppBar
