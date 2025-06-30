"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { AnimatedEmojiButton } from "./animated-emoji-button"

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

        <div className="flex items-center space-x-4">
          <AnimatedEmojiButton
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-semibold text-xs tablet:text-sm px-3 tablet:px-4 py-2"
            size="sm"
            aria-label="Стать партнёром"
          >
            Стать партнёром
          </AnimatedEmojiButton>

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
