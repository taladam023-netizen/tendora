import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/background1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark/20 to-brand-dark" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Flash sale badge */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
          <span className="badge-pulse w-2 h-2 bg-brand-orange rounded-full"></span>
          <span className="text-brand-orange text-sm font-bold">⚡ Flash Sale – Today Only</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          Viral Products
          <br />
          <span className="text-gradient">Up to 70% OFF</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          The hottest products online — insane prices, fast worldwide shipping.
          <br />
          <span className="text-white font-semibold">Limited stock. Don't miss out.</span>
        </p>

        {/* Countdown */}
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-3">Sale ends in:</p>
          <Countdown />
        </div>

        {/* Scroll CTA */}
        <a
          href="https://cattag-8452.myshopify.com/products/reflective-collar-waterproof-holder-case-for-airtag-air-tag-airtags-protective-cover-cat-dog-kitten-puppy-nylon-collar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-lg px-10 py-4 rounded-2xl glow-orange transition-all duration-200 active:scale-95"
        >
          Shop Now – Before It's Gone ↓
        </a>

        {/* Trust mini-badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Fast Shipping
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure Payment
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            30-Day Money Back
          </span>
        </div>
      </div>
    </section>
  )
}
