interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'cyan' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  const variants = {
    blue: 'bg-brand-blue/20 text-brand-cyan border border-brand-blue/40',
    cyan: 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40',
    outline: 'bg-transparent text-brand-muted border border-brand-border',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
