import { type ReactNode } from 'react'
import { Logo } from '../atoms/Logo'
import { NavDots } from '../molecules/NavDots'
import { clientConfig } from '../../client.config'

interface SlideLayoutProps {
  children: ReactNode
  currentSlide: number
  totalSlides: number
  onNavigate: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

export function SlideLayout({
  children,
  currentSlide,
  totalSlides,
  onNavigate,
  onPrev,
  onNext,
}: SlideLayoutProps) {
  const { presenter } = clientConfig
  const isFirst = currentSlide === 0
  const isLast = currentSlide === totalSlides - 1

  return (
    <div className="relative w-full h-dvh bg-brand-dark flex flex-col overflow-hidden">
      {/* Header bar */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-b border-brand-border/40 z-50">
        <div className="flex items-center gap-2">
          <Logo size={28} />
          <div className="flex flex-col">
            <span className="font-display text-xs md:text-sm font-bold text-white leading-none">
              {presenter.product}
            </span>
            <span className="font-mono text-[9px] md:text-[10px] text-brand-muted leading-none mt-0.5">
              {presenter.company}
            </span>
          </div>
        </div>

        {/* Nav dots — hidden on very small screens */}
        <div className="hidden sm:block">
          <NavDots total={totalSlides} current={currentSlide} onNavigate={onNavigate} />
        </div>

        {/* Slide counter */}
        <div className="flex items-center gap-1 font-mono text-xs text-brand-muted">
          <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>
      </header>

      {/* Slide content — scrollable on mobile, centered on desktop */}
      <main className="flex-1 min-h-0 relative overflow-y-auto overflow-x-hidden">
        <div key={currentSlide} className="slide-enter w-full min-h-full flex flex-col md:justify-center">
          {children}
        </div>
      </main>

      {/* Footer nav */}
      <footer className="flex-shrink-0 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 border-t border-brand-border/40 z-50">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="flex items-center gap-2 font-mono text-xs text-brand-muted hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Anterior
        </button>

        <span className="font-mono text-xs text-brand-muted/40 tracking-wider hidden md:block">
          ← → para navegar · ESC para início
        </span>

        <button
          onClick={onNext}
          disabled={isLast}
          className="flex items-center gap-2 font-mono text-xs text-brand-muted hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        >
          Próximo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </footer>
    </div>
  )
}
