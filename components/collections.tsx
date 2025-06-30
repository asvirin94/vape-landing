"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const collections = [
  {
    name: "BAD TRIP",
    description: "Яркие взрывные вкусы для тех, кто не боится экспериментов. Кислотный стиль и топовая узнаваемость!",
    color: "from-green-400 to-yellow-400",
    badge: "ХИТ",
    badgeColor: "bg-red-500",
    features: ["15+ безумных вкусов", "Яркий дизайн", "Мгновенная узнаваемость"],
    gradient: "bg-gradient-to-br from-green-400/20 to-yellow-400/20",
  },
  {
    name: "BAD ACID",
    description: "Освежающие фруктовые миксы и необычные сочетания. Для тех, кто всегда в поиске чего-то нового.",
    color: "from-red-400 to-pink-400",
    badge: "НОВИНКА",
    badgeColor: "bg-green-500",
    features: ["Фруктовые взрывы", "Освежающий кайф", "Новые ощущения"],
    gradient: "bg-gradient-to-br from-red-400/20 to-pink-400/20",
  },
  {
    name: "ZOMBIE",
    description: 'Эксклюзивные вкусы и лимитированные выпуски в стиле "зомби-арт". Коллекционируй, пока не поздно!',
    color: "from-purple-400 to-indigo-400",
    badge: "ЛИМИТЕД",
    badgeColor: "bg-purple-500",
    features: ["Лимитированная серия", "Эксклюзивный арт", "Коллекционные вкусы"],
    gradient: "bg-gradient-to-br from-purple-400/20 to-indigo-400/20",
  },
  {
    name: "НА ЗАМЕРЗОНЕ",
    description: "Мощные охлаждающие миксы и ледяная свежесть. Когда нужно остыть после горячих приключений.",
    color: "from-cyan-400 to-blue-400",
    badge: "ХОЛОД",
    badgeColor: "bg-cyan-500",
    features: ["Ледяная свежесть", "Мощное охлаждение", "Арктический кайф"],
    gradient: "bg-gradient-to-br from-cyan-400/20 to-blue-400/20",
  },
  {
    name: "POD-СИСТЕМЫ",
    description: "Современные устройства с культовым оформлением. Максимальное удобство для минимальных заморочек.",
    color: "from-orange-400 to-red-400",
    badge: "ТОП",
    badgeColor: "bg-orange-500",
    features: ["Крутые технологии", "Простота использования", "Культовый дизайн"],
    gradient: "bg-gradient-to-br from-orange-400/20 to-red-400/20",
  },
]

