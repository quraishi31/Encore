'use client'

import Image from 'next/image'

const clients = [
  { src: '/clients/client1.jpeg', alt: 'Client 1' },
  { src: '/clients/client2.jpeg', alt: 'Client 2' },
  { src: '/clients/client3.jpeg', alt: 'Client 3' },
  { src: '/clients/client4.jpeg', alt: 'Client 4' },
  { src: '/clients/client5.jpeg', alt: 'Client 5' },
  { src: '/clients/client6.jpeg', alt: 'Client 6' },
  { src: '/clients/client7.jpeg', alt: 'Client 7' },
  { src: '/clients/client8.jpeg', alt: 'Client 8' },
  { src: '/clients/client9.jpeg', alt: 'Client 9' },
]

export default function OurClients() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#00d4c8]">Our Clients</p>
        <h2 className="text-[36px] font-semibold text-white md:text-[52px]">
          Brands we've worked with.
        </h2>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div className="flex w-max animate-marquee gap-12">
          {/* Original set */}
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 transition-all duration-300 hover:border-[#00d4c8]/40 hover:bg-white/10"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`dup-${index}`}
              className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 transition-all duration-300 hover:border-[#00d4c8]/40 hover:bg-white/10"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
