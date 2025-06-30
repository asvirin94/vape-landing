"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star, Zap, Snowflake, Skull, Cpu, X } from "lucide-react"
import Image from "next/image"

const collections = [
  {
    id: 1,
    name: "BAD TRIP",
    image: "/images/products-1.png",
    description: "Яркие взрывные вкусы для тех, кто не боится экспериментов",
    detailedDescription:
      "Коллекция BAD TRIP — это настоящий взрыв вкуса и эмоций! Кислотные оттенки и безумные сочетания, которые заставят тебя почувствовать себя частью мультивселенной Rick & Morty.",
    features: [
      "15+ уникальных вкусов",
      "Яркий узнаваемый дизайн",
      "Высокое качество жидкостей",
      "Официальная лицензия",
    ],
    stats: {
      flavors: "15+",
      strength: "Высокая",
      popularity: "★★★★★",
    },
    color: "from-green-400 to-yellow-400",
    icon: Zap,
  },
  {
    id: 2,
    name: "BAD ACID",
    image: "/images/products-2.png",
    description: "Освежающие фруктовые миксы и необычные сочетания",
    detailedDescription:
      "BAD ACID — это коллекция для истинных ценителей фруктовых взрывов! Каждый вкус — это путешествие в мир ярких ощущений и незабываемых моментов.",
    features: ["Фруктовые композиции", "Освежающий эффект", "Сбалансированная крепость", "Премиум качество"],
    stats: {
      flavors: "12+",
      strength: "Средняя",
      popularity: "★★★★★",
    },
    color: "from-red-400 to-pink-400",
    icon: Star,
  },
  {
    id: 3,
    name: "ZOMBIE",
    image: "/images/products-1.png",
    description: "Эксклюзивные вкусы и лимитированные выпуски в стиле зомби-арт",
    detailedDescription:
      "Коллекция ZOMBIE — это темная сторона вкуса! Лимитированные выпуски с уникальным дизайном в стиле зомби-апокалипсиса. Коллекционируй, пока не поздно!",
    features: ["Лимитированная серия", "Эксклюзивный арт-дизайн", "Коллекционные вкусы", "Темные оттенки вкуса"],
    stats: {
      flavors: "8+",
      strength: "Высокая",
      popularity: "★★★★☆",
    },
    color: "from-purple-400 to-indigo-400",
    icon: Skull,
  },
  {
    id: 4,
    name: "НА ЗАМЕРЗОНЕ",
    image: "/images/products-2.png",
    description: "Мощные охлаждающие миксы и ледяная свежесть",
    detailedDescription:
      "НА ЗАМЕРЗОНЕ — это арктический холод в каждой затяжке! Мощные охлаждающие компоненты создают ощущение настоящей зимы. Идеально для жаркого лета!",
    features: ["Мощный охлаждающий эффект", "Ледяная свежесть", "Ментоловые нотки", "Освежающий финиш"],
    stats: {
      flavors: "10+",
      strength: "Средняя",
      popularity: "★★★★☆",
    },
    color: "from-cyan-400 to-blue-400",
    icon: Snowflake,
  },
  {
    id: 5,
    name: "POD-СИСТЕМЫ",
    image: "/images/products-1.png",
    description: "Современные устройства с культовым оформлением Rick & Morty",
    detailedDescription:
      "POD-СИСТЕМЫ — это высокие технологии в стиле Rick & Morty! Современные устройства с узнаваемым дизайном, которые сделают твой вейпинг еще более крутым.",
    features: ["Современные технологии", "Культовый дизайн", "Простота использования", "Надежная конструкция"],
    stats: {
      flavors: "Устройства",
      strength: "Переменная",
      popularity: "★★★★★",
    },
    color: "from-orange-400 to-red-400",
    icon: Cpu,
  },
]

