'use client'

import dynamic from 'next/dynamic'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const PdfViewer = dynamic(() => import('@/components/PdfViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[60vh] items-center justify-center text-white/70">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm font-medium">Loading Portfolio...</p>
      </div>
    </div>
  ),
})

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative z-50">
        <Navigation />
      </div>
      <main className="pt-28 pb-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-kicker">Portfolio</p>
          <h1 className="section-title mt-2 text-4xl font-semibold text-white md:text-5xl">
            Company Profile & Works
          </h1>
        </div>
        <PdfViewer />
      </main>
      <Footer />
    </div>
  )
}