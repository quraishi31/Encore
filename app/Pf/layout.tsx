import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Encore Pakistan',
  description: 'View Encore Pakistan company profile and portfolio of brand activations and events.',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}