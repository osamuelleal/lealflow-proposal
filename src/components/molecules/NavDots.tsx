interface NavDotsProps {
  total: number
  current: number
  onNavigate: (index: number) => void
}

export function NavDots({ total, current, onNavigate }: NavDotsProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={`transition-all duration-300 rounded-full cursor-pointer ${
            i === current
              ? 'w-6 h-2 bg-brand-cyan'
              : 'w-2 h-2 bg-brand-border hover:bg-brand-muted'
          }`}
          aria-label={`Ir para slide ${i + 1}`}
        />
      ))}
    </div>
  )
}
