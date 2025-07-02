"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { AnimatedEmojiButton } from "./animated-emoji-button"

// Telegram SVG иконка
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
)

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleTelegramClick = () => {
    window.open("https://t.me/+9OgsiUfn-SVhMTE6", "_blank")
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-green-500/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-3 tablet:py-4 flex items-center justify-between">
        {/* Left side - Logo and Telegram */}
        <div className="flex items-center space-x-3 tablet:space-x-4">
          {/* Telegram Icon - только на мобильных */}
          <motion.button
            onClick={handleTelegramClick}
            className="laptop:hidden relative group p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Перейти в Telegram канал"
          >
            {/* Пульсирующий эффект */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            
            {/* Иконка с анимацией */}
            <motion.div
              className="relative z-10"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <TelegramIcon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
            </motion.div>

            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Telegram канал
            </div>
          </motion.button>

          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 tablet:space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="text-lg tablet:text-2xl font-bold">
              <span className="text-white">ZEF</span>
              <span className="text-green-400 ml-1 tablet:ml-2">VAPE</span>
            </div>
            <div className="text-xs tablet:text-sm text-gray-400">& Tasty LAB</div>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden laptop:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            О бренде
          </button>
          <button
            onClick={() => scrollToSection("collections")}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Коллекции
          </button>
          <button
            onClick={() => scrollToSection("partnership")}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Партнёрство
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-green-400 transition-colors"
          >
            Контакты
          </button>
        </nav>

        {/* Right side - Telegram (desktop) + Partner Button + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Telegram Icon - только на десктопе */}
          <motion.button
            onClick={handleTelegramClick}
            className="hidden laptop:flex relative group p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Перейти в Telegram канал"
          >
            {/* Анимированный фон */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Летающие частицы */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <motion.div
                className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full"
                animate={{
                  x: [0, -15, 0],
                  y: [0, 10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              />
            </div>
            
            {/* Иконка */}
            <motion.div
              className="relative z-10"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <TelegramIcon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
            </motion.div>

            {/* Tooltip для десктопа */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-blue-400/30">
              Hooska Land канал
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-blue-400/30 rotate-45"></div>
            </div>
          </motion.button>

          {/* Desktop Partner Button - hidden on mobile */}
          <div className="hidden tablet:block">
            <AnimatedEmojiButton
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-semibold text-xs tablet:text-sm px-3 tablet:px-4 py-2"
              size="sm"
              aria-label="Стать партнёром"
            >
              Стать партнёром
            </AnimatedEmojiButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="laptop:hidden p-2 text-white hover:text-green-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`laptop:hidden bg-black/95 backdrop-blur-md border-t border-green-500/20 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-4 py-4 space-y-4">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2"
          >
            О бренде
          </button>
          <button
            onClick={() => scrollToSection("collections")}
            className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2"
          >
            Коллекции
          </button>
          <button
            onClick={() => scrollToSection("partnership")}
            className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2"
          >
            Партнёрство
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors py-2"
          >
            Контакты
          </button>
        </nav>
      </motion.div>
    </motion.header>
  )
}