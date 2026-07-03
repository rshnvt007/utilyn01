import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { categories, bestsellingBundles, bestsellingThemes } from '../data/products'

export default function Shop() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />

      <section className="px-10 pt-4">
        <div className="relative rounded-2xl overflow-hidden h-[300px]">
          <img
            src="/images/architectural-background.png"
            alt="Architectural simplicity"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-10 max-w-md">
            <p className="text-xs tracking-[0.2em] text-white/80 mb-3">SPRING COLLECTIVE 2024</p>
            <h1 className="font-display text-3xl text-white leading-tight mb-5">
              Architectural Simplicity for the Modern Home
            </h1>
            <button className="self-start bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-dark)] text-white text-sm px-5 py-2.5 rounded-md transition-colors">
              Explore the Collection
            </button>
          </div>
        </div>
      </section>

      <section className="px-10 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-2">DEPARTMENTS</p>
            <h2 className="font-display text-2xl">Browse categories</h2>
          </div>
          <span className="text-sm text-[var(--color-terracotta)]">View all departments ▾</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div key={cat.id} className="relative h-72 rounded-lg overflow-hidden group cursor-pointer">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-medium">{cat.name}</p>
                <p className="text-xs opacity-80">{cat.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream-alt)] px-10 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl">Bestselling Bundles</h2>
          <div className="flex gap-2">
            <CarouselArrow dir="left" />
            <CarouselArrow dir="right" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestsellingBundles.map((b) => (
            <div key={b.id} className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-44">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[var(--color-terracotta)] text-white text-[10px] tracking-wide px-2.5 py-1 rounded-full">
                  {b.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[11px] tracking-wide text-[var(--color-muted)]">{b.category}</p>
                  <p className="text-[var(--color-terracotta)] font-semibold">₹{b.price.toLocaleString("en-IN")}</p>
                </div>
                <p className="font-display text-lg mb-2">{b.name}</p>
                <p className="text-[13px] text-[var(--color-muted)] leading-relaxed mb-4">
                  {b.description}
                </p>
                <button className="w-full border border-[var(--color-line)] text-sm py-2.5 rounded-md hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-2">SEASONAL DIRECTION</p>
          <h2 className="font-display text-3xl mb-4">Bestselling Themes</h2>
          <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-6 max-w-md">
            Explore curated aesthetic directions that redefine modern living. Our bestselling
            themes blend architectural rigor with the warmth of raw materials, creating spaces
            that feel both elevated and grounded.
          </p>
          <ul className="space-y-3">
            {bestsellingThemes.map((theme) => (
              <li key={theme} className="flex items-center gap-3 text-sm">
                <span className="w-4 h-4 border border-[var(--color-ink)]/40 inline-block" />
                {theme}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/lounge-chair.png"
            alt="Nordic Earth chair"
            className="col-span-1 h-72 w-full object-cover rounded-lg"
          />
          <img
            src="/images/abstract-painting.png"
            alt="Terracotta minimal shelf"
            className="col-span-1 h-32 w-full object-cover rounded-lg"
          />
          <img
            src="/images/japandi-dining.png"
            alt="Industrial loft dining"
            className="col-span-2 h-40 w-full object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mx-10 mb-16 bg-[var(--color-terracotta)] rounded-2xl px-10 py-14 text-center text-white">
        <h2 className="font-display text-3xl mb-3">Join the Design Journal</h2>
        <p className="text-sm text-white/80 mb-7">
          Receive curated inspiration, early access to collections, and expert design stories
          directly in your inbox.
        </p>
        <div className="flex justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none"
          />
          <button className="bg-white text-[var(--color-terracotta)] text-sm font-medium px-5 py-2.5 rounded-md">
            Subscribe
          </button>
        </div>
      </section>

      <Footer />
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
