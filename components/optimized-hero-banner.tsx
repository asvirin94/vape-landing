"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { StableFloatingParticles } from "./stable-floating-particles"
import { AnimatedEmojiButton } from "./animated-emoji-button"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/products-1.png",
    title: "BAD TRIP",
    subtitle: "Взрывные вкусы и кислотный стиль",
    alt: "Rick and Morty BAD TRIP коллекция вейп жидкостей с яркими вкусами",
  },
  {
    id: 2,
    image: "/images/products-2.png",
    title: "BAD ACID",
    subtitle: "Освежающие фруктовые миксы",
    alt: "Rick and Morty BAD ACID коллекция освежающих фруктовых вейп жидкостей",
  },
]

export function OptimizedHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [mouseStart, setMouseStart] = useState<number | null>(null)
  const [mouseEnd, setMouseEnd] = useState<number | null>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)

  // Минимальное расстояние для свайпа
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsPaused(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleManualNavigation(nextSlide)
    } else if (isRightSwipe) {
      handleManualNavigation(prevSlide)
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true)
    setMouseEnd(null)
    setMouseStart(e.clientX)
    setIsPaused(true)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return
    setMouseEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!isMouseDown || !mouseStart || !mouseEnd) {
      setIsMouseDown(false)
      return
    }
    const distance = mouseStart - mouseEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleManualNavigation(nextSlide)
    } else if (isRightSwipe) {
      handleManualNavigation(prevSlide)
    }
    setIsMouseDown(false)
  }

  const onMouseLeave = () => {
    setIsMouseDown(false)
  }

  // Предзагрузка всех изображений при монтировании компонента
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image()
      img.src = slide.image
    })
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  const handleManualNavigation = useCallback((action: () => void) => {
    setIsPaused(true)
    action()
    setTimeout(() => setIsPaused(false), 10000)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 tablet:py-20"
      aria-label="Главный баннер ZEF VAPE"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>
      <div className="absolute inset-0" style={{ isolation: "isolate" }}>
        <StableFloatingParticles />
      </div>

      <div className="container mx-auto px-4 grid laptop:grid-cols-2 gap-8 laptop:gap-12 items-center relative z-10">
        <motion.div
          className="space-y-6 tablet:space-y-8 text-center laptop:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-3 tablet:px-4 py-2 bg-gradient-to-r from-green-400/20 to-purple-500/20 rounded-full border border-green-400/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-green-400 font-semibold text-sm tablet:text-base">Rick & Morty VAPE</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              className="text-2xl mobile:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Стань оптовым партнёром{" "}
              <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                легендарного бренда
              </span>
            </motion.h1>

            <motion.p
              className="text-lg tablet:text-xl text-gray-300 max-w-lg mx-auto laptop:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Жидкости и POD-системы, которые знают все! Присоединяйся к вселенной Rick & Morty 🚀
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col mobile:flex-row gap-4 justify-center laptop:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <AnimatedEmojiButton
              onClick={scrollToContact}
              size="lg"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-semibold px-6 tablet:px-8 py-4 tablet:py-6 text-base tablet:text-lg"
              aria-label="Перейти к форме заявки на партнёрство"
            >
              Стать партнёром
            </AnimatedEmojiButton>
            <Button
              onClick={scrollToAbout}
              size="lg"
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 tablet:px-8 py-4 tablet:py-6 text-base tablet:text-lg bg-transparent"
              aria-label="Узнать больше о бренде ZEF VAPE"
            >
              Узнать больше
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-first laptop:order-last"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="relative h-[300px] mobile:h-[400px] tablet:h-[500px] laptop:h-[600px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            role="region"
            aria-label="Слайдер продукции Rick & Morty VAPE"
          >
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1,
                }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: index === currentSlide ? 1 : 0 }}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 tablet:bottom-8 left-4 tablet:left-8 right-4 tablet:right-8">
                  <h2 className="text-xl tablet:text-2xl laptop:text-3xl font-bold text-white mb-2">{slide.title}</h2>
                  <p className="text-sm tablet:text-base text-gray-200">{slide.subtitle}</p>
                </div>
              </motion.div>
            ))}

            <button
              onClick={() => handleManualNavigation(prevSlide)}
              className="absolute left-2 tablet:left-4 top-1/2 -translate-y-1/2 p-1.5 tablet:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label="Предыдущий слайд"
            >
              <ChevronLeft className="w-4 h-4 tablet:w-6 tablet:h-6 text-white" />
            </button>
            <button
              onClick={() => handleManualNavigation(nextSlide)}
              className="absolute right-2 tablet:right-4 top-1/2 -translate-y-1/2 p-1.5 tablet:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
              aria-label="Следующий слайд"
            >
              <ChevronRight className="w-4 h-4 tablet:w-6 tablet:h-6 text-white" />
            </button>

            <div
              className="absolute bottom-2 tablet:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"
              role="tablist"
              aria-label="Навигация по слайдам"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(() => goToSlide(index))}
                  className={`w-2 h-2 tablet:w-3 tablet:h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-green-400" : "bg-white/50"
                  }`}
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
