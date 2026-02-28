import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function RequirementsSlide() {
  const { requirements } = clientConfig.content

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-12 flex flex-col gap-10">
        <div className="stagger">
          <SlideTitle
            label="Pré-requisitos"
            title={requirements.headline}
            subtitle="Simples. Você provavelmente já tem tudo isso."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 stagger">
          {requirements.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-brand-surface/60 border border-brand-border rounded-xl p-5 hover:border-brand-blue/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-2xl">
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
