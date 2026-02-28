import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function TimelineSlide() {
  const { timeline } = clientConfig.content

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 flex flex-col gap-10">
        <div className="stagger">
          <SlideTitle label="Cronograma" title={timeline.headline} />
        </div>

        <div className="flex items-stretch gap-0 stagger">
          {timeline.weeks.map((week, i) => (
            <div key={i} className="flex-1 flex flex-col relative">
              {/* Connector line */}
              {i < timeline.weeks.length - 1 && (
                <div className="absolute top-6 left-1/2 w-full h-[2px] bg-gradient-to-r from-brand-blue/60 to-brand-border/40" />
              )}

              <div className="flex flex-col items-center gap-3 px-2">
                {/* Week badge */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 font-display text-sm font-bold transition-all ${
                    i === 0
                      ? 'bg-brand-cyan border-brand-cyan text-brand-dark'
                      : i === timeline.weeks.length - 1
                      ? 'bg-brand-blue border-brand-blue text-white'
                      : 'bg-brand-surface border-brand-border text-brand-muted'
                  }`}
                >
                  {week.week}
                </div>

                {/* Label */}
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                    {week.label}
                  </span>
                  <p className="font-body text-xs text-brand-muted leading-relaxed text-center px-1">
                    {week.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex items-center gap-3 bg-brand-surface/40 border border-brand-border rounded-xl px-5 py-3 self-start stagger">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="font-body text-sm text-brand-muted">
            Da assinatura ao go-live em{' '}
            <span className="text-white font-medium">6 semanas</span>
          </span>
        </div>
      </div>
    </div>
  )
}
