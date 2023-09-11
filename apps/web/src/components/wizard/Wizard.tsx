import { Box, Stack } from '@mui/material'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from 'react'

interface WizardContextInterface {
  activeSlideIndex: number

  setActiveSlideIndex?: Dispatch<SetStateAction<number>>
  stepForward?: () => void
  stepBack?: () => void
  isFirstStep?: boolean
  isLastStep?: boolean
}

const WizardContext = createContext<WizardContextInterface>(
  {} as WizardContextInterface
)

interface WizardProps extends WizardContextInterface {
  children: ReactNode
}

function Wizard({
  activeSlideIndex,
  setActiveSlideIndex,
  stepForward,
  stepBack,
  isFirstStep,
  isLastStep,
  children,
}: WizardProps) {
  return (
    <WizardContext.Provider
      value={{
        activeSlideIndex,
        setActiveSlideIndex,
        stepForward,
        stepBack,
        isFirstStep,
        isLastStep,
      }}
    >
      <Box>
        <Stack
          sx={{
            width: '100%',
            height: '16rem',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {children}
        </Stack>
      </Box>
    </WizardContext.Provider>
  )
}

function useWizardContext() {
  const wizardContext = useContext<WizardContextInterface>(WizardContext)
  if (wizardContext === undefined) {
    throw new Error(
      'useWizardContext must be used within an WizardContextProvider'
    )
  }
  return wizardContext
}

export default Wizard
export { useWizardContext }
