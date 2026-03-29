'use client'
import { useEffect, useRef } from 'react'

export default function VantaBackground({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const vantaRef = useRef<any>(null)

  useEffect(() => {
    let isMounted = true

    const initVanta = async () => {
      if (!ref.current || vantaRef.current) return
      const THREE = await import('three')
      const WAVES = (await import('vanta/dist/vanta.waves.min')).default

      if (!isMounted) return

      vantaRef.current = WAVES({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2a1f00,      // dark gold waves
        shininess: 80,
        waveHeight: 18,
        waveSpeed: 0.5,
        zoom: 0.9,
      })
    }

    initVanta()

    return () => {
      isMounted = false
      if (vantaRef.current) {
        vantaRef.current.destroy()
        vantaRef.current = null
      }
    }
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
    </div>
  )
}
