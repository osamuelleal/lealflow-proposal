import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function SetupSlide() {
  const { setup } = clientConfig.content

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 flex flex-col gap-8">
        <div className="stagger">
          <SlideTitle label="Investimento" title="Setup — pagamento único." />
        </div>

        <div className="flex gap-8 stagger">
          {/* Price */}
          <div className="flex-shrink-0 flex flex-col gap-3">
            <div className="bg-brand-blue/15 border border-brand-blue/40 rounded-2xl p-6 flex flex-col gap-2 glow-blue">
              <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase">
                Valor único
              </span>
              <span className="font-display text-5xl font-bold text-white">{setup.price}</span>
              <div className="h-[1px] bg-brand-border my-1" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <span className="font-body text-xs text-brand-muted">{setup.paymentSuggestion}</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 flex flex-col gap-2">
            {setup.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-2.5 border-b border-brand-border/50 last:border-0 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-brand-cyan flex-shrink-0 mt-1.5" />
                  <span className="font-body text-sm text-white/90">{item.what}</span>
                </div>
                <span className="font-body text-xs text-brand-muted text-right flex-shrink-0 max-w-[200px]">
                  {item.why}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