export function CollectionsRedesigned() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [overlayOpen, setOverlayOpen] = useState<number | null>(null)

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

  const maxSlide = Math.max(0, collections.length - cardsPerView)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    setOverlayOpen(null)
  }, [maxSlide])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
    setOverlayOpen(null)
  }, [maxSlide])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(Math.min(index, maxSlide))
      setOverlayOpen(null)
    },
    [maxSlide],
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (overlayOpen !== null) {
        const target = event.target as Element
        if (!target.closest(".overlay-content") && !target.closest(".collection-card")) {
          setOverlayOpen(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [overlayOpen])

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
      setOverlayOpen(null)
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
      setOverlayOpen(null)
    }
  }

  return (
    <section id="collections" className="py-12 tablet:py-16 laptop:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12 tablet:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl mobile:text-4xl tablet:text-5xl font-bold mb-6">
            Коллекции{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">бренда</span>
          </h2>
          <p className="text-lg tablet:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Пять уникальных линеек продукции с узнаваемым дизайном Rick & Morty. Каждая — со своим характером! 🎯
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
                  key={collection.id}
                  className="flex-shrink-0 px-3 tablet:px-4"
                  style={{
                    width: `${100 / cardsPerView}%`,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CollectionCard
                    collection={collection}
                    isOverlayOpen={overlayOpen === collection.id}
                    onOverlayToggle={() => setOverlayOpen(overlayOpen === collection.id ? null : collection.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

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

// Компонент карточки коллекции
function CollectionCard({
  collection,
  isOverlayOpen,
  onOverlayToggle,
}: {
  collection: (typeof collections)[0]
  isOverlayOpen: boolean
  onOverlayToggle: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = collection.icon

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onOverlayToggle()
  }

  return (
    <div className="w-full">
      {/* Фиксированная высота для заголовка */}
      <motion.div
        className="text-center mb-6 h-20 tablet:h-24 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3
          className={`text-lg tablet:text-xl laptop:text-2xl font-bold bg-gradient-to-r ${collection.color} bg-clip-text text-transparent mb-2 leading-tight`}
        >
          {collection.name}
        </h3>
        <p className="text-gray-400 text-xs tablet:text-sm leading-tight">{collection.description}</p>
      </motion.div>

      {/* Карточка с изображением - адаптивные размеры */}
      <motion.div
        className={`collection-card relative cursor-pointer group rounded-2xl overflow-hidden
          aspect-[3/4] 
          mobile:aspect-[3.2/4.2] 
          sm:aspect-[3.6/4.6] 
          md:aspect-[3.4/4.4] 
          lg:aspect-[3.1/4.1] 
          xl:aspect-[3.3/4.3] 
          2xl:aspect-[3/4]`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleCardClick}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Изображение */}
        <Image
          src={collection.image || "/images/placeholder.svg"}
          alt={`${collection.name} коллекция`}
          fill
          className={`object-cover transition-all duration-500 ${
            isHovered || isOverlayOpen ? "blur-sm scale-110" : ""
          }`}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 30vw"
        />

        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover/Click оверлей с подробной информацией */}
        <motion.div
          className={`overlay-content absolute inset-0 bg-black/95 backdrop-blur-sm flex flex-col justify-center z-10
            p-4 mobile:p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10 2xl:p-12`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered || isOverlayOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: isHovered || isOverlayOpen ? "auto" : "none",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          {isOverlayOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onOverlayToggle()
              }}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-20"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          )}

          <div
            className={`text-center 
            space-y-3 mobile:space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-8`}
          >
            {/* Иконка */}
            <motion.div
              className={`mx-auto bg-gradient-to-r ${collection.color} rounded-full flex items-center justify-center
                w-12 h-12 mobile:w-16 mobile:h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28`}
              animate={{
                rotate: isHovered || isOverlayOpen ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              <Icon
                className={`text-black
                w-6 h-6 mobile:w-8 mobile:h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14`}
              />
            </motion.div>

            {/* Подробное описание */}
            <p
              className={`text-white leading-relaxed
              text-xs mobile:text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl`}
            >
              {collection.detailedDescription}
            </p>

            {/* Характеристики */}
            <div
              className={`grid grid-cols-3 border-t border-b border-gray-600
              gap-2 mobile:gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6
              py-3 mobile:py-4 sm:py-5 md:py-4 lg:py-5 xl:py-6 2xl:py-8`}
            >
              <div className="text-center">
                <div
                  className={`text-green-400 font-bold
                  text-sm mobile:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl`}
                >
                  {collection.stats.flavors}
                </div>
                <div
                  className={`text-gray-400
                  text-xs mobile:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg`}
                >
                  Вкусов
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-purple-400 font-bold
                  text-sm mobile:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl`}
                >
                  {collection.stats.strength}
                </div>
                <div
                  className={`text-gray-400
                  text-xs mobile:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg`}
                >
                  Крепость
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-yellow-400 font-bold
                  text-sm mobile:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl 2xl:text-2xl`}
                >
                  {collection.stats.popularity}
                </div>
                <div
                  className={`text-gray-400
                  text-xs mobile:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg`}
                >
                  Рейтинг
                </div>
              </div>
            </div>

            {/* Особенности */}
            <div
              className={`
              space-y-1 mobile:space-y-2 sm:space-y-3 md:space-y-2 lg:space-y-3 xl:space-y-4 2xl:space-y-5`}
            >
              {collection.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-2 text-gray-300
                    text-xs mobile:text-sm sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isHovered || isOverlayOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div
                    className={`rounded-full bg-gradient-to-r ${collection.color}
                      w-1.5 h-1.5 mobile:w-2 mobile:h-2 sm:w-2.5 sm:h-2.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4`}
                  />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Декоративные элементы */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full blur-xl" />
      </motion.div>
    </div>
  )
}
