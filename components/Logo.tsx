'use client'

import Image, { type StaticImageData } from 'next/image'
import encoreLogo from '@/public/encore.png'

export type LogoProps = {
  src?: string | StaticImageData
  alt?: string
  width?: number
  height?: number
  className?: string
}

export function Logo({
  src = encoreLogo,
  alt = 'Encore Pakistan',
  className = 'h-11 w-auto',
  width,
  height,
}: LogoProps) {
  const resolvedWidth = typeof src === 'string' ? (width ?? 180) : width
  const resolvedHeight = typeof src === 'string' ? (height ?? 42) : height

  return (
    <Image
      src={src}
      alt={alt}
      width={resolvedWidth}
      height={resolvedHeight}
      className={`${className} object-contain`}
      priority
    />
  )
}

export default Logo
