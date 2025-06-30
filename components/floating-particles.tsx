"use client"

import { motion } from "framer-motion"
import { useMemo, memo } from "react"

interface Particle {
  id: string
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

const FloatingParticlesComponent = memo(() => {
  const particles = useMemo(() => {
    const greenParticles: Particle[] = [...Array(15)].map((_, i) => ({
      id: `green-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1,
      color: "bg-green-400",
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 4,
    }))

    const purpleParticles: Particle[] = [...Array(10)].map((_, i) => ({
      id: `purple-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5,
      color: "bg-purple-400",
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 6,
    }))

    return [...greenParticles, ...purpleParticles]
  }, []) // Пустой массив зависимостей - создаются только один раз

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} rounded-full opacity-60`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.5, 0.3],
            scale: [1, 1.2, 0.8, 1],
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

FloatingParticlesComponent.displayName = "FloatingParticles"

export const FloatingParticles = FloatingParticlesComponent
