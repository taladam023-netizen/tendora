import { ThreeDMarquee } from "@/components/ui/3d-marquee"

const images = [
  "/gps-collar.jpg",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=600&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80",
  "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&q=80",
  "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&q=80",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&q=80",
  "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=80",
]

export default function ProductShowcase() {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
          <source src="/section-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            הצטרף ל<span className="text-gradient">אלפי לקוחות</span> מרוצים
          </h2>
          <p className="text-gray-400">מוצרים שאנשים אוהבים – ואתה תאהב גם</p>
        </div>
        <div className="rounded-3xl bg-brand-card/50 border border-brand-border p-2 overflow-hidden">
          <ThreeDMarquee images={images} />
        </div>
      </div>
    </section>
  )
}
