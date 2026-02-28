import { useState, useEffect, useCallback } from 'react'
import { SlideLayout } from './components/organisms/SlideLayout'
import { CoverSlide } from './components/slides/CoverSlide'
import { ProblemSlide } from './components/slides/ProblemSlide'
import { SolutionSlide } from './components/slides/SolutionSlide'
import { FeaturesSlide } from './components/slides/FeaturesSlide'
import { PricingSlide } from './components/slides/PricingSlide'
import { TimelineSlide } from './components/slides/TimelineSlide'
import { RequirementsSlide } from './components/slides/RequirementsSlide'
import { ConditionsSlide } from './components/slides/ConditionsSlide'
import { CTASlide } from './components/slides/CTASlide'
import { clientConfig } from './client.config'

const SLIDE_COMPONENTS = [
  CoverSlide,
  ProblemSlide,
  SolutionSlide,
  FeaturesSlide,
  PricingSlide,
  TimelineSlide,
  RequirementsSlide,
  ConditionsSlide,
  CTASlide,
]

export default function App() {
  const totalSlides = clientConfig.slides.length
  const [currentSlide, setCurrentSlide] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentSlide(index)
      }
    },
    [totalSlides]
  )

  const goNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo])
  const goPrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault()
          goNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          goPrev()
          break
        case ' ':
          e.preventDefault()
          goNext()
          break
        case 'Escape':
        case 'Home':
          goTo(0)
          break
        case 'End':
          goTo(totalSlides - 1)
          break
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, goTo, totalSlides])

  // Touch/swipe navigation
  useEffect(() => {
    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const diffX = startX - e.changedTouches[0].clientX
      const diffY = startY - e.changedTouches[0].clientY

      // Only horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) goNext()
        else goPrev()
      }
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev])

  const CurrentSlideComponent = SLIDE_COMPONENTS[currentSlide]

  return (
    <SlideLayout
      currentSlide={currentSlide}
      totalSlides={totalSlides}
      onNavigate={goTo}
      onPrev={goPrev}
      onNext={goNext}
    >
      <CurrentSlideComponent />
    </SlideLayout>
  )
}
