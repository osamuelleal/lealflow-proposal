import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function MonthlySlide() {
  const { monthly } = clientConfig.content

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 flex flex-col gap-6">
        <div className="stagger">
          <SlideTitle label="Mensalidade" title={monthly.sublabel} />
        </div>

        <div className="grid grid-cols-2 gap-6 stagger">
          {/* Left: monthly price + items */}
          <div className="flex flex-col gap-4">
            {/* Price */}
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-5 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold text-white">{monthly.price}</span>
              <span className="text-brand-muted text-lg">{monthly.label}</span>
            </div>

            {/* Included items */}
            <div className="flex flex-col gap-2">
              {monthly.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 border-b border-brand-border/50 last:border-0"
                >
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

          {/* Right: volume table */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase">
                Escala com seu crescimento
              </span>
            </div>
            <div className="bg-brand-surface/60 border border-brand-border rounded-xl overflow-hidden">
              {/* Table header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-brand-dark/50 border-b border-brand-border">
                <span className="font-mono text-xs text-brand-muted uppercase tracking-wider">
                  Volume de atendimentos
                </span>
                <span className="font-mono text-xs text-brand-muted uppercase tracking-wider">
                  Mensalidade
                </span>
              </div>
              {monthly.volumeTable.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 border-b border-brand-border/50 last:border-0 ${
                    i === 0 ? 'bg-brand-blue/10' : ''
                  }`}
                >
                  <span className="font-body text-sm text-white/80">{row.range}</span>
                  <span
                    className={`font-display text-sm font-semibold ${
                      i === 0 ? 'text-brand-cyan' : 'text-white'
                    }`}
                  >
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-brand-muted italic leading-relaxed">
              💡 {monthly.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
