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
    // Если анимация уже идет, не запускаем новую
    if (isAnimating) return

    setIsAnimating(true)
    const newEmojis: Emoji[] = []

    // Создаем по 3 эмодзи каждого типа
    const emojiTypes = ["😎", "🔥"]

    emojiTypes.forEach((emojiType, typeIndex) => {
      for (let i = 0; i < 3; i++) {
        newEmojis.push({
          id: Date.now() + typeIndex * 3 + i,
          emoji: emojiType,
          x: (Math.random() - 0.5) * 300, // Увеличенный разброс по X от -150 до 150
          y: (Math.random() - 0.5) * 300, // Увеличенный разброс по Y от -150 до 150
          rotation: Math.random() * 720, // Увеличенное вращение до 720 градусов
          scale: 0.8 + Math.random() * 0.6, // Размер от 0.8 до 1.4
        })
      }
    })

    setEmojis(newEmojis)

    // Убираем эмодзи и разрешаем новую анимацию через 2.5 секунды
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

      {/* Анимированные эмодзи */}
      <div className="absolute inset-0 pointer-events-none">
        {emojis.map((emoji) => (
          <motion.div
            key={emoji.id}
            className="absolute top-1/2 left-1/2 select-none"
            style={{
              fontSize: "28px",
              fontFamily: "Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif",
            }}
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
            }}
          >
            {emoji.emoji}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
