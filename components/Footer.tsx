export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-brand-border text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl font-black text-gradient mb-2">Trendora</p>
        <p className="text-gray-600 text-sm mb-4">The hottest products online, at prices you won't find anywhere else.</p>
        <div className="flex justify-center gap-6 text-xs text-gray-600 mb-4">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Contact Us</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Returns</a>
        </div>
        <p className="text-gray-700 text-xs">© 2026 Trendora. All rights reserved.</p>
      </div>
    </footer>
  )
}
