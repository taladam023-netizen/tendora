const items = [
  {
    emoji: '🐕',
    product: 'קולר GPS לכלב',
    before: {
      title: 'לפני',
      points: [
        '😱 הכלב נעלם – לא יודע איפה הוא',
        '😰 שעות של חיפוש בשכונה',
        '💸 מודעות ברשת + פרס על מציאה',
        '😭 פחד שלא תמצא אותו לעולם',
      ],
      bg: 'bg-red-950/40',
      border: 'border-red-800/40',
      badge: 'bg-red-900 text-red-300',
    },
    after: {
      title: 'אחרי',
      points: [
        '📍 מיקום בזמן אמת בטלפון',
        '✅ יודע בדיוק איפה הכלב תמיד',
        '😌 שקט נפשי מלא בטיול ובפארק',
        '🥳 הכלב חוזר הביתה תמיד בשלום',
      ],
      bg: 'bg-green-950/40',
      border: 'border-green-800/40',
      badge: 'bg-green-900 text-green-300',
    },
  },
  {
    emoji: '🚗',
    product: 'ערכת חירום לרכב 9-ב-1',
    before: {
      title: 'לפני',
      points: [
        '🔋 הרכב לא מתניע – תקוע באמצע הדרך',
        '🌙 לילה, בודד, ללא עזרה בקרבת מקום',
        '⏳ המתנה של שעות לשירות גרר',
        '💸 קנס + גרר + תיקון – מאות שקלים',
      ],
      bg: 'bg-red-950/40',
      border: 'border-red-800/40',
      badge: 'bg-red-900 text-red-300',
    },
    after: {
      title: 'אחרי',
      points: [
        '⚡ מניע את הרכב לבד תוך 30 שניות',
        '🔦 פנס עוצמתי בכל מצב חירום',
        '🛞 מנפח צמיג ישר מהכלי',
        '💪 עצמאי ומוכן לכל תרחיש בדרך',
      ],
      bg: 'bg-green-950/40',
      border: 'border-green-800/40',
      badge: 'bg-green-900 text-green-300',
    },
  },
  {
    emoji: '☁️',
    product: 'מפזר ענן גשם',
    before: {
      title: 'לפני',
      points: [
        '😤 אוויר יבש, כאבי ראש ועייפות',
        '😴 קשה להירדם בלילה',
        '🏠 הבית נראה משעמם ורגיל',
        '😞 אין אווירה – רק קירות לבנים',
      ],
      bg: 'bg-red-950/40',
      border: 'border-red-800/40',
      badge: 'bg-red-900 text-red-300',
    },
    after: {
      title: 'אחרי',
      points: [
        '😮‍💨 אוויר לח ורענן כל הזמן',
        '😴 נרדמים מהר עם רעש ערפל מרגיע',
        '✨ אווירה ספא בחדר שינה',
        '📸 מראה ויראלי שכולם מצלמים',
      ],
      bg: 'bg-green-950/40',
      border: 'border-green-800/40',
      badge: 'bg-green-900 text-green-300',
    },
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            למה <span className="text-gradient">אתה חייב</span> את זה?
          </h2>
          <p className="text-gray-400">הכאב שאתה מכיר – והפתרון שחיכית לו</p>
        </div>

        <div className="flex flex-col gap-10">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-brand-border bg-brand-card p-6">
              {/* Product title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="text-xl font-black text-white">{item.product}</h3>
              </div>

              {/* Before / After grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Before */}
                <div className={`rounded-xl border p-4 ${item.before.bg} ${item.before.border}`}>
                  <span className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-3 ${item.before.badge}`}>
                    ❌ לפני – בלי המוצר
                  </span>
                  <ul className="flex flex-col gap-2">
                    {item.before.points.map((p, j) => (
                      <li key={j} className="text-sm text-gray-300 leading-snug">{p}</li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className={`rounded-xl border p-4 ${item.after.bg} ${item.after.border}`}>
                  <span className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-3 ${item.after.badge}`}>
                    ✅ אחרי – עם המוצר
                  </span>
                  <ul className="flex flex-col gap-2">
                    {item.after.points.map((p, j) => (
                      <li key={j} className="text-sm text-gray-300 leading-snug">{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow CTA */}
              <div className="mt-5 text-center">
                <a
                  href="#products"
                  className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-95"
                >
                  אני רוצה את זה ←
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
