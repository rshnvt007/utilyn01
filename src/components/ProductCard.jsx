export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="h-48">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] tracking-wide text-[var(--color-muted)]">{product.tier}</p>
          <p className="text-[var(--color-terracotta)] font-semibold">₹{product.price}</p>
        </div>
        <p className="font-display text-lg mb-2">{product.name}</p>
        <p className="text-[13px] text-[var(--color-muted)] leading-relaxed mb-4">
          {product.description}
        </p>
        <button className="text-xs font-semibold tracking-wide text-[var(--color-terracotta)]">
          ADD TO BAG +
        </button>
      </div>
    </div>
  )
}
