import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function PricingSlide() {
  const { setup, monthly } = clientConfig.content

  return (
    <div className="relative w-full overflow-visible md:overflow-hidden py-6 md:py-0">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-cyan/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-5 md:gap-6">
        <div className="stagger">
          <SlideTitle
            label="Investimento"
            title="Setup + Mensalidade"
            subtitle="Você paga em etapas. A mensalidade começa só após o sistema estar no ar."
          />
        </div>

        {/* Payment steps */}
        <div className="flex flex-col md:flex-row gap-3 stagger">
          {setup.paymentSteps.map((step, i) => (
            <div key={i} className="flex-1 relative">
              {/* Connector arrow — desktop only */}
              {i < setup.paymentSteps.length - 1 && (
                <div className="hidden md:flex absolute -right-1.5 top-1/2 -translate-y-1/2 z-20 w-3 items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8M8 4l4 4-4 4" stroke="#45C5E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div className={`h-full flex flex-col gap-2 rounded-xl p-4 border ${
                step.isMonthly
                  ? 'bg-brand-surface/40 border-brand-border'
                  : 'bg-brand-blue/15 border-brand-blue/40 glow-blue'
              }`}>
                {/* Step number + moment */}
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    step.isMonthly
                      ? 'bg-brand-surface border border-brand-border text-brand-muted'
                      : 'bg-brand-cyan text-brand-dark'
                  }`}>
                    {step.step}
                  </div>
                  <span className="font-mono text-[10px] text-brand-muted tracking-wider uppercase">
                    {step.moment}
                  </span>
                </div>

                {/* Value */}
                <div className={`font-display text-2xl md:text-3xl font-bold ${
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

        {/* Setup includes + Monthly breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger">
          {/* Setup includes */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase mb-1">
              Incluso no setup
            </span>
            {setup.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 border-b border-brand-border/30 last:border-0">
                <div className="w-1 h-1 rounded-full bg-brand-cyan flex-shrink-0" />
                <span className="font-body text-xs text-white/80">{item.what}</span>
              </div>
            ))}
          </div>

          {/* Monthly breakdown */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-brand-muted tracking-wider uppercase mb-1">
              O que cobre a mensalidade
            </span>
            {monthly.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 py-1.5 border-b border-brand-border/30 last:border-0">
                <div className="w-1 h-1 rounded-full bg-brand-blue/70 flex-shrink-0 mt-1.5" />
                <div className="flex flex-col">
                  <span className="font-body text-xs text-white/80">{item.what}</span>
                  <span className="font-body text-[10px] text-brand-muted">{item.why}</span>
                </div>
              </div>
            ))}
            <p className="font-body text-[10px] text-brand-muted/60 leading-relaxed mt-1 italic">
              {monthly.volumeNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
