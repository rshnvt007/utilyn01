import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/shop', label: 'Browse Services' },
  { to: '/collections', label: 'Curated Collections' },
  { to: '/', label: 'Trade Accounts' },
  { to: '/', label: 'Design Stories' },
]

export default function Navbar({ transparent = false, showSearch = false }) {
  const { pathname } = useLocation()

  return (
    <header
      className={`w-full ${
        transparent ? 'absolute top-0 left-0 z-10 bg-transparent' : 'bg-[var(--color-cream)]'
      }`}
    >
      <div className="flex items-center justify-between px-10 py-5">
        <Link to="/" className="font-display text-2xl font-semibold text-[var(--color-terracotta)]">
          Utilyn
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-[var(--color-ink)]">
          {links.map((link) => {
            const active = link.to !== '/' && pathname.startsWith(link.to)
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`transition-colors hover:text-[var(--color-terracotta)] ${
                  active ? 'text-[var(--color-terracotta)] underline underline-offset-8' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-5 text-[var(--color-ink)]">
          {showSearch && (
            <div className="hidden lg:flex items-center gap-2 bg-[var(--color-cream-alt)] rounded-full px-4 py-2 text-sm text-[var(--color-muted)] w-56">
              <span className="opacity-60">⌕</span>
              <span>Search aesthetics...</span>
            </div>
          )}
          <button aria-label="Location" className="opacity-80 hover:opacity-100">
            <PinIcon />
          </button>
          <Link to="/" aria-label="Account" className="opacity-80 hover:opacity-100">
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  )
}

function PinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  )
}
