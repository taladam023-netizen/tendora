'use client'
import { useEffect, useState } from 'react'

function getInitialTime() {
  return { h: 23, m: 59, s: 59 }
}

export default function Countdown() {
  const [time, setTime] = useState(getInitialTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 }
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 }
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 }
        return { h: 0, m: 0, s: 0 }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-1 justify-center">
      {[{ val: time.h, label: 'Hours' }, { val: time.m, label: 'Mins' }, { val: time.s, label: 'Secs' }].map(({ val, label }, i) => (
        <div key={i} className="flex items-center gap-1">
          <div className="flex flex-col items-center">
            <div className="bg-brand-card border border-brand-border rounded-lg px-3 py-2 min-w-[52px] text-center">
              <span className="countdown-digit text-2xl font-black text-brand-orange">{pad(val)}</span>
            </div>
            <span className="text-xs text-gray-500 mt-1">{label}</span>
          </div>
          {i < 2 && <span className="text-brand-orange font-black text-2xl mb-4">:</span>}
        </div>
      ))}
    </div>
  )
}
