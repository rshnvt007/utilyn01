import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SimpleFooter from '../components/SimpleFooter'
import ProductCard from '../components/ProductCard'
import { bundleItems, similarSets } from '../data/products'

export default function BundleDetail() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />

      <section className="px-10 pt-4 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-8">
        <div className="relative h-[520px] rounded-lg overflow-hidden">
          <img
            src="/images/aura-workbay.png"
            alt="The Serene Study"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 bg-[var(--color-terracotta)] text-white text-[10px] tracking-wide px-3 py-1.5 rounded-full">
            CURATED INTERIOR SET
          </span>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-white font-display text-2xl mb-1.5">The Serene Study</p>
            <p className="text-white/80 text-sm max-w-md leading-relaxed">
              A harmonious blend of organic textures and architectural precision designed to
              foster deep focus and creative tranquility.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-3">BUNDLE SUMMARY</p>
          <h1 className="font-display text-3xl mb-4">Curation 014</h1>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
            This limited-edition atelier set includes seven hand-selected items ranging from our
            signature terracotta ceramics to artisanal linen cushions. Each piece has been
            architecturally balanced to transform any workspace into a sanctuary of modern
            living.
          </p>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-[11px] tracking-wide text-[var(--color-muted)] mb-1">COMPLETE SET</p>
                <p className="text-2xl font-semibold text-[var(--color-terracotta)]">₹39,999</p>
              </div>
              <p className="text-xs text-[var(--color-muted)]">Save ₹7,500</p>
            </div>

            <Link
              to="/cart"
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-dark)] text-white text-sm font-medium py-3.5 rounded-md transition-colors mb-4"
            >
              ADD BUNDLE <span>🛒</span>
            </Link>

            <div className="flex gap-3 text-[11px] text-[var(--color-muted)]">
              <span className="border border-[var(--color-line)] rounded-full px-3 py-1">
                🚚 FREE SHIPPING
              </span>
              <span className="border border-[var(--color-line)] rounded-full px-3 py-1">
                ♻ SUSTAINABLE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-2">THE COMPONENTS</p>
            <h2 className="font-display text-2xl">Select Individual Items</h2>
          </div>
          <div className="flex gap-2">
            <CarouselArrow dir="left" />
            <CarouselArrow dir="right" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundleItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream-alt)] px-10 py-16">
        <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-2 text-center">
          DISCOVER MORE
        </p>
        <h2 className="font-display text-3xl text-center mb-10">Similar Curated Sets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {similarSets.map((set) => (
            <div key={set.id} className="relative h-72 rounded-lg overflow-hidden">
              <img src={set.image} alt={set.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[11px] tracking-wide opacity-80 mb-1">{set.setLabel}</p>
                <p className="font-display text-2xl mb-3">{set.name}</p>
                <button className="bg-white/10 backdrop-blur border border-white/40 text-sm px-4 py-2 rounded-full">
                  View Look →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SimpleFooter />
    </div>
  )
}

function CarouselArrow({ dir }) {
  return (
    <button className="w-8 h-8 rounded-full border border-[var(--color-line)] flex items-center justify-center hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors">
      {dir === 'left' ? '‹' : '›'}
    </button>
  )
}
