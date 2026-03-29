import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'קולר GPS חכם לכלבים',
    nameEn: 'Smart GPS Dog Collar',
    description: 'עקוב אחרי הכלב שלך בזמן אמת – לא תאבד אותו יותר לעולם',
    originalPrice: 185,
    salePrice: 65,
    discount: 65,
    image: '/gps-collar.jpg',
    stock: 7,
    badge: '🔥 HOT',
    stars: 5,
    reviews: 234,
  },
  {
    id: 2,
    name: 'ערכת חירום לרכב 9-ב-1',
    nameEn: 'Car Emergency Kit 9-in-1',
    description: 'ג\'מפ סטארטר, פנס LED, בנק כוח, משאבת צמיגים – הכל ביחד',
    originalPrice: 320,
    salePrice: 120,
    discount: 62,
    // Replace with your Canva/Nano Banana image
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    stock: 4,
    badge: '⚡ מיועד לרכב',
    stars: 5,
    reviews: 189,
  },
  {
    id: 3,
    name: 'מפזר ערפל ענן גשם',
    nameEn: 'Rain Cloud Aroma Diffuser',
    description: 'הופך את הבית לחלום – ערפל מרגיע שיורד כמו גשם, עם תאורת LED',
    originalPrice: 120,
    salePrice: 45,
    discount: 62,
    // Replace with your Canva/Nano Banana image
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80',
    stock: 11,
    badge: '✨ ויראלי',
    stars: 4,
    reviews: 312,
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            המוצרים שכולם <span className="text-gradient">מדברים עליהם</span>
          </h2>
          <p className="text-gray-400">הנחות אמיתיות. מלאי מוגבל. משלוח לכל הארץ.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
