import { useState, useEffect } from 'react'

export default function CountdownBanner() {
  const [blink, setBlink] = useState(true)

  const targetDate = new Date('2025-12-04T09:15:00+01:00') // December 4th, 9:15 AM Lisbon time
  const startDate = new Date('2025-10-01T09:15:00+01:00') // When we started advertising

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlink(prev => !prev)
    }, 500) // Blink every 500ms

    return () => clearInterval(blinkTimer)
  }, [])

  // Calculate progress starting from 75%
  const totalDuration = targetDate.getTime() - startDate.getTime()
  const elapsed = new Date().getTime() - startDate.getTime()
  const progressFromStart = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100))
  const progress = 75 + (progressFromStart * 0.25) // Start at 75%, go to 100%

  const isLaunched = new Date() >= targetDate

  if (isLaunched) {
    return null
  }

  // Create segments for the loading bar (each segment is ~5% of width)
  const totalSegments = 20
  const filledSegments = Math.floor((progress / 100) * totalSegments)
  const showCursor = filledSegments < totalSegments && blink

  return (
    <div className="bg-black py-8 px-8 mb-8 font-mono">
      <div className="text-center mb-8">
        <h3 className="text-avocado-500 text-2xl mb-4">Coming soon...</h3>
      </div>

      {/* Retro Loading Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="border-2 border-avocado-500 p-2 bg-black">
          <div className="flex items-center h-8">
            {/* Filled segments */}
            {Array.from({ length: filledSegments }).map((_, i) => (
              <div
                key={i}
                className="h-full bg-avocado-500 border-r border-black"
                style={{ width: `${100 / totalSegments}%` }}
              />
            ))}

            {/* Blinking cursor at the end */}
            {showCursor && filledSegments < totalSegments && (
              <div
                className="h-full bg-avocado-500"
                style={{ width: `${100 / totalSegments}%` }}
              />
            )}

            {/* Empty segments */}
            {Array.from({ length: totalSegments - filledSegments - (showCursor ? 1 : 0) }).map((_, i) => (
              <div
                key={i + filledSegments}
                className="h-full border-r border-avocado-500"
                style={{ width: `${100 / totalSegments}%` }}
              />
            ))}
          </div>
        </div>

        <div className="text-center text-avocado-500 mt-2 text-sm">
          FIRST SESSION: DECEMBER 4TH, 2024
        </div>
      </div>
    </div>
  )
}