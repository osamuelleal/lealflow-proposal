import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function MonthlySlide() {
  const { monthly } = clientConfig.content

  return (
    <div className="relative w-full min-h-full flex items-start md:items-center overflow-hidden py-6 md:py-0">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-8">
        <div className="stagger">
          <SlideTitle
            label="Mensalidade"
            title={monthly.sublabel}
            subtitle="Um valor fixo mensal que cobre tudo. Nenhum serviço extra para contratar."
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start stagger">
          {/* Price highlight */}
          <div className="flex-shrink-0">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 flex flex-col gap-1 min-w-[180px]">
              <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase">A partir de</span>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-white">{monthly.price}</span>
                <span className="text-brand-muted text-lg">{monthly.label}</span>
              </div>
            </div>
          </div>

          {/* Included items */}
          <div className="flex-1 flex flex-col gap-1">
            <span className="font-mono text-xs text-brand-muted tracking-wider uppercase mb-2">
              Tudo incluído — sem pagar à parte
            </span>
            {monthly.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 border-b border-brand-border/50 last:border-0">
                <div className="w-5 h-5 rounded-md bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-sm text-white">{item.what}</span>
                  <span className="font-body text-xs text-brand-muted">{item.why}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volume note — simple, no table */}
        <div className="flex items-start gap-3 bg-brand-surface/40 border border-brand-border rounded-xl px-5 py-4 stagger">
          <span className="text-base flex-shrink-0">💡</span>
          <p className="font-body text-sm text-brand-muted leading-relaxed">
            {monthly.volumeNote}
          </p>
        </div>
      </div>
    </div>
  )
}
