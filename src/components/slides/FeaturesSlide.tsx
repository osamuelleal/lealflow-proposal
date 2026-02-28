import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function FeaturesSlide() {
  const { features } = clientConfig.content

  return (
    <div className="relative w-full overflow-visible md:overflow-hidden py-6 md:py-0">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-6 md:gap-8">
        <div className="stagger">
          <SlideTitle label="O que você vai ter" title="Tudo que a Mi7 precisa." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`relative flex flex-col gap-2 bg-brand-surface/60 border rounded-xl p-4 hover:border-brand-cyan/40 transition-all duration-300 group ${
                i === 0 ? 'border-brand-cyan/30' : 'border-brand-border'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center text-base flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="font-display text-sm font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="font-body text-xs text-brand-muted leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
