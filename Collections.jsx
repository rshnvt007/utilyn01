import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CollectionCard from '../components/CollectionCard'
import { collections } from '../data/products'

const filters = ['All Collections', 'Living Space', 'Minimalist Kitchen', 'Sanctuary Bath', 'Outdoor Retreat']

export default function Collections() {
  const [active, setActive] = useState('All Collections')

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar showSearch />

      <section className="px-10 pt-8 pb-4">
        <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-3">EXPLORE TRENDS</p>
        <h1 className="font-display text-4xl leading-tight mb-6">
          Curated Bundles for the <br />
          <em className="italic">Modern Atelier</em>
        </h1>

        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                active === f
                  ? 'bg-[var(--color-terracotta)] text-white'
                  : 'bg-[var(--color-cream-alt)] text-[var(--color-ink)] hover:bg-[var(--color-line)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10">
          {collections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-14 mb-4">
          <button className="bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-dark)] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
            Discover More Collections
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
