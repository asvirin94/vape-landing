"use client"

import { motion } from "framer-motion"
import { useMemo, memo, useState, useEffect } from "react"

interface Particle {
  id: string
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  movePattern: "circular" | "wave" | "random"
}

const StableFloatingParticlesComponent = memo(() => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const particles = useMemo(() => {
    if (!isClient) return []

    const predefinedPositions = [
      { x: 10, y: 20, size: 1, color: "bg-green-400", duration: 15, delay: 0, pattern: "circular" },
      { x: 80, y: 30, size: 1.2, color: "bg-green-400", duration: 18, delay: 2, pattern: "wave" },
      { x: 25, y: 70, size: 0.8, color: "bg-green-400", duration: 12, delay: 4, pattern: "random" },
      { x: 60, y: 15, size: 1.1, color: "bg-green-400", duration: 20, delay: 1, pattern: "circular" },
      { x: 45, y: 85, size: 0.9, color: "bg-green-400", duration: 16, delay: 3, pattern: "wave" },
      { x: 75, y: 60, size: 1.3, color: "bg-green-400", duration: 14, delay: 5, pattern: "random" },
      { x: 15, y: 45, size: 1, color: "bg-green-400", duration: 19, delay: 2.5, pattern: "circular" },
      { x: 90, y: 25, size: 0.7, color: "bg-green-400", duration: 17, delay: 4.5, pattern: "wave" },
      { x: 35, y: 90, size: 1.4, color: "bg-green-400", duration: 13, delay: 1.5, pattern: "random" },
      { x: 65, y: 40, size: 1.1, color: "bg-green-400", duration: 21, delay: 3.5, pattern: "circular" },
      { x: 20, y: 65, size: 0.8, color: "bg-green-400", duration: 15, delay: 0.5, pattern: "wave" },
      { x: 85, y: 80, size: 1.2, color: "bg-green-400", duration: 18, delay: 2.8, pattern: "random" },
      { x: 50, y: 10, size: 0.9, color: "bg-green-400", duration: 16, delay: 4.2, pattern: "circular" },
      { x: 5, y: 55, size: 1.3, color: "bg-green-400", duration: 14, delay: 1.8, pattern: "wave" },
      { x: 95, y: 75, size: 1, color: "bg-green-400", duration: 20, delay: 3.2, pattern: "random" },

      // Фиолетовые частицы
      { x: 30, y: 35, size: 1.5, color: "bg-purple-400", duration: 22, delay: 1, pattern: "circular" },
      { x: 70, y: 50, size: 1.2, color: "bg-purple-400", duration: 25, delay: 3, pattern: "wave" },
      { x: 40, y: 80, size: 1.8, color: "bg-purple-400", duration: 18, delay: 5, pattern: "random" },
      { x: 85, y: 20, size: 1.4, color: "bg-purple-400", duration: 24, delay: 2, pattern: "circular" },
      { x: 15, y: 75, size: 1.1, color: "bg-purple-400", duration: 20, delay: 4, pattern: "wave" },
      { x: 55, y: 25, size: 1.6, color: "bg-purple-400", duration: 26, delay: 1.5, pattern: "random" },
      { x: 25, y: 60, size: 1.3, color: "bg-purple-400", duration: 19, delay: 3.5, pattern: "circular" },
      { x: 80, y: 85, size: 1.7, color: "bg-purple-400", duration: 23, delay: 0.8, pattern: "wave" },
      { x: 10, y: 40, size: 1.2, color: "bg-purple-400", duration: 21, delay: 2.5, pattern: "random" },
      { x: 90, y: 65, size: 1.5, color: "bg-purple-400", duration: 27, delay: 4.5, pattern: "circular" },

      // Синие частицы
      { x: 22, y: 18, size: 0.6, color: "bg-blue-400", duration: 28, delay: 2, pattern: "circular" },
      { x: 78, y: 42, size: 0.8, color: "bg-blue-400", duration: 30, delay: 4, pattern: "wave" },
      { x: 48, y: 72, size: 0.7, color: "bg-blue-400", duration: 25, delay: 6, pattern: "random" },
      { x: 12, y: 88, size: 0.9, color: "bg-blue-400", duration: 32, delay: 1, pattern: "circular" },
      { x: 88, y: 12, size: 0.6, color: "bg-blue-400", duration: 29, delay: 3, pattern: "wave" },
      { x: 38, y: 58, size: 0.8, color: "bg-blue-400", duration: 26, delay: 5, pattern: "random" },
      { x: 68, y: 28, size: 0.7, color: "bg-blue-400", duration: 31, delay: 2.2, pattern: "circular" },
      { x: 18, y: 78, size: 0.9, color: "bg-blue-400", duration: 27, delay: 4.2, pattern: "wave" },
      { x: 92, y: 48, size: 0.6, color: "bg-blue-400", duration: 33, delay: 1.8, pattern: "random" },
      { x: 42, y: 8, size: 0.8, color: "bg-blue-400", duration: 28, delay: 3.8, pattern: "circular" },

      // Розовые частицы
      { x: 32, y: 52, size: 0.5, color: "bg-pink-400", duration: 35, delay: 3, pattern: "circular" },
      { x: 72, y: 22, size: 0.4, color: "bg-pink-400", duration: 38, delay: 5, pattern: "wave" },
      { x: 52, y: 82, size: 0.6, color: "bg-pink-400", duration: 32, delay: 7, pattern: "random" },
      { x: 8, y: 32, size: 0.5, color: "bg-pink-400", duration: 40, delay: 2, pattern: "circular" },
      { x: 98, y: 68, size: 0.4, color: "bg-pink-400", duration: 36, delay: 4, pattern: "wave" },
      { x: 28, y: 92, size: 0.6, color: "bg-pink-400", duration: 34, delay: 6, pattern: "random" },
      { x: 82, y: 38, size: 0.5, color: "bg-pink-400", duration: 39, delay: 1.5, pattern: "circular" },
      { x: 58, y: 62, size: 0.4, color: "bg-pink-400", duration: 37, delay: 3.5, pattern: "wave" },
    ]

    return predefinedPositions.map((pos, index) => ({
      id: `particle-${index}`,
      x: pos.x,
      y: pos.y,
      size: pos.size,
      color: pos.color,
      duration: pos.duration,
      delay: pos.delay,
      movePattern: pos.pattern as "circular" | "wave" | "random",
    }))
  }, [isClient])

  const getAnimationProps = (particle: Particle) => {
    const baseMovement = 40

    switch (particle.movePattern) {
      case "circular":
        return {
          x: [0, baseMovement, 0, -baseMovement, 0],
          y: [0, -baseMovement, 0, baseMovement, 0],
          rotate: [0, 360],
        }
      case "wave":
        return {
          x: [0, baseMovement * 0.7, baseMovement, baseMovement * 0.7, 0],
          y: [0, baseMovement * 0.5, 0, -baseMovement * 0.5, 0],
          rotate: [0, 180, 360],
        }
      default:
        return {
          x: [0, baseMovement * 0.6, baseMovement * 0.3, 0],
          y: [0, baseMovement * 0.4, baseMovement * 0.8, 0],
          rotate: [0, 120, 240, 360],
        }
    }
  }

  if (!isClient) {
    return <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" />
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
          }}
          animate={{
            ...getAnimationProps(particle),
            opacity: [0.2, 0.8, 0.4, 0.6, 0.2],
            scale: [1, 1.3, 0.7, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
})

StableFloatingParticlesComponent.displayName = "StableFloatingParticles"

export const StableFloatingParticles = StableFloatingParticlesComponent
