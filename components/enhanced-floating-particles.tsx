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
  movePattern: "circular" | "wave" | "random"
}

const EnhancedFloatingParticlesComponent = memo(() => {
  const particles = useMemo(() => {
    // Green particles - main accent
    const greenParticles: Particle[] = [...Array(25)].map((_, i) => ({
      id: `green-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.8 + Math.random() * 0.4,
      color: "bg-green-400",
      duration: 12 + Math.random() * 8,
      delay: Math.random() * 6,
      movePattern: ["circular", "wave", "random"][Math.floor(Math.random() * 3)] as "circular" | "wave" | "random",
    }))

    // Purple particles - secondary accent
    const purpleParticles: Particle[] = [...Array(20)].map((_, i) => ({
      id: `purple-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 0.5,
      color: "bg-purple-400",
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 8,
      movePattern: ["circular", "wave", "random"][Math.floor(Math.random() * 3)] as "circular" | "wave" | "random",
    }))

    // Blue particles - tertiary accent
    const blueParticles: Particle[] = [...Array(15)].map((_, i) => ({
      id: `blue-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.6 + Math.random() * 0.3,
      color: "bg-blue-400",
      duration: 18 + Math.random() * 12,
      delay: Math.random() * 10,
      movePattern: ["circular", "wave", "random"][Math.floor(Math.random() * 3)] as "circular" | "wave" | "random",
    }))

    // Pink particles - accent
    const pinkParticles: Particle[] = [...Array(10)].map((_, i) => ({
      id: `pink-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 0.2,
      color: "bg-pink-400",
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 12,
      movePattern: ["circular", "wave", "random"][Math.floor(Math.random() * 3)] as "circular" | "wave" | "random",
    }))

    return [...greenParticles, ...purpleParticles, ...blueParticles, ...pinkParticles]
  }, [])

  const getAnimationProps = (particle: Particle) => {
    const baseMovement = 60 + Math.random() * 40

    switch (particle.movePattern) {
      case "circular":
        return {
          x: [0, baseMovement, 0, -baseMovement, 0],
          y: [0, -baseMovement, 0, baseMovement, 0],
          rotate: [0, 360],
        }
      case "wave":
        return {
          x: [0, baseMovement * Math.sin(Math.PI / 4), baseMovement, baseMovement * Math.sin((3 * Math.PI) / 4), 0],
          y: [0, baseMovement * Math.cos(Math.PI / 4), 0, -baseMovement * Math.cos((3 * Math.PI) / 4), 0],
          rotate: [0, 180, 360],
        }
      default:
        return {
          x: [0, Math.random() * baseMovement - baseMovement / 2, Math.random() * baseMovement - baseMovement / 2, 0],
          y: [0, Math.random() * baseMovement - baseMovement / 2, Math.random() * baseMovement - baseMovement / 2, 0],
          rotate: [0, Math.random() * 360],
        }
    }
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

EnhancedFloatingParticlesComponent.displayName = "EnhancedFloatingParticles"

export const EnhancedFloatingParticles = EnhancedFloatingParticlesComponent
