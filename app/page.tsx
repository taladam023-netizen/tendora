import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import { ExpandableGallery } from '@/components/ui/expandable-gallery'
import Footer from '@/components/Footer'
import VantaBackground from '@/components/VantaBackground'
import { ProductCarousel } from '@/components/ui/product-carousel'
import LifestyleSection from '@/components/LifestyleSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <VantaBackground className="min-h-fit py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            Never Lose Your Cat <span className="text-gradient">Again</span>
          </h2>
          <p className="text-gray-400 text-sm">AirTag Cat Collar Holder · Waterproof · Reflective · Safety Breakaway</p>
        </div>
        <ProductCarousel />
      </VantaBackground>
      <TrustBadges />
      <LifestyleSection />
      <ExpandableGallery />
      <Footer />
    </main>
  )
}
