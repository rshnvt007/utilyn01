import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { cartItems as initialItems, completeTheAtelier } from '../data/products'

export default function Cart() {
  const [items, setItems] = useState(initialItems)

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )
  }

  const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id))

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 499
  const taxes = Math.round(subtotal * 0.0825 * 100) / 100
  const total = subtotal + shipping + taxes

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Navbar showSearch={false} />

      <section className="px-10 pt-6 pb-4">
        <p className="text-xs tracking-[0.2em] text-[var(--color-terracotta)] mb-2">YOUR SELECTION</p>
        <h1 className="font-display font-bold text-5xl mb-10">Review Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8">
          <div>
            {items.map((item, idx) => (
              <div key={item.id}>
                <div className="grid grid-cols-[140px_1fr_auto] gap-6 py-6">
                  <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-lg" />

                  <div>
                    <p className="text-[11px] tracking-wide text-[var(--color-muted)] mb-1">
                      {item.category}
                    </p>
                    <p className="font-display text-xl mb-2">{item.name}</p>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-md mb-5">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 border border-[var(--color-line)] rounded-md"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 border border-[var(--color-line)] rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[var(--color-terracotta)] font-semibold mb-16">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-[var(--color-muted)] hover:text-[var(--color-terracotta)]"
                    >
                      🗑 REMOVE
                    </button>
                  </div>
                </div>
                {idx < items.length - 1 && <div className="border-t border-[var(--color-line)]" />}
              </div>
            ))}

            <div className="bg-[var(--color-cream-alt)] rounded-lg p-6 mt-8">
              <div className="flex items-center justify-between mb-5">
                <p className="font-display text-xl">Complete the Atelier</p>
                <span className="text-xs tracking-wide text-[var(--color-terracotta)]">VIEW COLLECTION</span>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {completeTheAtelier.map((product) => (
                  <div key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-28 object-cover rounded-lg mb-2"
                    />
                    <p className="text-sm">{product.name}</p>
                    <p className="text-sm text-[var(--color-terracotta)]">₹{product.price.toLocaleString('en-IN')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="bg-[var(--color-cream-alt)] rounded-lg p-7 h-fit">
            <h2 className="font-display text-2xl mb-6">Order Summary</h2>

            <div className="space-y-3 text-sm mb-4 pb-4 border-b border-[var(--color-line)]">
              <div className="flex justify-between">
                <span className="text-[var(--color-muted)]">Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted)]">White Glove Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted)]">Estimated Taxes</span>
                <span>₹{taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[11px] tracking-wide text-[var(--color-muted)] mb-1">TOTAL INVESTMENT</p>
                <p className="font-display text-3xl font-bold">₹{total.toFixed(2)}</p>
              </div>
              <span className="bg-[#e8c568] text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full mt-1">
                PREMIUM DELIVERY
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[var(--color-terracotta)] hover:bg-[var(--color-terracotta-dark)] text-white text-sm font-medium py-3.5 rounded-md transition-colors mb-3">
              PROCEED TO CHECKOUT →
            </button>
            <p className="text-[11px] text-center text-[var(--color-muted)] mb-6">
              Complimentary 30-day returns for trade members
            </p>

            <p className="text-[10px] tracking-wide text-center text-[var(--color-muted)] mb-3">
              ACCEPTED PAYMENT ATELIERS
            </p>
            <div className="flex justify-center gap-4 text-lg opacity-60">
              <span>🏦</span>
              <span>💳</span>
              <span>💵</span>
              <span>🗃</span>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
