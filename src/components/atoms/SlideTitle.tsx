interface SlideTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SlideTitle({ label, title, subtitle, align = 'left' }: SlideTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-cyan opacity-80">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
