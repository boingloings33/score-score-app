import { useCallback, useState } from 'react'

export default function useWizard(totalSlides: number) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

  const isFirstStep: boolean = activeSlideIndex === 0
  const isLastStep: boolean = activeSlideIndex === totalSlides - 1

  const stepForward = useCallback(() => {
    setActiveSlideIndex((currentSlide) =>
      currentSlide === totalSlides - 1 ? currentSlide : currentSlide + 1
    )
  }, [])

  const stepBack = useCallback(() => {
    setActiveSlideIndex((currentSlide) =>
      currentSlide < 1 ? currentSlide : currentSlide - 1
    )
  }, [])

  return {
    activeSlideIndex,
    setActiveSlideIndex,
    stepForward,
    stepBack,
    isFirstStep,
    isLastStep,
  }
}
