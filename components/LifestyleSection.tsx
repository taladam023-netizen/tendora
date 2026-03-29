'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const REVIEWS = [
  {
    image: '/cat-10.jpg',
    name: 'Sarah M.',
    location: 'New York, US',
    stars: 5,
    text: '"My cat Mochi escaped twice before I got this. Now I can track her instantly. Total game changer! 🐱"',
    tag: '🔥 Trending',
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    image: '/cat-11.jpg',
    name: 'Emma K.',
    location: 'London, UK',
    stars: 5,
    text: '"The collar is so cute and fits perfectly. Looks great on Luna and gives me total peace of mind."',
    tag: '⭐ Top Review',
    color: 'from-blue-500/20 to-teal-500/20',
  },
  {
    image: '/cat-13.jpg',
    name: 'Rachel T.',
    location: 'Toronto, CA',
    stars: 5,
    text: '"Bought this after my neighbor\'s cat went missing. Quality is amazing and my cat doesn\'t even notice it!"',
    tag: '✅ Verified Buy',
    color: 'from-amber-500/20 to-orange-500/20',
  },
]

export default function LifestyleSection() {
  return (
    <section className="py-20 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm text-gray-400">📱 As seen on TikTok & Instagram</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-3">
            Real Cats. <span className="text-gradient">Real Love.</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Over <span className="text-white font-bold">12,000+ happy cat parents</span> trust CatTag to keep their fur babies safe.
          </p>

          {/* Stars summary */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <span className="text-white font-bold">4.9</span>
            <span className="text-gray-500 text-sm">/ 2,847 reviews</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-gold/40 transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={review.image}
                  alt={`Happy cat customer - ${review.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {review.tag}
                  </span>
                </div>

                {/* Stars on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(review.stars)].map((_, s) => (
                      <span key={s} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-white text-sm font-medium leading-snug">{review.text}</p>
                </div>
              </div>

              {/* Reviewer info */}
              <div className="p-4 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${review.color} border border-white/20 flex items-center justify-center text-sm font-bold text-white`}>
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location} · Verified Purchase ✓</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://cattag-8452.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-lg px-12 py-4 rounded-2xl glow-orange transition-all duration-200 active:scale-95"
          >
            Get Yours — $19 Only 🐾
          </a>
          <p className="text-gray-600 text-xs mt-3">Free shipping · 30-day guarantee · 2,000+ sold this week</p>
        </motion.div>
      </div>
    </section>
  )
}
