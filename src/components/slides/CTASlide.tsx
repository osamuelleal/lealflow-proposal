import { Logo } from '../atoms/Logo'
import { clientConfig } from '../../client.config'

export function CTASlide() {
  const { cta } = clientConfig.content
  const { presenter, client } = clientConfig

  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Background glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-brand-blue/12 blur-[140px]" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-brand-cyan/5 blur-[80px] pointer-events-none" />

      {/* Top-left accent */}
      <div className="absolute top-0 left-0 w-[2px] h-32 bg-gradient-to-b from-brand-cyan to-transparent" />
      <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-brand-cyan to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-8 stagger max-w-4xl">
        {/* Logo */}
        <Logo size={64} />

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line text-glow">
          {cta.headline}
        </h2>

        {/* Sub */}
        <p className="font-body text-lg text-brand-muted max-w-lg leading-relaxed">
          {cta.subline}
        </p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />

        {/* Contact card */}
        <div className="bg-brand-surface/80 border border-brand-border rounded-2xl px-8 py-6 backdrop-blur-sm flex flex-col items-center gap-4">
          <span className="font-mono text-xs text-brand-muted tracking-wider uppercase">
            Contato
          </span>
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-xl font-semibold text-white">
              {presenter.author}
            </span>
            <span className="font-mono text-sm text-brand-cyan">{presenter.email}</span>
            {presenter.whatsapp && (
              <span className="font-mono text-sm text-brand-muted">{presenter.whatsapp}</span>
            )}
          </div>
          <div className="h-[1px] w-full bg-brand-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-body text-sm text-brand-muted">
              Proposta válida para{' '}
              <span className="text-white font-medium">{client.name}</span>
            </span>
          </div>
        </div>

        {/* Brand */}
        <span className="font-mono text-xs text-brand-muted/40 tracking-widest">
          {presenter.product.toUpperCase()} · {presenter.company.toUpperCase()}
        </span>
      </div>
    </div>
  )
}
