import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function RequirementsSlide() {
  const { requirements } = clientConfig.content

  return (
    <div className="relative w-full min-h-full flex items-start md:items-center overflow-hidden py-6 md:py-0">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-8 md:gap-10">
        <div className="stagger">
          <SlideTitle
            label="Pré-requisitos"
            title={requirements.headline}
            subtitle="Simples. Você provavelmente já tem tudo isso."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger">
          {requirements.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-brand-surface/60 border border-brand-border rounded-xl p-4 hover:border-brand-blue/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <p className="font-body text-sm text-white/85 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
