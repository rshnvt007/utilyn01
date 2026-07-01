export default function Footer() {
  return (
    <footer className="bg-[var(--color-cream-alt)] px-10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-ink)] mb-3">Utilyn</p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-xs">
            Curating architectural elements and artisan objects for the contemporary home.
            Experience the digital atelier.
          </p>
        </div>

        <FooterColumn
          title="Discover"
          items={['Expert Services', 'Curated Collections', 'Trade Membership']}
        />
        <FooterColumn title="Atelier" items={['Design Journal', 'Sustainability', 'Privacy Policy']} />

        <div>
          <p className="text-sm font-semibold text-[var(--color-terracotta)] mb-3">Join the Circle</p>
          <div className="flex items-center border border-[var(--color-line)] bg-white/40 px-3 py-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-sm placeholder:text-[var(--color-muted)] flex-1 outline-none"
            />
            <span className="text-[var(--color-terracotta)]">→</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[var(--color-line)] text-xs text-[var(--color-muted)]">
        © 2024 Utilyn Digital Atelier. All rights reserved.
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="text-sm font-semibold text-[var(--color-terracotta)] mb-3">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-[var(--color-ink)] opacity-80 hover:opacity-100 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