export function Collections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Определяем количество карточек для показа - до 1360 показываем 2 карточки
  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1
    if (window.innerWidth >= 1360) return 3
    if (window.innerWidth >= 768) return 2
    return 1
  }

  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const updateLayout = () => {
      setCardsPerView(getCardsPerView())
    }

    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [])

  // Максимальный индекс слайда
  const maxSlide = Math.max(0, collections.length - cardsPerView)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }, [maxSlide])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
  }, [maxSlide])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(Math.min(index, maxSlide))
    },
    [maxSlide],
  )

  // Touch события
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
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
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
    }
  }

  return (
    <section id="collections" className="py-8 mobile:py-12 tablet:py-16 laptop:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      {/* Animated background elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-20 w-32 mobile:w-64 h-32 mobile:h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-40 mobile:w-80 h-40 mobile:h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-2 tablet:px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-8 mobile:mb-12 tablet:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mobile:text-3xl tablet:text-4xl laptop:text-5xl font-bold mb-4 mobile:mb-6">
            Коллекции{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">бренда</span>
          </h2>
          <p className="text-base mobile:text-lg tablet:text-xl text-gray-300 max-w-3xl mx-auto mb-4 mobile:mb-6 px-4">
            Пять уникальных линеек продукции с узнаваемым дизайном Rick & Morty. Каждая — со своим характером! 🎯
          </p>
          <div className="w-16 mobile:w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Slider Container */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`,
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {collections.map((collection, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 px-2 mobile:px-3 tablet:px-4"
                  style={{
                    width: `${100 / cardsPerView}%`,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CollectionCard collection={collection} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation - теперь внизу для всех разрешений */}
          <div className="flex flex-col items-center mt-6 mobile:mt-8 space-y-4">
            {/* Dots Navigation */}
            {collections.length > cardsPerView && (
              <div className="flex justify-center space-x-2" role="tablist" aria-label="Навигация по коллекциям">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 mobile:w-3 mobile:h-3 tablet:w-4 tablet:h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-green-400 to-purple-500 shadow-lg scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    role="tab"
                    aria-selected={index === currentSlide}
                    aria-label={`Перейти к слайду ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Arrow Navigation - обрамляет пагинацию */}
            {collections.length > cardsPerView && (
              <div className="flex items-center justify-center gap-4">
                <motion.button
                  onClick={prevSlide}
                  className="group relative p-2 mobile:p-3 bg-gradient-to-r from-green-400/20 to-purple-500/20 hover:from-green-400/30 hover:to-purple-500/30 rounded-full border border-green-400/30 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Предыдущие коллекции"
                >
                  <ChevronLeft className="w-4 h-4 mobile:w-5 mobile:h-5 tablet:w-6 tablet:h-6 text-green-400 group-hover:text-white transition-colors" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  className="group relative p-2 mobile:p-3 bg-gradient-to-r from-purple-500/20 to-green-400/20 hover:from-purple-500/30 hover:to-green-400/30 rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Следующие коллекции"
                >
                  <ChevronRight className="w-4 h-4 mobile:w-5 mobile:h-5 tablet:w-6 tablet:h-6 text-purple-400 group-hover:text-white transition-colors" />
                </motion.button>
              </div>
            )}
          </div>

          {/* Collection Counter */}
          <motion.div
            className="text-center mt-4 mobile:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-gray-400 text-xs mobile:text-sm tablet:text-base">
              {cardsPerView === 1
                ? `${String(currentSlide + 1).padStart(2, "0")} / ${String(collections.length).padStart(2, "0")}`
                : `${String(currentSlide + 1).padStart(2, "0")} / ${String(maxSlide + 1).padStart(2, "0")}`}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Компонент карточки коллекции с адаптивными размерами
function CollectionCard({ collection }: { collection: (typeof collections)[0] }) {
  return (
    <div className="w-full">
      <div
        className={`relative w-full 
          aspect-[3/4] 
          mobile:aspect-[3.5/4.5] 
          sm:aspect-[3.6/4.6] 
          md:aspect-[3.4/4.4] 
          lg:aspect-[3.1/4.1] 
          xl:aspect-[3.3/4.3] 
          2xl:aspect-[3/4] 
          p-3 mobile:p-4 sm:p-5 md:p-4 lg:p-5 xl:p-6 2xl:p-8 
          ${collection.gradient} backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-400/10 rounded-2xl overflow-hidden select-none`}
        style={{
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
        }}
      >
        {/* Badge */}
        <div
          className={`absolute top-2 mobile:top-3 sm:top-4 md:top-3 lg:top-4 xl:top-5 2xl:top-5 right-2 mobile:right-3 sm:right-4 md:right-3 lg:right-4 xl:right-5 2xl:right-5 ${collection.badgeColor} text-white text-xs sm:text-sm font-bold px-2 mobile:px-3 sm:px-4 py-1 mobile:py-1.5 rounded-full shadow-lg z-20`}
        >
          {collection.badge}
        </div>

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
          style={{
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-8 mobile:w-12 sm:w-16 md:w-12 lg:w-16 xl:w-20 2xl:w-24 h-8 mobile:h-12 sm:h-16 md:h-12 lg:h-16 xl:h-20 2xl:h-24 bg-white/5 rounded-full blur-xl" />
        <div className="absolute -bottom-2 -left-2 w-10 mobile:w-16 sm:w-20 md:w-16 lg:w-20 xl:w-24 2xl:w-28 h-10 mobile:h-16 sm:h-20 md:h-16 lg:h-20 xl:h-24 2xl:h-28 bg-white/3 rounded-full blur-xl" />

        <div className="relative z-10 h-full flex flex-col justify-between space-y-2 mobile:space-y-3 sm:space-y-4 md:space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-5">
          {/* Collection Name */}
          <h3
            className={`text-sm mobile:text-base sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold bg-gradient-to-r ${collection.color} bg-clip-text text-transparent leading-tight`}
          >
            {collection.name}
          </h3>

          {/* Description */}
          <p className="text-gray-300 leading-snug text-xs mobile:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg flex-1">
            {collection.description}
          </p>

          {/* Features */}
          <div className="space-y-1.5 mobile:space-y-2 sm:space-y-2.5 md:space-y-2 lg:space-y-2.5 xl:space-y-3 2xl:space-y-3">
            {collection.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center space-x-2 mobile:space-x-2.5 sm:space-x-3">
                <div
                  className={`w-1.5 mobile:w-2 sm:w-2.5 md:w-2 lg:w-2.5 xl:w-3 2xl:w-3 h-1.5 mobile:h-2 sm:h-2.5 md:h-2 lg:h-2.5 xl:h-3 2xl:h-3 rounded-full bg-gradient-to-r ${collection.color} flex-shrink-0`}
                />
                <span className="text-gray-400 text-xs mobile:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg leading-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Hover effect line */}
          <div
            className={`w-0 h-1 sm:h-1.5 xl:h-2 2xl:h-2 bg-gradient-to-r ${collection.color} group-hover:w-full transition-all duration-500 rounded-full`}
          />
        </div>
      </div>
    </div>
  )
}
