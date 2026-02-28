import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function ProblemSlide() {
  const { problem } = clientConfig.content

  return (
    <div className="relative w-full min-h-full flex items-start md:items-center overflow-hidden py-6 md:py-0">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col gap-6 md:gap-12">
        <div className="stagger">
          <SlideTitle
            label="O Problema"
            title={problem.headline}
            subtitle={problem.description}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger">
          {problem.painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-brand-surface/60 border border-brand-border rounded-xl p-4 hover:border-brand-blue/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-dark/80 border border-brand-border flex items-center justify-center text-lg">
                {point.icon}
              </div>
              <p className="font-body text-sm text-white/80 leading-relaxed pt-1">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
