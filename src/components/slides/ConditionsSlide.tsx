import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function ConditionsSlide() {
  const { conditions } = clientConfig.content

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 flex flex-col gap-8">
        <div className="stagger">
          <SlideTitle label="Contrato" title={conditions.headline} />
        </div>

        <div className="grid grid-cols-2 gap-6 stagger">
          {/* Conditions */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase mb-2">
              Condições
            </span>
            {conditions.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 py-3 border-b border-brand-border/50 last:border-0"
              >
                <span className="font-body text-sm text-brand-muted flex-shrink-0">{item.label}</span>
                <span className="font-body text-sm text-white text-right">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Out of scope */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-brand-muted tracking-wider uppercase mb-2">
              Fora do escopo (Fase 1)
            </span>
            <div className="bg-brand-surface/40 border border-brand-border rounded-xl p-4 flex flex-col gap-3">
              {conditions.outOfScope.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-brand-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-[2px] bg-brand-muted rounded-full" />
                  </div>
                  <span className="font-body text-sm text-brand-muted leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-brand-muted/60 italic leading-relaxed">
              Estas evoluções são bem-vindas na Fase 2, com novo orçamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
