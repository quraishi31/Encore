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
