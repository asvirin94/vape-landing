"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Package, RefreshCw, Headphones, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Оригинальный дизайн",
    shortTitle: "Лицензия",
    description:
      "Официальная лицензия на использование персонажей культового мультсериала. Да, мы договорились с самим Риком! 😎",
    color: "from-yellow-400 to-orange-500",
    position: { desktop: { top: "10%", left: "15%" }, mobile: { top: "5%", left: "10%" } },
  },
  {
    icon: Package,
    title: "Широкий ассортимент",
    shortTitle: "30+ вкусов",
    description: "30+ уникальных вкусов в четырех крупных линейках. От классики до безумных экспериментов — есть всё!",
    color: "from-green-400 to-emerald-500",
    position: { desktop: { top: "15%", right: "10%" }, mobile: { top: "25%", right: "5%" } },
  },
  {
    icon: RefreshCw,
    title: "Постоянные обновления",
    shortTitle: "Новинки",
    description: "Регулярные новинки и лимитированные выпуски. Скучно не будет — обещаем! 🔥",
    color: "from-purple-400 to-pink-500",
    position: { desktop: { bottom: "25%", left: "8%" }, mobile: { bottom: "25%", left: "5%" } },
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    shortTitle: "Поддержка",
    description: "Быстрая доставка и круглосуточная поддержка. Мы всегда на связи, как хороший друг.",
    color: "from-blue-400 to-cyan-500",
    position: { desktop: { bottom: "20%", right: "12%" }, mobile: { bottom: "5%", right: "10%" } },
  },
  {
    icon: Rocket,
    title: "Помощь в запуске",
    shortTitle: "Маркетинг",
    description: "Предоставляем маркетинговые материалы и поддержку при запуске. Делаем ваш успех своим приоритетом!",
    color: "from-red-400 to-pink-500",
    position: {
      desktop: { top: "60%", left: "50%", transform: "translateX(-50%)" },
      mobile: { top: "50%", left: "50%", transform: "translateX(-50%)" },
    },
  },
]

export function WhyChooseUsEcosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeReason, setActiveReason] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Проверяем размер экрана
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Экосистема{" "}
            <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              преимуществ
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Мы не просто продаем вейп — мы создаем опыт! Вот почему партнеры остаются с нами надолго 🚀
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Desktop Ecosystem Layout */}
        {!isMobile && (
          <div className="relative max-w-6xl mx-auto h-[600px]">
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-32 h-32 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-purple-500 rounded-full animate-pulse opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="text-2xl font-bold text-black">ZEF</div>
                  <div className="text-sm font-semibold text-black">VAPE</div>
                </div>

                {/* Orbital rings */}
                <div
                  className="absolute inset-0 border-2 border-green-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                <div
                  className="absolute inset-0 border border-purple-400/20 rounded-full animate-spin"
                  style={{ animationDuration: "15s", animationDirection: "reverse" }}
                />
              </div>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {reasons.map((_, index) => (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={
                    reasons[index].position.desktop.left
                      ? `${Number.parseFloat(reasons[index].position.desktop.left) + 8}%`
                      : `${100 - Number.parseFloat(reasons[index].position.desktop.right!) - 8}%`
                  }
                  y2={
                    reasons[index].position.desktop.top
                      ? `${Number.parseFloat(reasons[index].position.desktop.top) + 8}%`
                      : `${100 - Number.parseFloat(reasons[index].position.desktop.bottom!) - 8}%`
                  }
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: activeReason === index ? 0.8 : 0.3 } : {}}
                  transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Reason Nodes */}
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              const isActive = activeReason === index

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer group"
                  style={{
                    ...reason.position.desktop,
                    zIndex: isActive ? 30 : 10,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  onHoverStart={() => setActiveReason(index)}
                  onHoverEnd={() => setActiveReason(null)}
                >
                  {/* Node Circle */}
                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center shadow-lg`}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      rotate: isActive ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-black" />

                    {/* Pulse effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${reason.color} opacity-30`}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.4 }}
                    />
                  </motion.div>

                  {/* Info Card */}
                  <motion.div
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-2xl"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 10,
                      scale: isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-10 rounded-xl`} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>

                  {/* Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <span
                      className={`text-sm font-semibold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}
                    >
                      {reason.shortTitle}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="space-y-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <motion.div
                  key={index}
                  className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-black" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
