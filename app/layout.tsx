import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trendora – Viral Products at Insane Prices',
  description: 'Up to 70% off on trending viral products. Fast worldwide shipping.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  )
}
