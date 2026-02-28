import { Logo } from '../atoms/Logo'
import { clientConfig } from '../../client.config'

export function CoverSlide() {
  const { client, presenter, date } = clientConfig

  return (
    <div className="relative flex-1 flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[120px]" />
      </div>

      {/* Top-left accent line */}
      <div className="absolute top-0 left-0 w-[2px] h-32 bg-gradient-to-b from-brand-cyan to-transparent" />
      <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-brand-cyan to-transparent" />

      {/* Bottom-right accent line */}
      <div className="absolute bottom-0 right-0 w-[2px] h-32 bg-gradient-to-t from-brand-blue to-transparent" />
      <div className="absolute bottom-0 right-0 w-32 h-[2px] bg-gradient-to-l from-brand-blue to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-8 stagger">
        {/* Logo + brand */}
        <div className="flex flex-col items-center gap-4">
          <Logo size={72} />
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-brand-cyan">
              {presenter.company}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

        {/* Main title */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
            {presenter.product}
          </h1>
          <p className="font-body text-lg text-brand-muted max-w-md leading-relaxed">
            {presenter.tagline}
          </p>
        </div>

        {/* Client info */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex items-center gap-3 bg-brand-surface/80 border border-brand-border rounded-2xl px-6 py-3 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-body text-sm text-white font-medium">
              Proposta para{' '}
              <span className="text-brand-cyan font-semibold">{client.name}</span>
            </span>
            <span className="text-brand-border">·</span>
            <span className="font-mono text-xs text-brand-muted">{client.location}</span>
          </div>
          <span className="font-mono text-xs text-brand-muted/60 tracking-wider">{date}</span>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-brand-muted tracking-wider">
          Use ← → para navegar
        </span>
      </div>
    </div>
  )
}
