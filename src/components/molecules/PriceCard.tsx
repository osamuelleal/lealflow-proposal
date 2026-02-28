interface PriceCardProps {
  price: string
  label: string
  sublabel?: string
  highlighted?: boolean
}

export function PriceCard({ price, label, sublabel, highlighted = false }: PriceCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col gap-1 ${
        highlighted
          ? 'bg-brand-blue/20 border border-brand-blue/50 glow-blue'
          : 'bg-brand-surface border border-brand-border'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-6">
          <span className="bg-brand-cyan text-brand-dark text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Investimento
          </span>
        </div>
      )}
      <div className="flex items-baseline gap-1 mt-2">
        <span className="font-display text-4xl font-bold text-white">{price}</span>
        {label && <span className="text-brand-muted text-sm">{label}</span>}
      </div>
      {sublabel && <p className="text-brand-muted text-xs">{sublabel}</p>}
    </div>
  )
}
