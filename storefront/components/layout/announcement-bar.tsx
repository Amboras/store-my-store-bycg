'use client'

import { useState } from 'react'
import { X, Coffee } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-foreground text-primary-foreground">
      <div className="container-custom flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm tracking-wide">
        <Coffee className="h-3.5 w-3.5" strokeWidth={1.75} />
        <p>
          <span className="font-semibold">Free shipping over $45</span>
          <span className="mx-2 opacity-50">·</span>
          Roasted &amp; shipped within 24 hours
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
