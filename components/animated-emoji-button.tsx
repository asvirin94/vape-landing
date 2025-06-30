"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface AnimatedEmojiButtonProps {
  onClick?: () => void
  size?: "sm" | "lg"
  className?: string
  children: React.ReactNode
  "aria-label"?: string
}

interface Emoji {
  id: number
  emoji: string
  x: number
  y: number
  rotation: number
  scale: number
}

export function AnimatedEmojiButton({ onClick, size = "lg", className, children, ...props }: AnimatedEmojiButtonProps) {
  const [emojis, setEmojis] = useState<Emoji[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  const createEmojis = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const newEmojis: Emoji[] = []

    const emojiTypes = ["😎", "🔥"]

    emojiTypes.forEach((emojiType, typeIndex) => {
      for (let i = 0; i < 3; i++) {
        newEmojis.push({
          id: Date.now() + typeIndex * 3 + i,
          emoji: emojiType,
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300,
          rotation: Math.random() * 720,
          scale: 0.8 + Math.random() * 0.6,
        })
      }
    })

    setEmojis(newEmojis)

    setTimeout(() => {
      setEmojis([])
      setIsAnimating(false)
    }, 2500)
  }

  const handleMouseEnter = () => {
    createEmojis()
  }

  return (
    <div className="relative inline-block">
      <Button onClick={onClick} size={size} className={className} onMouseEnter={handleMouseEnter} {...props}>
        {children}
      </Button>

      <div className="absolute inset-0 pointer-events-none">
        {emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            className="absolute top-1/2 left-1/2 select-none"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              x: emoji.x,
              y: emoji.y,
              opacity: [0, 1, 1, 0.8, 0],
              scale: [0, emoji.scale, emoji.scale, emoji.scale * 0.8, 0],
              rotate: emoji.rotation,
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              times: [0, 0.15, 0.7, 0.9, 1],
            }}
            style={{
              transform: "translate(-50%, -50%)",
              fontSize: "28px",
              fontFamily: "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif",
            }}
          >
            {emoji.emoji}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
