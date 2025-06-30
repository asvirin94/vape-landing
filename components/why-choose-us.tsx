"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Award, Package, RefreshCw, Headphones, Rocket, Zap, Atom, Beaker } from "lucide-react"

const experiments = [
  {
    icon: Award,
    title: "Лицензия Rick & Morty",
    shortTitle: "Официальная лицензия",
    description: "Да, мы договорились с самим Риком! Официальные права на персонажей культового мультсериала.",
    formula: "R&M + ZEF = 💥",
    color: "from-green-400 via-emerald-500 to-teal-400",
    glowColor: "shadow-green-400/50",
    position: { top: "15%", left: "10%" },
    bubbles: ["🧪", "⚗️", "🔬"],
  },
  {
    icon: Package,
    title: "30+ Уникальных вкусов",
    shortTitle: "Широкий ассортимент",
    description: "4 линейки продукции. От классики до безумных экспериментов — химия вкуса в действии!",
    formula: "30+ = ∞ вкусов",
    color: "from-blue-400 via-cyan-500 to-sky-400",
    glowColor: "shadow-blue-400/50",
    position: { top: "15%", right: "10%" },
    bubbles: ["🌈", "💫", "✨"],
  },
  {
    icon: RefreshCw,
    title: "Постоянные обновления",
    shortTitle: "Новинки каждый месяц",
    description: "Регулярные новинки и лимитированные выпуски. Наша лаборатория не спит!",
    formula: "Новинки × ∞",
    color: "from-purple-400 via-pink-500 to-rose-400",
    glowColor: "shadow-purple-400/50",
    position: { bottom: "25%", left: "8%" },
    bubbles: ["🔄", "🚀", "⭐"],
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    shortTitle: "Всегда на связи",
    description: "Быстрая доставка и круглосуточная поддержка. Мы как Рик — всегда готовы к приключениям!",
    formula: "24/7 = ♾️",
    color: "from-orange-400 via-red-500 to-pink-400",
    glowColor: "shadow-orange-400/50",
    position: { bottom: "25%", right: "8%" },
    bubbles: ["📞", "💬", "🎧"],
  },
  {
    icon: Rocket,
    title: "Помощь в запуске",
    shortTitle: "Маркетинговая поддержка",
    description: "Предоставляем все материалы и поддержку. Делаем ваш успех своим экспериментом!",
    formula: "Поддержка = 🚀",
    color: "from-teal-400 via-green-500 to-emerald-400",
    glowColor: "shadow-teal-400/50",
    position: { top: "60%", left: "50%", transform: "translateX(-50%)" },
    bubbles: ["📈", "💼", "🎯"],
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null)
  const [portalActive, setPortalActive] = useState(false)
  const [energyFlow, setEnergyFlow] = useState(0)

  // Энергетический поток
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setEnergyFlow((prev) => (prev + 1) % 100)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Научная лаборатория фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      {/* Энергетическая сетка */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Плавающие частицы */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Заголовок лаборатории */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6 px-6 py-3 bg-gray-800/50 rounded-full border border-green-400/30 backdrop-blur-sm"
            animate={{
              boxShadow: isInView
                ? [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                  ]
                : "none",
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Atom className="w-6 h-6 text-green-400" />
            </motion.div>
            <span className="text-green-400 font-bold text-lg">ЛАБОРАТОРИЯ ПРЕИМУЩЕСТВ</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Beaker className="w-6 h-6 text-green-400" />
            </motion.div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              ЭКСПЕРИМЕНТЫ
            </span>
            <br />
            <span className="text-white">УСПЕХА</span>

            {/* Энергетические молнии */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Добро пожаловать в нашу лабораторию! Здесь каждое преимущество — это результат научного подхода к бизнесу.
            <br />
            <span className="text-green-400 font-semibold">Wubba Lubba Dub Dub! 🧪</span>
          </p>
        </motion.div>

        {/* Центральный портал */}
        <div className="relative max-w-7xl mx-auto h-[800px] lg:h-[900px]">
          {/* Главный портал в центре */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            onHoverStart={() => setPortalActive(true)}
            onHoverEnd={() => setPortalActive(false)}
          >
            <div className="relative w-40 h-40 lg:w-48 lg:h-48">
              {/* Внешнее кольцо портала */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-green-400"
                animate={{
                  rotate: 360,
                  boxShadow: portalActive
                    ? [
                        "0 0 30px rgba(34, 197, 94, 0.5)",
                        "0 0 60px rgba(34, 197, 94, 0.8)",
                        "0 0 30px rgba(34, 197, 94, 0.5)",
                      ]
                    : "0 0 20px rgba(34, 197, 94, 0.3)",
                }}
                transition={{
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  boxShadow: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                }}
              />

              {/* Внутреннее кольцо */}
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-blue-400"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Центр портала */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center"
                animate={{
                  scale: portalActive ? [1, 1.1, 1] : 1,
                  background: [
                    "linear-gradient(45deg, #22c55e, #3b82f6, #a855f7)",
                    "linear-gradient(90deg, #3b82f6, #a855f7, #22c55e)",
                    "linear-gradient(135deg, #a855f7, #22c55e, #3b82f6)",
                    "linear-gradient(45deg, #22c55e, #3b82f6, #a855f7)",
                  ],
                }}
                transition={{
                  scale: { duration: 0.3 },
                  background: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <div className="text-center text-black font-bold">
                  <div className="text-lg lg:text-xl">ZEF</div>
                  <div className="text-sm lg:text-base">VAPE</div>
                </div>
              </motion.div>

              {/* Энергетические волны */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-green-400/30"
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 1,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Энергетические связи */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {experiments.map((experiment, index) => {
              // Вычисляем позиции для SVG путей
              const centerX = 50
              const centerY = 50

              let targetX, targetY
              if (experiment.position.left) {
                targetX = Number.parseFloat(experiment.position.left) + 8
              } else if (experiment.position.right) {
                targetX = 100 - Number.parseFloat(experiment.position.right) - 8
              } else {
                targetX = 50
              }

              if (experiment.position.top) {
                targetY = Number.parseFloat(experiment.position.top) + 8
              } else if (experiment.position.bottom) {
                targetY = 100 - Number.parseFloat(experiment.position.bottom) - 8
              } else {
                targetY = 50
              }

              return (
                <motion.path
                  key={index}
                  d={`M ${centerX}% ${centerY}% Q ${(centerX + targetX) / 2}% ${(centerY + targetY) / 2 - 10}% ${targetX}% ${targetY}%`}
                  stroke="url(#energyGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? {
                          pathLength: 1,
                          opacity: activeExperiment === index ? 0.8 : 0.4,
                          strokeDashoffset: [-20, 0],
                        }
                      : {}
                  }
                  transition={{
                    pathLength: { duration: 2, delay: 1 + index * 0.2 },
                    opacity: { duration: 0.3 },
                    strokeDashoffset: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  }}
                />
              )
            })}
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Экспериментальные станции */}
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon
            const isActive = activeExperiment === index

            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer group"
                style={{
                  ...experiment.position,
                  zIndex: isActive ? 30 : 10,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                onHoverStart={() => setActiveExperiment(index)}
                onHoverEnd={() => setActiveExperiment(null)}
              >
                {/* Лабораторная колба */}
                <motion.div
                  className="relative w-24 h-32 lg:w-28 lg:h-36"
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Основа колбы */}
                  <div className="absolute bottom-0 w-full h-20 lg:h-24 bg-gray-800/80 rounded-b-full border-2 border-gray-600 backdrop-blur-sm" />

                  {/* Жидкость в колбе */}
                  <motion.div
                    className={`absolute bottom-1 left-1 right-1 h-16 lg:h-20 bg-gradient-to-t ${experiment.color} rounded-b-full opacity-80`}
                    animate={{
                      height: isActive ? ["64px", "72px", "64px"] : "64px",
                      opacity: isActive ? [0.8, 1, 0.8] : 0.8,
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  {/* Пузырьки */}
                  {isActive &&
                    [...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        initial={{
                          x: Math.random() * 20 + 2,
                          y: 60,
                          opacity: 0,
                        }}
                        animate={{
                          y: [60, 10, 60],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.3,
                        }}
                      />
                    ))}

                  {/* Горлышко колбы */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-12 lg:h-14 bg-gray-700 rounded-t-lg border-2 border-gray-600" />

                  {/* Пар из колбы */}
                  {isActive && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl"
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0.7, 0.3, 0.7],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      💨
                    </motion.div>
                  )}

                  {/* Иконка эксперимента */}
                  <motion.div
                    className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r ${experiment.color} rounded-full flex items-center justify-center ${experiment.glowColor}`}
                    animate={{
                      rotate: isActive ? 360 : 0,
                      boxShadow: isActive ? `0 0 20px rgba(34, 197, 94, 0.6)` : "none",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </motion.div>
                </motion.div>

                {/* Информационная панель */}
                <motion.div
                  className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-72 lg:w-80 p-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${experiment.color} opacity-10 rounded-2xl`} />

                  <div className="relative z-10 space-y-4">
                    {/* Формула эксперимента */}
                    <div className="text-center">
                      <motion.div
                        className="inline-block px-4 py-2 bg-black/50 rounded-full border border-green-400/30"
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(34, 197, 94, 0.3)",
                            "0 0 20px rgba(34, 197, 94, 0.5)",
                            "0 0 10px rgba(34, 197, 94, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <span className="text-green-400 font-mono text-lg font-bold">{experiment.formula}</span>
                      </motion.div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-white text-center">{experiment.title}</h3>

                    <p className="text-gray-300 text-center leading-relaxed">{experiment.description}</p>

                    {/* Эмодзи эффекты */}
                    <div className="flex justify-center space-x-4">
                      {experiment.bubbles.map((bubble, i) => (
                        <motion.span
                          key={i}
                          className="text-2xl"
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                          }}
                        >
                          {bubble}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Подпись */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                  <motion.span
                    className={`text-sm lg:text-base font-bold bg-gradient-to-r ${experiment.color} bg-clip-text text-transparent`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  >
                    {experiment.shortTitle}
                  </motion.span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Результаты экспериментов */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-500/20 rounded-full border border-green-400/30 backdrop-blur-sm"
            animate={{
              boxShadow: [
                "0 0 30px rgba(34, 197, 94, 0.3)",
                "0 0 50px rgba(59, 130, 246, 0.4)",
                "0 0 30px rgba(168, 85, 247, 0.3)",
                "0 0 30px rgba(34, 197, 94, 0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.span
              className="text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              🧪
            </motion.span>
            <span className="text-green-400 font-bold text-xl">Эксперимент завершен! Готовы к сотрудничеству?</span>
            <motion.span
              className="text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
