import { useWizardContext } from '@/components/wizard/Wizard'
import { Box } from '@mui/material'
import { ReactNode } from 'react'

interface WizardSlideProps {
  slideIndex: number
  children: ReactNode
}

function WizardSlide({ slideIndex, children }: WizardSlideProps) {
  const { activeSlideIndex } = useWizardContext()

  const slidePercentWidth = 125

  return (
    <Box
      width="100%"
      sx={{
        position: 'absolute',
        left: `${
          slidePercentWidth * slideIndex - slidePercentWidth * activeSlideIndex
        }%`,
        transition: 'left 0.4s',
      }}
    >
      {children}
    </Box>
  )
}

export default WizardSlide
