import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[560px] md:h-[720px]">
          <img
            src="https://picsum.photos/seed/utilyn-hero/900/1000"
            alt="Warm interior with vase and curtains"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-10 md:px-16 py-16">
          <p className="text-xs tracking-[0.2em] font-semibold text-[var(--color-terracotta)] mb-5">
            WELCOME TO THE ATELIER
          </p>
          <h1 className="font-display text-6xl leading-[1.05] mb-7 text-[var(--color-ink)]">
            Discover
            <br />
            home,
            <br />
            differently
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--color-muted)] max-w-md mb-9">
            A curated digital space for modern dwelling. Experience home improvement
            through the lens of intentional design and artisanal craftsmanship.
          </p>

          <div className="flex items-center gap-8 mb-16">
            <Link
              to="/shop"
              className="bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-dark)] text-white text-sm font-medium px-7 py-3.5 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Begin Exploring <span>→</span>
            </Link>
            <Link to="/" className="text-sm font-medium text-[var(--color-terracotta)]">
              Sign in to account
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="bg-[var(--color-cream-alt)] p-5">
              <p className="text-[var(--color-terracotta)] text-lg mb-3">△</p>
              <p className="font-display text-lg mb-1.5">Architectural Detail</p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Refining the skeleton of your space.
              </p>
            </div>
            <div className="bg-[var(--color-cream-alt)] p-5">
              <p className="text-[var(--color-terracotta)] text-lg mb-3">🖌</p>
              <p className="font-display text-lg mb-1.5">Curated Finishes</p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                The final layer of domestic poetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <p className="text-right text-[11px] text-[var(--color-muted)] px-10 py-6">
        © 2024 UTILYN DIGITAL ATELIER. ALL RIGHTS RESERVED.
      </p>
    </div>
  )
}
