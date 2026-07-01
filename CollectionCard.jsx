import { Link } from 'react-router-dom'

export default function CollectionCard({ item }) {
  return (
    <div>
      <Link to="/bundle" className="relative h-52 rounded-lg overflow-hidden mb-4 block">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        {item.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] tracking-wide px-2.5 py-1 rounded-full text-white ${
              item.badge === 'PREMIUM'
                ? 'bg-[var(--color-terracotta)]'
                : item.badge === 'LUXURY'
                ? 'bg-[#d9a441]'
                : 'bg-[#5c7a5c]'
            }`}
          >
            {item.badge}
          </span>
        )}
      </Link>

      <div className="flex items-start justify-between mb-1">
        <p className="font-display text-lg leading-snug pr-2">{item.name}</p>
        <p className="text-[var(--color-terracotta)] font-medium whitespace-nowrap">{item.price}</p>
      </div>
      <p className="text-xs text-[var(--color-muted)] mb-4">{item.tag}</p>

      <button className="w-full flex items-center justify-center gap-1.5 border border-[var(--color-line)] text-sm py-2.5 rounded-md hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors">
        {item.cta}
      </button>
    </div>
  )
}
