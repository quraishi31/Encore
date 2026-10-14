'use client'

import Image, { StaticImageData } from 'next/image'

import client1 from '@/assets/easypaisa.png'
import client2 from '@/assets/pepsi.png'
import client3 from '@/assets/stylo.png'
import client4 from '@/assets/Lipton.png'
import client5 from '@/assets/dominos.png'
import client6 from '@/assets/soya supreme.png'
import client7 from '@/assets/Kenwood.png'
import client8 from '@/assets/zong.png'
import client9 from '@/assets/Abbott.png'

type Client = {
  name: string
  image: StaticImageData
}

const clients: Client[] = [
  { name: 'Easypaisa', image: client1 },
  { name: 'Pepsi', image: client2 },
  { name: 'Stylo', image: client3 },
  { name: 'Lipton', image: client4 },
  { name: "Domino's", image: client5 },
  { name: 'Soya Supreme', image: client6 },
  { name: 'Kenwood', image: client7 },
  { name: 'Zong 4G', image: client8 },
  { name: 'Abbott', image: client9 },
]

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group flex-shrink-0 w-40 rounded-[16px] border border-white/10 bg-[#0b0b0b] p-1.5 transition-colors duration-300 hover:border-primary/40 hover:bg-[#101010]">
      <div className="relative flex aspect-[1.55] items-center justify-center overflow-hidden rounded-[12px] bg-black p-2">
        <Image
          src={client.image}
          alt={client.name}
          fill
          className="object-contain p-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          sizes="160px"
        />
      </div>
    </div>
  )
}

export default function AwardsMarquee() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Our Clients</p>
          <h2 className="section-title mt-4 text-5xl font-semibold text-white md:text-6xl">
            Brands we've worked with.
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-12 overflow-hidden">

        {/* Left fade effect */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        {/* Right fade effect */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div className="flex w-max animate-marquee gap-5">
          {/* Original */}
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client) => (
            <ClientCard key={`dup-${client.name}`} client={client} />
          ))}
        </div>

      </div>
    </section>
  )
}
