"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SLIDES = [
  {
    id: "product",
    label: "AirTag Cat Collar",
    image: "/cat-blue.jpg",
    type: "product",
    badge: "🔥 Best Seller",
    title: "AirTag Cat Collar Holder",
    description: "Waterproof reflective collar with built-in AirTag slot — track your cat anywhere with your iPhone",
    originalPrice: 45,
    salePrice: 19,
    discount: 58,
    stock: 7,
    reviews: 2341,
  },
  {
    id: "feature1",
    label: "Safety Breakaway Buckle",
    image: "/cat-collar-2.png",
    type: "feature",
    badge: "🛡️ Safety First",
    title: "Safety Breakaway Buckle",
    description: "If your cat gets caught on something, the buckle releases instantly — keeping them safe always",
    icon: "🔓",
    reason: "Designed to protect your cat from choking or getting stuck",
  },
  {
    id: "feature2",
    label: "Reflective & Waterproof",
    image: "/cat-orange.jpg",
    type: "feature",
    badge: "💧 All Weather",
    title: "Reflective & Waterproof",
    description: "High-visibility reflective stitching keeps your cat visible at night. 100% waterproof nylon.",
    icon: "✨",
    reason: "Your cat stays visible and the collar stays clean no matter what",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 72;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ProductCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [added, setAdded] = useState(false);

  const currentIndex = ((step % SLIDES.length) + SLIDES.length) % SLIDES.length;
  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + SLIDES.length) % SLIDES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  const handleBuy = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = SLIDES.length;
    let d = diff;
    if (diff > len / 2) d -= len;
    if (diff < -len / 2) d += len;
    if (d === 0) return "active";
    if (d === -1) return "prev";
    if (d === 1) return "next";
    return "hidden";
  };

  const active = SLIDES[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl flex flex-col lg:flex-row min-h-[560px] border border-brand-border">

        {/* Left panel */}
        <div
          className="w-full lg:w-[38%] min-h-[220px] lg:h-full relative z-30 flex flex-col items-center lg:items-start justify-center overflow-hidden px-6 lg:px-12"
          style={{ background: "linear-gradient(135deg, #1a1505 0%, #2a1f00 60%, #13130E 100%)" }}
        >
          <div className="absolute inset-x-0 top-0 h-16 z-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #1a1505, transparent)" }} />
          <div className="absolute inset-x-0 bottom-0 h-16 z-40 pointer-events-none"
            style={{ background: "linear-gradient(to top, #13130E, transparent)" }} />

          <div className="relative w-full h-[220px] lg:h-full flex items-center justify-center lg:justify-start z-20">
            {SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(SLIDES.length / 2), SLIDES.length / 2, distance);

              return (
                <motion.div
                  key={slide.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex items-center"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-500 border font-bold",
                      isActive
                        ? "bg-brand-gold text-black border-brand-gold z-10 shadow-[0_0_20px_rgba(200,160,32,0.4)]"
                        : "bg-transparent text-white/50 border-white/15 hover:border-brand-gold/40 hover:text-white/80"
                    )}
                  >
                    {isActive && <span className="w-2 h-2 rounded-full bg-black shrink-0" />}
                    <span className="text-sm whitespace-nowrap">{slide.label}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 min-h-[400px] lg:h-full relative bg-brand-card flex items-center justify-center py-10 px-6 overflow-hidden border-t lg:border-t-0 lg:border-r border-brand-border">
          <div className="relative w-full max-w-[340px] aspect-[3/4] flex items-center justify-center">
            {SLIDES.map((slide, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={slide.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -4 : isNext ? 4 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 24, mass: 0.8 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-brand-border bg-brand-dark origin-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      className={cn(
                        "object-cover transition-all duration-700",
                        isActive ? "grayscale-0 blur-0" : "grayscale blur-sm brightness-50"
                      )}
                      sizes="340px"
                    />
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        className="absolute inset-x-0 bottom-0 p-5 pt-20 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-3"
                      >
                        <span className="bg-brand-gold text-black text-[11px] font-black px-3 py-0.5 rounded-full w-fit">
                          {slide.badge}
                        </span>

                        <div>
                          <h3 className="text-white font-black text-lg leading-tight font-display">{slide.title}</h3>
                          <p className="text-gray-300 text-xs mt-1 leading-relaxed">{slide.description}</p>
                        </div>

                        {slide.type === "product" ? (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="text-brand-gold font-black text-2xl">${slide.salePrice}</span>
                              <span className="text-gray-500 line-through text-sm">${slide.originalPrice}</span>
                              <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-0.5 rounded-full border border-red-500/30">
                                -{slide.discount}%
                              </span>
                            </div>

                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="text-gray-400 text-xs ml-1">({slide.reviews?.toLocaleString()})</span>
                            </div>

                            <div>
                              <p className="text-red-400 text-xs font-bold mb-1">🔥 Only {slide.stock} left in stock!</p>
                              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-red-500 to-brand-gold rounded-full" style={{ width: `${(slide.stock! / 20) * 100}%` }} />
                              </div>
                            </div>

                            <button
                              onClick={handleBuy}
                              onMouseEnter={() => setIsPaused(true)}
                              onMouseLeave={() => setIsPaused(false)}
                              className={cn(
                                "w-full py-3 rounded-xl font-black text-base transition-all duration-200 active:scale-95",
                                added ? "bg-green-500 text-white" : "bg-brand-gold text-black hover:bg-brand-gold-light glow-orange"
                              )}
                            >
                              {added ? "✓ Added to Cart!" : "🛒 Buy Now — $19"}
                            </button>
                          </>
                        ) : (
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <p className="text-brand-gold text-sm font-bold">{slide.reason}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(200,160,32,0.8)]" />
                      <span className="text-white/60 text-[10px] uppercase tracking-widest font-mono">
                        {slide.type === "product" ? "Product" : "Feature"}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
