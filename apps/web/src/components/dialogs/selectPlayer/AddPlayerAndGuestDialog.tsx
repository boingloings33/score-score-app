import { Dialog, DialogContent } from '@mui/material'
import CreateGuestSlide from '@/components/dialogs/selectPlayer/CreateGuestSlide'
import Wizard from '@/components/wizard/Wizard'
import WizardSlide from '@/components/wizard/WizardSlide'
import useWizard from '@/hooks/useWizard'
import SelectPlayerFirstSlide from '@/components/dialogs/selectPlayer/SelectPlayerFirstSlide'
import { DialogProps } from '..'

interface AddPlayerAndGuestDialogProps extends DialogProps {
  onPlayerSelected: ({
    userId,
    guestName,
  }: {
    userId: number
    guestName?: string
  }) => void
  onGuestNameSelected: (guestName: string) => void
}

export default function AddPlayerAndGuestDialog({
  open,
  onClose,
  onPlayerSelected,
  onGuestNameSelected,
}: AddPlayerAndGuestDialogProps) {
  const wizardStuff = useWizard(2)

  function handleClose() {
    onClose()
    setTimeout(() => {
      wizardStuff.setActiveSlideIndex(0)
    }, 250)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          py: 7,
          px: 4,
          minWidth: '320px',
        }}
      >
        <Wizard {...wizardStuff}>
          <WizardSlide slideIndex={0}>
            <SelectPlayerFirstSlide
              onPlayerSelected={onPlayerSelected}
              handleClose={handleClose}
            />
          </WizardSlide>

          <WizardSlide slideIndex={1}>
            <CreateGuestSlide
              onGuestNameSelected={onGuestNameSelected}
              handleClose={handleClose}
            />
          </WizardSlide>
        </Wizard>
      </DialogContent>
    </Dialog>
  )
}
