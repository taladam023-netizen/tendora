'use client'
import { useState } from 'react'

export default function Navbar() {
  const [cartCount] = useState(0)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-black tracking-tight">
          <span className="text-gradient">Trendora</span>
        </a>

        {/* Center - offer banner */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="badge-pulse inline-block w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-green-400 font-semibold">Flash Sale – 24 Hours Only!</span>
        </div>

        {/* Cart */}
        <button className="relative p-2 text-white hover:text-brand-orange transition-colors" aria-label="Shopping cart">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19M7 13l-1-5h12M9 21a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
