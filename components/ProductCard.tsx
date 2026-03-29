'use client'
import Image from 'next/image'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  nameEn: string
  description: string
  originalPrice: number
  salePrice: number
  discount: number
  image: string
  stock: number
  badge?: string
  stars: number
  reviews: number
}

export default function ProductCard({ product }: { product: Product }) {
  const [added, setAdded] = useState(false)
  const stockPct = (product.stock / 20) * 100

  const handleBuy = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden card-hover flex flex-col">
      {/* Image */}
      <div className="relative aspect-square bg-[#1A1A1A] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Discount badge */}
        <div className="absolute top-3 right-3 bg-brand-orange text-white font-black text-sm px-3 py-1 rounded-full badge-pulse">
          -{product.discount}%
        </div>

        {/* Hot / Special badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-full">
            {product.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < product.stars ? 'text-yellow-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-500 text-xs mr-1">({product.reviews})</span>
        </div>

        {/* Name */}
        <div>
          <h3 className="font-bold text-white text-base leading-tight">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-brand-orange">${product.salePrice}</span>
          <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
          <span className="text-green-400 text-sm font-bold">Save: ${product.originalPrice - product.salePrice}</span>
        </div>

        {/* Stock bar */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-red-400 font-bold">🔥 נותרו {product.stock} יחידות בלבד!</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-brand-orange rounded-full transition-all"
              style={{ width: `${Math.min(stockPct, 100)}%` }}
            />
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleBuy}
          className={`w-full mt-auto py-3.5 rounded-xl font-black text-white text-base transition-all duration-200 active:scale-95 ${
            added
              ? 'bg-green-500'
              : 'bg-brand-orange hover:bg-brand-orange-dark glow-orange'
          }`}
        >
          {added ? '✓ נוסף לעגלה!' : '🛒 קנה עכשיו'}
        </button>
      </div>
    </div>
  )
}
