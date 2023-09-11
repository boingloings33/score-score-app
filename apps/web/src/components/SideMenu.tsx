import XIcon from '@mui/icons-material/CloseOutlined'
import HomeIcon from '@mui/icons-material/Home'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import GroupIcon from '@mui/icons-material/Group'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import Mail from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom'
import useGetMe from '@/hooks/api/users/useGetMe'
import { useAuthContext } from '@/contexts/Auth'

interface SideMenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const { authenticated } = useAuthContext()

  const { logout } = useAuthContext()

  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))

  function toggleDrawer() {
    setIsOpen((currentValue) => !currentValue)
  }
  function handleLogout() {
    logout()
    window.location.reload()
  }
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      PaperProps={{
        sx: {
          width: smallScreen ? '100%' : 'fit-content',
          minWidth: '300px',
          p: 4,
          pb: 7,
          position: 'relative',
        },
      }}
    >
      {/* options */}
      <List sx={{ flexGrow: 1, width: '100%' }}>
        <IconButton onClick={toggleDrawer} sx={{ mb: 2 }}>
          <XIcon />
        </IconButton>
        <StyledListItem linkTo="/" title="Home" onClick={toggleDrawer}>
          <HomeIcon fontSize="large" />
        </StyledListItem>

        <Divider />

        <StyledListItem
          linkTo="statistics"
          title="Statistics"
          onClick={toggleDrawer}
        >
          <EmojiEventsIcon fontSize="large" />
        </StyledListItem>

        <Divider />

        <StyledListItem linkTo="squads" title="Squads" onClick={toggleDrawer}>
          <GroupIcon fontSize="large" />
        </StyledListItem>

        <Divider />

        {authenticated && (
          <>
            <StyledListItem
              linkTo="myaccount"
              title="My Account"
              onClick={toggleDrawer}
            >
              <AccountBoxIcon fontSize="large" />
            </StyledListItem>
            <Divider />
          </>
        )}
      </List>
      {authenticated && (
        <>
          <List>
            <StyledListItem linkTo="inbox" title="Inbox" onClick={toggleDrawer}>
              <Mail fontSize="large" />
            </StyledListItem>
          </List>
          <Divider />
        </>
      )}
      {authenticated && (
        <>
          <List>
            <StyledListItem linkTo="home" title="Logout" onClick={handleLogout}>
              <LogoutIcon fontSize="large" />
            </StyledListItem>
          </List>
          <Divider />
        </>
      )}
      {!authenticated && (
        <>
          <List>
            <StyledListItem linkTo="login" title="Login" onClick={toggleDrawer}>
              <LoginIcon fontSize="large" />
            </StyledListItem>
          </List>
          <Divider />
        </>
      )}
    </Drawer>
  )
}

interface StyledListItemProps {
  title: string
  children: ReactNode
  linkTo: string
  onClick: () => void
}
function StyledListItem({
  title,
  children,
  linkTo,
  onClick,
}: StyledListItemProps) {
  const theme = useTheme()

  return (
    <ListItem
      onClick={onClick}
      component={Link}
      to={linkTo}
      sx={{
        px: 0,
        py: 2,
        color: theme.palette.text.secondary,
        '&:hover': {
          color: theme.palette.primary.main,
        },
      }}
    >
      <ListItemButton
        disableRipple
        sx={{
          p: 0,
          '&:hover': {
            backgroundColor: 'initial',
          },
        }}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>
          <IconButton
            color="inherit"
            sx={{ width: '100%', backgroundColor: 'transparent', p: 0, m: 0 }}
            disableRipple
          >
            {children}
          </IconButton>
        </ListItemIcon>
        <ListItemText>
          <Typography variant="h5" color="inherit">
            {title}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default SideMenu
