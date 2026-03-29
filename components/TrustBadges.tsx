const badges = [
  { icon: '🔒', title: '100% Secure Payment', sub: 'SSL Encrypted · Stripe / PayPal' },
  { icon: '🚚', title: 'Fast Shipping', sub: 'Delivered in 7–14 days' },
  { icon: '↩️', title: '30-Day Returns', sub: 'No questions asked' },
  { icon: '⭐', title: '1,200+ Happy Customers', sub: 'Average rating 4.9/5' },
]

export default function TrustBadges() {
  return (
    <section className="relative py-12 px-4 border-t border-brand-border overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80)",
          maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-brand-card border border-brand-border">
              <span className="text-3xl mb-2">{b.icon}</span>
              <p className="font-bold text-sm text-white">{b.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
