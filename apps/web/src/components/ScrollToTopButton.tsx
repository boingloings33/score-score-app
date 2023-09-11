import { useState } from 'react'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab, useTheme } from '@mui/material'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const theme = useTheme()

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 500) {
      setVisible(true)
    } else if (scrolled <= 500) {
      setVisible(false)
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <Fab
      color="primary"
      onClick={handleScrollToTop}
      sx={{
        position: 'sticky',
        bottom: 20,
        display: visible ? 'flex' : 'none',
        alignSelf: 'center',
      }}
    >
      <KeyboardArrowUpIcon
        fontSize="large"
        sx={{
          color: theme.palette.primary.main,
          bgcolor: theme.palette.background.default,
          borderRadius: 4,
        }}
      />
    </Fab>
  )
}

export default ScrollButton
