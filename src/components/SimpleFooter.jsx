export default function SimpleFooter() {
  return (
    <footer className="bg-[var(--color-cream)] px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[var(--color-line)]">
      <div>
        <p className="font-display text-lg font-semibold text-[var(--color-terracotta)]">Utilyn</p>
        <p className="text-xs text-[var(--color-muted)] mt-1">
          © 2024 Utilyn. The Digital Atelier for Modern Living.
        </p>
      </div>

      <nav className="flex flex-wrap gap-6 text-sm text-[var(--color-ink)] opacity-80">
        <span className="hover:opacity-100 cursor-pointer">Privacy Policy</span>
        <span className="hover:opacity-100 cursor-pointer">Terms of Service</span>
        <span className="hover:opacity-100 cursor-pointer">Shipping &amp; Returns</span>
        <span className="hover:opacity-100 cursor-pointer">Contact Us</span>
      </nav>

      <div className="flex gap-3">
        <span className="w-8 h-8 rounded-full bg-[var(--color-cream-alt)] flex items-center justify-center text-sm">
          ⌘
        </span>
        <span className="w-8 h-8 rounded-full bg-[var(--color-cream-alt)] flex items-center justify-center text-sm">
          ✉
        </span>
      </div>
    </footer>
  )
}
