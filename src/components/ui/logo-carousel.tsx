"use client"

import React, { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface Logo {
  name: string
  id: number
  src: string
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number, minPerColumn = 3): Logo[][] => {
  const safeColumnCount = Math.max(1, columnCount)
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: safeColumnCount }, () => [])

  if (shuffled.length === 0) return columns

  shuffled.forEach((logo, index) => {
    columns[index % safeColumnCount].push(logo)
  })

  const maxLength = Math.max(0, ...columns.map((col) => col.length))
  const targetLength = Math.max(minPerColumn, maxLength)

  columns.forEach((col) => {
    while (col.length < targetLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 2000
  const columnDelay = index * 200
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)

  const currentLogo = useMemo(() => logos[currentIndex], [logos, currentIndex])

  return (
    <motion.div
      className="relative h-14 w-28 md:h-16 md:w-36 overflow-hidden"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.45, ease: "easeOut" }}
    >
      <AnimatePresence mode="popLayout">
        <motion.img
          key={`${currentLogo.id}-${currentIndex}`}
          src={currentLogo.src}
          alt={currentLogo.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 m-auto max-h-[80%] max-w-[90%] object-contain"
          style={{ filter: "brightness(0)" }}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </motion.div>
  )
})

LogoColumn.displayName = "LogoColumn"

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    setLogoSets(distributeLogos(logos, columnCount))
  }, [logos, columnCount])

  return (
    <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
      ))}
    </div>
  )
}

export { LogoColumn }
