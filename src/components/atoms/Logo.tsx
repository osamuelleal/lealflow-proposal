interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 48, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="100" fill="#3D40D4" />
      {/* Letter L */}
      <rect x="42" y="48" width="28" height="104" fill="white" />
      <rect x="42" y="124" width="72" height="28" fill="white" />
      {/* Letter t */}
      <rect x="90" y="48" width="68" height="28" fill="white" />
      <rect x="104" y="48" width="28" height="76" fill="white" />
      {/* Cyan accent square */}
      <rect x="132" y="96" width="26" height="26" fill="#45C5E8" />
    </svg>
  )
}
