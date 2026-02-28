import { SlideTitle } from '../atoms/SlideTitle'
import { clientConfig } from '../../client.config'

export function ProblemSlide() {
  const { problem } = clientConfig.content

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Red accent glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-red-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-12 flex flex-col gap-12">
        <div className="stagger">
          <SlideTitle
            label="O Problema"
            title={problem.headline}
            subtitle={problem.description}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 stagger">
          {problem.painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-brand-surface/60 border border-brand-border rounded-xl p-5 hover:border-brand-blue/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-dark/80 border border-brand-border flex items-center justify-center text-xl">
                {point.icon}
              </div>
              <p className="font-body text-sm md:text-base text-white/80 leading-relaxed pt-1">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
