import { useId } from 'react'

export function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg
      viewBox="0 0 420 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="11th Hour"
      role="img"
   >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00c2a5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00e0c0', stopOpacity: 1 }} />
        </linearGradient>
        
      <defs>
      <text
        x="122"
        y="64"
        fontFamily="Sora, Arial, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="6"
        fill="white"
      >
        ENCORE
      </text>
    </svg>
  )
}
