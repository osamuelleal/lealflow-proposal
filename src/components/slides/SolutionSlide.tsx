import { Logo } from '../atoms/Logo'
import { clientConfig } from '../../client.config'

export function SolutionSlide() {
  const { solution } = clientConfig.content
  const { presenter } = clientConfig

  return (
    <div className="relative w-full min-h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-12 flex flex-col items-center text-center gap-10 stagger">
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center glow-blue">
          <Logo size={52} />
        </div>

        {/* Label */}
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-brand-cyan">
          A Solução
        </span>

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {solution.headline}
        </h2>

        {/* Description */}
        <p className="font-body text-lg text-brand-muted max-w-2xl leading-relaxed">
          {solution.description}
        </p>

        {/* Highlight pill */}
        <div className="flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 rounded-full px-8 py-3">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="font-mono text-sm text-brand-cyan font-medium tracking-widest uppercase">
            {solution.highlight}
          </span>
        </div>

        {/* Product name */}
        <p className="font-mono text-xs text-brand-muted/50 tracking-wider">
          {presenter.product} by {presenter.company}
        </p>
      </div>
    </div>
  )
}
