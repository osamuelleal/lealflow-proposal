import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function SetupSlide() {
  const { setup } = clientConfig.content

  return (
    <div className="relative w-full min-h-full flex items-start md:items-center overflow-hidden py-6 md:py-0">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-8">
        <div className="stagger">
          <SlideTitle
            label="Investimento"
            title="Como funciona o pagamento?"
            subtitle="Simples e transparente. Você só paga o restante quando o sistema estiver no ar."
          />
        </div>

        {/* Payment steps */}
        <div className="flex flex-col md:flex-row gap-4 stagger">
          {setup.paymentSteps.map((step, i) => (
            <div key={i} className="flex-1 relative">
              {/* Connector arrow between steps — desktop only */}
              {i < setup.paymentSteps.length - 1 && (
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8M8 4l4 4-4 4" stroke="#45C5E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              <div className={`h-full flex flex-col gap-3 rounded-2xl p-5 border ${
                step.isMonthly
                  ? 'bg-brand-surface/40 border-brand-border'
                  : 'bg-brand-blue/15 border-brand-blue/40 glow-blue'
              }`}>
                {/* Step number */}
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    step.isMonthly ? 'bg-brand-surface border border-brand-border text-brand-muted' : 'bg-brand-cyan text-brand-dark'
                  }`}>
                    {step.step}
                  </div>
                  <span className="font-mono text-xs text-brand-muted tracking-wider uppercase">
                    {step.moment}
                  </span>
                </div>

                {/* Value */}
                <div className={`font-display text-3xl md:text-4xl font-bold ${
                  step.isMonthly ? 'text-brand-muted' : 'text-white'
                }`}>
                  {step.value}
                </div>

                {/* Description */}
                <p className="font-body text-xs text-brand-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="flex flex-col gap-1 stagger">
          <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase mb-2">
            O que está incluído no setup
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {setup.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-brand-border/40 last:border-0">
                <div className="w-1 h-1 rounded-full bg-brand-cyan flex-shrink-0" />
                <span className="font-body text-sm text-white/80">{item.what}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
