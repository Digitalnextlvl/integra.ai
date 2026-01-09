"use client"

import React, { useMemo } from "react"

export interface Logo {
  name: string
  id: number
  src: string
}

interface LogoItemProps {
  logo: Logo
}

const LogoItem: React.FC<LogoItemProps> = React.memo(({ logo }) => {
  return (
    <div className="relative h-20 w-40 md:h-24 md:w-48 flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        decoding="async"
        className="max-h-[90%] max-w-[95%] object-contain grayscale opacity-60"
      />
    </div>
  )
})

LogoItem.displayName = "LogoItem"

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  return (
    <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
      {logos.map((logo) => (
        <LogoItem key={logo.id} logo={logo} />
      ))}
    </div>
  )
}
