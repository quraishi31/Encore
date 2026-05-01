import Image from 'next/image'

export function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  return (
    <Image
      src="/encore.png"
      alt="Encore"
      width={200}
      height={56}
      className={className}
      priority
    />
  )
}
